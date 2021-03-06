import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import BlockParagraph from "../components/blockParagraph"
import BlockParagraphExt from "../components/blockParagraphExt"
import BlockImage from "../components/blockImage"
import SectionTitle from "../components/sectionTitle"
import ContentResumeHome from "../components/contentResumeHome"

import imgPortfolio from "../images/projects-bbx.jpg"
import imgProjective from "../images/mbp-projective-banner.png"
import imgProjectAuditApp from "../images/mbp-projectauditsystem-gumroad--app.png"
import imgProjectAuditBG from "../images/mbp-projectauditsystem-gumroad--bg.jpg"


const IndexPage = () => (
  
  <Layout>
    <Seo title="Minimalist designer &amp; problem solver"  />

    <Hero heroText="Helping people design systems with minimalism &amp; data." heroDesc="I am Chris Porter, a seasoned designer, developer &amp; audio producer for entrepreneurs. I enjoy building systems for small businesses &amp; early stage startups."  />

    <section className="block block-section">
      <SectionTitle text="Projects I'm working on right now" />

      <article className="block-article g-m-1-13">

        <BlockImage
          blockImageSrc={imgProjective}
          blockImageAlt="Projective, a Notion template for Solopreneurs to Manage their Business."
          blockImageCaption="Go get organized..."
        />

        <BlockParagraphExt 
          blockTitle="Projective"
          blockContent="Here's my official Notion template for managing my solopreneur business. A way to organize your tasks, projects and goals. You can buy the template for $49 or get the template plus setup consulting for $124." 
          blockLinkURL="https://madebyporter.gumroad.com/l/projective"
          blockLinkTitle="Buy Projective Notion Template"
        />

      </article>
      
      <article className="block-article g-m-1-13">
        
        <BlockImage
          blockImageSrc={imgPortfolio}
          blockImageAlt="The Beatbox Club"
          blockImageCaption="The Beatbox Club"
        />

        <BlockParagraphExt
          blockTitle="The Beatbox Club"
          blockContent="As a music producer, I wanted to build a simple way to showcase my production library. Most solutions offered too much, so I build my own solution. Now I want to help other music producers organize their production library." 
          blockLinkURL="https://www.thebeatboxclub.com/producers/madebyporter"
          blockLinkTitle="View my library"
        />

      </article>

      <article className="block-article g-m-1-13">

        <BlockImage
          blockImageSrc={imgProjectAuditApp}
          blockImageAlt="The Project Audit System, a Notion template."
          blockImageCaption="Background Photo by"
          blockImageLink="https://unsplash.com/photos/MpTdvXlAsVE"
          blockImageLinkText="Martin Adams"
          blockImageBG={imgProjectAuditBG}
        />

        <BlockParagraphExt 
          blockTitle="Product Audit System"
          blockContent="Every quarter, I review all the projects I've worked on and add them to my product audit system. I add in the data and it spits out how cool the project is based on my tastes. You can download my Notion template for it here:" 
          blockLinkURL="https://madebyporter.notion.site/Use-my-Project-Audit-System-550288c2c81b4628a806a0081e8bd601"
          blockLinkTitle="Download the Product Audit System"
        />
      
      </article>

      <article className="block-article g-m-1-13">
        
        <BlockImage
          blockImageSrc={imgProjective}
          blockImageAlt="Projective, a Notion template for Solopreneurs to Manage their Business."
          blockImageCaption="Go get organized..."
        />
        
        <BlockParagraphExt 
          blockTitle="Freelancer Mentorship"
          blockContent="I help teach new freelancers &amp; solopreneurs coming from in-house teams about the aspects of freelancing. You???ll learn how to find clients, negotiate contracts, manage projects &amp; handle your business. $125/session." 
          blockLinkURL="https://calendly.com/madebyporter/consulting"
          blockLinkTitle="Book a Session"
        />

      </article>
      
      <ContentResumeHome />
      
    </section>
  </Layout>
)

export default IndexPage
