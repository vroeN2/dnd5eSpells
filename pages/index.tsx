import { useState } from "react";
import HomepageSlideWrapper from "../components/HomepageSlideWrapper";

interface BackgroundImage {
  url: string;
  justify: string;
  spacingDiv: "first" | "second" | "none";
}

export default function Home() {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => setOffset(window.pageYOffset);
  // window.addEventListener("scroll", handleScroll);
  const backgroundImages: BackgroundImage[] = [
    {
      url: "assets/Project2501_massive_giant_portal_in_a_dense_forest_environment__da72e786-9729-40b2-83c5-f30067278cd8.png",
      justify: "space-between",
      spacingDiv: "first",
    },
    {
      url: "assets/Project2501_massive_giant_portal_in_a_dense_forest_environment__da72e786-9729-40b2-83c5-f30067278cd9.png",
      justify: "normal",
      spacingDiv: "second",
    },
    {
      url: "assets/Project2501_massive_giant_portal_in_a_desolate_ice_frost_enviro_a6f6d55c-8893-4729-adf3-381df54a77d6.png",
      justify: "flex-start",
      spacingDiv: "none",
    },
  ];

  return (
    <>
      {backgroundImages.map((image: BackgroundImage) => {
        return (
          <HomepageSlideWrapper
            justify={image.justify}
            url={image.url}
            spacingDiv={image.spacingDiv}
            key={image.url}
          >
            <>
              <div>TEST TEST</div>
              <div>TEST TEST</div>
              <div>TEST TEST</div>
            </>
          </HomepageSlideWrapper>
        );
      })}
    </>
  );
}
