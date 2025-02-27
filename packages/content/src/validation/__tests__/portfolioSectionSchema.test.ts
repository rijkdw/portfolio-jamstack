import portfolioSectionSchema from "../portfolioSectionSchema";

const EXAMPLE_SECTION_SKELETON = {
  _type: "portfolioSection",
  weight: 4,
  slug: "about-me",
  _id: "cae84a08-f52e-429a-a194-7907a590db42",
  _updatedAt: "2025-02-23T18:18:52Z",
  _createdAt: "2025-02-21T20:27:20Z",
  _rev: "RRmB4ku0DGU7cCH7249NGb",
  title: "About Me",
};

const EXAMPLE_MARKDOWN_ENTRY = {
  type: "markdownContent",
  content:
    "Hi, I'm **Rijk**.  I have a passion for developing impactful software.\\n\\nI enjoy creating seamless, user-friendly solutions that solve real problems.\\nI take pride in writing clean code that delivers value, both to customers and my fellow devs.\\nI’m eager to tackle new challenges and make a difference — one line of code at a time.",
};

const EXAMPLE_PORTFOLIO_SECTION_ENTRY = {
  type: "portfolioSectionEntry",
  title: "Junior Developer • Omni Calculator",
  url: "https://www.omnicalculator.com/",
  date: "2023 – now",
  body: "I play an integral role in developing Omni's flagship product: our **calculator widget**. I am also part of various projects, most notably our custom-built algebraic equation solver that powers our calculators' omni-directional math.",
  links: [],
  tags: ["JavaScript", "TypeScript", "React", "Python", "GraphQL"],
};

describe("portfolioSectionSchema", () => {
  it("works on markdown example", () => {
    const data = {
      ...EXAMPLE_SECTION_SKELETON,
      entries: [EXAMPLE_MARKDOWN_ENTRY],
    };
    expect(() => portfolioSectionSchema.parse(data)).not.toThrow();
  });

  it("works on portfolio section example", () => {
    const data = {
      ...EXAMPLE_SECTION_SKELETON,
      entries: [EXAMPLE_PORTFOLIO_SECTION_ENTRY],
    };
    expect(() => portfolioSectionSchema.parse(data)).not.toThrow();
  });

  it("works on mixed example", () => {
    const data = {
      ...EXAMPLE_SECTION_SKELETON,
      entries: [EXAMPLE_PORTFOLIO_SECTION_ENTRY, EXAMPLE_MARKDOWN_ENTRY],
    };
    expect(() => portfolioSectionSchema.parse(data)).not.toThrow();
  });
});
