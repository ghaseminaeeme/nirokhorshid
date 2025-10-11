interface StructuredDataProps {
  type: "Organization" | "Product" | "Service" | "WebPage"
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    }

    if (type === "Organization") {
      return {
        ...baseData,
        "@type": "Organization",
        name: "SolarTech Solutions",
        url: "https://solartech.com",
        logo: "https://solartech.com/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-555-123-4567",
          contactType: "customer service",
          availableLanguage: "English",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "123 Solar Street",
          addressLocality: "Green City",
          addressRegion: "GC",
          postalCode: "12345",
          addressCountry: "US",
        },
        sameAs: [
          "https://facebook.com/solartech",
          "https://twitter.com/solartech",
          "https://linkedin.com/company/solartech",
        ],
      }
    }

    return baseData
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }} />
}
