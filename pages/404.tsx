import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { ErrorPageLinks, HorizontalLine } from "../components/styled";

const Background = styled.div`
  background: url("/assets/bg_1.png") no-repeat center center fixed;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;

const ErrorWrapper = styled.div`
  position: absolute;
  top: 30vh;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  align-items: center;
  padding: 0 10vw;
  justify-content: center;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 0px 0px 2px #1d1d1d;
  flex-direction: column;
  font-size: 2.5rem;
  & span {
    font-size: 12rem;
  }
`;

const WrongPage = () => {
  return (
    <Background>
      <Head>
        <title>Oh noes!</title>
        <meta name="description" content={`There is nothing here!`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          <Link href={"/arcanes"}>
            <ErrorPageLinks> go back to the list of arcanes</ErrorPageLinks>
          </Link>
        </Title>
      </ErrorWrapper>
    </Background>
  );
};

export default WrongPage;
