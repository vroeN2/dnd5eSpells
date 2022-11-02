import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { ArcanesWrapper, SearchBar, SearchbarWrapper } from "./styled";
import { Select } from "grommet";
import axios from "../../utils/axios";
import { Spell } from "../../interfaces/Spell";
import Link from "next/link";

interface FilterValues {
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
  console.log("spells", spells);

  const [offset, setOffset] = useState(0);
  const [filters, setFilters] = useState<FilterValues>({
    textContent: "",
    class: null,
    school: null,
    level: null,
    concentration: null,
    ritual: null,
  });

  const handleScroll = () => setOffset(window.pageYOffset);
  // window.addEventListener("scroll", handleScroll);

  const handleTextFilter = (searchValue: string) => {
    setFilters({ ...filters, textContent: searchValue });
  };

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <>
      <SearchbarWrapper>
        <div style={{ width: "90vw" }}>
          <SearchBar
            placeholder="Spell name"
            value={filters.textContent}
            onChange={(event) => handleTextFilter(event.target.value)}
          />

          <Select options={[]} />
        </div>
      </SearchbarWrapper>

      <ArcanesWrapper className={styles.container}>
        <Head>
          <title>List of Arcanes</title>
          <meta name="description" content="List of spells from DnD 5" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.grid}>
            {spells.map((spell) => {
              return (
                <Link
                  href={`/${spell.index}`}
                  className={styles.card}
                  key={spell.index}
                >
                  <h2>{spell.name}</h2>
                  <p>
                    Find in-depth information about Next.js features and API.
                  </p>
                </Link>
              );
            })}
          </div>
        </main>
      </ArcanesWrapper>
    </>
  );
};

export default Arcanes;

export const getStaticProps = async () => {
  const { data, status } = await axios.get("spells");
  return {
    props: {
      spells: data.results,
    },
  };
};
