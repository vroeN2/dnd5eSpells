import React from "react";
import { FirstSpacingDiv, SecondSpacingDiv, SlideWrapper } from "./styled";

interface HomepageSlideWrapperProps {
  children: React.ReactNode;
  url: string;
  justify: string;
  spacingDiv: "first" | "second" | "none";
}

const HomepageSlideWrapper: React.FC<HomepageSlideWrapperProps> = ({
  children,
  url,
  justify,
  spacingDiv,
}) => {
  const spacer =
    spacingDiv === "first" ? (
      <FirstSpacingDiv />
    ) : spacingDiv === "second" ? (
      <SecondSpacingDiv />
    ) : (
      <></>
    );
  return (
    <SlideWrapper key={url} bgURL={url} justifyContent={justify}>
      {children}

      {spacer}
    </SlideWrapper>
  );
};

export default HomepageSlideWrapper;
