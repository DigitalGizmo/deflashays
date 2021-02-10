#!/usr/bin/env python
import os, sys
import re

#input file
# fin = open("parting.as", "rt")
print (".as File to perform Search-Replace on:")
# fileToSearch  = input( "> " )
fileName = sys.argv[1]
print ("fileName: " + fileName)
fileToSearch = open(fileName + ".as", "rt")

#output file to write the result to
# fout = open("Parting-text.js", "wt")
print ("Output will be " + fileName + "-text-mid.js")
fout = open(fileName + "-text-mid.js", "wt")

# the simplest, lambda-based implementation
def multiple_replace(adict, text):
  # Create a regular expression from all of the dictionary keys
  regex = re.compile("|".join(map(re.escape, adict.keys(  ))))

  # For each match, look up the corresponding value in the dictionary
  return regex.sub(lambda match: adict[match.group(0)], text)

adict = {
  "var subTitle" : "const subTitle",
  "tabTexts  = new Object();" : "const tabTexts  = {};",
  "rollTexts = new Object();" : "const rollTexts  = {};",
  "rollLinks = new Object();" : "const rollLinks  = {};",
  "  tabTexts" : "tabTexts",
  "  rollTexts" : "rollTexts",
  "    rollTexts" : "rollTexts",
  '<font color="#660000"><u>' : '',
  '</u></font>' : '',
  # remove escaped single quote in links
  "(\\\'" : "(~",
  "\\\')" : "~)",
  # remove unicode
  "\\u0022" : "&quot;",

  # '<a href="javascript:openLink(\\\'' : '<a class="open-link" href="',
  # '\\\')">' : '">',
  # "\\\',\\\'" : "/",
  # # r'\d+' : "~",
  # '<a href="asfunction:relatedLink,' : '<a class="open-link" href="',
  # "</a><br>']" : "</a>']",
  # "</a><br>" : "</a>', '",
  # "</p><br><p>" : "</p><p>",
  # "|" : "/",
  # In sublime, regular expression by hand:
  # = \[\d+, ' 
  # = ['
}

#for each line in the input file
for line in fileToSearch:
  #read replace the string and write to output file
  # fout.write(line.replace('<font color="#660000"><u>', ''))

  fout.write(multiple_replace(adict, line))


#close input and output files
fileToSearch.close()
fout.close()
