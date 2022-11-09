import Head from "next/head";
import { useEffect, useState } from "react";
import {
  ArcanesWrapper,
  ListWrapper,
  SearchBar,
  SearchbarContent,
  SearchbarWrapper,
  FilterSelect,
  FilterCheckbox,
} from "./styled";
import axios from "../../utils/axios";
import { Spell } from "../../interfaces/Spell";
import Spellcard from "../../components/Spellcard";

interface FilterValues {
  textContent: string;
  class: string[] | null;
  school: string[] | null;
  level: number[] | null;
  concentration: boolean | null;
  ritual: boolean | null;
}

export interface ArcanesProps {
  spells: Spell[];
}

const Arcanes = ({ spells }: ArcanesProps) => {
  const [filteredSpells, setFilteredSpells] = useState(spells);
  const [filters, setFilters] = useState<FilterValues>({
    textContent: "",
    class: null,
    school: null,
    level: null,
    concentration: null,
    ritual: null,
  });

  const options = [
    { label: "test_label", value: "test_value" },
    { label: "test2_label", value: "test2_value" },
  ];

  const handleTextFilter = (searchValue: string) => {
    setFilters({ ...filters, textContent: searchValue });
  };

  const handleClassFilter = (selectedClasses: string[]) => {
    setFilters({ ...filters, class: selectedClasses });
  };

  const handleSchoolFilter = (selectedSchools: string[]) => {
    setFilters({ ...filters, school: selectedSchools });
  };

  const handleLevelFilter = (selectedLevels: number[]) => {
    setFilters({ ...filters, level: selectedLevels });
  };

  const handleConcentrationFilter = (isConcentration: boolean) => {
    setFilters({ ...filters, concentration: isConcentration });
  };

  const handleRitualFilter = (isRitual: boolean) => {
    setFilters({ ...filters, ritual: isRitual });
  };

  useEffect(() => {
    console.log(filters);
    setFilteredSpells(
      spells.filter((spell) =>
        spell.name
          .toLocaleLowerCase()
          .includes(filters.textContent.toLocaleLowerCase())
      )
    );
  }, [filters, spells]);

  return (
    <ArcanesWrapper>
      <SearchbarWrapper>
        <SearchbarContent>
          <SearchBar
            placeholder="Spell name"
            value={filters.textContent}
            size="large"
            onChange={(event) => handleTextFilter(event.target.value)}
          />

          <FilterSelect
            placeholder="Class"
            mode="multiple"
            allowClear
            size="large"
            options={options}
          />

          <FilterSelect
            placeholder="School of magic"
            mode="multiple"
            allowClear
            size="large"
            options={options}
          />

          <FilterSelect
            placeholder="Spell level"
            mode="multiple"
            allowClear
            size="large"
            options={options}
          />

          <FilterCheckbox
            onChange={(e) => handleConcentrationFilter(e.target.checked)}
          >
            Concentration
          </FilterCheckbox>

          <FilterCheckbox
            onChange={(e) => handleRitualFilter(e.target.checked)}
          >
            Ritual
          </FilterCheckbox>
        </SearchbarContent>
      </SearchbarWrapper>

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
  const { data, status } = await axios.get("/api/spells");
  return {
    props: {
      spells: data.results,
    },
  };
};
