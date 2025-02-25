import { PortfolioSection } from "@portfolio/content/src/types/PortfolioSection";

type SectionDetails = Pick<PortfolioSection, "title" | "slug">;

type Props = {
  sections: SectionDetails[];
};

export default function PortfolioNavbar({ sections }: Props) {
  return (
    <nav className="hidden lg:block">
      <ul className="list-none flex flex-col gap-2">
        {sections.map(({ title, slug }) => {
          const href = `#${slug}`;
          return (
            <li key={slug}>
              <a
                className="uppercase text-everforest-fg-dim hover:text-everforest-green-bright font-semibold tracking-[2px] duration-100"
                href={href}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
