import { useRouter } from "next/router";
import React from "react";
import Loading from "../../components/Loading";
import { DamageType, Spell } from "../../interfaces/Spell";
import {
  ColumnWithTitle,
  ContentWrapper,
  DetailsColumn,
  DetailsColumnsWrapper,
  MagicSchoolSymbol,
  SingleSpellCardWrapper,
  SpellDetailsWrapper,
  TitleWrapper,
} from "./styled";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import ClassIcons from "../../components/ClassIcons";
import HealingDetailsDisplay from "../../components/HealingDetailsDisplay";
import { imperialToMetric } from "../../utils/convertImperialToMetric";
import DamageDetailsDisplay, {
  TooltipInterface,
} from "../../components/DamageDetailsDisplay/DamageDetailsDisplay";
import Head from "next/head";
import { Image } from "antd";

type SingleSpellProps = {
  spell: Spell;
};

const SingleSpell = ({ spell }: SingleSpellProps) => {
  const {
    name,
    school,
    level,
    concentration,
    ritual,
    classes,
    casting_time,
    range,
    components,
    duration,
    material,
    damage,
    attack_type,
    area_of_effect,
    desc,
    higher_level,
    heal_at_slot_level,
    dc,
  } = spell;

  const { isFallback } = useRouter();
  if (isFallback) {
    return <Loading />;
  }

  const SaveRolls = {
    STR: "strength",
    DEX: "dexterity",
    CON: "constitution",
    INT: "intelligence",
    WIS: "wisdom",
    CHA: "charisma",
  };

  const checkDamageDetails = (damage: DamageType): string => {
    if (damage) {
      const { damage_at_character_level, damage_at_slot_level } = damage;
      return damage_at_character_level
        ? damage_at_character_level[0].damage
        : damage_at_slot_level
        ? damage_at_slot_level[0].damage
        : "-";
    } else {
      return "-";
    }
  };

  const checkDamageTooltipType = (damage: DamageType): TooltipInterface => {
    if (damage) {
      const { damage_at_character_level, damage_at_slot_level } = damage;
      return {
        content: damage_at_character_level ?? damage_at_slot_level,
        title: damage_at_character_level
          ? "Damage at character level:"
          : "Damage at spell level:",
      };
    } else {
      return {
        content: null,
        title: "",
      };
    }
  };

  return (
    <SpellDetailsWrapper>
      <Head>
        <title>{name}</title>
        <meta name="description" content={`Detailed info about ${name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SingleSpellCardWrapper>
        <MagicSchoolSymbol
          url={`/assets/schools/${school.name.toLocaleLowerCase()}.png`}
        >
          <Image
            preview={false}
            src={`/assets/schools/${school.name.toLocaleLowerCase()}.png`}
            width="80%"
            alt={`${school.name}`}
          />
        </MagicSchoolSymbol>

        <ContentWrapper>
          <TitleWrapper>
            {name}

            <span>
              {school.name.toLocaleLowerCase()}, level {level}
            </span>
          </TitleWrapper>

          <DetailsColumnsWrapper style={{ marginTop: "2rem" }}>
            <DetailsColumn>
              <DamageDetailsDisplay
                title="Casting time:"
                details={casting_time}
              />

              <DamageDetailsDisplay title="Range:" details={range} />

              <DamageDetailsDisplay
                title="Components:"
                details={components.join(" ")}
              />

              <DamageDetailsDisplay title="Duration:" details={duration} />

              <DamageDetailsDisplay
                title="Material:"
                details={material ?? "-"}
              />

              <DamageDetailsDisplay
                title="Attack type:"
                details={attack_type ? attack_type.toLocaleLowerCase() : "-"}
              />

              <DamageDetailsDisplay
                title="Area of effect:"
                details={
                  area_of_effect
                    ? `${area_of_effect.type.toLocaleLowerCase()}, ${
                        area_of_effect.size
                      } feet (${imperialToMetric(area_of_effect.size)}m)`
                    : "-"
                }
              />

              {damage && (
                <>
                  <DamageDetailsDisplay
                    title="Damage type:"
                    details={damage !== null ? damage.damage_type.name : "-"}
                  />

                  <DamageDetailsDisplay
                    title="Damage:"
                    details={checkDamageDetails(damage)}
                    tooltip={checkDamageTooltipType(damage)}
                  />
                </>
              )}

              {heal_at_slot_level && (
                <HealingDetailsDisplay
                  title="Healing:"
                  details={heal_at_slot_level[0].healing ?? "-"}
                  tooltip={{
                    content: heal_at_slot_level,
                    title: "Healing at spell level:",
                  }}
                />
              )}

              {dc && (
                <DamageDetailsDisplay
                  title="DC:"
                  details={`${SaveRolls[dc.type.name]}`}
                />
              )}
            </DetailsColumn>

            <ColumnWithTitle style={{ alignItems: "flex-end" }}>
              <span
                style={{
                  color: concentration ? "#528173" : "#EF767A",
                  width: "12rem",
                }}
              >
                {concentration ? "✔️" : "❌"} Concentration
              </span>

              <span style={{ color: ritual ? "#528173" : "#EF767A" }}>
                {ritual ? "✔️" : "❌"} Ritual
              </span>
            </ColumnWithTitle>
          </DetailsColumnsWrapper>

          <ColumnWithTitle style={{ marginTop: "2rem" }}>
            {desc}
          </ColumnWithTitle>

          <ColumnWithTitle style={{ marginTop: "2rem" }}>
            <span>Higher level</span>
            {higher_level ?? "No effect"}
          </ColumnWithTitle>

          <ClassIcons classes={classes} />
        </ContentWrapper>
      </SingleSpellCardWrapper>
    </SpellDetailsWrapper>
  );
};

export default SingleSpell;

export const getStaticPaths = async () => {
  const client = new ApolloClient({
    uri: "https://www.dnd5eapi.co/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query Spells {
        spells(limit: 350) {
          name
        }
      }
    `,
  });

  const { spells } = data;
  const paths = spells.map(({ name }: { name: string }) => ({
    params: { name: name.replace(/[\W_]+/g, " ") },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { name: string };
}) => {
  const client = new ApolloClient({
    uri: "https://www.dnd5eapi.co/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query Spells {
        spells(limit: 350) {
          index
          area_of_effect {
            size
            type
          }
          attack_type
          casting_time
          classes {
            name
          }
          components
          concentration
          damage {
            damage_at_character_level {
              damage
              level
            }
            damage_at_slot_level {
              damage
              level
            }
            damage_type {
              name
            }
          }
          dc {
            type {
              name
            }
            success
          }
          desc
          duration
          heal_at_slot_level {
            healing
            level
          }
          higher_level
          level
          material
          name
          range
          ritual
          school {
            name
            index
          }
        }
      }
    `,
  });

  const requiredSpellDetails = data.spells.filter((singleSpell: Spell) => {
    return singleSpell.name.replace(/[\W_]+/g, " ") === params.name;
  });

  return {
    props: {
      spell: requiredSpellDetails[0],
    },
  };
};
