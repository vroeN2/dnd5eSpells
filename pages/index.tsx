import { useState } from "react";
import HomepageSlideWrapper from "../components/HomepageSlideWrapper";
import CSS from "csstype";
import Head from "next/head";

export interface BackgroundImage {
  url: string;
  textContent: {
    header: {
      headerText: string;
      headerStyle: CSS.Properties;
    };
    description: {
      descriptionText: string;
      descriptionStyle: CSS.Properties;
    };
    style: CSS.Properties;
  };
}

export default function Home() {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => setOffset(window.pageYOffset);
  // window.addEventListener("scroll", handleScroll);
  const backgroundImages: BackgroundImage[] = [
    {
      url: "assets/bg_1.png",
      textContent: {
        header: {
          headerText: "Find your spells with ease",
          headerStyle: {
            marginLeft: "10vw",
            textShadow: "0px 0px 5px #1f1f1f",
          },
        },
        description: {
          descriptionText:
            "Find desired Dungeons and Dragons spell with no problem",
          descriptionStyle: {
            marginRight: "15vw",
            textShadow: "0px 0px 5px #1f1f1f",
          },
        },
        style: {
          justifyContent: "space-between",
        },
      },
    },
    {
      url: "assets/bg_2.png",
      textContent: {
        header: {
          headerText: "Just start searching",
          headerStyle: {
            textShadow: "0px 0px 5px #1f1f1f",
            marginLeft: "45vw",
          },
        },
        description: {
          descriptionText: `And use build-in filters to make it even quicker\n\nIt is that easy`,
          descriptionStyle: {
            width: "45%",
            textShadow: "0px 0px 5px #1f1f1f",
            margin: "-3vh 0 0 45vw",
            whiteSpace: "pre-wrap",
          },
        },
        style: {
          justifyContent: "center",
          alignItems: "baseline",
          flexDirection: "column",
        },
      },
    },
    {
      url: "assets/bg_3.png",
      textContent: {
        header: {
          headerText: "Save your most searched",
          headerStyle: {
            textShadow: "0px 0px 5px #1f1f1f",
            marginLeft: "5vw",
          },
        },
        description: {
          descriptionText: "And access them with one click",
          descriptionStyle: {
            width: "100%",
            marginTop: "-3vh",
            textShadow: "0px 0px 5px #1f1f1f",
            marginLeft: "5vw",
          },
        },
        style: {
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
        },
      },
    },
  ];

  return (
    <>
      <Head>
        <title>DnD Spells List</title>
        <meta name="description" content="DnD 5 spell manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {backgroundImages.map((image: BackgroundImage) => {
        return (
          <HomepageSlideWrapper
            url={image.url}
            key={image.url}
            textContent={image.textContent}
          />
        );
      })}
    </>
  );
}
