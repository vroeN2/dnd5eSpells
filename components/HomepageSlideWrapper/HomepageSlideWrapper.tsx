import React, { MutableRefObject } from "react";
import {
  BackgroundImageWrapper,
  SlideDescription,
  SlideHeader,
} from "./styled";
import { BackgroundImage } from "../../pages";
import { IParallax, ParallaxLayer } from "@react-spring/parallax";

interface Homepage extends BackgroundImage {
  wrapperOffset: number;
  parallax: MutableRefObject<IParallax>;
}

const HomepageSlideWrapper: React.FC<Homepage> = ({
  url,
  textContent,
  wrapperOffset,
  parallax,
}) => {
  const { header, description } = textContent;
  const { headerText, headerStyle, headerOffset, headerSpeed } = header;
  const {
    descriptionText,
    descriptionStyle,
    descriptionOffset,
    descriptionSpeed,
  } = description;

  return (
    <>
      <ParallaxLayer
        offset={wrapperOffset}
        speed={0}
        onClick={() =>
          parallax.current.scrollTo(wrapperOffset === 2 ? 0 : wrapperOffset + 1)
        }
        style={{
          overflow: "hidden",
          filter: "drop-shadow(-1px 6px 30px #23392E)",
        }}
      >
        <BackgroundImageWrapper
          alt={`background_${wrapperOffset}`}
          src={`/${url}`}
          fill
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={headerOffset}
        speed={headerSpeed}
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
        onClick={() =>
          parallax.current.scrollTo(wrapperOffset === 2 ? 0 : wrapperOffset + 1)
        }
      >
        <SlideHeader style={headerStyle}>{headerText}</SlideHeader>
      </ParallaxLayer>

      <ParallaxLayer
        offset={descriptionOffset}
        speed={descriptionSpeed}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() =>
          parallax.current.scrollTo(wrapperOffset === 2 ? 0 : wrapperOffset + 1)
        }
      >
        <SlideDescription style={descriptionStyle}>
          {descriptionText}
        </SlideDescription>
      </ParallaxLayer>
    </>
  );
};

export default HomepageSlideWrapper;
