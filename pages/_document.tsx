import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-white dark:bg-black text-black dark:text-white max-w-2xl mx-auto p-8">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
