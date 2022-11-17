import { useRouter } from "next/router";
import React from "react";
import Loading from "../../components/Loading";
import { Spell } from "../../interfaces/Spell";
import { SingleSpellCardWrapper, SpellDetailsWrapper } from "./styled";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

type SingleSpellProps = {
  spell: Spell;
};

const SingleSpell = ({ spell }: SingleSpellProps) => {
  console.log({
    spell: spell,
  });
  const { isFallback } = useRouter();
  if (isFallback) {
    return <Loading />;
  }

  return (
    <SpellDetailsWrapper>
      <SingleSpellCardWrapper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, minima
        ut deleniti, eum veritatis maiores temporibus enim rem molestias
        provident vero labore perferendis laudantium dolores esse sapiente modi
        perspiciatis alias ab. Officia eos cupiditate corrupti sit libero
        consequuntur, autem magnam? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Inventore, consequatur aliquam numquam voluptatem
        maxime ipsum, voluptates ullam expedita non aliquid adipisci tenetur?
        Qui inventore, dolorem cupiditate, cum aperiam voluptas aspernatur
        doloremque unde sint voluptatem doloribus? Corrupti ad nostrum tenetur
        officiis placeat, maxime quis, tempora obcaecati reiciendis eius magnam
        debitis molestiae eveniet quam beatae ab dolore perspiciatis tempore
        deserunt quidem animi ea! Asperiores autem harum, alias voluptatibus
        fugiat maxime laborum, eius quibusdam accusamus tenetur maiores aperiam
        molestias, iusto quod. Ipsum perspiciatis officia suscipit debitis
        cumque ullam. Quibusdam delectus, ipsam tempora nihil hic velit
        molestias cumque dolore doloremque nesciunt deserunt cupiditate
        perspiciatis quaerat, debitis, quisquam itaque quo possimus labore.
        Tempora commodi odit dolores blanditiis molestiae explicabo amet
        deleniti in ipsum dolor ducimus praesentium veritatis, quas totam fugit
        maxime labore magni voluptas vel debitis aspernatur. Delectus impedit
        libero facilis magni temporibus, molestias cum alias inventore doloribus
        eaque perferendis, rem vero quas aut, tempore fugiat. Inventore
        voluptatem ipsum dolorum facere blanditiis nisi, quo explicabo,
        exercitationem, sequi perferendis fuga dolores. Temporibus consectetur
        eius laudantium asperiores, nostrum quia laboriosam odit quo id aperiam
        corrupti provident aut totam perspiciatis adipisci. Dicta minima fuga,
        architecto alias debitis iste numquam repellendus, neque ducimus nostrum
        explicabo facilis inventore recusandae animi porro reprehenderit cumque.
        Odio vero dignissimos, blanditiis ipsum modi veritatis odit totam esse,
        asperiores ad cum adipisci quasi molestias, dolore distinctio placeat.
        Nihil id saepe suscipit totam adipisci. Expedita repellat repellendus
        porro a! Eveniet reiciendis error eos obcaecati, ut quibusdam sunt vitae
        enim illo provident non officiis molestias fuga sit consequuntur cumque
        quod doloremque. Quibusdam, numquam eius necessitatibus cum tempore
        maxime cumque, soluta ipsa consequuntur hic at eveniet blanditiis ut vel
        est illo quo quae ex amet labore culpa corporis asperiores? In numquam
        dolorem amet accusamus non, sint sed inventore laboriosam, animi ex
        dolore aspernatur ipsa, reiciendis aut maiores quae qui repellat eum
        perferendis veritatis. Quam voluptate magnam dolores hic recusandae rem,
        corrupti optio facere in deleniti inventore. Corporis laboriosam, quos
        sequi, sint, placeat voluptas blanditiis repudiandae molestias veritatis
        minus voluptate facere? Itaque, praesentium. Cupiditate maxime quisquam
        ad ratione unde? Reprehenderit nesciunt ratione saepe molestias
        repellat! Voluptates omnis quod odio. Tenetur optio deleniti quam illo
        similique temporibus voluptate. Cum accusamus nesciunt error blanditiis,
        illum odit quas debitis laborum libero rerum similique, consequuntur
        dolorem vero eius ullam labore sint assumenda nihil reiciendis expedita?
        Non, maiores. A sit ipsum blanditiis culpa enim eligendi error magnam
        iusto, illo natus. Asperiores laudantium omnis voluptatum?
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
