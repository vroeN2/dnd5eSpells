import React from "react";
import Head from "next/head";
import { BackgroundWrapper } from "../../components/spellbook/styled";

type Props = {};

const Spellbook = (props: Props) => {
  return (
    <BackgroundWrapper>
      <Head>
        <title>Saved spells</title>
        <meta name="description" content="List of spells in your spellbook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>TEST</p>
    </BackgroundWrapper>
  );
};

export default Spellbook;
