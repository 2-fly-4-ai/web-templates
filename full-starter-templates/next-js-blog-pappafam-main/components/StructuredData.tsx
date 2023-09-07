import Head from "next/head";

export default function StructuredData({ data }: StructuredDataProps) {
  // Use 'data' instead of 'structuredData' in the function body
  return (
    <Head>
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
}
