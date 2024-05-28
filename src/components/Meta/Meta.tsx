import React from "react";

interface Props {
  description: string;
  title: string;
  image?: string;  
}

const Meta: React.FC<Props> = ({ description, title, image }: Props) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={description} />
    <meta property="og:url" content="https://alanoud.dev/posts/open-source-community-role" />
    {image && (
      <>
        <meta property="og:image" content="https://alanoud.dev/static/imgonline-com-ua-resize-eJfvVtq26BE1f.jpg" />
        <meta name="twitter:image" content="https://alanoud.dev/static/imgonline-com-ua-resize-eJfvVtq26BE1f.jpg" />
      </>
    )}
  </>
);

export default Meta;
