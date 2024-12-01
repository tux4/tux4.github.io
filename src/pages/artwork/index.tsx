import * as React from "react"
import { graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Navigation from "../../components/Navigation"
import Heading from "../../components/Heading"
import Gallery from "@browniebroke/gatsby-image-gallery"
import Content from "../../components/Content"

const ImageIndex = {
  "Blue_Ridge_Shenendoah_NP_2023.jpg": { title: "Blue Ridge Mountains (2023)", caption: "20” x 16” Acrylic over Canvas" },
  "Lake_Sonoma_CA_2023.jpg": { title: "Lake Sonoma (2023)", caption: "20” x 16” Acrylic over Canvas" }, 
  "Point_Reyes_CA_2023.jpg": { title: "Point Reyes (2023)", caption: "20” x 16” Acrylic over Canvas"  }, 
  "Queens_NYC_2023.jpg": { title: "Queens Rooftop (2023)", caption: "20” x 16” Acrylic & Oil Pastel over Canvas"  }, 
  "Red_Woods_2023.jpg": { title: "Red Woods California (2023)", caption: "16” x 20” Acrylic over Canvas" }, 
  "Self_Defence_2024.jpg": { title: "Self Defence (2024)", caption: "20” x 16” Acrylic over Canvas" }, 
  "Terai_NP_2023.jpg": { title: "Terai Nepal (2023)", caption: "16” x 20” Acrylic over Canvas" }, 
  "Elkhorn_River_NE.jpg": { title: "Afternoon lights over Elkhorn River (2024)", caption: "20” x  16” Oil over Canvas"  },
  "Durga.png": { title: "Durga Illustration", caption: "Blender"  },
  "CycleGirl.png": { title: "Illustration", caption: "Blender"  },
  "SelfPortrait_2024.jpeg": { title: "Self Portrait", caption: "Charcoal on Paper"  },
}

const getFileName = (image) => (image.thumb.images.fallback.src.split("/")[4])

const getImageMetadata = (imageFileName) => (ImageIndex[imageFileName])

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const ArtworkPage: React.FC<PageProps> = ({data, location}) => {
  const images = data.images.edges
    .filter(({node}) => (node.childImageSharp != null))
    .map(( { node } ) => ({ ...getImageMetadata(getFileName(node.childImageSharp)), ...node.childImageSharp }));
  console.log(images.map((image) =>  getFileName(image)));
  return (
    <main style={pageStyles}>
      <Navigation location={location} />
      <Heading>Prasanna Suman</Heading>
      <Content>
        <h3>Artwork</h3>
        <Gallery images={images} />
      </Content>
    </main>
  )
}

export default ArtworkPage;

export const pageQuery = graphql`
  query ArtworkPage {
    images: allFile {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export const Head: HeadFC = () => <title>Artwork Page</title>;
