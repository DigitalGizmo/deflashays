<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page contentType="text/html;charset=ISO-8859-1" language="java" %>
<%@ taglib uri="/WEB-INF/struts-bean.tld"  prefix="bean"  %>
<%@ taglib uri="/WEB-INF/struts-html.tld"  prefix="html"  %>
<%@ taglib uri="/WEB-INF/struts-logic.tld" prefix="logic" %>
<%@ taglib uri="/WEB-INF/c.tld"            prefix="c"     %>
<html:html lang="en" xhtml="true">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>Shays' Rebellion - Maps</title>
<link href="/common/styles.css" rel="stylesheet" type="text/css" media="screen" />
<link href="/common/styles_print.css" rel="stylesheet" type="text/css" media="print" />
<!--[if IE]>
<link href="/common/styles_ie.css" rel="stylesheet" type="text/css" media="screen" />
<![endif]-->
<script language="JavaScript" type="text/javascript" src="/common/scripts.js"></script>
</head>

<body class="dark">
<div id="wrapper">
<a name="top" id="top"></a>
<a href="/index.html"><img src="/common/images/sm_title.gif" alt="Shays' Rebellion, From Revolution to Constitution" width="104" height="37" border="0" align="left"/></a>

  <%@ include file="/common/topnav.jsp" %>

	<h1>Maps</h1>
	
  <p>Maps offer another way of viewing Shays&rsquo; Rebellion and its significance. 
    Some of the maps below were created in the 18th century; other maps were created 
    for this website. All offer different visual and geographical perspectives 
    on the people and events connected to Shays&rsquo; Rebellion.</p>
	
  <p>Click a map below to view and explore it.</p>

	<div id="buffpage">
			<h3>Historic Maps</h3>
				<ul class="img_menu">
					<li class="image"><a href='/shaysapp/map.do?shortName=1801arsenal'
            onclick="javascript:map('1801arsenal'); return false"><img src="/maps/thumbs/arsenal.jpg" alt="thumbnail of map" width="100" height="104" border="1"></a></li>
					<li class="title"><a href='/shaysapp/map.do?shortName=1801arsenal'
            onclick="javascript:map('1801arsenal'); return false">Map of the Springfield Arsenal, 1801</a></li>
					
      <li>This map fragment depicts the buildings and grounds of the United States 
        Arsenal at Springfield, Massachusetts, 15 years after Shays&rsquo; Rebellion.</li>
				</ul>
				
				<ul class="img_menu">
					<li class="image"><a href='/shaysapp/map.do?shortName=mass1795'
            onclick="javascript:map('mass1795'); return false"><img src="/maps/thumbs/map_carey.jpg" alt="thumbnail of map" width="100" height="77" border="1"></a></li>
					<li class="title"><a href='/shaysapp/map.do?shortName=mass1795'
            onclick="javascript:map('mass1795'); return false">Massachusetts in 1795 by Samuel Lewis</a></li>
					<li>Samuel Lewis made the first map of the state of Massachusetts, published in 1795 by Matthew Carey.</li>
				</ul>
				
				<ul class="img_menu">
					<li class="image"><a href='/shaysapp/map.do?shortName=fourNEstates'
            onclick="javascript:map('fourNEstates'); return false"><img src="/maps/thumbs/map_norman_coles.jpg" alt="thumbnail of map" width="100" height="95" border="1"></a></li>
					<li class="title"><a href='/shaysapp/map.do?shortName=fourNEstates'
            onclick="javascript:map('fourNEstates'); return false">&ldquo;Map Of The Four New England States&rdquo; by Norman and Coles</a></li>
					
      <li>Norman and Coles published this early wall map of the four New England 
        states of Massachusetts, New Hampshire, Connecticut and Rhode Island in 
        1785. At that time, Massachusetts encompassed what would by 1820 become 
        the state of Maine, and the state boundaries of New Hampshire included 
        counties of what would become the 14th state, Vermont.</li>
				</ul>
				
        <ul class="img_menu">
          <li class="image"><a href='/shaysapp/map.do?shortName=troops'
            onclick="javascript:map('troops'); return false"><img src="/maps/thumbs/shays_rebellion_map.jpg" alt="thumbnail of map" width="100" height="83" border="1"></a></li>
          <li class="title"><a href='/shaysapp/map.do?shortName=troops'
            onclick="javascript:map('troops'); return false">Map of Troop Movements During Shays&rsquo; Rebellion</a></li>
          <li>The Reverend Ezra Stiles, the president of Yale College, drew this map of troop movements during Shays&rsquo; Rebellion.</li>
        </ul>
        <br clear="left"/>

      <h3>Graphic Maps</h3>
        <ul class="img_menu">
          <li class="image"><a href='/shaysapp/map.do?shortName=ratify'
            onclick="javascript:map('ratify'); return false"><img src="/maps/thumbs/ratify.jpg" alt="thumbnail of map" width="100" height="61" border="1"></a></li>
          <li class="title"><a href='/shaysapp/map.do?shortName=ratify'
            onclick="javascript:map('ratify'); return false">Massachusetts Towns Vote to Ratify the Constitution in 1788</a></li>
          
          <li>This map shows which towns in Massachusetts voted to ratify the Constitution and which did not. The map also identifies towns which refused to ratify, their residents actively supporting Shays&rsquo; Rebellion.</li>
        </ul>
          
        <ul class="img_menu">
          <li class="image"><a href='/shaysapp/map.do?shortName=arsenal_action'
            onclick="javascript:map('arsenal_action'); return false"><img src="/maps/thumbs/arsenal_action.jpg" alt="thumbnail of map" width="100" height="68" border="1"></a></li>
          <li class="title"><a href='/shaysapp/map.do?shortName=arsenal_action'
            onclick="javascript:map('arsenal_action'); return false">The Action at the Arsenal</a></li>
          
          <li>This map shows the movement of government militia and Regulators before, during, and immediately following the action at the Springfield Arsenal.</li>
        </ul>

        <ul class="img_menu">
          <li class="image"><a href='/shaysapp/map.do?shortName=events'
            onclick="javascript:map('events'); return false"><img src="/maps/thumbs/events.jpg" alt="thumbnail of map" width="100" height="61" border="1"></a></li>
          <li class="title"><a href='/shaysapp/map.do?shortName=events'
            onclick="javascript:map('events'); return false">The Events of Shays&rsquo; Rebellion - A Visual Sequence</a></li>
          <li>This sequence of maps offers a step-by-step view of the events that became known as Shays&rsquo; Rebellion.</li>
        </ul>

				<br clear="left"/>
				<p class="top"><a href="#top">Top of Page</a></p>
	</div><!-- end buffpage div -->

	<%@ include file="/common/footer.html" %>

</div><!-- end wrapper div -->
</body>
</html:html>
