import Link from "next/link";
import styled from "styled-components";
import { ErrorPageLinks, HorizontalLine } from "../components/styled";

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin-top: 10vh;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-direction: column;
  font-size: 2.5rem;
  & span {
    font-size: 12rem;
  }
`;

const WrongPage = () => {
  return (
    <ErrorWrapper>
      <Title>
        <span>Dang.</span>
        <br />
        <HorizontalLine />
        <br />
        Looks like nothing is here
        <br /> <br /> <br />
        <Link href={"/"}>
          <ErrorPageLinks>go back to homepage</ErrorPageLinks>
        </Link>{" "}
        or{" "}
        <Link href={"/spells"}>
          <ErrorPageLinks> go back to spells list</ErrorPageLinks>
        </Link>
      </Title>
    </ErrorWrapper>
  );
};

export default WrongPage;
