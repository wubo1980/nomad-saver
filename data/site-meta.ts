export type SiteMeta = {
  siteName: string;
  siteUrl: string;
  siteDescription: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultKeywords: string[];
  locale: string;
  gaMeasurementId?: string;
};

export const siteMeta: SiteMeta = {
  siteName: "Nomad Saver",
  siteUrl: "https://nomad-saver.vercel.app",
  siteDescription:
    "Data-backed guides for budget travelers and digital nomads who want to spend less, travel longer, and keep work sustainable on the road.",
  defaultTitle: "Nomad Saver",
  titleTemplate: "%s | Nomad Saver",
  defaultKeywords: [
    "budget travel",
    "digital nomad",
    "cheap flights",
    "remote work travel",
    "budget accommodation",
    "travel insurance",
    "digital nomad visa",
    "carry on packing list",
  ],
  locale: "en_US",
  gaMeasurementId: undefined,
};
