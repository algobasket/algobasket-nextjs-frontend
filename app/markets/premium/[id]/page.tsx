'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { premiumProducts } from '../data'

export default function PremiumProductPage() {
  const params = useParams()
  const product = premiumProducts.find((p) => p.id === parseInt(params.id as string, 10))
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<'details' | 'comments' | 'support'>('details')
  const [extendSupport, setExtendSupport] = useState(false)

  if (!product) {
    return (
      <div className="text-center py-5">
        <p className="text-muted">Product not found</p>
        <Link href="/markets/premium" className="btn btn-primary">Back to Premium Market</Link>
      </div>
    )
  }

  const fullDesc = product.fullDescription || product.description
  const author = product.author ?? 'Algobasket'
  const recentlyUpdated = product.recentlyUpdated ?? false
  const price = product.price ?? 29
  const license = product.license ?? 'Regular License'
  const supportMonths = product.supportMonths ?? 6

  return (
    <>
      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link href="/" className="text-decoration-none">Home</Link></li>
          <li className="breadcrumb-item"><Link href="/markets" className="text-decoration-none">Markets</Link></li>
          <li className="breadcrumb-item"><Link href="/markets/premium" className="text-decoration-none">Premium Market</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
        </ol>
      </nav>

      {/* Product Header */}
      <div className="mb-4">
        <h1 className="h2 fw-bold mb-2">{product.title}</h1>
        <div className="d-flex align-items-center gap-3 flex-wrap">
          <span className="text-muted">By {author}</span>
          {recentlyUpdated && (
            <span className="badge bg-success d-flex align-items-center gap-1">
              <span className="small">✓</span> Recently Updated
            </span>
          )}
        </div>
      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
          >
            Item Details
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link ${activeTab === 'comments' ? 'active' : ''}`}
            onClick={() => setActiveTab('comments')}
          >
            Comments 0
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link ${activeTab === 'support' ? 'active' : ''}`}
            onClick={() => setActiveTab('support')}
          >
            Support
          </button>
        </li>
      </ul>

      <div className="row g-4">
        {/* Left Column - Product Media & Description */}
        <div className="col-lg-8">
          <div className="d-flex gap-3 mb-4">
            <div className="flex-shrink-0 d-flex flex-column gap-2">
              <button type="button" className="btn btn-outline-secondary btn-sm p-2" title="Add to wishlist">
                <i className="bi bi-heart" />
              </button>
              <button type="button" className="btn btn-outline-secondary btn-sm p-2" title="Add to collection">
                <i className="bi bi-folder" />
              </button>
            </div>
            <div className="flex-grow-1">
              <div className="position-relative rounded overflow-hidden bg-dark mb-2" style={{ aspectRatio: '16/9' }}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-fit-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-outline-primary btn-sm">
                  <i className="bi bi-display me-1" /> Live Preview
                </button>
                <button type="button" className="btn btn-outline-secondary btn-sm">
                  <i className="bi bi-images me-1" /> Screenshots
                </button>
              </div>
            </div>
          </div>

          {activeTab === 'details' && (
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">Description</h5>
                <p className="text-muted mb-0">{fullDesc}</p>
                <div className="mt-4 p-3 bg-light rounded">
                  <strong>Important:</strong> This is a premium product. Purchase includes {supportMonths} months of support and future updates.
                </div>
              </div>
            </div>
          )}
          {activeTab === 'comments' && (
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 text-center text-muted">
                <p className="mb-0">No comments yet. Be the first to leave a comment!</p>
              </div>
            </div>
          )}
          {activeTab === 'support' && (
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">Support</h5>
                <p className="text-muted mb-0">Premium products include {supportMonths} months of support. Contact us through the Algobasket support portal or email support@algobasket.com.</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Purchase Sidebar */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm sticky-top">
            <div className="card-body p-4">
              <div className="mb-3">
                <label className="form-label small text-muted">License</label>
                <select className="form-select">
                  <option>{license}</option>
                  <option>Extended License</option>
                </select>
              </div>
              <div className="mb-3">
                <span className="h2 fw-bold text-primary">${price}</span>
              </div>
              <ul className="list-unstyled small mb-3">
                <li className="mb-2"><i className="bi bi-check2 text-success me-2" /> Quality checked by Algobasket</li>
                <li className="mb-2"><i className="bi bi-check2 text-success me-2" /> Future updates</li>
                <li className="mb-2"><i className="bi bi-check2 text-success me-2" /> {supportMonths} months support from {author}</li>
              </ul>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="extendSupport"
                  checked={extendSupport}
                  onChange={(e) => setExtendSupport(e.target.checked)}
                />
                <label className="form-check-label small" htmlFor="extendSupport">
                  Extend support to 12 months <span className="text-decoration-line-through text-muted">$21</span> <strong>$9</strong>
                </label>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <button type="button" className="btn btn-outline-secondary" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                  <input type="number" className="form-control text-center" value={quantity} readOnly style={{ maxWidth: '60px' }} />
                  <button type="button" className="btn btn-outline-secondary" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
              <button type="button" className="btn btn-success w-100 mb-2">
                <i className="bi bi-cart me-2" /> Add to Cart
              </button>
              <p className="small text-muted mb-0">Price is in US dollars and excludes tax and handling fees</p>
            </div>
            <div className="card-footer bg-transparent border-top pt-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <span className="fw-semibold">{author}</span>
                <button type="button" className="btn btn-outline-primary btn-sm">View Portfolio</button>
              </div>
              <p className="small text-muted mb-1">Last Update {product.releaseDate}</p>
              <a href="#" className="small text-decoration-none">More Attributes</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
