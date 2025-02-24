type Props = { children: string };

export default function PortfolioHeader({ children }: Props) {
  return (
    <h1 className="text-5xl text-everforest-green-normal font-bold">
      {children}
    </h1>
  );
}
