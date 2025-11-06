import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import ArticleList from "../components/ArticleList"

export default function Home() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch("/api/news?category=india")
        const data = await res.json()
        setArticles(data.articles || [])
      } catch (err) {
        console.error("Failed to fetch news:", err)
      } finally {
        setLoading(false)
      }
    }
    loadNews()
  }, [])

  const ticker = articles.slice(0, 6).map(a => a.title)

  return (
    <Layout tickerHeadlines={ticker}>
      <h2>India — Latest Headlines</h2>
      {loading ? <p>Loading latest news...</p> : <ArticleList articles={articles} />}
    </Layout>
  )
}







