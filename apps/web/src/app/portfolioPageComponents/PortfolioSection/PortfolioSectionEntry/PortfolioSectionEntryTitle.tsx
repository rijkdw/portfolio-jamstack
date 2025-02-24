type Props = {
  title: string;
  url?: string;
};

export default function PortfolioSectionEntryTitle({ title, url }: Props) {
  const baseH3Classes = "text-lg font-bold";

  if (url === undefined) {
    return (
      <h3 className={`${baseH3Classes} text-everforest-fg-normal`}>{title}</h3>
    );
  }

  return (
    <h3
      className={`${baseH3Classes} text-everforest-green-normal hover:text-everforest-green-bright`}
    >
      <a href={url}>{title}</a>
    </h3>
  );
}
