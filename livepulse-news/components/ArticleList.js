export default function ArticleList({ articles = [] }) {
  if (!articles || articles.length === 0) {
    return <p>No articles right now.</p>
  }
  return (
    <section>
      {articles.map((a, idx) => (
        <article key={a.url || idx} className="article">
          <div className="thumb">
            <img src={a.urlToImage || `https://source.unsplash.com/300x200/?news`} alt={a.title || "thumb"} style={{borderRadius:6}} />
          </div>
          <div style={{flex:1}}>
            <a href={a.url} target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"#111"}}><h3 style={{margin:0,fontSize:16}}>{a.title}</h3></a>
            <p style={{margin:"6px 0",color:"#555"}}>{a.description || (a.content ? a.content.slice(0,200) + "…" : "")}</p>
            <div className="meta">{a.source?.name} • { new Date(a.publishedAt).toLocaleString() }</div>
          </div>
        </article>
      ))}
      <div className="ad-placeholder">[AdSense Ad Slot: feed_middle]</div>
    </section>
  )
}
