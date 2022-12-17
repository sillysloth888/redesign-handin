import heroImage from "./assets/project_thumbnails/redesign_long.png"
import problemsImg from "./assets/troop/usability_problems.svg"
import desktopWf from "./assets/troop/wireframes/desktop.svg"
import tabletWf from  "./assets/troop/wireframes/tablet.svg"
import mobileWf from  "./assets/troop/wireframes/mobile.svg"
import styleGuideImg from "./assets/troop/style_guide.svg"
import desktopHifi from "./assets/troop/hifi/desktop.png"
import tabletHifi from "./assets/troop/hifi/tablet.png"
import mobileHifi from "./assets/troop/hifi/mobile.svg"
import siteGif from "./assets/troop/site.gif"
import interiorImg from "./assets/troop/interior.jpeg"
import HeaderSection from "./components/HeaderSection"
import ProjectBanner from "./components/ProjectBanner"
import ImageSection from "./components/ImageSection"

const App = () => {
  const headerInfo = {
    title: "Troop PVD's Landing Page",
    tldr: "I redesigned a restaurant's landing page to be responsive and elegant on desktop, tablet, and mobile screens. To begin, I identified the usability problems with the original page. I then used lofi wireframes to ideate a new design that would address these problems. I used Figma to create hifi mockups of the website, and finally built the page using handcoded HTML/CSS!",
    tools: ["Figma", "Balsamiq"],
    team: ["just me!"],
    timeline: "2 weeks"
  }

  return (
    <div>
      <ProjectBanner imgSrc={heroImage} />
      <div className="project-content">
        <HeaderSection headerInfo={headerInfo} />
        <div className="project-section">
          <h2 className="small-section-title">problem</h2>
          <h2 className="big-section-title">Troop's Original Website has Poor Usability</h2>
          <p>Troop is a website in Providence, RI which Google describes as a <i>"chill hangout with funky decor for eclectic street food fare & cheekily named craft cocktails."</i></p>

          <p>If you look up pictures of the restaurant and bar online, you'll see a ton of care was put into the Troop's interior design, with grafitti and other artwork lining the walls, with cool light fixtures hanging from the ceiling.</p>

          <ImageSection 
            data={[{id: interiorImg, path: interiorImg, caption: "An image of Troop's interior."}]}
            margin={0}
            width={"70%"}
            separate={false}
            frame={false}
          />

          <p>The same cannot be said for <a href="https://www.trooppvd.com/home">Troop's website</a>. The oversaturated orange color scheme and floating vertical layout is aesthetically unpleasant, and the site faces a laundry list of usability issues that make it difficult to navigate. (Note that the website has changed slightly since I completed the project. Nevertheless, its major usability concerns remain present, even in the new iteration of the site).</p>

          <p>Ultimately, the <b>poor usability</b> of Troop's website creates a <b>bad impression</b> and could frustrate and <b>drive away potential customers</b> who might have otherwise reserved a table.</p>

          <p>So, <b>I chose to redesign Troop's homepage because I felt like—even with my limited UI/UX experience—there were enough glaring usability problems with the website that I would be able drastically improve it</b></p>

          <p>Here is the link to the Troop's original website:  </p>
        </div>
        <div className="project-section">
          <h2 className="small-section-title">research</h2>
          <h2 className="big-section-title">What makes Troop site hard to use?</h2>

          <p>To build the foundation for an effective redesign, I first identified the specific aspects of the interface that hindered the site's usability.</p>
          
          <ImageSection 
            data={[{id: 0, path: problemsImg}]} 
            separate={true}
            oversize={true}
            width={"100%"}
          />
        </div>
        <div className="project-section">
          <h2 className="small-section-title">accessibility</h2>
          <h2 className="big-section-title">Evaluating the Site's Accessibility</h2>

          <p>In addition to the usability problems I identified above, I used <a href="https://wave.webaim.org/">WebAIM WAVE</a> to detect possibile accessibility problems with the site.</p>

          <p>Here was what I found: </p>
          <ul>
            <li>In line with my observations, the WAVE tool detected 18 elements with very low contrast</li>
            <li>The alternatve text for images was also poorly implemented on the site, with 3 images with suspicious alt texts, and 3 images missing alt text altogether</li>
            <li>On the other hand, the site was fairly navigable using a screen-reader, including 36 ARIA labels.</li>
          </ul>
        </div>
        <div className="project-section">
          <h2 className="small-section-title">ideation</h2>
          <h2 className="big-section-title">Brainstorming Design Solutions</h2>
          <p>Having identified seven major usability concerns in the site's interface, I began ideating designs that would address all seven issues. Since I wanted to ensure the site was <b>responsive on a range of screen sizes</b>, I created wireframes for <b>desktop, tablet,</b> and <b>mobile</b> versions of the site.</p>
          <ImageSection
            data={[{id: 1, path: desktopWf}]}
            margin={"-14%"}
            width={"100%"}
            separate={true}
            frame={false}
          />
          <div className="tip-block text-block">
            <p><b>Tip:</b> Don't get attached to your wireframes! Embrace their messiness, and discard them early and often as you iterate through multiple designs. I spent way too much time crafting my initial wireframes, only to totally change their layout later.</p>
          </div>
          <ImageSection 
            data={[{id: 2, path: tabletWf}, {id: 3, path: mobileWf}]}
            margin={"-30%"}
            width={"50%"}
            separate={true}
            frame={false}
          />
        </div>
        <div className="project-section">
          <h2 className="small-section-title">visual design style</h2>
          <h2 className="big-section-title">Finding Troop's Visual Identity</h2>
          <p>Next, I created a visual design style guide to define the overall look and feel of the site. The style guide also includes the <b>base states</b> and <b>interaction states</b> of the interface components, so that a future designer could pick up my redesign without wondering what a button that's moused over should look like.</p>
          <div className="text-block tip-block">
            <p><b>Tip:</b> I used <a href="https://fontawesome.com/">Font Awesome</a> for all of my icons, which offers a really great toolset of free icons you can use in both Figma and HTML.</p>
          </div>
          <ImageSection 
            data={[{id: 4, path: styleGuideImg, caption: "The visual design style guide for Troop's homepage."}]}
            margin={0}
            width={"100%"}
            separate={false}
            frame={false}
          />
          <p>I took inspiration from the restaurant's decor, incorporating the rich blues found on Troop's walls. Otherwise, I opted to keep the visual design fairly simple to keep the <b>focus</b> on the site's <b>core business-driving tasks</b>, such as reserving a table.</p>
        </div>
        <div className="project-section">
          <h2 className="small-section-title">high-fidelity prototyping</h2>
          <h2 className="big-section-title">Mocking up the Redesigns</h2>
          <p>Once I had created the visual style guide. I combined the guide with my wireframes to create <b>high-fidelity mockups</b> in Figma. I created mockups for each screen size so I would know what CSS media queries I would have to use to ensure the site felt great on every device.</p>
          <ImageSection 
            data={[{id: 5, path: desktopHifi}]}
            margin={"-14"}
            width={"100%"}
            separate={false}
            frame={false}
          />
          <div className="text-block tip-block">
            <p><b>Tip:</b> I personally try to create a Figma Component as soon as I use a design element more than once. This is because there's no easy way to convert a group into a Component instance. If you only use the Component a couple times, you only spent a little extra effort—whereas copying even a slight design change manually across multiple elements can be grueling.</p>
          </div>

          <h2 className="small-section-title">tablet mockup</h2>
          <p>Since a tablet is much narrower than a desktop screen, I chose to overlay the text on the splash page on top of the photo rather than leaving them side by side. Similarly, I laid out the event calendar and accent image vertically rather than horizontally.</p>
          <div className="inline-section">
            <div className="img-wrapper">
              <img src={tabletHifi} />
            </div>
          </div>

          <h2 className="small-section-title">mobile mockup</h2>
          <p>There's even less space on a phone screen, so I decided to overlay the restaurant title directly over the splash image. I moved the info that used to be available below the order/reserve buttons into an "Hours & Info" overlay found on the navbar.</p>

          <p>As a result, I also removed the gray footer, as all the information it contained was now always accessible via the "Hours & Info" overlay.</p>
          <div className="inline-section">
            <div className="img-wrapper">
              <img src={mobileHifi} />
            </div>
          </div>
        </div>
        <div className="project-section">
          <h2 className="small-section-title">front-end development</h2>
          <h2 className="big-section-title">Building the Final Website</h2>
          <p>Finally, I followed my Figma mockups to code the homepage using hand-build HTML/CSS.</p>

          <p>Although it took a lot of classes and media queries, I'm really happy with how the final result turned out! A responsive website was this project's primary goal, and I feel that I achieved that.</p>
          
          <div className="inline-section rounded-section">
            <div className="img-wrapper">
              <img src={siteGif} />
            </div>
          </div>

          <div className="inline-section">
            <a class="card-button" href="https://sillysloth888.github.io/cs130-responsive-redesign/">View the deployed site here!</a>
          </div>
         
        </div>
        <div className="project-section">
          <h2 class="small-section-title">reflection</h2>
          <h2 class="big-section-title">Major Takeaways</h2>
          <p>Redesigning Troop's website taught me important lessons about design and web development.</p>
              <ol>
                  <li><b>Taking away info is as important as adding it.</b> Many of the improvements to the interface were based around removing, rather than adding additional information (for example, by distilling down the navbar options). I think the end result is a  sleeker interface that is much less confusing to use.</li>
                  <li><b>There are many time sucks in interface design.</b> I spent too long on UI decisions that were ultimately inconsequential, such as font type or the specific shade of blue I should use for the background. In the end, many of these decisions only marginally impacted the aethestic impact of the site, and had no bearing whatsover on its usability. These choices can easily derail your project, so you have to ruthlessly prioritize.</li>
              </ol>
        </div>
      </div>
    </div>
  )
}

export default App