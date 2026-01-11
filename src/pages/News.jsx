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
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader />
      </div>
    )
  }

  return (
    <Wrapper>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 py-6">
        {news.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
            <figure>
              <img
                src={item.urlToImage || "https://via.placeholder.com/400"}
                alt="news"
                className="h-48 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-lg line-clamp-2">
                {item.title}
              </h2>

              <p className="text-sm line-clamp-3">
                {item.description || "No description available."}
              </p>

              <div className="card-actions justify-end">
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
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default News
