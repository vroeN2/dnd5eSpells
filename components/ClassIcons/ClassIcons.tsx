import { Tooltip } from "antd";
import React from "react";
import { Icon, IconWrapper, StyledTooltipTitle } from "./styled";

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
    <IconWrapper>
      {classes.map((singleClass) => {
        return (
          <Tooltip
            placement="bottom"
            color={"#fff"}
            title={<StyledTooltipTitle>{singleClass.name}</StyledTooltipTitle>}
            key={singleClass.name}
          >
            <Icon
              url={classIcons[singleClass.name]}
              key={classIcons[singleClass.name]}
            />
          </Tooltip>
        );
      })}
    </IconWrapper>
  );
};

export default ClassIcons;
