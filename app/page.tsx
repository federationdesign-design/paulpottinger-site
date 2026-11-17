import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProjectShowcase from "@/components/ProjectShowcase";
import HeightSync from "@/components/HeightSync";
import { PHONE_DISPLAY } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="/css/home.css" precedence="default" />
      <SiteHeader />
      <div id="main_wrapper">
        <a id="home" className="anchor_position" aria-hidden="true" />
        <div
          className="big-title background-image-holder"
          style={{ backgroundImage: "url(/wp-content/uploads/2018/08/paulpottinger-headimage.jpg)" }}
          role="img"
          aria-label="Paintbrush painting a timber fence"
        >
          <a href="#introduction" className="next_section fancy-down-arrow-grey" title="There's more below">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/wp-content/uploads/2018/08/nav-arrow.png" className="owl-right-arrow" alt="Scroll down" />
          </a>
        </div>
        <div className="clear" />
        <div id="owl-intro1">
          <section className="row" id="row_intro" style={{ background: "#717171" }}>
            <a id="introduction" className="anchor_position" aria-hidden="true" />
            <div className="wrapper">
              <div className="item" id="item1">
                <div id="intro-para">
                  <div className="title-wrapper" id="left-title">
                    <div id="intro-cta" />
                    <h1 className="title english active" style={{ color: "#fff" }}>
                      <strong>Paul Pottinger Ltd.</strong>
                      <br />
                      Carpentry, Brickwork, General Builder
                    </h1>
                  </div>
                  <span className="english active" style={{ color: "#fff" }}>
                    <p>
                      <span style={{ fontSize: 18 }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="aligncenter wp-image-256 size-medium" src="/wp-content/uploads/2018/08/25years-300x298.png" alt="25 years" width={300} height={298} />
                      </span>
                    </p>
                    <p>
                      <span style={{ fontSize: 18 }}>
                        <br />
                        Paul is a general builder with over 25 years of experience in all aspects of residential construction.
                        <br />
                        He works in East Hertfordshire, the Eastern Counties (East Anglia) and sometimes beyond
                      </span>
                    </p>
                    <p>He has a City &amp; Guilds certificate in brickwork and carpentry.</p>
                    <p>Paul operates as a sole trader, working with a small team of experienced tradesmen when needed. He is fully insured.</p>
                  </span>
                </div>
              </div>
              <div id="verticalSeparator" />
              <div className="item" id="item2">
                <div id="intro-para">
                  <div className="title-wrapper">
                    <h1 className="title english active" style={{ color: "#fff" }}>Specialising in...</h1>
                    <span className="english active" style={{ color: "#fff" }}>
                      <ul>
                        <li><strong>Carpentry<br /></strong>1st Fix (structural)<br />2nd Fix (doors, skirtings, floors)</li>
                        <li><strong>Joinery<br /></strong>Bespoke items: doors, gates, windows, fitted units, furniture and outbuildings</li>
                        <li><strong>Brickwork and Blockwork</strong></li>
                        <li><strong style={{ fontSize: "1rem" }}>Extensions, Renovations and Heritage Work</strong></li>
                        <li><strong style={{ fontSize: "1rem" }}>Hard Landscaping<br /></strong><span style={{ fontSize: "1rem" }}>Fencing, garden walls, patios, paths</span></li>
                      </ul>
                      <p>
                        <span style={{ fontSize: 18, paddingLeft: "2em" }}>Call me now on:</span>
                        <br />
                        <span id="spanphone" style={{ fontSize: 18, color: "#fff" }}>{PHONE_DISPLAY}</span>
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="row" id="row_featured" style={{ background: "#a5a5a5" }}>
          <a id="portfolio" className="anchor_position" aria-hidden="true" />
          <div className="wrapper">
            <div className="inner">
              <div id="featured-title">
                <h2 className="english active" style={{ color: "#ffffff" }}>Project Showcase</h2>
              </div>
            </div>
          </div>
        </section>
        <ProjectShowcase />
        <section className="row testimonials-section" id="row_intro" style={{ background: "#b2b2b2" }}>
          <a id="testimonials" className="anchor_position" aria-hidden="true" />
          <div className="wrapper">
            <div className="item" id="item1-testimonials">
              <div id="intro-para">
                <div className="title-wrapper">
                  <h1 className="title english active" style={{ color: "#fff" }}>Testimonials</h1>
                </div>
                <span className="english active" style={{ color: "#fff" }}>
                  <p>
                    We have used the services of Paul Pottinger over a period of 18 years on various projects in our houses and business premises. The work has ranged from construction work, extensions and kitchen fitting to block paving and carpentry. We have always been delighted with the standard of the work he has carried out and his attention to detail, planning and professionalism shown in his approach to his work.
                    <br />
                    J.Molloy
                  </p>
                  <p>
                    I have used Pottinger Builders for several projects over the years on my listed building and have always been thoroughly pleased with the standard of work, not only the high level of finish but the standard of protection and cleanliness of the finished works during new projects.
                    <br />
                    Mr Pottinger himself excels on the carpentry side and is able to work to cabinet-maker standards. He has worked on numerous bespoke fitted projects and I have always been more than completely satisfied. I can recommend Paul Pottinger to anyone requiring quality work at a fair price.
                    <br />
                    L.S. Armstrong
                  </p>
                </span>
              </div>
            </div>
            <div id="verticalSeparator" className="testimonials" />
            <div className="item" id="item2">
              <div id="intro-para">
                <div className="title-wrapper">
                  <h1 className="title english active" style={{ color: "#fff" }}>Testimonials</h1>
                  <span className="english active" style={{ color: "#fff" }}>
                    <p>
                      We have been using Paul’s services for over 20 years now. His standard of workmanship and attention to detail are second to none. Paul can take on pretty much any job, with the added benefit that he will be there when he says he will be there.
                      <br />
                      Paul has installed and overseen a complete kitchen renovation for us, including managing the project and the other tradesmen from start to finish. His advice and support was invaluable.
                      <br />
                      If you are looking for a general builder that you can trust, then look no further.
                      <br />
                      K&amp;S
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SiteFooter home />
      </div>
      <HeightSync />
    </>
  );
}
