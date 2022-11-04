import React from "react";
import { SaveIconWrapper, SpellcardWrapper } from "./styled";
import { GiSpellBook } from "react-icons/gi";
import { Spell } from "../../interfaces/Spell";
import Link from "next/link";

interface SpellCardProps {
  spell: Spell;
}

const Spellcard = ({ spell }: SpellCardProps) => {
  const { index, name, url } = spell;
  const handleSaveSpell = () => {
    console.log(index);
  };

  return (
    <SpellcardWrapper>
      <SaveIconWrapper>
        <GiSpellBook size="50px" onClick={handleSaveSpell} />
      </SaveIconWrapper>

      <Link href={`/arcanes/${name}`}>
        <h2>{name}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </Link>
    </SpellcardWrapper>
  );
};

export default Spellcard;
