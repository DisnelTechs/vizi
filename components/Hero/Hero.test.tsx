import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

jest.mock("next/image", () => () => <img alt="logo" />);

describe("Hero component tests", () => {
  const heroProps = {
    title: "Some Title",
    subtitle: "Some Subtitle",
    imgSrc: "https://picsum.photos/1366/768",
  };

  it("should render the Hero component", () => {
    render(
      <Hero
        title={heroProps.title}
        subtitle={heroProps.subtitle}
        imgSrc={heroProps.imgSrc}
      />
    );
    screen.debug();
    const hero = screen.getAllByText(heroProps.title);
    // mobile and desktop instances
    expect(hero).toHaveLength(2);
  });

  it("should render the logo", () => {
    render(
      <Hero
        title={heroProps.title}
        subtitle={heroProps.subtitle}
        imgSrc={heroProps.imgSrc}
      />
    );
    const logo = screen.getAllByAltText("logo");
    expect(logo).toHaveLength(2);
  });

  it("should set default image when imgSrc is not provided", () => {
    render(<Hero title={heroProps.title} />);
    const heroBackground = screen.getByTestId("parallax-background");
    expect(heroBackground).toHaveStyle(
      `background-image: url(https://picsum.photos/1366/768)`
    );
  });

  it("should set provided image when imgSrc is provided", () => {
    render(<Hero title={heroProps.title} imgSrc={heroProps.imgSrc} />);
    const heroBackground = screen.getByTestId("parallax-background");
    expect(heroBackground).toHaveStyle(
      `background-image: url(${heroProps.imgSrc})`
    );
  });
});
