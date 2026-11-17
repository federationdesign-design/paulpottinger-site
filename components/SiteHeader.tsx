import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/projects";

export default function SiteHeader() {
  return (
    <header className="row">
      <div id="header_wrapper">
        <div
          id="callnow_mobile"
          className="only-mobile"
          style={{ width: "100%", margin: "10px auto", marginTop: 0, textAlign: "center", paddingTop: 20, paddingBottom: 20, background: "#717171" }}
        >
          <span id="spanphone" style={{ fontSize: 18, color: "#fff" }}>Call now:</span>
          <a href={PHONE_HREF}>
            <span id="spanphone" style={{ fontSize: 18, color: "#fff" }}>{PHONE_DISPLAY}</span>
          </a>
        </div>
        <div className="wrapper">
          <div id="site_logo">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/wp-content/uploads/2018/08/pp-logo.png" alt="Paul Pottinger Ltd" />
            </Link>
          </div>
        </div>
        <div className="clear" />
      </div>
    </header>
  );
}
