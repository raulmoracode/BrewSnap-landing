import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeroSection } from "@/components/hero-section";

describe("hero section", () => {
  it("renders the ported landing content", () => {
    const { container } = render(<HeroSection />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toContain("environment, synced and protected.");
    expect(screen.getAllByRole("link", { name: "Homebrew" })).toHaveLength(2);

    expect(
      screen.getByLabelText(
        "Copy install command: brew install raulmoracode/tap/brewsnap",
      ),
    ).toBeDefined();

    const github = screen.getByLabelText("Stars on GitHub");
    expect(github.getAttribute("href")).toBe(
      "https://github.com/raulmoracode/BrewSnap",
    );

    const badge = screen.getByLabelText(
      "BrewSnap — part of raulmoracode ecosystem",
    );
    expect(badge.getAttribute("href")).toBe("https://raulmoracode.com");

    const video = container.querySelector("video");
    expect(video?.getAttribute("src")).toBe("/demo.mp4");
  });
});
