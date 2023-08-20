import { NavigationInterface } from "@interfaces/naviagation.interface";
import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Layout.module.scss";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

export interface LayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  pageImage?: string;
  header?: NavigationInterface;
  footer?: NavigationInterface;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  title = "Minh's Profile",
  description = "Minh's Profile",
  keywords = "profile, portfolio, cv",
  pageImage = "",
  header,
  footer,
  children,
}) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }} title={title}>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:type" content="image/*" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Header headers={header?.navigationItemsCollection.items} />
      <section className={styles.mainLayout}>{children}</section>
      <Footer footers={footer?.navigationItemsCollection.items} />
    </>
  );
};

export default Layout;
