import fetch from "node-fetch"
export default async function handler(req, res) {
  const key = process.env.NEWSAPI_KEY
  if (!key) return res.status(500).json({ error: "NEWSAPI_KEY not configured" })
  const category = (req.query.category || "india").toString()
  let url = ""
  if (category === "india") {
    url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=30&apiKey=${key}`
  } else if (category === "sports") {
    url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=30&apiKey=${key}`
  } else if (category === "bollywood") {
    url = `https://newsapi.org/v2/everything?q=bollywood%20OR%20film%20OR%20movies&pageSize=30&sortBy=publishedAt&language=en&apiKey=${key}`
  } else if (category === "world") {
    url = `https://newsapi.org/v2/top-headlines?language=en&pageSize=30&apiKey=${key}`
  } else {
    url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=30&apiKey=${key}`
  }
  try {
    const r = await fetch(url)
    const json = await r.json()
    return res.status(200).json({ articles: json.articles || [] })
  } catch (err) {
    return res.status(500).json({ error: "fetch_failed", detail: String(err) })
  }
}
