"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import Lightbox from "./Lightbox";
import { projects } from "@/lib/projects";

export default function ProjectShowcase() {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <>
      <section className="row" id="row_featured_links">
        <div id="featured-links">
          {projects.map((p, i) => (
            <div className="threecol featured-link-tile" id={`featured-item-${i + 1}`} key={p.slug}>
              <div className="background-image-holder">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  width={p.img.width}
                  height={p.img.height}
                  src={p.img.src}
                  srcSet={p.img.srcset || undefined}
                  sizes={`(max-width: ${p.img.width}px) 100vw, ${p.img.width}px`}
                  alt={p.title}
                  loading={i < 4 ? "eager" : "lazy"}
                />
                <div className="div-only-mobile">
                  <h2 className="only-mobile active">{p.title}</h2>
                </div>
                <div className="overlay" style={p.overlay ? { background: p.overlay } : undefined}>
                  <div className="overlay-content">
                    <Link href={`/home/${p.slug}/`} className="only-desktop">
                      <h2 className="english active">{p.title}</h2>
                    </Link>
                    <div className="btn btn-link hover">
                      <div className="svg-wrapper">
                        <svg height="40" width="150">
                          <rect id="shape" height="40" width="150" />
                        </svg>
                        <div id="text">
                          <Link href={`/home/${p.slug}/`} className="only-mobile">Read More</Link>
                          <a
                            href={`/home/${p.slug}/`}
                            className="button english active only-desktop"
                            onClick={(e) => {
                              e.preventDefault();
                              setOpen(i);
                            }}
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="clear" />
        </div>
      </section>
      {open !== null && <Lightbox html={projects[open].lightbox} label={projects[open].title} onClose={close} />}
    </>
  );
}
