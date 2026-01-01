'use client'

import Link from 'next/link'

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <Link className="navbar-brand" href="/">Algobasket</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/open-source">Open Source</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownPortfolio"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Portfolio
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                <li>
                  <Link className="dropdown-item" href="/portfolio-overview">Portfolio Overview</Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/portfolio-item">Portfolio Item</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/premium">Premium Projects</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownBlog"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Updates
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                <li>
                  <Link className="dropdown-item" href="/blog-home">New Releases & Fixes</Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/blog-post">Open Source Updates</Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/blog-post">Premium Updates</Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/blog-post">Community Issues</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/faq">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

