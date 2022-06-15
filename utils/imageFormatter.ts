import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import client from "../client";

function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(client).image(source);
}

export const imageFormatter = (size: number, product: any) => {
  console.log(product)
  if(size > 1200) {
    return urlFor(product.desktopImage).width(297).url()
  } else if(size > 748) {
    return urlFor(product.iPadImage).width(297).url()
  } else {
    return urlFor(product.phoneImage).width(297).url()
  }
}