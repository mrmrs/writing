---
title: "Mobile-first CSS"
layout: post
---
# Mobile-first CSS

## What is mobile-first CSS?

Mobile-first CSS has pretty much nothing to do with mobile-first design or development practices. They can be related. But they don't have to be. 

Mobile-first CSS has to do with how you architect your code and media-queries.It has to do with how browsers parse your css. 

I often times step into codebases that have max-width media queries that target mobile devices. Something to the tune of:

<pre><code>
.post-title {
  font-size: 48px;
}

@media (max-width: 320px) {
  .post-title { 
    font-size: 24px; 
  }
} 
</code></pre>

When I first started writing media-queries I basically did this all over the place. I was used to developing for the desktop. 
So I used media queries to override my desktop styles. 

But it doesn't really make sense does it?
In Harry Roberts' wonderfully written 'code smells in css' http://csswizardry.com/2012/11/code-smells-in-css/
he has a great line that helped shape the way I think about authoring css:

"Rulesets should only ever inherit and add to previous ones, never undo."

When applying this thinking to how we write media queries, we could say a device shouldn't have to parse multiple definitions of the same ruleset if it doesn't have to. 

When a devices web browser parses your css, it doesn't parse the code within media queries that don't apply to it. 

I.E devices that have a screen-width smaller than 64em will not parse anything inside this block:
<pre><code>
@media (min-width: 64em) { 

   /* Some CSS here */
   
}
</code></pre>

In other words **all css that isn't inside a media query will get parsed by your mobile-devices no-matter what**. So you should use that to target the smallest devices with your default styles and override from there as your content demands it. 

Anecdotally since I started developing my css mobile-first,
I'm able to build out fully responsive interfaces much more quickly than when I start at large screen-sizes and work backwards from there. Another by-product of this method, is that it often leads to lighter-weight css files. Which is also rad because there is less to read and the less you have to read the more time you have to look at cat gifs. 

Like this one

http://i.imgur.com/04EQtM6.gif
