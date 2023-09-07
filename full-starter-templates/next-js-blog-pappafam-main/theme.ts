import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--myhomecooked-brand": "#F7AB0A",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  // Base Theme Colors+
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  // Default Button

  "--brand-primary": props["--myhomecooked-brand"],
  "--default-button-primary-color": props["--my-yellow"],
  "--default-button-success-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  // state

  "--state-info-color": props["--myhomecooked-brand"],
  "--state-success-color": props["--myhomecooked-brand"],
  "--state-warning-color": props["--myhomecooked-brand"],
  "--state-danger-color": props["--myhomecooked-brand"],

  // Navbar
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],
  "--focus-color": props["--myhomecooked-brand"],
});
