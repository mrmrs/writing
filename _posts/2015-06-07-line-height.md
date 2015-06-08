---
title: "How to line-height"
layout: post
---

 #### Glossary:

 <p><b>line-height</b> is a css property</p>

 <p><b>lead</b> <i>[rhyming with red]:</i> <br>
   Originally a strip of soft metal used
   for vertical spacing between lines of type. Now meaning the
   vertical distance from the baseline of one line to the baseline of the next. Also
   called <b>leading</b>.
 </p>

When you declare a line-height in css it never needs to be used with a unit.

Line-height, as a property, does not require the declaration of a unit.
It defaults to being relative to the font-size. This is equivalent to setting
a percentage i.e ```line-height: 140%``` or using em ```line-height: 1.4em```

A website generally only needs 3 or 4 line height values.

<h2 class="book f4">Solid  <code class="f5">line-height: 1</code></h2>

When a line-height has a 1:1 ratio to the size of the type (line-height: 1) this is
known as setting type solid. Most typefaces set at solid are unreadable - so this
should be avoided in most cases.

One reason to set line-height to 1 is for single lines of text that need to be
set flush at the top with a corresponding element that has embedded media or a
solid background. For example a piece of text next to an image where we want
the top of the typographic element to be perfectly aligned at the top with the
image.

<h2 class="book f4">Larger font sizes for titles <code class="f5"> line-height: 1.2 to 1.3</code></h2>
Titles require less leading than body copy. You generally want something around 1.2-1.3.

3. ```Body copy: line-height: 1.5 to 1.75; ```

> Many people with cognitive disabilities have trouble tracking lines of text
> when a block of text is single spaced. Providing spacing between 1.5 to 2
> allows them to start a new line more easily once they have finished the
> previous one.
> - w3

I generally set copy to 1.6 to aid in readibility. But this becomes a matter of
taste between this defined range and is not generally an issue of readability.

## Improper uses of line-height

Often times you see line-height applied with a pixel values as a unit for one of the following reasons

1. Affecting/setting the height of an element
2. Vertically centering text within an element

Altering the height of an element should generally be done with a padding value
selected from a ratio based scale that relates to your type scale.

Using line-height to vertically center things is very brittle and only works
when there is one line of text.  E.g if you have a font-size of 24px and you
set line-height to 48px to vertically center the text, if the copy wraps it
will have 200% leading which will most likely look very awkward and should thus
be avoided

Vertically centering elements should be done by setting vertical-align on an
element set to display: table-cell that is contained within an element set to
display: table.  This is a pattern I will document with coding examples. The
benefit being it works in more contexts and can be used to vertically center
text elements against media objects across all breakpoints.

