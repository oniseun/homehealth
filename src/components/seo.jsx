import Head from "next/head";

const SEO = ({
  pageTitle,
  description = "HomeHealth provides top-notch healthcare diagnostics, clinical research, and laboratory services tailored for modern healthcare needs.",
  keywords = "",
  ogTitle = "",
  ogDescription = "",
  ogUrl = "",
}) => {
  const defaultKeywords = "healthcare, diagnostics, laboratory, research, clinical research, HomeHealth";
  const siteName = "homehealth.com";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#28a745" /> {/* Default green theme color */}
        <link rel="icon" href="/favicon.jpg" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />

        <title>
          {pageTitle
            ? `${pageTitle} - HomeHealth`
            : "HomeHealth - Leading Healthcare and Diagnostics Solutions"}
        </title>
        
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={`${keywords}, ${defaultKeywords}`} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={ogTitle || `${pageTitle} - HomeHealth`} />
        <meta property="og:description" content={ogDescription || description} />
        <meta property="og:url" content={`${siteName}${ogUrl || "/"}`} />
        <meta property="og:site_name" content="HomeHealth" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
      </Head>
    </>
  );
};

export default SEO;