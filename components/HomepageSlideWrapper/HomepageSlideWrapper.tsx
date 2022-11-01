import React from "react";
import { SlideDescription, SlideHeader, SlideWrapper } from "./styled";
import CSS from "csstype";

interface HomepageSlideWrapperProps {
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

const HomepageSlideWrapper: React.FC<HomepageSlideWrapperProps> = ({
  url,
  justify,
  textContent,
}) => {
  const { header, description } = textContent;
  const { headerText, headerStyle } = header;
  const { descriptionText, descriptionStyle } = description;

  return (
    <SlideWrapper key={url} bgURL={url} justifyContent={justify}>
      <SlideHeader style={headerStyle}>{headerText}</SlideHeader>

      <SlideDescription style={descriptionStyle}>
        {descriptionText}
      </SlideDescription>
    </SlideWrapper>
  );
};

export default HomepageSlideWrapper;
