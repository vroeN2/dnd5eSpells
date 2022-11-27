import React from "react";
import {
  SaveIconWrapper,
  SpellcardWrapper,
  SpellDetails,
  SpellName,
} from "./styled";
import { GiSpellBook } from "react-icons/gi";
import { LowDetailsSpell } from "../../interfaces/Spell";
import Link from "next/link";
import { Tooltip } from "antd";

interface SpellCardProps {
  spell: LowDetailsSpell;
}

const Spellcard = ({ spell }: SpellCardProps) => {
  const {
    name,
    level,
    casting_time,
    range,
    components,
    duration,
    desc,
    school,
  } = spell;
  const handleSaveSpell = () => {
    console.log("saved!", spell);
  };

  const setTitle = (title: string) => {
    return title.length > 17 ? title.slice(0, 16) + "..." : title;
  };

  const setDescription = (description: string) => {
    return description.length > 125
      ? description.slice(0, 124) + " (...)"
      : description;
  };

  return (
    <SpellcardWrapper>
      <SaveIconWrapper>
        <GiSpellBook size="50px" onClick={handleSaveSpell} />
      </SaveIconWrapper>

      <Link href={`/arcanes/${name.replace(/[\W_]+/g, " ")}`}>
        <Tooltip placement="topLeft" title={name}>
          <SpellName>{setTitle(name)}</SpellName>
        </Tooltip>
        <SpellDetails style={{ marginBottom: "1.5rem" }}>
          {school.name.toLocaleLowerCase()}, level {level}
        </SpellDetails>
        {spell && (
          <>
            <SpellDetails>
              <span>Casting time:</span>
              {casting_time}
            </SpellDetails>

            <SpellDetails>
              <span>Range:</span>
              {range}
            </SpellDetails>

            <SpellDetails>
              <span>Components:</span>
              {components.map((component) => component + " ")}
            </SpellDetails>

            <SpellDetails>
              <span>Duration:</span>
              {duration}
            </SpellDetails>
            <SpellDetails>{setDescription(desc[0])}</SpellDetails>
          </>
        )}
      </Link>
    </SpellcardWrapper>
  );
};

export default Spellcard;
