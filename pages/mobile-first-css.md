import Container from '../components/Container'
import PostHeader from '../components/PostHeader'

<Container>
  <PostHeader 
    title="Mobile-first Css"
    published="18-08-2014"
  />


What is mobile-first CSS?

Mobile-first CSS is not strongly related to mobile-first design or
development practices. They can be related, but don't have to be.

Mobile-first CSS has to do with how you architect your code and media queries,
as well as how browsers parse your CSS. It is not predicated in what order you write your styles or which screensize you style first.

I often times step into codebases that have max-width media queries that target
mobile devices. Something to the tune of:

```
.post-title {
  font-size: 48px;
}

@media only screen and (max-width: 20em) {
  .post-title {
    font-size: 24px;
  }
}
```

When I first started using media queries - this was a constant pattern in my
code. I was used to writing desktop styles first and I loved the convenience of
being able to 'fix' my desktop design for mobile.

Something didn't feel right though. And I started to wonder.
Is this pattern really an anti-pattern?

In Harry Roberts' wonderfully written ['code smells in css'](http://csswizardry.com/2012/11/code-smells-in-css/)
there is a great line that helped shape the way I think about authoring CSS:

<blockquote>
  Rulesets should only ever inherit and add to previous ones, never undo.
  <a href="http://csswizardry.com/2012/11/code-smells-in-css">- Harry Roberts</a>
</blockquote>

When applying this thinking to how we architect our media queries, we could say
a device shouldn't parse multiple definitions of the same ruleset if it doesn't
have to.

When a devices web browser parses your CSS, it doesn't parse the code within
media queries that don't apply to it.

I.E devices that have a screen-width smaller than 64em will not parse anything
inside this block:

```
@media only screen and (min-width: 64em) {
   /* Some CSS here */
}
```

In other words **all CSS that isn't inside a media query will get parsed by
your mobile-devices no-matter what**. So you should use that to target the
smallest devices with your default styles and override from there as your
content demands it.

Anecdotally since I started developing my CSS mobile-first, I build fully
responsive interfaces much more quickly as opposed to when I start at large
screen-sizes and work backwards from there. I find that I don't have to 'fix'
my desktop view as my mobile-first CSS works as a desktop interface. I do
override my mobile styles to enhance a design at larger screensizes...but I
never feel like I'm fixing broken things.  This was a big shift in my mental
approach for authoring CSS.

Another by-product of making the switch to mobile-first CSS, was lighter-weight
CSS files.  Personally I think smaller files are rad because there is less to
read and the less you have to read the more time you have to look at cat gifs.

Like this one:

![](http://i.imgur.com/04EQtM6.gif)

</Container>
