import React, { useEffect, useState } from "react";
import {
  LoadingWrapper,
  SaveIconWrapper,
  SpellcardWrapper,
  SpellDetails,
} from "./styled";
import { GiSpellBook } from "react-icons/gi";
import { Spell } from "../../interfaces/Spell";
import Link from "next/link";
import { SingleSpell } from "../../api/apiTypes";

interface SpellCardProps {
  spell: Spell;
}

const Spellcard = ({ spell }: SpellCardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveSpell = () => {
    console.log(spell);
  };

  const setDescription = (description: string) => {
    return description.length > 200
      ? description.slice(0, 199) + " (...)"
      : description;
  };

  return (
    <>
      <SpellcardWrapper>
        {isLoading && <LoadingWrapper>LOADING...</LoadingWrapper>}

        {!isLoading && (
          <>
            <SaveIconWrapper>
              <GiSpellBook size="50px" onClick={handleSaveSpell} />
            </SaveIconWrapper>

            <Link href={`/arcanes/${spell.name}`}>
              <h2>{spell.name}</h2>
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
                    <span>Duration:</span>
                    {spell.duration}
                  </SpellDetails>
                  <SpellDetails>{setDescription(spell.desc[0])}</SpellDetails>
                </>
              )}
            </Link>
          </>
        )}
      </SpellcardWrapper>
    </>
  );
};

export default Spellcard;
