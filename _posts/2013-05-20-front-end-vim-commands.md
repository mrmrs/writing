---
title: "Vim commands for HTML and CSS vol.1"
layout: post
---

<p class="intro">None of these commands require any vim plugins. They should work in all stock versions of vim.</p>

1. Deleting an attribute and its values 
<small class="db">i.e class="site-nav footer" or title="Sample title for an image"</small>
<code>
  2df"
</code>

2. Delete from cursor up to and including the last line on the screen
<code>
  dL
</code>

3. Copy entire file to buffer
<code>
  ggyG
</code>

4. Change all instances of a class name in both html files and css
<small class="db">From terminal you'll need to put all html and css files you wish to edit into buffers</small>
<code>
vi *.html css/*
</code>
<p>Then in vim </p>
<code>
:bufdo %s/sampleClassName/newClassName/ge | update
</code>

5. Delete from cursor to end of css property value pair
<small class="db">Especially helpful if editing several property values on one line i.e .class { text-align: center; font-size: 24px; }</small>
<code>
  df;
</code>

6. Remove all classes from markup in a file
<code>
:%s/\ class=".*"//g
</code>

7. Remove all ids from markup in a file
<code>
:%s/\ id=".*"//g
</code>

8. Remove all classes from markup in all files in buffer
<code>
:bufdo %s/\ class=".*"//ge | update
</code>

9. Remove all ids from markup in all files in buffer
<code>
:bufdo %s/\ id=".*"//ge | update
</code>

10. Swapping two letters to correct a typo
<small class="db">For example if you type http:s//someurl.com/login</small>
<code>
With your cursor on : type xp
</code>

