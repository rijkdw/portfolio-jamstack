import { PropsWithChildren } from "react";

export default function PortfolioSubtitle({ children }: PropsWithChildren) {
  return (
    <p className="text-everforest-fg-dim font-normal text-2xl">{children}</p>
  );
}

function PortfolioSubtitleStrong({ children }: PropsWithChildren) {
  return (
    <span className="text-everforest-fg-normal font-[500]">{children}</span>
  );
}

PortfolioSubtitle.Strong = PortfolioSubtitleStrong;
