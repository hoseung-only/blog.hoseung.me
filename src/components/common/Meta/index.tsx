import { Helmet } from "react-helmet";

interface MetaProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

export function Meta(props: MetaProps) {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />

      <link rel="canonical" href={props.url} />

      <meta property="og:locale" content="ko_KR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.url} />
      <meta property="og:site_name" content="장호승 개발 블로그" />
      <meta property="og:image" content={props.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.image} />
      <meta name="twitter:description" content={props.description} />
    </Helmet>
  );
}
