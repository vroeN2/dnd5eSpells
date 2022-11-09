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
import axios from "../../utils/axios";
import { SingleSpell } from "../../api/apiTypes";

interface SpellCardProps {
  spell: Spell;
}

const Spellcard = ({ spell }: SpellCardProps) => {
  const { index, name, url } = spell;

  const [isLoading, setIsLoading] = useState(false);
  const [spellDetails, setSpellDetails] = useState<SingleSpell>();

  const handleSaveSpell = () => {
    console.log(index);
  };

  const setDescription = (description: string) => {
    return description.length > 200
      ? description.slice(0, 199) + " (...)"
      : description;
  };

  const fetchSpellDetails = async () => {
    try {
      const res = await axios.get(url);
      setSpellDetails(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchSpellDetails();
    setIsLoading(false);
  }, [fetchSpellDetails]);

  return (
    <>
      <SpellcardWrapper>
        {isLoading && <LoadingWrapper>LOADING...</LoadingWrapper>}

        {!isLoading && (
          <>
            <SaveIconWrapper>
              <GiSpellBook size="50px" onClick={handleSaveSpell} />
            </SaveIconWrapper>

            <Link href={`/arcanes/${name}`}>
              <h2>{name}</h2>
              {spellDetails && (
                <>
                  <SpellDetails>
                    <span>Casting time:</span>
                    {spellDetails.casting_time}
                  </SpellDetails>
                  <SpellDetails>
                    <span>Range:</span>
                    {spellDetails.range}
                  </SpellDetails>
                  <SpellDetails>
                    <span>Duration:</span>
                    {spellDetails.duration}
                  </SpellDetails>
                  <SpellDetails>
                    {setDescription(spellDetails.desc[0])}
                  </SpellDetails>
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
