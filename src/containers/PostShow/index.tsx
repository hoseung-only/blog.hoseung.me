import { useParams } from "react-router";

import { useAPIQuery } from "../../hooks/useAPIQuery";

import { OG } from "../../components/Shared/OG";
import { PostShow as Desktop, PostShowPlaceholder as DesktopPlaceholder } from "./Desktop";
import { PostShow as Mobile, PostShowPlaceholder as MobilePlaceholder } from "./Mobile";
import { PlatformSwitch } from "../../components/Shared/PlatformSwitch";

export function PostShow() {
  const { postId } = useParams<{ postId: string }>();
  const post = useAPIQuery("getPost", { id: Number(postId) }, { suspense: true }).data;
  return (
    <>
      <OG title={post.title} description={post.summary} image={post.coverImageURL} />
      <PlatformSwitch desktop={() => <Desktop post={post} />} mobile={() => <Mobile post={post} />} />
    </>
  );
}

export function PostShowPlaceholder() {
  return <PlatformSwitch desktop={() => <DesktopPlaceholder />} mobile={() => <MobilePlaceholder />} />;
}
