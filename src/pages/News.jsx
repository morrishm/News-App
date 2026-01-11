import { useEffect } from "react"
import { useNewsContext } from "../context/NewsContext"
import Wrapper from "../component/Wrapper"
import Loader from "../component/Loader"

const News = () => {
  const { news, setNews, fetchNews, loading } = useNewsContext()

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNews("/everything?q=india")

      if (data?.articles) {
        setNews(data.articles)
      }
    }

    loadNews()
  }, [])   // 👈 This makes it run when page opens

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader />
      </div>
    )
  }

  return (
    <Wrapper>
      <div className="grid md:grid-cols-3 gap-4">
        {news.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={item.urlToImage || "https://via.placeholder.com/300"}
                alt="news"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>

              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default News
