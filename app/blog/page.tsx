import Image from 'next/image'
import Link from 'next/link'
import { blogPosts, getArchiveByYear } from './data'
import { ArchiveDrawer } from './ArchiveDrawer'

export const metadata = {
  title: 'Blog | Algobasket',
  description: 'Stay updated with our latest releases, fixes, and product updates.',
}

export default function Blog({
  searchParams = {},
}: {
  searchParams?: { year?: string }
}) {
  const selectedYear = searchParams?.year ? parseInt(searchParams.year, 10) : null
  const archiveByYear = getArchiveByYear()

  const filteredPosts = selectedYear
    ? blogPosts.filter((post) => (post.year ?? new Date(post.date).getFullYear()) === selectedYear)
    : blogPosts

  return (
    <>
      {/* Hero */}
      <section className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-8">
              <h1 className="display-6 fw-bolder text-white mb-3">Blog</h1>
              <p className="lead text-white-50 mb-0">
                New releases, fixes, and updates from the Algobasket team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Archive slide-out drawer */}
      <ArchiveDrawer
        archiveByYear={archiveByYear}
        selectedYear={selectedYear}
        totalCount={blogPosts.length}
      />

      {/* Posts Grid */}
      <section className="py-5">
        <div className="container px-5">
          <div className="row gx-4 gx-lg-4">
            {filteredPosts.map((post) => (
              <div key={post.id} className="col-md-6 col-lg-4 mb-5">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-decoration-none text-dark d-block h-100"
                >
                  <article className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden blog-card">
                    <div
                      className="card-img-top position-relative"
                      style={{ aspectRatio: '16/10', overflow: 'hidden' }}
                    >
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        className="object-fit-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="position-absolute top-0 start-0 m-3 badge bg-primary bg-opacity-90 rounded-pill px-3 py-2">
                        {post.category}
                      </span>
                    </div>
                    <div className="card-body p-4">
                      <h5 className="card-title fw-bold mb-2">{post.title}</h5>
                      <p className="card-text text-muted small mb-3">{post.excerpt}</p>
                      <div className="d-flex align-items-center text-muted small">
                        <time dateTime={post.date}>{post.date}</time>
                        <span className="mx-2">·</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
