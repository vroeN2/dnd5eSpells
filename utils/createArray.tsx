import { Spell } from "../interfaces/Spell";
import { FilterValues } from "../pages/arcanes";

export const CreateSelectList = (spells: Spell[], filters: FilterValues) => {
  console.log({
    // spells: spells,
    // filters: filters,
    typeof: typeof filters.class,
    to:
      typeof filters.class === "string"
        ? Object.values(spells[0].classes)
            .map((profession: { name: string }) =>
              profession.name.toLocaleLowerCase()
            )
            .includes(filters.class.toLocaleLowerCase())
        : "NIE",
  });
  return spells
    .filter((spell) =>
      spell.name
        .toLocaleLowerCase()
        .includes(filters.textContent.toLocaleLowerCase())
    )
    .filter((spell) =>
      typeof filters.class === "string"
        ? Object.values(spell.classes)
            .map((profession: { name: string }) => {
              return profession.name.toLocaleLowerCase();
            })
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
