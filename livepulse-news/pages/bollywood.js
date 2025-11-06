import Layout from "../components/Layout"
import ArticleList from "../components/ArticleList"

export default function Bollywood({ articles }) {
  const ticker = (articles || []).slice(0, 6).map(a => a.title)
  return (
    <Layout tickerHeadlines={ticker}>
      <h2>Bollywood — Entertainment Buzz</h2>
      <ArticleList articles={articles} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const key = process.env.NEWSAPI_KEY
  const url = `https://newsapi.org/v2/everything?q=bollywood%20OR%20film%20OR%20movie&language=en&pageSize=30&sortBy=publishedAt&apiKey=${key}`
  try {
    const res = await fetch(url)
    const data = await res.json()
    return { props: { articles: data.articles || [] } }
  } catch (err) {
    console.error("Fetch failed:", err)
    return { props: { articles: [] } }
  }
}




