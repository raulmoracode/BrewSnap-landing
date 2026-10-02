export const COMPANY = {
  NAME: "BrewSnap",
  SHORT_NAME: "BrewSnap",
  MARKETING_URL: "https://raulmoracode.github.io/BrewSnap",
  DOCS_URL: "https://github.com/raulmoracode/BrewSnap",
  GITHUB_URL: "https://github.com/raulmoracode/BrewSnap",
  GITHUB_REPO: "raulmoracode/BrewSnap",
  STATUS_URL: "https://status.raulas.dev",
  TRUST_URL: "https://raulmoracode.github.io/BrewSnap/privacy/",
  MAIL_TO: "mailto:raulmoracode@gmail.com",
  X_URL: "https://x.com/raulmoracode",
  YOUTUBE_URL: "https://www.youtube.com/@raulmoracode",
  LINKEDIN_URL: "https://www.linkedin.com/in/raulmoracode",
  DISCORD_URL: "https://discord.gg/raulmoracode",
  FOUNDERS_EMAIL: "raulmoracode@gmail.com",
  REPORT_ISSUE_URL: "https://github.com/raulmoracode/BrewSnap/issues/new",
  LICENSE: "MIT",
  LICENSE_URL: "https://github.com/raulmoracode/BrewSnap/blob/main/LICENSE",
} as const;

export const THEME_STORAGE_KEY = "brewsnap-theme";
export const POSTHOG_COOKIE_NAME = "brewsnap_phc_";

export const OPEN_ROLES = [] as {
  title: string;
  url: string;
  location: string;
}[];

export const PLATFORMS = {
  MACOS: "macos",
  WINDOWS: "windows",
  LINUX: "linux",
} as const;

export const GITHUB_STARS_URL =
  "https://api.github.com/repos/raulmoracode/BrewSnap";

export const DOWNLOAD_URL = "https://github.com/raulmoracode/BrewSnap/releases";
export const DOWNLOAD_URL_MAC_ARM64 =
  "https://github.com/raulmoracode/BrewSnap/releases/latest/download/brewsnap-darwin-arm64.dmg";
export const DOWNLOAD_URL_MAC_X64 =
  "https://github.com/raulmoracode/BrewSnap/releases/latest/download/brewsnap-darwin-x64.dmg";
export const DOWNLOAD_URL_WINDOWS =
  "https://github.com/raulmoracode/BrewSnap/releases/latest/download/brewsnap-win32-x64.exe";
export const DOWNLOAD_URL_LINUX =
  "https://github.com/raulmoracode/BrewSnap/releases/latest/download/brewsnap-linux-x64.AppImage";

export const IOS_APP_STORE_URL =
  "https://apps.apple.com/app/brewsnap/id1234567890";

export const ANDROID_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.raulmoracode.brewsnap";

export const TAGLINE = "Your Homebrew environment, synced and protected.";
export const HERO_SUBHEADLINE =
  "Native macOS app that exports your Homebrew state to JSON and automatically syncs it to a private GitHub repository.";
export const HERO_SECONDARY_SUBHEADLINE =
  "Scan your formulae, casks, taps, and services. Generate a clean, versioned JSON. Sync with one click. No git commands needed.";

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Download",
    href: "https://github.com/raulmoracode/BrewSnap/releases",
  },
  { label: "GitHub", href: "https://github.com/raulmoracode/BrewSnap" },
] as const;
