#!/usr/bin/env python
import os, sys
import re

#input file
# fin = open("parting.as", "rt")
print (".as File to perform Search-Replace on:")
# fileToSearch  = input( "> " )
fileName = sys.argv[1]
print ("fileName: " + fileName + "-text-mid.js")
fileToSearch = open(fileName + "-text-mid.js", "rt")

#output file to write the result to
# fout = open("Parting-text.js", "wt")
print ("Output will be ../../scenes/data/" + fileName + "-text.js")
fout = open("../../scenes/data/" + fileName + "-text.js", "wt")

# the simplest, lambda-based implementation
def multiple_replace(adict, text):
  # Create a regular expression from all of the dictionary keys
  regex = re.compile("|".join(map(re.escape, adict.keys(  ))))

  # For each match, look up the corresponding value in the dictionary
  return regex.sub(lambda match: adict[match.group(0)], text)

adict = {
  # Remove escaped single quotes, now the we've gotten rid to the
  # ones around parameters.
  "\\\'" : "&apos;",

  # Want to yield e.g.: <a class="open-link" href="glossary/snow">
  '<a href="javascript:glossary(~' : '<a class="open-link" href="glossary/',
  '<a href="javascript:person(~' : '<a class="open-link" href="person/',
  '<a href="javascript:artifact(~' : '<a class="open-link" href="artifact/',
  '<a href="javascript:map(~' : '<a class="open-link" href="map/',
  '<a href="javascript:music(~' : '<a class="open-link" href="music/',
  # Replace href ending
  '~)' : ''
}

#for each line in the input file
for line in fileToSearch:
  #read replace the string and write to output file
  # fout.write(line.replace('<font color="#660000"><u>', ''))

  fout.write(multiple_replace(adict, line))


#close input and output files
fileToSearch.close()
fout.close()
