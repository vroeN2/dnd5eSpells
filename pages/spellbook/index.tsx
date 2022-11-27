import React from "react";
import Head from "next/head";
import {
  BackgroundWrapper,
  MainSpellbookWrapper,
} from "../../components/spellbook/styled";

const Spellbook = () => {
  return (
    <BackgroundWrapper>
      <Head>
        <title>Saved spells</title>
        <meta name="description" content="List of spells in your spellbook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainSpellbookWrapper>
        <h2
          style={{
            color: "white",
            fontSize: "6rem",
            textShadow: "0px 0px 2px #1d1d1d",
          }}
        >
          WORK IN PROGRESS
        </h2>
        <h4
          style={{
            color: "white",
            fontSize: "4rem",
            textShadow: "0px 0px 2px #1d1d1d",
          }}
        >
          Spellbook feature will be added soon!
        </h4>
      </MainSpellbookWrapper>
    </BackgroundWrapper>
  );
};

export default Spellbook;
