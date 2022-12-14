import { ReactNode, ReactElement, InputHTMLAttributes } from "react";
import { RegisterOptions } from "react-hook-form";

export interface IPost {
  title: string;
  slug: string;
  content: string;
}

// Addded Types
const arrow = "small";

export interface ButtonProps {
  red?: boolean;
  violate?: boolean;
  white?: boolean;
  customColor?: string;
  outline?: boolean;
  shadow?: boolean;
  rounded?: boolean;
  arrow?: string;
  text?: string;
  label?: string;
  className?: string;
}

// card props and counter props
export interface IProps {
  children?: ReactNode;
  type?: string;
  width?: number;
  className?: string;
  starIcon?: number;
  subtitle?: string;
  list?: {
    icon?: boolean;
    text: string;
  }[];
  title?: string;
  description?: string;
  duration?: string;
  highlight?: string;
  height?: number;
  headerBgColor?: string;
  header?: number;
}

export interface IconProps {
  icon?: JSX.Element;
  title: string;
  className?: string;
  full?: string;
}

export interface SVGProps {
  className?: string;
  opacity?: number;
}

export interface HeroCardProps {
  img: string;
  title: string;
  number: string;
  subtitle: string;
}

//Interface for NavItem in header
export interface NavItemProps {
  navTitle: string;
  children?: any;
}

//Interface for Nav Sub Categories
export interface NavSubItemProps {
  icon: ReactElement;
  subCategoryTitle: string;
  navLinks: { linkTitle: string; link: string }[];
  bgColor?: string;
  bgIconProps?: { icon: ReactElement; className: string };
}

//Proposal Form Input Field Props
export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  validation?: RegisterOptions;
  multiline?: {
    rows: number;
    cols?: number;
    textAreaClassName?: string;
  };
  wrapperClassName?: string;
  wrapperWidth?: string;
}

export interface footerTestimonialProps {
  title: string;
  position: string;
  companyName: string;
}