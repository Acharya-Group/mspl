// 1. Define types
export type NavLink = {
  name: string;
  href?: string;      
  type: "link" | "download" | "submenu";
  sublinks?: NavLink[];
};

// 2. Define dropdown structure
export type NavDropdown = {
  title: string;
  links: NavLink[];
};