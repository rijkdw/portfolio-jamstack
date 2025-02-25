type Props = {
  children: string;
  id: string;
};

export default function PortfolioSectionTitle({ children, id }: Props) {
  return (
    <h2
      id={id}
      className="uppercase text-everforest-fg-bright font-bold text-lg tracking-[2px]"
    >
      {children}
    </h2>
  );
}
