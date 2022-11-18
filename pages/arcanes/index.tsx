import Head from "next/head";
import { useState } from "react";
import { ArcanesWrapper, ListWrapper } from "./styled";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { LowDetailsSpell } from "../../interfaces/Spell";
import Spellcard from "../../components/Spellcard";
import Searchbar from "../../components/Searchbar";

export interface FilterValues {
  textContent: string;
  class: string | null;
  school: string | null;
  level: number | null;
  concentration: boolean | null;
  ritual: boolean | null;
}

export interface ArcanesProps {
  spells: LowDetailsSpell[];
}

const Arcanes = ({ spells }: ArcanesProps) => {
  const [filteredSpells, setFilteredSpells] = useState(spells);

  return (
    <ArcanesWrapper>
      <Head>
        <title>List of Arcanes</title>
        <meta name="description" content="List of spells from DnD 5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ListWrapper>
        <Searchbar spells={spells} setFilteredSpells={setFilteredSpells} />

        {filteredSpells.map((spell) => {
          return <Spellcard spell={spell} key={spell.index} />;
        })}
      </ListWrapper>
    </ArcanesWrapper>
  );
};

export default Arcanes;

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: "https://www.dnd5eapi.co/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query Spells {
        spells(limit: 350) {
          index
          casting_time
          classes {
            name
          }
          components
          concentration
          desc
          duration
          level
          name
          range
          ritual
          school {
            name
            index
          }
        }
      }
    `,
  });

  return {
    props: {
      spells: data.spells,
    },
  };
};
