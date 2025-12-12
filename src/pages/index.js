import Head from "next/head";
import { useState } from "react";
import MyAppBar from "@/components/common/MyAppBar";

//MUI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Home() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Head>
        <title>The Movie Lovers Club</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyAppBar />

      <Button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Toggle
      </Button>

      <Box height="200px" />
      {visible && (
        <Box height="200px" sx={{ background: "pink", width: "500px" }} />
      )}
    </>
  );
}
