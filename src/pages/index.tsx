import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Heading from "../components/Heading";
import Content from "../components/Content";
import Image from "../components/Image";

import MainImage from "../images/artwork/Acrylic/Lake_Sonoma_CA_2023.jpg";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const paragraphStyles = {
  marginBottom: 24,
};

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Intro = styled.div`
  margin-left: 2rem;
`;

const SImage = styled(Image)`
  filter: drop-shadow(5px 5px 10px lightgray);
  margin: 2rem 1rem;
`;

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <main style={pageStyles}>
      <Navigation location={location} />
      <MainContent>
        <a href="/artwork">
          <SImage source={MainImage} title="" medium="" />
        </a>
        <Intro>
          <p>Hi!</p>
          <p style={paragraphStyles}>
            I am Prasanna Suman. Originally from Nepal, these days I am based in
            North America.
          </p>
          <p style={paragraphStyles}>
            I have worked as a software engineer with a focus on UI development
            since 2013. I am also an aspiring artist.
          </p>
          <p style={paragraphStyles}>
            My primary interest is earnest self enquiry through{" "}
            <a href="https://www.dhamma.org">meditation</a>. My other interests
            include permaculture, music, open source software, and game
            development.
          </p>
          <p style={paragraphStyles}></p>
          <p style={paragraphStyles}>
            In this site I collect some of my art works and thoughts on matters
            that interest me.
          </p>
        </Intro>
      </MainContent>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Prasanna - About</title>;
