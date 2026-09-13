// Central business configuration - Single Source of Truth for Plombier Namur Urgent
// All templates, headers, footers, CTAs, schema objects, and contact blocks must import from here.

export interface BusinessConfig {
  businessName: string;
  legalBusinessName: string;
  businessForm: string;
  telephone: string;
  telephoneE164: string;
  telephoneHref: string;
  whatsapp: string;
  whatsappHref: string;
  email: string;
  streetAddress: string;
  postalCode: string;
  city: string;
  addressRegion: string;
  country: string;
  vatNumber: string;
  bceNumber: string;
  businessHours: string;
  openingHoursSpecification: Array<{
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  googleBusinessProfileUrl: string;
  logoUrl: string;
  mainBusinessUrl: string;
  certifications: string[];
  insurance: string;
  serviceAreas: string[];
  socialProfiles: string[];
  responsiblePublisher: string;
  hostingCompany: string;
}

export const BUSINESS_CONFIG: BusinessConfig = {
  businessName: "Plombier Namur Urgent",
  legalBusinessName: "[À COMPLÉTER - Dénomination légale SRL]",
  businessForm: "Entreprise de plomberie et chauffage",
  telephone: "0470 00 00 00",
  telephoneE164: "+32470000000",
  telephoneHref: "tel:+32470000000",
  whatsapp: "+32470000000",
  whatsappHref: "https://wa.me/32470000000",
  email: "contact@plombiernamururgent.be",
  streetAddress: "Rue de Balart 87",
  postalCode: "5004",
  city: "Namur",
  addressRegion: "Province de Namur",
  country: "BE",
  vatNumber: "[À COMPLÉTER - Ex: BE 0XXX.XXX.XXX]",
  bceNumber: "[À COMPLÉTER - Numéro BCE 0XXX.XXX.XXX]",
  businessHours: "24h/24 et 7j/7",
  openingHoursSpecification: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "00:00",
      closes: "23:59"
    }
  ],
  googleBusinessProfileUrl: "https://maps.app.goo.gl/ioEeCF9PYXjVDXus5",
  logoUrl: "https://www.plombiernamururgent.be/logo.png",
  mainBusinessUrl: "https://www.plombiernamururgent.be",
  certifications: [
    "Plombiers-chauffagistes qualifiés",
    "Conformité installations aux normes NBN et règlements régionaux",
    "Techniciens habilités dépannage gaz & mazout",
    "Équipements de détection acoustique et caméra thermique non destructive"
  ],
  insurance: "Assurance Responsabilité Civile Professionnelle (devis et rapports d'intervention pour assurances)",
  serviceAreas: [
    "Namur (5000)",
    "Jambes (5100)",
    "Erpent (5101)",
    "Bouge (5004)",
    "Salzinnes (5000)",
    "Saint-Servais (5002)",
    "Wépion (5100)",
    "Flawinne (5020)",
    "Belgrade (5001)",
    "Vedrin (5020)",
    "Malonne (5020)",
    "Champion (5020)"
  ],
  socialProfiles: [],
  responsiblePublisher: "[À COMPLÉTER - Gérant / Responsable de la publication]",
  hostingCompany: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA"
};
