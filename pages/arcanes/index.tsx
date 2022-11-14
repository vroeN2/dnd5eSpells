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
  ResetFiltersButton,
} from "./styled";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Spell } from "../../interfaces/Spell";
import Spellcard from "../../components/Spellcard";
import {
  // CreateListOfUniqueValues,
  CreateOptionsObject,
  CreateSelectList,
} from "../../utils/createArray";

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
  const filtersInitialValues = {
    textContent: "",
    class: null,
    school: null,
    level: null,
    concentration: null,
    ritual: null,
  };
  const [filteredSpells, setFilteredSpells] = useState(spells);
  const [filters, setFilters] = useState<FilterValues>(filtersInitialValues);

  const classes = Array.from(
    new Set(
      spells
        .map((singleSpell) =>
          singleSpell.classes
            .map((singleSpellClass) => singleSpellClass.name)
            .flat()
        )
        .flat()
    )
  );
  const schools = Array.from(
    new Set(spells.map((singleSpell) => singleSpell.school.name).flat())
  );
  const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const classOptions = CreateOptionsObject(classes);
  const schoolOptions = CreateOptionsObject(schools);
  const levelOptions = levels.map((level) => {
    return {
      label: level,
      value: level,
    };
  });

  const handleTextFilter = (searchValue: string) => {
    setFilters({ ...filters, textContent: searchValue });
  };

  const handleClassFilter = (selectedClasses: string) => {
    setFilters({ ...filters, class: selectedClasses });
  };

  const handleSchoolFilter = (selectedSchools: string) => {
    setFilters({ ...filters, school: selectedSchools });
  };

  const handleLevelFilter = (selectedLevels: number) => {
    setFilters({ ...filters, level: selectedLevels });
  };

  const handleConcentrationFilter = (isConcentration: boolean) => {
    setFilters({ ...filters, concentration: isConcentration });
  };

  const handleRitualFilter = (isRitual: boolean) => {
    setFilters({ ...filters, ritual: isRitual });
  };

  useEffect(() => {
    setFilteredSpells(CreateSelectList(spells, filters));
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
            allowClear
            size="large"
            options={classOptions}
            onChange={(selectedClass) =>
              handleClassFilter(
                typeof selectedClass === undefined ? "" : selectedClass
              )
            }
          />

          <FilterSelect
            placeholder="School of magic"
            allowClear
            size="large"
            options={schoolOptions}
            onChange={(selectedSchool) =>
              handleSchoolFilter(
                typeof selectedSchool === undefined ? "" : selectedSchool
              )
            }
          />

          <FilterSelect
            placeholder="Spell level"
            allowClear
            size="large"
            options={levelOptions}
            onChange={(selectedLevel) =>
              handleLevelFilter(
                typeof selectedLevel === "number" ? selectedLevel : null
              )
            }
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

          <ResetFiltersButton
            type="link"
            size="large"
            onClick={() => setFilters(filtersInitialValues)}
            // onClick={(e) => console.log(e)}
          >
            Reset filters
          </ResetFiltersButton>
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
