import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <Link to="/" className="link">
        <h3>Movies App</h3>
        </Link>
    </header>
  )
}

export default Header