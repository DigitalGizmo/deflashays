// Vanilla JavaScript for links in tab text
// @click doesn't work in dynamically added content
document.addEventListener('click', function (event) {
  if (!event.target.matches('.open-link')) return;
  event.preventDefault();
  // Log the clicked element in the console
  const hrefs = event.target.getAttribute('href').split("/");
  // console.log("- hrefs[0]: " + hrefs[0]);
  // Forward
  // openLink(linkType, shortName, anchorName)
  // openLink patterned after 1704. Shays doesn't the anchor param
  openLink(hrefs[0], hrefs[1])
}, false);

function openLink(linkType, shortName) {
  switch(linkType) {
    case "glossary":
      glossary(shortName);
      break;
    case "person":
      person(shortName);
      break;
    case "artifact":
      artifact(shortName);
      break;
    case "map":
      map(shortName);
      break;
    case "music":
      music(shortName);
      break;
    default:
      console.log("Must have missed a link type.");
  }
}

// Scene Vue app
var sceneApp = new Vue({
  el: '#scene-app',
  data: {
    scene: scene,
    tabIndex: 0,
    tabName: 'Overview',
    tabTexts: tabTexts,
    tabTitles: ['Overview', 'English Perspective', 'French Perspective', 
      'Kanienkehaka Perspective', 'Wendat Perspective', 'W&ocirc;banaki Perspective'],
    tabHovers: [false, false, false, false, false, false],
    rollTexts: rollTexts,
    rollName: 'none',
    // rollText in two parts to match data
    rollText: ['Hover', 'or tap to explore the image above.'], 
    rollLinks: rollLinks,
    rollJustShown: 'noneYet',
    // related: related,
    outlinesOn: false,
    outlineHover: false,
    outlineToolTips: ['Show all hot spots in picture',
      'Remove hotspot outlines'],
    iconHover: false,
    imageName: scene.scenewide.sceneName, // sceneName from svg.js
    isMultiImage: scene.scenewide.isMultiImage,
    // The following to handle multiImage overview exception
    isShowAllOverview: true,
    subTitle: subTitle,
  },
  mounted () {
    // This will set isShowAllOverview appropriately
    this.showTab(0)
  },
  methods: {
    // -------------- TABS ----------------
    showTab: function(_tabIndex) {
      // 1704 had "if enabled", but in Shays all allways shown
      this.tabIndex = _tabIndex
      this.tabName = this.scene.tabs[_tabIndex].tabName
      if (this.tabName != 'Overview') {
        // Need to limit true possibility to only Overview
        this.isShowAllOverview = false
      }
      if (this.isMultiImage) {
        // Handle image and svg condition    
        // Leaving Overview image without a suffix simplifies initiation.
        if (this.tabName === 'Overview') {
          this.imageName = this.scene.scenewide.sceneName
          // tab name is overview and this is a mulit image
          this.isShowAllOverview = false
        } else {
          this.imageName = this.scene.scenewide.sceneName + "-" + this.tabName 
        }
      } else { // not multiImage
        if (this.tabName === 'Overview') {
          // tab name is overview and this is not mulit image
          this.isShowAllOverview = true
        } 
      }
      // this.tabText = tabTexts[this.tabName]
    },
    // Determine tab state
    getTabSuffix: function(_tabIndex) {
      if (scene.tabs[_tabIndex].enabled) { // is enabled
        if (_tabIndex === this.tabIndex) { // tab selected
          return '_f4'
        } else { // enabled, but not selected
          if (this.tabHovers[_tabIndex]) { // hovering
            return '_f3'
          } else { // not hovering
            return '_f2'
          }
        }
      } else { // tab with this index not enabled
        return '_f5'
      }
    },
    // Lose pointer over diabled tabs
    cursorState: function(_tabIndex) {
      if (this.scene.tabs[_tabIndex].enabled) {
        if (_tabIndex === this.tabIndex) { // no pointer for current
          return "no-pointer"
        } else {
          return "pointer"
        }
      } else { // disabled
        return "no-pointer"
      }
    },
    getTabState: function(_tabIndex) {
      if (_tabIndex === this.tabIndex) {
        return "tab-selected"
      } else { // disabled
        return "tab"
      }
    },
    hoverTab: function(_tabIndex) {
      // console.log(" - hovering over: " + _tabIndex)
      this.tabHovers[_tabIndex] = true
      sceneApp.$forceUpdate();
    },
    unHoverTab: function(_tabIndex) {
      this.tabHovers[_tabIndex] = false
      sceneApp.$forceUpdate();
    },
    tabAbbr: function (_tabName) {
      return _tabName.substring(0, 3)
    },
    // ----- HOT SPOTS -------------------
    // Called by hover on desktop
    showPop: function(_rollName) {
      // console.log(' -- showPop rollText: ' + this.rollTexts[_rollName])
      this.rollName = _rollName
      this.rollText = this.rollTexts[_rollName]
      // Set delayed rollJustShown to prep mobile 2nd tap
      this.setRollJustShown(_rollName)
    },
    // Called by desk click or mobile tap
    showRollLink: function(_rollName) {
      // console.log(" - pre-condition rollName: " + this.rollName +
        // " rollJustShown: " + this.rollJustShown)
      // Need make sure hotspot is already showing
      // in order to handle second tap on mobile
      if (_rollName === this.rollJustShown) { 
        // already clicked or hovered
        // console.log(" - actually show rollText for: " + this.rollName)
        // Data format:
        // rollLinks[rollName] =[linkType, shortName, anchorName]
        openLink(this.rollLinks[this.rollName][0], 
          this.rollLinks[this.rollName][1], 
          this.rollLinks[this.rollName][2])  
        this.rollJustShown = 'inactive'    
      } else { // they don't match, this is first tap
        this.rollName = _rollName
        this.rollText = this.rollTexts[_rollName]
        this.setRollJustShown(_rollName)
      }
    },
    setRollJustShown: function(_rollName) {
      setTimeout(function(){ 
        // For mobile, a timeout for setting the link 
        // for the second tap.
        // Reference sceneApp rather than "this"
        // since we're in an ES5 function
        sceneApp.rollJustShown = _rollName
        // console.log(' -- showPop rollJustShown after: ' + 
        //   sceneApp.rollJustShown)
      }, 800);      
    },
    hidePop: function() {
      this.rollText = ''
      this.rollName = 'none'
    },
    // ------ OUTLINE AND LARGER BUTTONS ---------
    toggleOutlines: function() {
      if (this.outlinesOn) { // They're on
        this.outlinesOn = false
      } else { // They're off
        this.outlinesOn = true
      }
      sceneApp.$forceUpdate();
    }
  },
  computed: {
    largerUrl: function() {
      return "/scenes/lg_view/" + this.scene.scenewide.sceneName + ".html"
    },
    outlineSuffix: function() {
      if (this.outlineHover) {
        // console.log(" -- suffix should be selected")
        return '_f3'
      } else {
        if (this.outlinesOn) {
          return '_f4'
        } else {
          return '_f2'
        }
      }
    },
    outlineToolTip: function() {
      // If on, show "Remove" msg, if off, show "Show" msg.
      return (this.outlinesOn ? this.outlineToolTips[1] :
        this.outlineToolTips[0])
    },
    iconSuffix: function() {
      return (this.iconHover ? '_f3' : '_f2')
    }
  }
});
