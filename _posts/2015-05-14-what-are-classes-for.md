---
title: "What are Classes for?"
subtitle: "Classifying visual styles. Not traversing the DOM."
layout: post
---

When it comes to CSS sometimes I wonder if we forget what the word class means.

--------------------------

*Dictonary Definitions*

**Class**
*verb: assign or regard as belonging to a particular category*
*noun: a set or category of things having some property or attribute in common and differentiated from others by kind, type, or quality*.

**Classification**
*the action or process of classifying something according to shared qualities or characteristics.*

--------------------------

An HTML element doesn't represent a classification of visual styles.
So an HTML element shouldn't be the target of your css selector.

Classes should be reusable. For every property you add to a class, the less reusable it becomes.
The threshold for this is pretty low. Lower than most of the classes in production CSS that I see.

If you are a programmer building an interface for a user to checkout, you
wouldn't have a class that:

<ul class="list pl0 mt0">
  <li>Parses the mailing address to make sure it's valid</li>
  <li>and triggers a transactional email to be sent</li>
  <li>and also adds all the items up for final price</li>
  <li>and also converts their currency to USD if it's an international order</li>
  <li>and also...</li>
</ul>

Hopefully you get my point.

I think you'd want those to be small classes that can be used anywhere someone
needs them. Because you'll probably have to sanitize email inputs in more than
one place on your website. And writing that several times would be silly.

This is also how your CSS should be structured. You should build small classes
and attach combinations of them to the elements that need those styles and none
of the elements that don't.

When I decide to group two or more properties together in a class I think,
"Well if I need this rule I also definitely need this other rule to accompany
it. All the time. They will always go together regardless of how the design
will change." In practice, I've found this isn't a lot of things.

Properties that could be potentially grouped together:

<ul class="list pl0 mt0">
  <li>font-size and line-height</li>
  <li>text-transform and letter-spacing</li>
  <li>background-color and color</li>
  <li>display and vertical-align</li>
  <li>position and top, bottom, left, right values. Maybe with a z-index thrown in. Maybe.</li>
  <li>box-sizing and width</li>
  <li>white-space, overflow, and text-overflow</li>
</ul>

Properties that probably don't belong in the same class:
<ul class="list pl0 mt0">
  <li>colors and height</li>
  <li>padding and text-transform</li>
  <li>width and margin</li>
  <li>cursor, width, top, and float</li>
  <li>border-left, margin, width, and background</li>
</ul>

These examples are from CSS classes in production CSS. From several large and
well-known websites. These are orthogonal visual styles that don't make sense
together. When I look at them, I can't make sense of how to reuse them. If your
fellow developers can't quickly figure out how to reuse your CSS, they will
likely try and invent their own class(es) that work in the context they are
designing for.

CSS is pretty useless if isn't reusable. If you want some styles that aren't
reusable you're better off writing inline styles and keeping them out of the
global cascade.
