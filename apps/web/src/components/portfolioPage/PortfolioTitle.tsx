type Props = { children: string };

export default function PortfolioTitle({ children }: Props) {
  return (
    <h1 className="text-3xl sm:text-5xl text-everforest-green-normal font-bold mb-2">
      {children}
    </h1>
  );
}
