import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { useEffect, useState } from "react";
import { LowDetailsSpell } from "../../interfaces/Spell";

export const useFetchSpells = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allSpells, setAllSpells] = useState<LowDetailsSpell[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchSpells = async () => {
      const client = new ApolloClient({
        uri: "https://www.dnd5eapi.co/graphql",
        cache: new InMemoryCache(),
      });

      const { data } = await client.query({
        query: gql`
          query Spells {
            spells(limit: 350) {
              index
              casting_time
              classes {
                name
              }
              components
              concentration
              desc
              duration
              level
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

      setAllSpells(data.spells);
      setIsLoading(false);
    };

    fetchSpells();
  }, []);

  return { isLoading, allSpells };
};
