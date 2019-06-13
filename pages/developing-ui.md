import Container from '../components/Container'
import PostHeader from '../components/PostHeader'

<Container>
  <PostHeader 
    title="Developing UI"
    published="21-04-2016"
  />

The single hardest part of front-end development at any scale is making changes
to code and understanding all of the resulting visual and behavioral effects
that will occur across the application.

Several years ago I worked on a print and email product where our main
directive was to ship zero bugs. While simultaneously shipping features as
quickly as possible. On the web 'mean time to fix failure' is generally more
valuable than 'mean time between failure.' This makes sense. Often times you
can fix a bug on a website before many people will see it. In the world of
print and email though you only get one chance. You can’t unmail an electronic
or print document. The ability to work quickly without creating errors or bugs
is critical.


Over 3.5 years I ended up shipping two small prose based errors to production.
One was caught before we mailed it, one was not. Instead of saying “Track your
progress” the text said “Rack your progress.” Not perfect, but definitely
better than my record on the web.

It wasn’t an accident I was able to do this. I'm not nor have I ever been a super genius that writes mistake-free code. I benefited from working with engineers that treated this problem of bug free development as their number one priority. They treated my development workflow as a first-class citizen. I was able to sit in meetings and explain problems I had - and people tried to build tools to help me solve them.

The following is a rough outline of our development process. The ideas are simple but they require upfront effort and intention.

### Upfront process

When you build a component, tests should be written that expose each state a component can be in. This test should generate a static html file and a corresponding image for every discrete state a component can be in.

### What is a component?

Everything is a component. A link is a component. A text input with a label is
a component. A modal is a component. A page is a component. Components can be
composed of other components.

The test that generates all states of a component should be written before
visual ui implementation is begun. This allows the front-end engineer to see
all states simultaneously as they work. This has an *enormous effect* on
both the development velocity of new components and the ability to refactor or
modify existing components.

**For example:** If a user can click on a button and reveal
new content within the interface - then there should be a test that generates this discrete state. 
If different accounts render different text to within a component this should be reflected in a test for the component.

When a component has fully undergone and passed visual QA, you can save the
generated assets as a canonical set of images and html files.

### Refactoring

When you refactor or modify a component you can then run the existing tests and diff the new assets against the ones that have passed QA (imageMagick is great for this). You can then return a list of html files and images that represent visually broken interfaces. This will speed up the ability to refactor existing interfaces without rigorous manual testing. This type of QA is often time consuming and brittle. Many times it doesn’t get done at all. Because who has time?

### Side Effects

This development method will also help new members of a dev team get a
comprehensive overview for all the states an interface can be in. This feature
is also immensely beneficial for designers who are trying to observe the
various states of a component that they might be tasked to redesign.
Visualizing all the discrete states an application can be in will make your
design systems better. This in essence is the most pure form of a ‘living style
guide’ and will help your design team develop a cohesive and modular design
system.

We can live in this world! The technology exists. We just need to be intentional. If you’re a backend engineer or programmer this is my plea for help. Grab the closest designer or front-end developer and just talk to them. Ask them what slows them down the most. Spend time observing how they work as you might recognize problems in their workflow that they don’t. Front-end developers like myself often lack the agency to fix their own problems and so we just accept the reality that everything is horrible. This doesn’t have to be the case. Everything doesn’t have to be horrible. I was fortunate to work with 
  <a class="underline black dim" title="Dave Copeland on Twitter" href="http://twitter.com/davetron5000">some</a> <a class="black dim" title="Geoff The on Twitter" href="https://twitter.com/geoff2k">amazing</a> <a class="black dim" title="Jeff Kolesky on Twitter" href="http://twitter.com/jeffkole">people</a> who showed me how great things can be for a designer. They decided to treat front-end development as a first class citizen. I think you should too.

Let’s work together. Let’s push the web forward.

### Further reading:

- [Pure UI](http://rauchg.com/2015/pure-ui/)
- [Learnable Programming](http://worrydream.com/LearnableProgramming/)

</Container>
