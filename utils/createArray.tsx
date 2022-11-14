import { Spell } from "../interfaces/Spell";
import { FilterValues } from "../pages/arcanes";

export const CreateSelectList = (spells: Spell[], filters: FilterValues) => {
  return spells
    .filter((spell) =>
      spell.name
        .toLocaleLowerCase()
        .includes(filters.textContent.toLocaleLowerCase())
    )
    .filter((spell) =>
      filters.class.every((singleClass) =>
        Object.values(spell.classes)
          .map((profession: { name: string }) => {
            return profession.name;
          })
          .includes(singleClass)
      )
    )
    .filter((spell) =>
      filters.school.every((school) => spell.school.name.includes(school))
    )
    .filter((spell) => filters.level.every((level) => spell.level === level));
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
