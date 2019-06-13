/** @jsx jsx */
import jsx from '../jsx'
import  Link  from 'next/link'
import  BlockLink  from '../components/BlockLink'

function Home() {
  return (
    <div display='grid' p={[4,5]}>
      <BlockLink title="Component Styling API" href='component-styling-api'>
        Component Styling API
      </BlockLink>
      <BlockLink title="The Veil of Ignorance" href='the-veil-of-ignorance'>
        The Veil of Ignorance
      </BlockLink>
      <BlockLink title="Css and Scalability" href='scalable-css'>
        Css and Scalability
      </BlockLink>
      <BlockLink title="Too Many Tools and Frameworks" href='too-many-tools'>
        Too Many Tools And Frameworks
      </BlockLink>
      <BlockLink title="What are design systems" href='design-systems'>
        Design Systems
      </BlockLink>
      <BlockLink title="UI development as a first-class citizen" href='developing-ui'>
        Developing UI
      </BlockLink>
      <BlockLink title="Growing up with dogma" href='dogma'>
        Growing up with Dogma
      </BlockLink>
      <BlockLink title="The benefits of webfonts" href='webfonts'>
        Webfonts
      </BlockLink>
      <BlockLink title="Getting critiqued" href='getting-critiqued'>
        Getting Critiqued
      </BlockLink>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <BlockLink href='learning-css'>
        Learning Css
      </BlockLink>
      <BlockLink href='line-height'>
        How to Line-height
      </BlockLink>
      <BlockLink href='what-are-classes-for'>
        What are Classes for?
      </BlockLink>
      <BlockLink href='advice-on-change'>
        The Best Advice on Changing Things
      </BlockLink>
      <BlockLink href='living-with-jxnblk'>
        Living with Jxnblk
      </BlockLink>
      <BlockLink href='mobile-first-css'>
        Mobile-first Css
      </BlockLink>
      <BlockLink href='good-css'>
        What is good Css?
      </BlockLink>
      <BlockLink href='vim-workflows'>
        Vim Workflows
      </BlockLink>
      <BlockLink href='how-to-learn-vim'>
        How to Learn Vim
      </BlockLink>
      <BlockLink href='common-vim'>
        Common Vim
      </BlockLink>
      <BlockLink href='vim-as-a-design-tool'>
        Vim as a Design Tool
      </BlockLink>
      <BlockLink href='essential-vim-plugins'>
        Essential Vim Plugins
      </BlockLink>
      <BlockLink href='what-is-css-for'>
        What is Css for
      </BlockLink>
    </div>
  )
}

export default Home;
