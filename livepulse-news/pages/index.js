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
  const base = "https://livepulse-news-przw.vercel.app" // your live domain
  try {
    const res = await fetch(`${base}/api/news?category=india`, {
      headers: { "Cache-Control": "no-cache" },
    })
    const data = await res.json()

    if (!data.articles || data.articles.length === 0) {
      console.warn("⚠ No articles returned from API")
    }

    return {
      props: {
        articles: data.articles || [],
      },
    }
  } catch (err) {
    console.error("Error fetching news:", err)
    return { props: { articles: [] } }
  }
}



