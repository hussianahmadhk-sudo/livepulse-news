import fetch from "node-fetch"

export default async function handler(req, res) {
  const key = process.env.NEWSAPI_KEY
  const category = req.query.category || "india"
  let url = ""

  if (category === "india") {
    // broader search if Indian headlines are empty
    url = `https://newsapi.org/v2/everything?q=india&language=en&pageSize=30&sortBy=publishedAt&apiKey=${key}`
  } else if (category === "sports") {
    url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=30&apiKey=${key}`
  } else if (category === "bollywood") {
    url = `https://newsapi.org/v2/everything?q=bollywood%20OR%20film%20OR%20movie&language=en&pageSize=30&sortBy=publishedAt&apiKey=${key}`
  } else if (category === "world") {
    url = `https://newsapi.org/v2/top-headlines?language=en&pageSize=30&apiKey=${key}`
  } else {
    url = `https://newsapi.org/v2/top-headlines?language=en&pageSize=30&apiKey=${key}`
  }

  try {
    const r = await fetch(url)
    const j = await r.json()
    if (!j.articles || j.articles.length === 0) {
      // fallback to GNews if NewsAPI returns nothing
      const g = await fetch(
        `https://gnews.io/api/v4/search?q=${category}&lang=en&country=in&max=20&apikey=1d85fae12efc7e49e19d5f90c429e94d`
      )
      const gj = await g.json()
      return res.status(200).json({ articles: gj.articles || [] })
    }
    return res.status(200).json({ articles: j.articles })
  } catch (e) {
    console.error("API error:", e)
    res.status(500).json({ articles: [] })
  }
}


