import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Privacy Policy - Paul Pottinger Ltd",
  alternates: { canonical: `${SITE}/privacy-policy/` },
};

export default function PrivacyPolicy() {
  const html = fs.readFileSync(path.join(process.cwd(), "content", "privacy.html"), "utf8");
  return (
    <>
      <link rel="stylesheet" href="/css/inner.css" precedence="default" />
      <SiteHeader />
      <div className="spacer" />
      <section className="row" id="row_intro_about">
        <div className="wrapper">
          <div className="content-inner">
            <h1 className="title">
              <Link href="/" className="aback" style={{ display: "inline-block", color: "#1851a5" }}>Back &nbsp;| &nbsp;</Link>
              Privacy Policy
            </h1>
            <div className="clear" />
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </section>
      <div className="clear" />
      <SiteFooter />
    </>
  );
}
