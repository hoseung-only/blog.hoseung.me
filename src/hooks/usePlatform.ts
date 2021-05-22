import { useMedia } from "use-media";

export enum Platform {
  Desktop = "desktop",
  Mobile = "mobile",
}

const desktopMediaQuery = "(min-width: 1024px)";

export function usePlatform() {
  return useMedia(desktopMediaQuery, window.matchMedia(desktopMediaQuery).matches) ? Platform.Desktop : Platform.Mobile;
}
