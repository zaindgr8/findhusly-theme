import Layout from "@/components/Layout";
import Carousel from "@/components/corousel";
import Link from "next/link";

export default function BlogDetails() {
  return (
    <Layout>
      {/* Start Page Header */}
      <div
        className="blog-header position-relative text-white"
      >
      <img src="assets/img/blog/banner.jpg" alt="" className="h-100 object-fit-cover position-absolute w-100 top-0 left-0"/>
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 text-center">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-17 gap-2 hstack justify-content-center mb-1 text-capitalize">
                <div className="text-white fw-medium">Renovation</div>
                <span className="vr" />
                <div>jun 23, 2023</div>
              </div>
              {/* /.End Meta Info */}
              <h1 className="fw-semibold display-4 text-white">
                Contrary to popular belief, Lorem Ipsum is not simply random.
              </h1>
              {/* /.End of header title */}
              {/* Start Author Info */}
              <ul className="authar-info d-flex flex-wrap fs-17 gap-3 justify-content-center list-unstyled m-0 text-capitalize mt-4">
                <li>
                  <Link href="#" className="text-white">
                    <i className="fa-solid fa-comment fs-13 me-2" />
                    189 Comment
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white">
                    <i className="fa-solid fa-user fs-13 me-2" />
                    By Naeem
                  </Link>
                </li>
              </ul>
              {/* /.End Author Info */}
            </div>
          </div>
        </div>
      </div>
      {/* /.End Page Header */}
      <div className="py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-xxl-8">
              <article className="post single-post">
                <div className="entry-content">
                  <p>
                    How it is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its
                    layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable
                    English.
                  </p>
                  <h3>I'm afraid I just blue myself.</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since.
                  </p>
                  <p>
                    It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing.
                  </p>
                  <p>
                    Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable.
                  </p>
                  <p>
                    IIf you are going to use a passage of Lorem Ipsum, you need to
                    be sure there isn't anything embarrassing hidden.
                  </p>
                  <h2 className="h3">
                    There's only one man I've ever called a coward
                  </h2>
                  <figure className="caption aligncenter">
                    <img
                      src="assets/img/blog/details-01.jpg"
                      className="img-fluid rounded-3"
                      alt=""
                    />
                    <figcaption className="caption-text fs-11 text-center text-muted text-uppercase mt-2">
                      Beach at Big Sur, CA
                    </figcaption>
                  </figure>
                  <p>
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using 'Content
                    here, content here', making it look like readable English.
                  </p>
                  <p>
                    Many desktop publishing packages and web page editors now use.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you are going to use a passage of Lorem
                    Ipsum, you need to be sure there isn't anything embarrassing
                    hidden in the middle of text.
                  </p>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form.
                  </p>
                  <blockquote className="blockquote quote-text alignleft">
                    <p className="fst-italic mb-0">“Stay hungry, stay foolish.”</p>
                    <cite className="fs-14 fw-semibold quote-attribution text-dark">
                      — John Doe Molicere
                    </cite>
                  </blockquote>
                  {/* /.End of blockquote */}
                  <p>
                    Many desktop publishing packages and web page editors now use
                    Lorem Ipsum as their default model text, and a search for 'lorem
                    ipsum' will uncover many web sites still in their infancy.
                  </p>
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature from
                    45 BC, making it over 2000 years old.
                  </p>
                  <p>
                    <img
                      src="assets/img/blog/details-02.jpg"
                      alt="Image"
                      className="alignright img-fluid rounded-3"
                    />
                    Richard McClintock, a Latin professor at Hampden-Sydney College
                    in Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through the
                    cites of the word in classical literature, discovered the
                    undoubtable source.
                  </p>
                  <p>
                    very popular during the Renaissance. The first line of Lorem
                    Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                    section 1.10.32.
                  </p>
                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                    reproduced in their exact original.
                  </p>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                  </p>
                  <p>
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words etc.
                  </p>
                  <h4>Better Readability</h4>
                  <p>
                    Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose (injected humour and the like).
                    Therefore always free from repetition, injected humour, or
                    non-characteristic words etc.
                  </p>
                  <p>
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                    Cicero, written in 45 BC. This book is a treatise on the theory
                    of ethics, very popular during the Renaissance. The first line
                    of Lorem Ipsum, "Lorem ipsum dolor sit amet..".
                  </p>
                  <p>
                    It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages.
                  </p>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature from
                    45 BC, making it over 2000 years old. Richard McClintock, a
                    Latin professor at Hampden-Sydney College in Virginia, looked up
                    one of the more obscure Latin words, consectetur, from a Lorem
                    Ipsum passage.
                  </p>
                </div>
                {/* /.End of entry content */}
                <div className="post-tags tagcloud my-4">
                  <Link
                    href="#"
                    rel="tag"
                    className="text-muted fs-13 d-inline-block mr-1 mb-1"
                  >
                    travel
                  </Link>
                  <Link
                    href="#"
                    rel="tag"
                    className="text-muted fs-13 d-inline-block mr-1 mb-1"
                  >
                    earth
                  </Link>
                  <Link
                    href="#"
                    rel="tag"
                    className="text-muted fs-13 d-inline-block mr-1 mb-1"
                  >
                    think
                  </Link>
                </div>
                {/* /.End of post tags */}
              </article>
            </div>
          </div>
        </div>
      </div>
      {/* Start Articles Section */}
      <div className="py-5 border-top">
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5">
                {/* Start Subtitle */}
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                  related Articles
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">See Related <span className="underline position-relative text-primary">articles</span> & news</h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  It is a long established fact that a reader will be distracted by
                  the
                  <br className="d-none d-lg-block" /> readable content of a page
                  when looking at its layout.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
           <Carousel/>
        </div>
      </div>
      {/* /. End Articles Section */}
    </Layout>

  );
}