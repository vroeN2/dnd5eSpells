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
  CheckboxLabel,
  SelectOption,
} from "./styled";
import axios from "../../utils/axios";
import { Spell } from "../../interfaces/Spell";
import Spellcard from "../../components/Spellcard";
import { FormControlLabel } from "@mui/material";

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

  const handleTextFilter = (searchValue: string) => {
    setFilters({ ...filters, textContent: searchValue });
  };

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <ArcanesWrapper>
      <SearchbarWrapper>
        <SearchbarContent>
          <SearchBar
            placeholder="Spell name"
            value={filters.textContent}
            onChange={(event) => handleTextFilter(event.target.value)}
          />

          <FilterSelect label="Class">
            <SelectOption value={1}>TEST</SelectOption>
          </FilterSelect>

          <FilterSelect label="School of magic">
            <SelectOption value={1}>TEST</SelectOption>
          </FilterSelect>

          <FilterSelect label="Spell level">
            <SelectOption value={1}>TEST</SelectOption>
          </FilterSelect>

          <FormControlLabel
            control={
              <FilterCheckbox
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 28 },
                  "&.Mui-checked": {
                    color: "#23392E",
                  },
                }}
                defaultChecked
              />
            }
            label={
              <CheckboxLabel style={{ color: "#1f1f1f" }}>
                Concentration
              </CheckboxLabel>
            }
          />

          <FormControlLabel
            control={
              <FilterCheckbox
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 28 },
                  "&.Mui-checked": {
                    color: "#23392E",
                  },
                }}
                defaultChecked
              />
            }
            label={
              <CheckboxLabel style={{ color: "#1f1f1f" }}>Ritual</CheckboxLabel>
            }
          />
        </SearchbarContent>
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
