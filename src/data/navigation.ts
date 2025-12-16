export type NavItem = {
  id: string;
  label: string;
};

// Expandable list for portfolio sections; add new items without refactors.
export const navigation: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

