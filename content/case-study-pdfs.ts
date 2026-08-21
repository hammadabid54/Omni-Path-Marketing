/**
 * Portfolio PDFs — 14 client SEO case studies.
 *
 * Source PDFs live in `public/case-study-pdfs/` (real client filenames kept
 * for archival; the site only ever references the `slug` + public/case-study-pdfs/).
 *
 * Every UI label is anonymized — the real client names stay inside the PDFs
 * only. The `name` here is what shows on the card, modal, grid row, etc.
 *
 * Cover thumbnails are pre-rendered by `scripts/build-pdf-covers.mjs` (run
 * locally when PDFs change). They are committed to git under
 * `public/case-study-pdfs/covers/<slug>.png` so the production build does
 * not need Puppeteer.
 */

export type PdfCategory = "dental" | "healthcare" | "platform";

export interface CaseStudyPdf {
  /** Stable id used as React key + URL anchor. */
  slug: string;
  /** Anonymized display name shown on the site. */
  name: string;
  /** Service line the case study covers. */
  service: string;
  /** Region label (kept generic for privacy). */
  region: string;
  /** Year the engagement ran. */
  year: string;
  /** Filter category for the chips. */
  category: PdfCategory;
  /** Filename of the PDF inside public/case-study-pdfs/. */
  file: string;
  /**
   * Pre-rendered cover thumbnail (second-to-last page of the PDF, rendered
   * to a PNG by scripts/build-pdf-covers.mjs). Path is public-relative.
   */
  cover: string;
}

export const CASE_STUDY_PDFS: CaseStudyPdf[] = [
  {
    slug: "dental-group-sydney-metro",
    name: "Dental Group · Sydney Metro",
    service: "Local SEO",
    region: "AU",
    year: "2024",
    category: "dental",
    file: "Hammad_Abid_Dental_Corner_SEO_Case_Study.pdf",
    cover: "/case-study-pdfs/covers/dental-group-sydney-metro.png",
  },
  {
    slug: "dental-practice-inner-west",
    name: "Dental Practice · Inner West",
    service: "Local SEO",
    region: "AU",
    year: "2024",
    category: "dental",
    file: "Hammad_Abid_Dental_Specialists_SEO_Case_Study.pdf",
    cover: "/case-study-pdfs/covers/dental-practice-inner-west.png",
  },
  {
    slug: "family-dental-brisbane",
    name: "Family Dental · Brisbane",
    service: "Local SEO",
    region: "AU",
    year: "2025",
    category: "dental",
    file: "Hammad_Abid_Ferny_Hills_Dental_SEO_Case_Study.pdf",
    cover: "/case-study-pdfs/covers/family-dental-brisbane.png",
  },
  {
    slug: "cosmetic-dental-melbourne-north",
    name: "Cosmetic Dental · Melbourne North",
    service: "Local SEO",
    region: "AU",
    year: "2025",
    category: "dental",
    file: "Hammad_Abid_Glenroy_Smiles_Dental_SEO_Case_Study.pdf",
    cover: "/case-study-pdfs/covers/cosmetic-dental-melbourne-north.png",
  },
  {
    slug: "hand-therapy-practice-sydney",
    name: "Hand Therapy Practice · Sydney",
    service: "Healthcare SEO",
    region: "AU",
    year: "2025",
    category: "healthcare",
    file: "Hammad_Abid_Hand_Therapy_Clinic_Sydney_SEO_Case_Study.pdf",
    cover: "/case-study-pdfs/covers/hand-therapy-practice-sydney.png",
  },
  {
    slug: "dental-group-macquarie-park",
    name: "Dental Group · Macquarie Park",
    service: "Local SEO",
    region: "AU",
    year: "2024",
    category: "dental",
    file: "Hammad_Abid_Macquarie_Dental_SEO_Case_Study.pdf",
    cover: "/case-study-pdfs/covers/dental-group-macquarie-park.png",
  },
  {
    slug: "healthtech-platform-pakistan",
    name: "Healthtech Platform · Pakistan",
    service: "Health platform SEO",
    region: "PK",
    year: "2025",
    category: "platform",
    file: "Hammad_Abid_Marham_PK_SEO_Case_Study.pdf",
    cover: "/case-study-pdfs/covers/healthtech-platform-pakistan.png",
  },
  {
    slug: "family-dental-brisbane-north",
    name: "Family Dental · Brisbane North",
    service: "Local SEO",
    region: "AU",
    year: "2025",
    category: "dental",
    file: "Hammad_Abid_My_Dentist_Alderley_Newmarket_SEO_Case_Study.pdf",
    cover: "/case-study-pdfs/covers/family-dental-brisbane-north.png",
  },
  {
    slug: "dental-group-upper-north-shore",
    name: "Dental Group · Upper North Shore",
    service: "Local SEO",
    region: "AU",
    year: "2025",
    category: "dental",
    file: "Hammad_Abid_Pymble_Dental_SEO_Case_Study.pdf",
    cover: "/case-study-pdfs/covers/dental-group-upper-north-shore.png",
  },
  {
    slug: "health-booking-platform-anz",
    name: "Health Booking Platform · ANZ",
    service: "Health booking SEO",
    region: "AU",
    year: "2024",
    category: "platform",
    file: "Hammad_Abid_Route2Health_SEO_Case_Study.pdf",
    cover: "/case-study-pdfs/covers/health-booking-platform-anz.png",
  },
  {
    slug: "family-dental-south-lakes",
    name: "Family Dental · South Lakes",
    service: "Local SEO",
    region: "AU",
    year: "2024",
    category: "dental",
    file: "Hammad_Abid_Southlakes_Dental_SEO_Case_Study.pdf",
    cover: "/case-study-pdfs/covers/family-dental-south-lakes.png",
  },
  {
    slug: "regional-dental-new-england",
    name: "Regional Dental · New England",
    service: "Local SEO",
    region: "AU",
    year: "2025",
    category: "dental",
    file: "Hammad_Abid_Tamworth_Dental_Care_SEO_Case_Study.pdf",
    cover: "/case-study-pdfs/covers/regional-dental-new-england.png",
  },
  {
    slug: "regional-dental-mid-north-coast",
    name: "Regional Dental · Mid North Coast",
    service: "Local SEO",
    region: "AU",
    year: "2024",
    category: "dental",
    file: "Hammad_Abid_Taree_Dental_Care_SEO_Case_Study.pdf",
    cover: "/case-study-pdfs/covers/regional-dental-mid-north-coast.png",
  },
  {
    slug: "family-dental-surf-coast",
    name: "Family Dental · Surf Coast",
    service: "Local SEO",
    region: "AU",
    year: "2025",
    category: "dental",
    file: "Hammad_Abid_Torquay_Dental_SEO_Case_Study.pdf",
    cover: "/case-study-pdfs/covers/family-dental-surf-coast.png",
  },
];

/** Public path to a case study PDF. */
export function caseStudyPdfUrl(file: string): string {
  return `/case-study-pdfs/${file}`;
}
