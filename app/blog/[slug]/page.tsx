import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '../data'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="py-5">
      <div className="container px-5">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/" className="text-decoration-none">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/blog" className="text-decoration-none">Blog</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">{post.title}</li>
          </ol>
        </nav>

        <article>
          <header className="mb-4">
            <span className="badge bg-primary rounded-pill mb-3">{post.category}</span>
            <h1 className="display-6 fw-bolder mb-3">{post.title}</h1>
            <div className="text-muted d-flex align-items-center gap-3">
              <time dateTime={post.date}>{post.date}</time>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="position-relative rounded-3 overflow-hidden mb-5" style={{ aspectRatio: '21/9' }}>
            <Image
              src={post.image}
              alt=""
              fill
              className="object-fit-cover"
              priority
              sizes="100vw"
            />
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="fs-5 text-muted">
                <p className="mb-4">{post.excerpt}</p>
                <p className="mb-4">
                  Full blog post content goes here. This is a placeholder for the blog post content.
                  You can add more paragraphs and content as needed for your blog posts.
                </p>
                <p className="mb-4">
                  Connect your CMS or add dynamic content to display the full article body.
                </p>
              </div>
              <Link href="/blog" className="btn btn-primary mt-4">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
