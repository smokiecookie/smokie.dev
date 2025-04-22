export const SITE = {
  website: "https://smokie-dev.vercel.app/", // replace this with your deployed domain
  author: "Smokie",
  profile: "https://github.com/smokiecookie",
  desc: "Baked by Smokie - My Personal Blog",
  title: "BakedBySmokie",
  ogImage: "default-og.png",
  lightAndDarkMode: true,
  postPerIndex: 3,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/smokiecookie/smokie.dev/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Dhaka", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
