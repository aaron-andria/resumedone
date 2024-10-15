import type { Metadata } from "next";
import layoutCssModule from "./components/ui/Core/Layout/layout.module.css";
import {
  gilroyBold,
  gilroyHeavy,
  gilroyMedium,
  gilroyRegular,
} from "./fonts/config";
import "./globals.css";
import classNames from "classnames";
import SideBar from "./components/ui/Core/Layout/SideBar/SideBar";
import Footer from "./components/ui/Core/Layout/Footer";
export const metadata: Metadata = {
  title: "Resume Done",
  description: "Css test by Jacky",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={classNames(
          gilroyBold.variable,
          gilroyHeavy.variable,
          gilroyMedium.variable,
          gilroyRegular.variable,
        )}
      >
        <main className={layoutCssModule.main}>
          <SideBar />
          <div className='container layout'>
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
