import Layout from "../components/Layout"
import ArticleList from "../components/ArticleList"
export default function Sports({ articles }) {
  const ticker = (articles || []).slice(0,6).map(a => a.title)
  return (
    <Layout tickerHeadlines={ticker}>
      <h2 style={{fontSize:20}}>Sports — Latest Updates</h2>
      <ArticleList articles={articles} />
    </Layout>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL || ""}/api/news?category=sports`)
  const j = await res.json().catch(()=>({articles:[]}))
  return { props: { articles: j.articles || [] } }
}
