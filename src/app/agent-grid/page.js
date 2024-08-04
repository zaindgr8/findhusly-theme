import Layout from "@/components/Layout";
import AgentGridData from "@/components/agent-grid";
import Link from "next/link";

export default async function AgentGrid() {
  return (
    <Layout>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="border-bottom py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                Meet Our Agents
              </h4>
              <div className="border-start col-auto">
                <ol className="align-items-center breadcrumb fw-medium mb-0">
                  <li className="breadcrumb-item d-flex align-items-center">
                    <Link href="/" className="text-decoration-none">
                      <i className="fa-solid fa-house-chimney-crack fs-18" />
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item d-flex align-items-center active"
                    aria-current="page"
                  >
                    Agents
                  </li>
                </ol>
              </div>
            </div>
            {/* End Breadcrumbs */}
          </div>
        </div>
        {/* Start Agent Content */}
        <div className="py-5">
          <div className="container py-4">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                {/* Start Section Header Title */}
                <div className="section-header text-center mb-5">
                  {/* Start Section Header title */}
                  <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Meet Our <span className="underline position-relative text-primary">Agents</span></h2>
                  {/* /.End Section Header Title */}
                  {/* Start Section Header Sub Title */}
                  <div className="sub-title fs-16">

                    Our guests always travel the world in style. Mention @Kempinski
                    <br className="d-none d-lg-block" /> on Instagram for a chance
                    to be featured!
                  </div>
                  {/* /.End Section Header Sub Title */}
                </div>
                {/*/. End Section Header */}
              </div>
            </div>
            <AgentGridData/>
          </div>
        </div>
        {/* /. End Agent Content */}
      </div>
      {/* /. End Main Content */}
    </Layout>
  );
}
