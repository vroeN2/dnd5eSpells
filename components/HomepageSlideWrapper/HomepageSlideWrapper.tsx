import React from "react";
import { SlideDescription, SlideHeader, SlideWrapper } from "./styled";
import { BackgroundImage } from "../../pages";

const HomepageSlideWrapper: React.FC<BackgroundImage> = ({
  url,
  textContent,
}) => {
  const { header, description, style } = textContent;
  const { headerText, headerStyle } = header;
  const { descriptionText, descriptionStyle } = description;

  return (
    <SlideWrapper bgURL={url} style={style}>
      <SlideHeader style={headerStyle}>{headerText}</SlideHeader>

      <SlideDescription style={descriptionStyle}>
        {descriptionText}
      </SlideDescription>
    </SlideWrapper>
  );
};

export default HomepageSlideWrapper;
