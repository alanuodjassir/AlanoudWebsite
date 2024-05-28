import React from "react";

interface Props {
  description: string;
  image?: string;
  title: string;
}

const Meta: React.FC<Props> = ({ description, title, image }: Props) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="og:title" content={title} />
    <meta name="og:type" content="website" />
    <meta name="og:description" content={description} />
    <meta property="og:image" content="https://alanoud.dev/static/a654b63461c1e58e4d6e1f7ad177f12d/39c14/photo.avif" />

    {image ? (
      <>
        <meta name="image" content={image} />
        <meta name="og:image" content={image} />
        <meta name="twitter:image" content={image} />
      </>
    ) : null}
  </>
);

export default Meta;
