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
  _type: "markdownContent",
  _key: "6d6af2de5cfc",
  content: "Hello world!",
};

const EXAMPLE_PORTFOLIO_SECTION_ENTRY = {
  _type: "portfolioSectionEntry",
  _key: "88bd344a22ca",
  body: "Aaa",
  title: "AAA",
  links: [],
  tags: [],
  url: "https://www.google.com",
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
