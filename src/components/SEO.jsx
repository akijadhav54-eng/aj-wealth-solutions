// Per-page SEO. Drop <SEO title="..." description="..." /> at the top of
// any page to override the default meta tags for that route.
import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, path = '' }) {
  const url = `https://ajwealthsolutions.vercel.app${path}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  )
}
