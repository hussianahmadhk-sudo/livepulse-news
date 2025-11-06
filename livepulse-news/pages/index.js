import Layout from "../components/Layout"
import ArticleList from "../components/ArticleList"

export default function Home({ articles }) {
  const ticker = (articles || []).slice(0, 6).map(a => a.title)
  return (
    <Layout tickerHeadlines={ticker}>
      <h2>India — Latest Headlines</h2>
      <ArticleList articles={articles} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const key = process.env.NEWSAPI_KEY // pulled from Vercel
  const url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=30&apiKey=${key}`
  try {
    const res = await fetch(url)
    const data = await res.json()
    return { props: { articles: data.articles || [] } }
  } catch (err) {
    console.error("Fetch failed:", err)
    return { props: { articles: [] } }
  }
}





