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
import DetailsDisplay from "../../components/DetailsDisplay";
import { imperialToMetric } from "../../utils/convertImperialToMetric";
import { Tooltip } from "antd";
import { TooltipInterface } from "../../components/DetailsDisplay/DetailsDisplay";
import Head from "next/head";

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
  } = spell;

  const { isFallback } = useRouter();
  if (isFallback) {
    return <Loading />;
  }

  const { damage_at_character_level, damage_at_slot_level, damage_type } =
    damage ?? {
      damage_at_character_level: null,
      damage_at_slot_level: null,
      damage_type: null,
    };

  console.log({ damage_at_character_level });
  console.log({ damage_at_slot_level });

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
          : "Damage at slot level:",
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
        <TitleWrapper>
          {name}

          <span>
            {school.name.toLocaleLowerCase()}, level {level}
          </span>
        </TitleWrapper>

        <ContentWrapper>
          <MagicSchoolSymbol
            url={`/assets/schools/${school.name.toLocaleLowerCase()}.png`}
          />

          <DetailsColumnsWrapper style={{ marginTop: "2rem" }}>
            <DetailsColumn>
              <DetailsDisplay title="Casting time:" details={casting_time} />

              <DetailsDisplay title="Range:" details={range} />

              <DetailsDisplay
                title="Components:"
                details={components.join(" ")}
              />

              <DetailsDisplay title="Duration:" details={duration} />

              <DetailsDisplay title="Material:" details={material ?? "-"} />

              <DetailsDisplay
                title="Attack type:"
                details={attack_type ? attack_type.toLocaleLowerCase() : "-"}
              />

              <DetailsDisplay
                title="Area of effect:"
                details={
                  area_of_effect
                    ? `${area_of_effect.type.toLocaleLowerCase()}, ${
                        area_of_effect.size
                      } feet (${imperialToMetric(area_of_effect.size)}m)`
                    : "-"
                }
              />

              <DetailsDisplay
                title="Damage type:"
                details={damage_type !== null ? damage_type.name : "-"}
              />

              <DetailsDisplay
                title="Damage:"
                details={checkDamageDetails(damage)}
                tooltip={checkDamageTooltipType(damage)}
              />
            </DetailsColumn>

            <ColumnWithTitle style={{ alignItems: "flex-end" }}>
              <span style={{ color: concentration ? "#528173" : "#EF767A" }}>
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
