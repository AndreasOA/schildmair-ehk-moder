import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Home",
            type: "page",
            urlPath: "/{slug}",
            filePath: "content/pages/{slug}.json",
            fields: [
              { name: "title", type: "string", required: true },
              { name: "slug", type: "string", required: true },
              { name: "heroTagline", type: "string" },
              { name: "heroHeadline", type: "string" },
              { name: "heroSubheadline", type: "string" },
              { name: "heroDescription", type: "text" },
              { name: "partnerBrandsHeading", type: "string" },
              { name: "partnerBrandsSubheading", type: "string" },
              { name: "partnerBrands", type: "list", items: { type: "string" } },
              { name: "servicesHeading", type: "string" },
              { name: "servicesSubheading", type: "string" },
              { name: "jobBanner", type: "object", fields: [
                { name: "enabled", type: "boolean" },
                { name: "text", type: "string" },
                { name: "ctaLabel", type: "string" }
              ]},
              { name: "services", type: "list", items: { type: "object", fields: [
                { name: "icon", type: "string" },
                { name: "title", type: "string" },
                { name: "description", type: "text" }
              ]}},
              { name: "additionalServices", type: "list", items: { type: "object", fields: [
                { name: "icon", type: "string" },
                { name: "title", type: "string" },
                { name: "description", type: "string" }
              ]}},
              { name: "galleryHeading", type: "string" },
              { name: "gallerySubheading", type: "string" },
              { name: "gallery", type: "list", items: { type: "object", fields: [
                { name: "imageKey", type: "string" },
                { name: "title", type: "string" },
                { name: "description", type: "string" }
              ]}},
              { name: "targetGroupsHeading", type: "string" },
              { name: "targetGroupsSubheading", type: "string" },
              { name: "targetGroups", type: "list", items: { type: "object", fields: [
                { name: "icon", type: "string" },
                { name: "title", type: "string" },
                { name: "description", type: "string" }
              ]}},
              { name: "aboutIntro", type: "text" },
              { name: "aboutParagraph", type: "text" },
              { name: "aboutBullets", type: "list", items: { type: "string" } },
              { name: "promiseTitle", type: "string" },
              { name: "promiseQuote", type: "string" },
              { name: "promiseDescription", type: "string" },
              { name: "timelineHeading", type: "string" },
              { name: "timeline", type: "list", items: { type: "object", fields: [
                { name: "year", type: "string" },
                { name: "title", type: "string" },
                { name: "body", type: "text" }
              ]}},
              { name: "contactHeading", type: "string" },
              { name: "contactSubheading", type: "string" },
              { name: "contact", type: "object", fields: [
                { name: "address", type: "string" },
                { name: "phone", type: "string" },
                { name: "fax", type: "string" },
                { name: "email", type: "string" },
                { name: "openingHours", type: "list", items: { type: "object", fields: [
                  { name: "label", type: "string" },
                  { name: "value", type: "string" }
                ]}}
              ]},
              { name: "footerDescription", type: "text" },
              { name: "footerCopyright", type: "string" },
              { name: "footerQuickLinksHeading", type: "string" },
              { name: "footerLegalHeading", type: "string" }
            ]
        },
        {
          name: "Offizielles",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "slug", type: "string", required: true },
            { name: "intro", type: "string" },
            { name: "companyName", type: "string" },
            { name: "addressLines", type: "list", items: { type: "string" } },
            { name: "contacts", type: "object", fields: [
              { name: "phone", type: "string" },
              { name: "fax", type: "string" },
              { name: "email", type: "string" }
            ]},
            { name: "registry", type: "object", fields: [
              { name: "firmenbuchnummer", type: "string" },
              { name: "uid", type: "string" },
              { name: "era", type: "string" },
              { name: "ara", type: "string" },
              { name: "eori", type: "string" }
            ]},
            { name: "disclaimer", type: "object", fields: [
              { name: "contentLiability", type: "text" },
              { name: "linksLiability", type: "text" }
            ]},
            { name: "copyright", type: "text" },
            { name: "legalBasis", type: "string" },
            { name: "sections", type: "list", items: { type: "object", fields: [
              { name: "heading", type: "string" },
              { name: "body", type: "text" }
            ]}}
          ]
        },
        {
          name: "Karriere",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "slug", type: "string", required: true },
            { name: "intro", type: "string" },
            { name: "offerings", type: "list", items: { type: "string" } },
            { name: "positions", type: "list", items: { type: "object", fields: [
              { name: "title", type: "string" },
              { name: "employment", type: "string" }
            ]}},
            { name: "contactPerson", type: "object", fields: [
              { name: "name", type: "string" },
              { name: "email", type: "string" },
              { name: "phone", type: "string" }
            ]},
            { name: "closingNote", type: "string" }
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "src/assets",
        uploadDir: "uploaded",
        publicPath: "/assets"
      }
    })
  ],
  // Map 'index' slug to '/' so Visual Editor iframe shows real home URL
  siteMap: ({ documents, models }) => {
    const pageModels = models.filter(m => m.type === 'page').map(m => m.name);
    return documents
      .filter((d: any) => pageModels.includes(d.modelName))
      .map((d: any) => {
        const slug = d.fields?.slug?.value || d.slug || d.data?.slug;
        if (!slug) return null;
        const urlPath = slug === 'index' ? '/' : `/${slug}`;
        return {
          urlPath,
            document: d,
            isHomePage: slug === 'index'
        } as any; // cast to satisfy TS without importing SiteMapEntry type details
      })
      .filter(Boolean);
  }
});
