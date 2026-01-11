import Wrapper from "./Wrapper"

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer bg-base-200 text-base-content p-10 mt-10 rounded-xl">
        <aside>
          <h2 className="text-xl font-bold">📰 Morrish News</h2>
          <p>Stay updated with the latest news worldwide.</p>
        </aside>

        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Categories</a>
          <a className="link link-hover">Contact</a>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">LinkedIn</a>
          <a className="link link-hover">GitHub</a>
        </nav>
      </footer>
    </Wrapper>
  )
}

export default Footer
