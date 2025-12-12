import Head from "next/head";
import MyAppBar from "@/components/common/MyAppBar";

export default function Blog() {
  const movies = [
    {
      name: "Avengers",
      img: "https://tse4.mm.bing.net/th/id/OIP.fb0xCNA1cNphjkoYkr8AdgHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Directed by Joss Whedon",
    },
    {
      name: "Terminator",
      img: "https://tse2.mm.bing.net/th/id/OIP.giktN2PT0t2BcbsAIIebpQHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Directed by James Cameroon",
    },
  ];
  return (
    <>
      <Head>
        <title>Blog | The Movie Lovers Club</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyAppBar />
      <div>Blog</div>
    </>
  );
}
