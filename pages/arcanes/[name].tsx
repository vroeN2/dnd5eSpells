import { useRouter } from "next/router";
import React from "react";
import Loading from "../../components/Loading";
import { Spell } from "../../interfaces/Spell";
import {
  ColumnWithTitle,
  ContentWrapper,
  DetailsColumnsWrapper,
  MagicSchoolSymbol,
  SingleSpellCardWrapper,
  SpellDetailsWrapper,
  TitleWrapper,
} from "./styled";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import ClassIcons from "../../components/ClassIcons";

type SingleSpellProps = {
  spell: Spell;
};

const SingleSpell = ({ spell }: SingleSpellProps) => {
  const { name, school, level, concentration, ritual, classes } = spell;

  const { isFallback } = useRouter();
  if (isFallback) {
    return <Loading />;
  }

  return (
    <SpellDetailsWrapper>
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

          <DetailsColumnsWrapper>
            <div>SZCZEGÓŁY</div>

            <ColumnWithTitle style={{ alignItems: "flex-end" }}>
              <span style={{ color: concentration ? "#528173" : "#EF767A" }}>
                Concentration
              </span>

              <span style={{ color: ritual ? "#528173" : "#EF767A" }}>
                Ritual
              </span>
            </ColumnWithTitle>
          </DetailsColumnsWrapper>

          <span>ASDF TEST</span>

          <ColumnWithTitle>
            <span>TEST</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            modi, maiores tempore possimus vitae a, quibusdam sapiente delectus
            voluptatem quae laudantium quod iste doloribus soluta, odit
            voluptatibus fuga quas! Atque corrupti nisi laboriosam recusandae
            corporis obcaecati minus vitae tempora placeat nostrum quas iste
            delectus voluptate debitis pariatur, harum, blanditiis eaque.
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
    params: { name: name },
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
    return singleSpell.name === params.name;
  });

  return {
    props: {
      spell: requiredSpellDetails[0],
    },
  };
};
