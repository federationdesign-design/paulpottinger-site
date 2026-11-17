import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { projects, SITE } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.pageTitle,
    alternates: { canonical: `${SITE}/home/${p.slug}/` },
    openGraph: { title: p.pageTitle, url: `${SITE}/home/${p.slug}/` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
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
              {p.title}
            </h1>
            <div className="clear" />
            <div dangerouslySetInnerHTML={{ __html: p.detail }} />
          </div>
        </div>
      </section>
      <div className="clear" />
      <SiteFooter />
    </>
  );
}
