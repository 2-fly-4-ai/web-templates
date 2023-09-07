import "../globals.css";
import Header from "../../components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Banner /> */}
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        {" "}
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </head>
      <body className="">
        <Header />
        <div className="max-w-7xl mx-auto md:px-10">{children}</div>
        {/* @ts-expect-error Server Component */}
        <Footer />
      </body>
    </html>
  );
}
