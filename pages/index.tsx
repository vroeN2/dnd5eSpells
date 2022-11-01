import { useState } from "react";
import HomepageSlideWrapper from "../components/HomepageSlideWrapper";
import CSS from "csstype";

interface BackgroundImage {
  url: string;
  justify: string;
  textContent: {
    header: {
      headerText: string;
      headerStyle: CSS.Properties;
    };
    description: {
      descriptionText: string;
      descriptionStyle: CSS.Properties;
    };
  };
}

export default function Home() {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => setOffset(window.pageYOffset);
  // window.addEventListener("scroll", handleScroll);
  const backgroundImages: BackgroundImage[] = [
    {
      url: "assets/bg_1.png",
      justify: "space-between",
      textContent: {
        header: {
          headerText: "Find your spells with ease",
          headerStyle: {
            marginLeft: "5vw",
          },
        },
        description: {
          descriptionText:
            "Find desired Dungeons and Dragons spell with no problem",
          descriptionStyle: {
            marginRight: "10vw",
          },
        },
      },
    },
    {
      url: "assets/bg_2.png",
      justify: "center",
      textContent: {
        header: {
          headerText: "Just start searching",
          headerStyle: {},
        },
        description: {
          descriptionText: `And use build-in filters to make it even quicker It is that easy`,
          descriptionStyle: {
            width: "45%",
            marginTop: "3%",
          },
        },
      },
    },
    {
      url: "assets/bg_3.png",
      justify: "flex-start",
      textContent: {
        header: {
          headerText: "Save your most searched",
          headerStyle: {},
        },
        description: {
          descriptionText: "And access them with one click",
          descriptionStyle: {
            width: "45%",
            marginTop: "1%",
          },
        },
      },
    },
  ];

  return (
    <>
      {backgroundImages.map((image: BackgroundImage) => {
        return (
          <HomepageSlideWrapper
            justify={image.justify}
            url={image.url}
            key={image.url}
            textContent={image.textContent}
          />
        );
      })}
    </>
  );
}
