import Layout from "../components/Layout"
import ArticleList from "../components/ArticleList"

export default function Sports({ articles }) {
  const ticker = (articles || []).slice(0, 6).map(a => a.title)
  return (
    <Layout tickerHeadlines={ticker}>
      <h2>Sports — Latest Updates</h2>
      <ArticleList articles={articles} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const base = "https://livepulse-news-przw.vercel.app"
  try {
    const res = await fetch(`${base}/api/news?category=sports`, {
      headers: { "Cache-Control": "no-cache" },
    })
    const data = await res.json()
    return { props: { articles: data.articles || [] } }
  } catch (err) {
    console.error("Error fetching news:", err)
    return { props: { articles: [] } }
  }
}




