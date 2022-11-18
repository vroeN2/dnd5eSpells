import React from "react";
import { Icon } from "./styled";

const classIcons = {
  Bard: "/assets/classes/bard.png",
  Cleric: "/assets/classes/cleric.png",
  Druid: "/assets/classes/druid.png",
  Paladin: "/assets/classes/paladin.png",
  Ranger: "/assets/classes/ranger.png",
  Sorcerer: "/assets/classes/sorcerer.png",
  Warlock: "/assets/classes/warlock.png",
  Wizard: "/assets/classes/wizard.png",
};

interface ClassIconsProps {
  classes: {
    name: keyof typeof classIcons;
  }[];
}

const ClassIcons = ({ classes }: ClassIconsProps) => {
  return (
    <>
      {classes.map((singleClass) => {
        return (
          <Icon
            url={classIcons[singleClass.name]}
            key={classIcons[singleClass.name]}
          />
        );
      })}
    </>
  );
};

export default ClassIcons;
