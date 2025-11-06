import Layout from "../components/Layout"
import ArticleList from "../components/ArticleList"

export default function World({ articles }) {
  const ticker = (articles || []).slice(0, 6).map(a => a.title)
  return (
    <Layout tickerHeadlines={ticker}>
      <h2>World — Latest Headlines</h2>
      <ArticleList articles={articles} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const base = "https://livepulse-news-przw.vercel.app"
  try {
    const res = await fetch(`${base}/api/news?category=world`)
    const data = await res.json()
    return { props: { articles: data.articles || [] } }
  } catch (err) {
    console.error("Fetch failed", err)
    return { props: { articles: [] } }
  }
}


