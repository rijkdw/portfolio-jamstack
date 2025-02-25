import { PortfolioSection } from "@portfolio/content/src/types/PortfolioSection";

type SectionDetails = Pick<PortfolioSection, "title" | "slug">;

type Props = {
  sections: SectionDetails[];
};

export default function PortfolioNavbar({ sections }: Props) {
  return (
    <nav className="hidden lg:block">
      <ul>
        {sections.map(({ title, slug }) => {
          const href = `#${slug}`;
          return (
            <li key={slug}>
              <p className="uppercase text-everforest-fg-dim font-semibold tracking-[2px]">
                <a href={href}>{title}</a>
              </p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
