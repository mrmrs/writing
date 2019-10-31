/** @jsx jsx */
import jsx from '../jsx'
import  Link  from 'next/link'
import Container from '../components/Container'
import Flex from '../components/Flex'
import PostHeader from '../components/PostHeader'

function Page() {
  return (
    <Container pb={5}>
      <PostHeader 
        title="Components.ai"
        subtitle=""
       published="29-10-2019"
      />
    <p>
      <a href="https://twitter.com/mrmrs_/status/1145543229229735937">In July</a>, <a href="https://johno.com">John Otander</a> and I released a modest start to a project we are calling <a href="https://components.ai">components.ai</a>. This is an ambitious and long-term project we've been working on aimed at exploring two questions: <br /><br />
In design, what can be computed?<br />
How might we contribute to our collective design knowledge?
    </p>

<p>If one were to design a single static experience that was meant to work efficiently on all devices and accessible for everyone, you’d have millions of states to account for in your design. We are already far from full coverage on building fully accessible and responsive digital interfaces as it is. The problem space is already too large for our brains to fully wrap themselves around now. This will get worse over time as more contexts are introduced and the explosion of considerations and mediums that accompany designing for AR / VR / holographic vision. </p>

<p>If we lived in a world where every possible iteration of a design was already built - what would your workflow be to define what you’d ship? What tools would you use to sift through all of this generated noise? A common critique around generative / procedural design output is that it’s too overwhelming. Too many choices. This is a valid consideration when thinking about the ergonomics of a tool or interface. But, through a different lens, the overwhelming amount of potential solutions exist, regardless if a piece of software is generating them or not. <a href="https://twitter.com/marian42_/status/1188969971898048512">
    What do we need to make total generative space more manageable to explore? </a></p>

<p>We think the future of design tooling will be centered around a search interface. One that allows you to filter or define the constraints and quickly cycle through available outputs.</p>

<p>Currently, colors for our gradient components are generated from several algorithms and data sources. For serendipitous inspiration, you can cycle through attempts at the generators attempts at creating a pleasing gradient. Another mode to work in is to constrain the inputs with intent. Eliminating a certain range of hues or saturations you know to be off brand. Or defining an explicit list of brand colors to generate gradients from.  Maybe you need to dynamically generate gradients that go well with a photo’s color palette. </p>

<p>No one wants to spend time reviewing design iterations that will never be implemented because they do not conform to a known constraint. Imagine only seeing designs that were visually accessible. Or that were themed with your brand colors. Or could handle low light and bright light situations. Constraints come in many forms - and our goal is to make design tools that allow you to search through generative space with any constraint you might have in mind. Using the history of css styles on the internet, you could generate design options to look most visually different than a defined list of sites. </p>

<p>The starting point is small: design algorithms that style nodes using a variety of data sources. Over time as a designer gives feedback on the output, the density of high quality designs generated should increase for each component. As we evolve our understanding around styling single nodes in a desirable way, we can start to compose sets and seek to understand more complex relationships. As we learn more about what makes a pleasing gradient, we can use that data to inform our starting point when testing which gradients work well with buttons of various sizes. While a gradient might look wonderful as a full page background, it might look less appealing applied to an element the size of a button. Each component could be considered an encapsulated design research program.</p>

<p>Within many of our components, we expect to find acceptable ranges for inputs and hope to externalize and document that data for public consumption.  As there is a range of acceptable measurements for the height of a stair,  what are the size dimensions and aspect ratios that determine where a button is too large or too small? If you’ve ever worked within a digital audio workstation, instruments and effects come with context labeled presets. What would presets for component design and theming options look like? Can they be established? </p>

<p>Long-term we want to build a design tooling platform that allows you to generate, assess, and test designs at unprecedented scale. Whether it's visualizing a wide variety of content choices, theming compositions, or layout options, it should be effortless to generate and explore design variants with your team. </p>

<p>We believe that successful design in the future will necessitate creating things beyond our individual comprehension. This will require us to create more resilient and dynamic systems that learn and respond to feedback over time.</p>

<p>
    We currently have a lot of questions but we’re excited and energized about the opportunity to explore potential answers. </p>

</Container>

)}

export default Page
