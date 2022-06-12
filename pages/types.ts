export interface ProductType {
  categories: Array<string>;
  name: string;
  title: string;
  desktopImage: string;
  iPadImage: string;
  phoneImage: string;
  authorImage: string;
  divCatNo: string;
  casNo: string;
  molF: string;
  molWt: string;
  inventoryStatus: string;
  productOverview: string;
  technicalData: string;
  reference: string;
}
export interface Props {
  products: Array<ProductType>;
}
