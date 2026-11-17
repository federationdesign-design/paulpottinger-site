import Link from "next/link";
import { PHONE_DISPLAY } from "@/lib/projects";

export default function SiteFooter({ home = false }: { home?: boolean }) {
  return (
    <section className="row" id="row_footer" style={{ background: "#535353" }}>
      <div className="wrapper">
        <div className="footer-widget">
          <div id="footer-widget1" className="primary-sidebar widget-area english active" role="complementary">
            {home ? (
              <aside id="nav_menu-2" className="widget widget_nav_menu">
                <div className="menu-footer-container">
                  <ul id="menu-footer" className="menu">
                    <li className="menu-back-to-top"><a href="#home">Back to Top</a></li>
                    <li className="menu-divider">|</li>
                    <li className="menu-portfolio"><a href="#portfolio">Portfolio</a></li>
                    <li className="menu-divider">|</li>
                    <li className="menu-testimonials"><a href="#testimonials">Testimonials</a></li>
                  </ul>
                </div>
              </aside>
            ) : (
              <a href="#" className="next_section">Back to Top</a>
            )}
          </div>
        </div>
        <div className="clear" />
        <div className="fourcol">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/wp-content/uploads/2018/08/footer-logo.png" id="footer-logo" alt="Paul Pottinger Ltd" />
        </div>
        <div className="eightcol last">
          <div id="footer-tagline">
            <h2 className="english active">
              <strong>Need a quote?</strong>
              <br />
              Call me today on {PHONE_DISPLAY}
            </h2>
          </div>
          <div id="footer-content">
            <span className="english active">
              <p style={{ textAlign: "right" }}>
                <strong><span style={{ color: "#ffffff" }}>Legal Notice</span></strong>
                <br />
                <span style={{ color: "#ffffff" }}>
                  {" "}By accessing, visiting or using this website, you, personally and, where relevant, on behalf of any legal entity that you are representing, as agent, potential investor, employee, or otherwise, agree to be bound by the following terms and conditions, that may be subject to change. If you do not agree to this, please do not access, visit or make any use of this website or the information provided therein.
                </span>
              </p>
              <p style={{ textAlign: "right" }}>
                <span style={{ color: "#ffffff" }}>
                  View our <Link href="/privacy-policy/" style={{ color: "#ffffff" }}>privacy policy</Link>
                </span>
              </p>
            </span>
          </div>
        </div>
        <p id="copyright" className="english active"> © 2018 All Rights Reserved. Designed by Federation Design Company</p>
      </div>
    </section>
  );
}
