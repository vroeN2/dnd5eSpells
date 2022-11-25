import { LowDetailsSpell, Spell } from "../interfaces/Spell";
import { FilterValues } from "../pages/arcanes";

export const CreateSelectList = (
  spells: Spell[] | LowDetailsSpell[],
  filters: FilterValues
) => {
  return spells
    .filter((spell) =>
      spell.name
        .toLocaleLowerCase()
        .includes(filters.textContent.toLocaleLowerCase())
    )
    .filter((spell) =>
      typeof filters.class === "string"
        ? Object.values(spell.classes)
            .map(
              (profession: {
                name:
                  | "Bard"
                  | "Cleric"
                  | "Druid"
                  | "Paladin"
                  | "Ranger"
                  | "Sorcerer"
                  | "Warlock"
                  | "Wizard";
              }) => {
                return profession.name.toLocaleLowerCase();
              }
            )
            .includes(filters.class.toLocaleLowerCase())
        : spell
    )
    .filter((spell) =>
      filters.school === null
        ? spell
        : spell.school.name
            .toLocaleLowerCase()
            .includes(filters.school.toLocaleLowerCase())
    )
    .filter((spell) =>
      filters.level === null ? spell : spell.level === filters.level
    )
    .filter((spell) =>
      filters.concentration
        ? spell.concentration === filters.concentration
        : spell
    )
    .filter((spell) =>
      filters.ritual ? spell.ritual === filters.ritual : spell
    )
    .filter((spell) =>
      filters.isBonus ? spell.casting_time.includes("bonus") : spell
    );
};

export const CreateOptionsObject = (listOfElements: string[]) => {
  return listOfElements.reduce(
    (previousValue: { label: string; value: string }[], currentValue) => {
      return [
        ...previousValue,
        {
          label: currentValue,
          value: currentValue,
        },
      ];
    },
    []
  );
};
