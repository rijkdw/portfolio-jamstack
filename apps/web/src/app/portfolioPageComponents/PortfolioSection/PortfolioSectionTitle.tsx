type Props = {
  children: string;
  id: string;
};

export default function PortfolioSectionTitle({ children, id }: Props) {
  // TODO verify letter spacing
  return (
    <h2
      id={id}
      className="uppercase text-everforest-fg-bright font-bold tracking-wide"
    >
      {children}
    </h2>
  );
}
