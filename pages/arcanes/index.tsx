import Head from "next/head";
import { useEffect, useState } from "react";
import { ArcanesWrapper, ListWrapper } from "./styled";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Spell } from "../../interfaces/Spell";
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
  spells: Spell[];
}

const Arcanes = ({ spells }: ArcanesProps) => {
  const [filteredSpells, setFilteredSpells] = useState(spells);

  return (
    <ArcanesWrapper>
      <Searchbar spells={spells} setFilteredSpells={setFilteredSpells} />

      <ListWrapper>
        <Head>
          <title>List of Arcanes</title>
          <meta name="description" content="List of spells from DnD 5" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

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
          area_of_effect {
            size
            type
          }
          attack_type
          casting_time
          classes {
            name
          }
          components
          concentration
          damage {
            damage_at_character_level {
              damage
              level
            }
            damage_at_slot_level {
              damage
              level
            }
            damage_type {
              name
            }
          }
          dc {
            type {
              name
            }
            success
          }
          desc
          duration
          heal_at_slot_level {
            healing
            level
          }
          higher_level
          level
          material
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
