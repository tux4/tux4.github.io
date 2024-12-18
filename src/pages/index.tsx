import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components";
import Navigation from "../components/Navigation"
import Heading from "../components/Heading"
import Content from "../components/Content"
import Image from "../components/Image"
import SelfPortrait from "../images/artwork/Drawings/SelfPortrait_2024.jpeg"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const headingAccentStyles = {
  color: "#663399",
}

const paragraphStyles = {
  marginBottom: 24,
}

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

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
`;

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <main style={pageStyles}>
      <Navigation location={location} />
      <Heading>
        Prasanna Suman
      </Heading>
      <MainContent>
        <SImage source={SelfPortrait} title="" medium="" />
        <Intro>
          <h3>About Me</h3>
          <p style={paragraphStyles}>
          Originally from Nepal, these days I am based in North America.
          </p>
          <p style={paragraphStyles}>
          I have worked as a software engineer with a focus on UI development since 2013. I am also an aspiring artist.
          </p>
          <p style={paragraphStyles}>
          My primary interest is earnest self enquiry through <a href="https://www.dhamma.org">meditation</a>. 
          My other interests include permaculture, music, open source software, and game development.
          </p>
          <p style={paragraphStyles}>
          </p>
          <p style={paragraphStyles}>
          In this site I collect some of my art works and thoughts on matters that interest me.
          </p>
        </Intro>
      </MainContent>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
