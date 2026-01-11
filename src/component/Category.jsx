import Wrapper from "./Wrapper"
import { useNewsContext } from "../context/NewsContext"

const Category = ({ className }) => {
  const { setNews, fetchNews } = useNewsContext()

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ]

  const handleClick = async (e) => {
    const cat = e.currentTarget.value
    const data = await fetchNews(`/everything?q=${cat}`)

    if (data?.articles) {
      setNews(data.articles)
    }
  }

  return (
    <div className={className}>
      <Wrapper>
        <div className="max-w-full w-fit m-auto flex overflow-x-auto px-4 gap-5">
          {categories.map((category) => (
            <button
              key={category}
              value={category}
              onClick={handleClick}
              className="btn btn-primary"
            >
              {category}
            </button>
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

export default Category
