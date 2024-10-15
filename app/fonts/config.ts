import localFont from "next/font/local";

export const gilroyBold = localFont({
  display: "swap",
  fallback: ["system-ui", "arial"],
  variable: "--font-gilroy-bold",
  src: [
    {
      path: "./Gilroy-Bold.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

export const gilroyHeavy = localFont({
  display: "swap",
  fallback: ["system-ui", "arial"],
  variable: "--font-gilroy-heavy",
  src: [
    {
      path: "./Gilroy-Heavy.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

export const gilroyLight = localFont({
  display: "swap",
  fallback: ["system-ui", "arial"],
  variable: "--font-gilroy-light",
  src: [
    {
      path: "./Gilroy-Light.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

export const gilroyRegular = localFont({
  display: "swap",
  fallback: ["system-ui", "arial"],
  variable: "--font-gilroy-regular",
  src: [
    {
      path: "./Gilroy-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

export const gilroyMedium = localFont({
  display: "swap",
  fallback: ["system-ui", "arial"],
  variable: "--font-gilroy-medium",
  src: [
    {
      path: "./Gilroy-Medium.woff",
      weight: "400",
      style: "normal",
    },
  ],
});
