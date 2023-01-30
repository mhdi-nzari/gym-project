export enum SelectedPage {
  Home = "home",
  About = "about",
  Benifits = "benefits",
  OurClassess = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitsType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  desc?: string;
  image: string;
}
