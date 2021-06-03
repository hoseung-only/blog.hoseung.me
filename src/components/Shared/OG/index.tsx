import { Helmet } from "react-helmet";

interface OGProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function OG({ title, description, image, url, type }: OGProps) {
  return (
    <Helmet>
      <meta property="og:title" content={title ?? "장호승 개발 블로그"} />
      <meta property="og:description" content={description ?? "Learning, Recording, Sharing"} />
      <meta property="og:image" content={image ?? ""} />
      <meta property="og:url" content={url ?? window.location.href} />
      <meta property="og:type" content={type ?? "website"} />
    </Helmet>
  );
}
