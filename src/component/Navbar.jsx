import { useRef } from "react"
import Wrapper from "./Wrapper"
import { useNewsContext } from "../context/NewsContext"

const Navbar = ({ className }) => {
  const { setNews, fetchNews } = useNewsContext()
  const timer = useRef(null)

  const searchNews = (e) => {
    const searchValue = e.target.value
    if (!searchValue) return

    clearTimeout(timer.current)

    timer.current = setTimeout(async () => {
      const data = await fetchNews(`/everything?q=${searchValue}`)
      setNews(data.articles)
    }, 800)
  }

  return (
    <div className={`bg-base-200 sticky top-0 z-50 ${className}`}>
      <Wrapper>
        <div className="navbar shadow-md rounded-xl mt-2">
          <div className="flex-1">
            <a className="btn btn-ghost text-2xl font-bold">
              📰 Morrish News
            </a>
          </div>

          <div className="flex gap-2 items-center">
            <input
              onChange={searchNews}
              type="text"
              placeholder="Search news..."
              className="input input-bordered w-32 md:w-64"
            />

            <button className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Navbar
