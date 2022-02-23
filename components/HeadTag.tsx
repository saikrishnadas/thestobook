import Head from "next/head";

const HeadTag = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="The Stobook is an open library where you can read any book for free. It features a customizable auto function that suggests depending on user preferences."
      />
      <link rel="icon" type="image/x-icon" href="/book.ico" />
    </Head>
  );
};

export default HeadTag;
