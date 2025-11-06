import Link from "next/link"
import { useRouter } from "next/router"
export default function Layout({ children, tickerHeadlines = [] }) {
  const router = useRouter()
  const route = router.pathname
  const NavBtn = ({ href, label }) => (
    <Link href={href}><a style={{ marginLeft: 8, padding: "8px 10px", borderRadius:6, border:"1px solid #eee", background: route===href? "#111":"#fff", color: route===href? "#fff":"#111", textDecoration: "none" }}>{label}</a></Link>
  )
  return (
    <div className="container">
      <header className="header" style={{marginBottom:12}}>
        <div>
          <div className="logo">📰 LivePulse News</div>
          <div className="tagline">Real Stories. Real Time.</div>
        </div>
        <nav className="nav">
          <NavBtn href="/" label="India" />
          <NavBtn href="/world" label="World" />
          <NavBtn href="/sports" label="Sports" />
          <NavBtn href="/bollywood" label="Bollywood" />
        </nav>
      </header>

      <div className="ticker">
        <marquee behavior="scroll" scrollamount="4">{tickerHeadlines.length ? tickerHeadlines.join('  •  ') : 'Loading latest headlines...'}</marquee>
      </div>

      {/* Top Ad Slot */}
      <div className="ad-placeholder">[AdSense Ad Slot: top_banner]</div>

      <main>{children}</main>

      {/* Footer Ad Slot */}
      <div className="ad-placeholder">[AdSense Ad Slot: footer_banner]</div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} LivePulse News • India + World • Contact: livepulze233@gmail.com</p>
      </footer>
    </div>
  )
}
