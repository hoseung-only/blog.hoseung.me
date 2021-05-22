import { PlatformSwitch } from "../../components/PlatformSwitch";
import { Main as Desktop, MainPlaceholder as DesktopPlaceholder } from "./Desktop";
import { Main as Mobile, MainPlaceholder as MobilePlaceholder } from "./Mobile";

export function Main() {
  return <PlatformSwitch desktop={() => <Desktop />} mobile={() => <Mobile />} />;
}

export function MainPlaceholder() {
  return <PlatformSwitch desktop={() => <DesktopPlaceholder />} mobile={() => <MobilePlaceholder />} />;
}
