'use client'

import Link from 'next/link'
import { useState } from 'react'

interface ArchiveDrawerProps {
  archiveByYear: { year: number; count: number }[]
  selectedYear: number | null
  totalCount: number
}

export function ArchiveDrawer({ archiveByYear, selectedYear, totalCount }: ArchiveDrawerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Toggle button - fixed on right edge */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="archive-toggle-btn"
        aria-label="Open archive"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span>Archive</span>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="archive-backdrop"
          onClick={() => setIsOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setIsOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close archive"
        />
      )}

      {/* Slide-in panel */}
      <aside
        className={`archive-panel ${isOpen ? 'archive-panel-open' : ''}`}
        aria-hidden={!isOpen}
        aria-modal={isOpen}
        role="dialog"
      >
        <div className="archive-panel-header">
          <h5 className="fw-bold mb-0">Archive by Year</h5>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="archive-close-btn"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="archive-panel-body">
          <ul className="list-unstyled mb-0">
            <li className="mb-2">
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className={`archive-link d-flex justify-content-between align-items-center py-2 px-3 rounded ${
                  !selectedYear ? 'archive-link-active' : ''
                }`}
              >
                All
                <span className="badge bg-secondary rounded-pill">{totalCount}</span>
              </Link>
            </li>
            {archiveByYear.map(({ year, count }) => (
              <li key={year} className="mb-2">
                <Link
                  href={`/blog?year=${year}`}
                  onClick={() => setIsOpen(false)}
                  className={`archive-link d-flex justify-content-between align-items-center py-2 px-3 rounded ${
                    selectedYear === year ? 'archive-link-active' : ''
                  }`}
                >
                  {year}
                  <span className="badge bg-secondary rounded-pill">{count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}
