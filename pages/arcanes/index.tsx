import Head from "next/head";
import { useState } from "react";
import {
  ArcanesWrapper,
  ListWrapper,
  LoadingComponent,
} from "../../components/arcanes/styled";
import { LowDetailsSpell } from "../../interfaces/Spell";
import Spellcard from "../../components/Spellcard";
import Searchbar from "../../components/Searchbar";
import Loading from "../../components/Loading";
import { useFetchSpells } from "../../components/hooks/useFetchSpells";
import Image from "next/image";

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
  const { isLoading, allSpells } = useFetchSpells();
  const [filteredSpells, setFilteredSpells] =
    useState<LowDetailsSpell[]>(allSpells);

  return (
    <div
      style={{
        background:
          "linear-gradient(160deg, rgba(35,57,46,1) 0%, rgba(31,31,31,1) 100%)",
      }}
    >
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
    </div>
  );
};

export default Arcanes;
