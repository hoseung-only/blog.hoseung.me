import { usePlatform, Platform } from "../../../hooks/usePlatform";

export function PlatformSwitch({ desktop, mobile }: { desktop(): JSX.Element; mobile(): JSX.Element }) {
  const platform = usePlatform();

  switch (platform) {
    case Platform.Desktop: {
      return desktop();
    }
    case Platform.Mobile: {
      return mobile();
    }
  }
}
