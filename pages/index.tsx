import { useRef } from "react";
import HomepageSlideWrapper from "../components/HomepageSlideWrapper";
import CSS from "csstype";
import Head from "next/head";
import { Parallax, IParallax } from "@react-spring/parallax";

export interface BackgroundImage {
  url: string;
  textContent: {
    header: {
      headerText: string;
      headerStyle: CSS.Properties;
      headerOffset: number;
      headerSpeed: number;
    };
    description: {
      descriptionText: string;
      descriptionStyle: CSS.Properties;
      descriptionOffset: number;
      descriptionSpeed: number;
    };
    style: CSS.Properties;
  };
}

export default function Home() {
  const parallax = useRef<IParallax>(null!);

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
          headerOffset: 0.3,
          headerSpeed: 0.1,
        },
        description: {
          descriptionText:
            "Find desired Dungeons and Dragons spell with no problem",
          descriptionStyle: {
            textShadow: "0px 0px 5px #1f1f1f",
          },
          descriptionOffset: 0.1,
          descriptionSpeed: 0.2,
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
            marginLeft: "-25vw",
          },
          headerOffset: 1.25,
          headerSpeed: 0.1,
        },
        description: {
          descriptionText: `And use build-in filters to make it even quicker\n\nIt is that easy`,
          descriptionStyle: {
            width: "45%",
            textShadow: "0px 0px 5px #1f1f1f",
            margin: "-10vh 0 0 -35vw",
            whiteSpace: "pre-wrap",
          },
          descriptionOffset: 1.1,
          descriptionSpeed: 0.3,
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
          headerOffset: 2.3,
          headerSpeed: 0.2,
        },
        description: {
          descriptionText: "And access them with one click",
          descriptionStyle: {
            width: "100%",
            marginTop: "-3vh",
            textShadow: "0px 0px 5px #1f1f1f",
            marginLeft: "5vw",
          },
          descriptionOffset: 2.1,
          descriptionSpeed: 0.1,
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

      <Parallax
        ref={parallax}
        pages={3}
        style={{
          background:
            "linear-gradient(160deg, rgba(35,57,46,1) 0%, rgba(31,31,31,1) 100%)",
          overflow: "hidden",
        }}
      >
        {backgroundImages.map((image: BackgroundImage, index: number) => {
          return (
            <div style={image.textContent.style} key={image.url}>
              <HomepageSlideWrapper
                wrapperOffset={index}
                url={image.url}
                textContent={image.textContent}
                parallax={parallax}
              />
            </div>
          );
        })}
      </Parallax>
    </>
  );
}
