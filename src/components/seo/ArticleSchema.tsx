'use client';

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  imageUrl?: string;
}

export default function ArticleSchema({
  title,
  description,
  url,
  author,
  publishedDate,
  modifiedDate,
  imageUrl = 'https://chicagocommercialcleaner.com/images/og-image.jpg',
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Chicago Commercial Cleaner',
      logo: {
        '@type': 'ImageObject',
        url: 'https://chicagocommercialcleaner.com/images/logo.png',
      },
    },
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    image: imageUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
