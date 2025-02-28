import Markdown from "react-markdown";

type Props = { children: string; className?: string };

export default function PortfolioFooter({ className, children }: Props) {
  return (
    <footer className={className}>
      <Markdown
        components={{
          p: ({ children }) => (
            <p className="text-everforest-fg-dim text-sm text-justify">
              {children}
            </p>
          ),
          a: ({ children, ...rest }) => (
            <a
              className="text-everforest-green-dim hover:text-everforest-green-bright duration-100 font-bold"
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
    </footer>
  );
}
