'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  useEffect(() => {
    const textElement = document.getElementById('animatedText')
    if (!textElement) return

    const texts = ['Made With 🩷 India', 'Made For The 🩷 World']
    let index = 0

    function switchText() {
      if (textElement) {
        textElement.style.opacity = '0'
        setTimeout(() => {
          if (textElement) {
            textElement.textContent = texts[index]
            textElement.style.opacity = '1'
            index = (index + 1) % texts.length
          }
        }, 500)
      }
    }

    const interval = setInterval(switchText, 3000)
    switchText()

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="footer text-white py-4" style={{ backgroundColor: 'rgb(0, 0, 5)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="fw-bold text-light">
              <img src="/assets/logo2.png" alt="Logo" style={{ maxWidth: '150px' }} />
            </h2>
            <p>A platform for open-source and premium products.</p>
            <p>
              <i className="bi bi-whatsapp"></i> +91-8638720242 <br />
              <i className="bi bi-envelope"></i> ask@algobasket.org
            </p>
          </div>

          <div className="col-md-4">
            <h5>More Info</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/contributors" className="text-decoration-none text-light">
                  Contributors
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-decoration-none text-light">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-decoration-none text-light">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-decoration-none text-light">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 text-md-end">
            <h5>Follow us</h5>
            <a href="#" className="btn btn-outline-light btn-sm">
              <i className="bi bi-github"></i>
            </a>
            <a href="#" className="btn btn-outline-light btn-sm">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>

        <hr className="text-light" />

        <div className="text-center">
          <p id="animatedText" className="fw-bold text-light"></p>
        </div>
      </div>
    </footer>
  )
}

