import Wrapper from "./Wrapper"
import { useNewsContext } from "../context/NewsContext"

const Category = ({ className }) => {
  const { setNews, fetchNews } = useNewsContext()

  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ]

  const handleClick = async (e) => {
    const cat = e.currentTarget.value.toLowerCase()
    const data = await fetchNews(`/everything?q=${cat}`)

    if (data?.articles) {
      setNews(data.articles)
    }
  }

  return (
    <div className={className}>
      <Wrapper>
        <div className="flex flex-wrap justify-center gap-3 py-4">
          {categories.map((category) => (
            <button
              key={category}
              value={category}
              onClick={handleClick}
              className="btn btn-outline btn-primary"
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
