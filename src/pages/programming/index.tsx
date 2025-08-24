import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navigation from "../../components/Navigation";
import Heading from "../../components/Heading";
import Content from "../../components/Content";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const ProgrammingPage: React.FC<PageProps> = ({ data, location }) => {
  return (
    <main style={pageStyles}>
      <Navigation location={location} />
      <Content>
        <h3>Programming Projects</h3>
        <p>
          My public code can be found here{" "}
          <a href="https://github.com/tux4">github.com/tux4</a> and{" "}
          <a href="https://gitlab.com/tux4">gitlab.com/tux4</a>.
        </p>
        <p>These are some of the past opensource projects I worked on: </p>
        <h4>Sangraha.org</h4>
        <p>
          Sangraha.org (सङ्ग्रह) is a portal to digitize and archive literary
          works from Nepal and make them accessible online through a
          user-friendly searchable interface to readers all around the world.
        </p>
        <a href="https://github.com/CodeforNepal/akshara-project">
          Source on Github
        </a>
        <h4>Lekhanee Keyboard Android</h4>
        <p>
          Lekhanee Android is a soft keyboard for Nepali languages for Android.
        </p>
        <a href="https://gitlab.com/lekhanee/lekhanee-android">
          Source on Gitlab
        </a>

        <h4>Lekhanee Keyboard Linux</h4>
        <p>
          Lekhanee Linux is a transliterated keyboard for Nepali languages based
          on iBus.
        </p>
        <a href="https://gitlab.com/lekhanee/lekhanee-linux">
          Source on Gitlab
        </a>
      </Content>
    </main>
  );
};

export default ProgrammingPage;

export const Head: HeadFC = () => <title>Prasanna - Programming</title>;
