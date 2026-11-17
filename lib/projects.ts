import data from "@/content/projects.json";

export type Project = {
  slug: string;
  title: string;
  overlay: string | null;
  img: { src: string; srcset: string; width: number; height: number };
  lightbox: string;
  detail: string;
  pageTitle: string;
};

export const projects = data as Project[];
export const SITE = "https://paulpottingerltd.co.uk";
export const PHONE_DISPLAY = "07973 380780";
export const PHONE_HREF = "tel:07973 380780";
