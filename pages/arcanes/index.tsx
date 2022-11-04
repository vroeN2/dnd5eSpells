import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import {
  ArcanesWrapper,
  ListWrapper,
  SearchBar,
  SearchbarWrapper,
} from "./styled";
import { Select } from "grommet";
import axios from "../../utils/axios";
import { Spell } from "../../interfaces/Spell";
import Spellcard from "../../components/Spellcard";

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

  const [filters, setFilters] = useState<FilterValues>({
    textContent: "",
    class: null,
    school: null,
    level: null,
    concentration: null,
    ritual: null,
  });

  const [scrollY, setScrollY] = useState(0);
  const [navbarBackgroundColor, setNavbarBackgroundColor] =
    useState("transparent");

  const changeScrollY = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", changeScrollY);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", changeScrollY);
    };
  });

  const handleTextFilter = (searchValue: string) => {
    setFilters({ ...filters, textContent: searchValue });
  };

  useEffect(() => {
    setNavbarBackgroundColor(scrollY > 0 ? "#ffffff" : "transparent");
  }, [scrollY]);

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <ArcanesWrapper>
      <SearchbarWrapper color={navbarBackgroundColor}>
        <div style={{ width: "90vw" }}>
          <SearchBar
            placeholder="Spell name"
            value={filters.textContent}
            onChange={(event) => handleTextFilter(event.target.value)}
          />

          <Select options={[]} />
        </div>
      </SearchbarWrapper>

      <ListWrapper>
        <Head>
          <title>List of Arcanes</title>
          <meta name="description" content="List of spells from DnD 5" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {spells.map((spell) => {
          return <Spellcard spell={spell} key={spell.index} />;
        })}
      </ListWrapper>
    </ArcanesWrapper>
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
