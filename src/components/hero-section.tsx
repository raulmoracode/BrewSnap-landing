import { CopyInstallCommand } from "@/components/copy-install-command";
import { DownloadButton } from "@/components/download-button";
import { PartOfRaulmoracode } from "@/components/part-of-raulmoracode";
import { ProductDemo } from "@/components/product-demo";
import { StarGithubButton } from "@/components/star-github-button";
import { COMPANY, DOWNLOAD_URL } from "@/lib/constants";

const INSTALL_COMMAND = "brew install raulmoracode/tap/brewsnap";

// Same amber the hero uses for the italic Homebrew highlight.
const HIGHLIGHT_COLOR = "#FBB040";

export function HeroSection() {
  return (
    <div className="relative">
      <div className="relative flex flex-col items-center overflow-hidden pt-24 pb-8 sm:pt-32 sm:pb-10 lg:pt-36 lg:pb-12">
        <div className="relative mx-auto w-full px-4 sm:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="space-y-5 sm:space-y-7 select-none">
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-normal tracking-[-0.5px] leading-[0.98] text-foreground max-w-6xl mx-auto text-balance">
                Your{" "}
                <a
                  href="https://brew.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins text-[#FBB040] italic"
                >
                  Homebrew
                </a>{" "}
                environment, synced and protected.
              </h1>
              <p
                id="hero-subheadline"
                className="text-base sm:text-xl font-normal leading-8 text-muted-foreground max-w-4xl mx-auto text-balance"
              >
                Native macOS app that exports your{" "}
                <a
                  href="https://brew.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins text-[#FBB040] italic"
                >
                  Homebrew
                </a>{" "}
                state to JSON and automatically syncs it to a private GitHub
                repository.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-6 sm:mt-8">
              <DownloadButton href={DOWNLOAD_URL} />
              <StarGithubButton repoUrl={COMPANY.GITHUB_URL} />
            </div>

            <CopyInstallCommand command={INSTALL_COMMAND} />
          </div>

          <div className="mt-12 flex justify-center mb-2 sm:mt-16 lg:mt-20">
            <PartOfRaulmoracode
              project={COMPANY.SHORT_NAME}
              highlightColor={HIGHLIGHT_COLOR}
            />
          </div>

          <div className="relative w-full max-w-7xl mx-auto">
            <ProductDemo />
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-25"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, var(--background) 100%)",
        }}
      />
    </div>
  );
}
