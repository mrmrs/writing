---
title: "Mobile-first CSS"
layout: post
---

What is mobile-first CSS?

Mobile-first CSS has pretty much nothing to do with mobile-first design or development practices. They can be related. But they don't have to be. 

Mobile-first CSS has to do with how you architect your code and media queries.It has to do with how browsers parse your css. 

I often times step into codebases that have max-width media queries that target mobile devices. Something to the tune of:

<pre class="phm pbm pbl-ns phl-ns"><code class="f6 f4-ns">
.post-title {
  font-size: 48px;
}

@media (max-width: 320px) {
  .post-title { 
    font-size: 24px; 
  }
} 
</code></pre>

When I first started using media queries - this was a constant pattern in my code. I was used to writing desktop styles 
first and I loved the convenience of being able to 'fix' my desktop design for mobile.

Something didn't feel right though. And I started to wonder.
Is this pattern really an anti-pattern?

In Harry Roberts' wonderfully written ['code smells in css'](http://csswizardry.com/2012/11/code-smells-in-css/)
there is a great line that helped shape the way I think about authoring css:

<blockquote class="f2 f1-ns bl b--near-white pll mln lh-copy">
  Rulesets should only ever inherit and add to previous ones, never undo.
  <a class="db f6 mtm" href="http://csswizardry.com/2012/11/code-smells-in-css">- Harry Roberts</a>
</blockquote>

When applying this thinking to how we architect our media queries, we could say a device shouldn't parse multiple definitions of the same ruleset if it doesn't have to. 

When a devices web browser parses your css, it doesn't parse the code within media queries that don't apply to it. 

I.E devices that have a screen-width smaller than 64em will not parse anything inside this block:

<pre class="phm pbm pbl-ns phl-ns">
<code class="f6 f4-ns">
@media (min-width: 64em) { 
   /* Some CSS here */
}
</code></pre>

In other words **all css that isn't inside a media query will get parsed by
your mobile-devices no-matter what**. So you should use that to target the
smallest devices with your default styles and override from there as your
content demands it. 

Anecdotally since I started developing my css mobile-first, I build
fully responsive interfaces much more quickly as opposed to when I start at large
screen-sizes and work backwards from there. I find that I don't have to 'fix'
my desktop view as my mobile-first css works as a desktop interface. I do override my mobile
styles to enhance the design at larger screensizes...but I never feel like I'm fixing broken things. 
This was a big change in mental approact for me.


Another by-product of making the switch to mobile-first css, was lighter-weight css files. 
Personally I think smaller files are rad because there is less to read and the less you have to read the more time you have to look at cat gifs. 

Like this one:

<img src="http://i.imgur.com/04EQtM6.gif"/>
