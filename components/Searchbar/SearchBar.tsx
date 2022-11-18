import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { FilterValues } from "../../pages/arcanes";
import {
  SearchBarInput,
  SearchbarContent,
  SearchbarWrapper,
  FilterSelect,
  FilterCheckbox,
  ResetFiltersButton,
} from "./styled";
import { CreateOptionsObject, CreateSelectList } from "../../utils/createArray";
import { LowDetailsSpell, Spell } from "../../interfaces/Spell";

interface SearchbarInterface {
  spells: LowDetailsSpell[];
  setFilteredSpells: Dispatch<SetStateAction<LowDetailsSpell[]>>;
}

const SearchBar = ({ spells, setFilteredSpells }: SearchbarInterface) => {
  const filtersInitialValues = {
    textContent: "",
    class: null,
    school: null,
    level: null,
    concentration: null,
    ritual: null,
  };
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

  const handleLevelFilter = (selectedLevels: number | null) => {
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
  }, [filters, setFilteredSpells, spells]);
  return (
    <SearchbarWrapper>
      <SearchbarContent>
        <SearchBarInput
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
          value={filters.class}
          onChange={(selectedClass) =>
            handleClassFilter(
              typeof selectedClass !== "string" ? "" : selectedClass
            )
          }
        />

        <FilterSelect
          placeholder="School of magic"
          allowClear
          size="large"
          options={schoolOptions}
          value={filters.school}
          onChange={(selectedSchool) =>
            handleSchoolFilter(
              typeof selectedSchool !== "string" ? "" : selectedSchool
            )
          }
        />

        <FilterSelect
          placeholder="Spell level"
          allowClear
          size="large"
          options={levelOptions}
          value={filters.level}
          onChange={(selectedLevel) =>
            handleLevelFilter(
              typeof selectedLevel !== "number" ? null : selectedLevel
            )
          }
        />

        <FilterCheckbox
          checked={filters.concentration ?? false}
          onChange={(e) => handleConcentrationFilter(e.target.checked)}
        >
          Concentration
        </FilterCheckbox>

        <FilterCheckbox
          checked={filters.ritual ?? false}
          onChange={(e) => handleRitualFilter(e.target.checked)}
        >
          Ritual
        </FilterCheckbox>

        <ResetFiltersButton
          type="link"
          size="large"
          onClick={() => setFilters(filtersInitialValues)}
        >
          Reset filters
        </ResetFiltersButton>
      </SearchbarContent>
    </SearchbarWrapper>
  );
};

export default SearchBar;
