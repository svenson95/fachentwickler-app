interface FooterLink {
  href: string;
  label: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
