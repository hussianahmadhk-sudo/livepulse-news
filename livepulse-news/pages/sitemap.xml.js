export async function getServerSideProps({ res }) {
  const base = process.env.NEXT_PUBLIC_BASEURL || `https://${process.env.VERCEL_URL || "localhost:3000"}`
  const pages = ["","world","sports","bollywood"]
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(p=>`<url><loc>${base}/${p}</loc><changefreq>hourly</changefreq></url>`).join("")}
  </urlset>`
  res.setHeader("Content-Type","text/xml")
  res.write(xml)
  res.end()
  return { props: {} }
}
export default function Sitemap() { return null }
