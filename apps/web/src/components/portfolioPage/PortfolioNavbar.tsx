import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                className="uppercase text-everforest-fg-dim hover:text-everforest-green-bright duration-100 font-semibold tracking-[2px] text-[0.95rem] flex flex-row gap-3 w-fit group"
                href={href}
              >
                <FontAwesomeIcon
                  className="w-[6px] inline duration-100 opacity-50"
                  icon={faCaretRight}
                />
                <span className="group-hover:translate-x-1 duration-100">
                  {title}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
