import { Helmet } from 'react-helmet-async';

const defaultMeta = {
  title: 'Aarush Gupta | Student Entrepreneur',
  description:
    "Aarush Gupta's portfolio highlighting entrepreneurship, innovation, leadership, and practical learning.",
  url: 'https://aarushgupta.is-a.dev',
  image: 'https://aarushgupta.is-a.dev/images/connect.jpg',
};

const Seo = ({
  title,
  description,
  image,
  url,
  preloadImages = [],
  noIndex = false,
  children,
}) => {
  const metaTitle = title ? `${title} · Aarush Gupta` : defaultMeta.title;
  const metaDescription = description ?? defaultMeta.description;
  const metaUrl = url ?? defaultMeta.url;
  const metaImage = image ?? defaultMeta.image;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta
        name="robots"
        content={noIndex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large'}
      />
      <meta name="author" content="Aarush Gupta" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Aarush Gupta" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:alt" content={metaTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@aarushgupta" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <link rel="canonical" href={metaUrl} />
      {preloadImages.map((href) => (
        <link key={href} rel="preload" as="image" href={href} />
      ))}
      {children}
    </Helmet>
  );
};

export default Seo;
