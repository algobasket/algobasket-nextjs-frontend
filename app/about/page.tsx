import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
      {/* Header */}
      <header className="py-5">
        <div className="container px-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xxl-6">
              <div className="text-center my-5">
                <h1 className="fw-bolder mb-3">Building Together, Sharing the Future</h1>
                <p className="lead fw-normal text-muted mb-4">
                  Great things happen when people share ideas. Algobasket is all about open-source
                  innovation—where developers, creators, and problem-solvers come together to build
                  tools that make a difference. No gatekeeping, no limits—just pure collaboration.
                </p>
                <a className="btn btn-dark btn-lg" href="#scroll-target">
                  Read our story
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About section one */}
      <section className="py-5 bg-light" id="scroll-target">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <Image
                className="img-fluid rounded mb-5 mb-lg-0"
                src="/assets/Rust in 100 Seconds 1-3 screenshot.png"
                alt="..."
                width={600}
                height={400}
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bolder">How It All Started</h2>
              <p className="lead fw-normal text-muted mb-0">
                It all began with a simple idea: what if building and sharing software was easier
                for everyone? A few passionate developers came together to create Algobasket—a
                space where anyone can contribute, learn, and create something amazing. Now,
                we&apos;re growing fast, and the journey is just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About section two */}
      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-first order-lg-last">
              <Image
                className="img-fluid rounded mb-5 mb-lg-0"
                src="/assets/Rust in 100 Seconds 0-26 screenshot.png"
                alt="..."
                width={600}
                height={400}
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bolder">Where We&apos;re Headed</h2>
              <p className="lead fw-normal text-muted mb-0">
                We&apos;re always experimenting, learning, and improving. The goal? To create
                powerful, open-source tools that help people do more. Whether it&apos;s automation,
                APIs, or creative software, we&apos;re here to make tech more accessible and
                community-driven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team members section */}
      <section className="py-5 bg-light">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="fw-bolder">Our Open Source Contributors</h2>
            <p className="lead fw-normal text-muted mb-5">Collaborate, Contribute, Create.</p>
          </div>
          <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
            <div className="col mb-5 mb-5 mb-xl-0">
              <div className="text-center">
                <Image
                  className="img-fluid rounded-circle mb-4 px-4"
                  src="/assets/12.png"
                  alt="..."
                  width={200}
                  height={200}
                />
                <h5 className="fw-bolder">Algobasket</h5>
                <div className="fst-italic text-muted">Founder & CTO</div>
              </div>
            </div>
            <div className="col mb-5 mb-5 mb-xl-0">
              <div className="text-center">
                <Image
                  className="img-fluid rounded-circle mb-4 px-4"
                  src="/assets/15.png"
                  alt="..."
                  width={200}
                  height={200}
                />
                <h5 className="fw-bolder">Lavit Dubey</h5>
                <div className="fst-italic text-muted">Project Manager</div>
              </div>
            </div>
            <div className="col mb-5 mb-5 mb-sm-0">
              <div className="text-center">
                <Image
                  className="img-fluid rounded-circle mb-4 px-4"
                  src="/assets/20.png"
                  alt="..."
                  width={200}
                  height={200}
                />
                <h5 className="fw-bolder">Shashank Dubey</h5>
                <div className="fst-italic text-muted">Marketing & Finance</div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="text-center">
                <Image
                  className="img-fluid rounded-circle mb-4 px-4"
                  src="/assets/16.png"
                  alt="..."
                  width={200}
                  height={200}
                />
                <h5 className="fw-bolder">Kripa</h5>
                <div className="fst-italic text-muted">Contributor</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

