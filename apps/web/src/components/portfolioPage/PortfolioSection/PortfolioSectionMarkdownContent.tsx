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
          a: ({ children, ...rest }) => (
            <a
              className="text-everforest-green-normal hover:text-everforest-green-bright duration-100 font-bold"
              target="_blank"
              {...rest}
            >
              {children}
            </a>
          ),
        }}
      >
        {children}
      </Markdown>
    </div>
  );
}
