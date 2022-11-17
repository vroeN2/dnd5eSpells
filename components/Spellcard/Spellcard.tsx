import React from "react";
import {
  SaveIconWrapper,
  SpellcardWrapper,
  SpellDetails,
  SpellName,
} from "./styled";
import { GiSpellBook } from "react-icons/gi";
import { Spell } from "../../interfaces/Spell";
import Link from "next/link";

interface SpellCardProps {
  spell: Spell;
}

const Spellcard = ({ spell }: SpellCardProps) => {
  const handleSaveSpell = () => {
    console.log("saved!", spell);
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

      <Link href={`/arcanes/${spell.name}`}>
        <SpellName>{spell.name}</SpellName>
        <SpellDetails style={{ marginBottom: "1.5rem" }}>
          {spell.school.name.toLocaleLowerCase()}, level {spell.level}
        </SpellDetails>
        {spell && (
          <>
            <SpellDetails>
              <span>Casting time:</span>
              {spell.casting_time}
            </SpellDetails>

            <SpellDetails>
              <span>Range:</span>
              {spell.range}
            </SpellDetails>

            <SpellDetails>
              <span>Components:</span>
              {spell.components.map((component) => component + " ")}
            </SpellDetails>

            <SpellDetails>
              <span>Duration:</span>
              {spell.duration}
            </SpellDetails>
            <SpellDetails>{setDescription(spell.desc[0])}</SpellDetails>
          </>
        )}
      </Link>
    </SpellcardWrapper>
  );
};

export default Spellcard;
