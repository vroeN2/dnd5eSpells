import Head from "next/head";
import { useState, useEffect } from "react";
import { ArcanesWrapper, ListWrapper, LoadingComponent } from "./styled";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { LowDetailsSpell } from "../../interfaces/Spell";
import Spellcard from "../../components/Spellcard";
import Searchbar from "../../components/Searchbar";
import Loading from "../../components/Loading";

export interface FilterValues {
  textContent: string;
  class: string | null;
  school: string | null;
  level: number | null;
  concentration: boolean | null;
  ritual: boolean | null;
  isBonus: boolean | null;
}

const Arcanes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allSpells, setAllSpells] = useState<LowDetailsSpell[]>([]);
  const [filteredSpells, setFilteredSpells] =
    useState<LowDetailsSpell[]>(allSpells);

  useEffect(() => {
    setIsLoading(true);
    const fetchSpells = async () => {
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

      setAllSpells(data.spells);
      setIsLoading(false);
    };

    fetchSpells();
  }, []);

  return (
    <ArcanesWrapper>
      <Head>
        <title>List of Arcanes</title>
        <meta name="description" content="List of spells from DnD 5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ListWrapper>
        <Searchbar spells={allSpells} setFilteredSpells={setFilteredSpells} />

        {isLoading && (
          <LoadingComponent>
            <Loading />
          </LoadingComponent>
        )}

        {!isLoading &&
          filteredSpells.map((spell) => {
            return <Spellcard spell={spell} key={spell.index} />;
          })}
      </ListWrapper>
    </ArcanesWrapper>
  );
};

export default Arcanes;
