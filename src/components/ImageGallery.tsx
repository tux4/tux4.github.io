import * as React from "react";
import Gallery, { GalleryProps } from "@browniebroke/gatsby-image-gallery";
import styled from "styled-components";

const ImageGallery = (props: GalleryProps) => {
  return <div><Gallery {...props} /></div>
};

export default ImageGallery;

