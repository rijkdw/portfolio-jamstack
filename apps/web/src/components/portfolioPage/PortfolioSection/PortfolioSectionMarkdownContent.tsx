import Markdown from "react-markdown";

type Props = {
  children: string;
};

export default function PortfolioSectionMarkdownContent({ children }: Props) {
  return (
    <div>
      <Markdown
        components={{
          p: ({ children }) => (
            <p className="text-everforest-fg-normal text-justify mb-3 last-of-type:mb-0">
              {children}
            </p>
          ),
        }}
      >
        {children}
      </Markdown>
    </div>
  );
}
