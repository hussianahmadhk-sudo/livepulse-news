import Layout from "../components/Layout"
import ArticleList from "../components/ArticleList"
export default function Home({ articles }) {
  const ticker = (articles || []).slice(0,6).map(a => a.title)
  return (
    <Layout tickerHeadlines={ticker}>
      <h2 style={{fontSize:20}}>India — Latest</h2>
      <ArticleList articles={articles} />
    </Layout>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL || ""}/api/news?category=india`)
  const j = await res.json().catch(()=>({articles:[]}))
  return { props: { articles: j.articles || [] } }
}
