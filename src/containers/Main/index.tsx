import { OG } from "../../components/Shared/OG";
import { Main as Desktop, MainPlaceholder as DesktopPlaceholder } from "./Desktop";
import { Main as Mobile, MainPlaceholder as MobilePlaceholder } from "./Mobile";
import { PlatformSwitch } from "../../components/Shared/PlatformSwitch";

export function Main() {
  return (
    <>
      <OG />
      <PlatformSwitch desktop={() => <Desktop />} mobile={() => <Mobile />} />
    </>
  );
}

export function MainPlaceholder() {
  return <PlatformSwitch desktop={() => <DesktopPlaceholder />} mobile={() => <MobilePlaceholder />} />;
}
