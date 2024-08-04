import Link from "next/link";
import AgentList from "../data/agent-list.json"
export default async function AgentListData() {
  
    
    return (
        <div className="row g-4">
            {
                AgentList.map((agent) => {
                    return (
                        <div className=" card mb-4 overflow-hidden bg-grey border-0 shadow" key={agent.id}>
                            <Link href="agent-details" className="card-link" />
                            <div className="card-body p-0">
                                <div className="g-0 row">
                                    <div className="bg-white col-lg-5 col-md-6 col-xl-3 position-relative">
                                        {/* Start Agent Avatar Image */}
                                        <img
                                            src={agent.img}
                                            alt=""
                                            className="h-100 w-100 object-fit-cover"
                                        />
                                        {/* /.End Agent Avatar Image */}
                                    </div>
                                    <div className="bg-white col-lg-7 col-md-6 col-xl-6 p-3 p-lg-4 p-md-3 p-sm-4">
                                        <div className="d-flex flex-column h-100">
                                            <div className="mb-3">
                                                {/* Start Agent Name */}
                                                <h6 className="fs-23 mb-0">
                                                    {agent.name} <i className="fas fa-medal text-primary" />
                                                </h6>
                                                {/* /.End Agent Name */}
                                                {/* Start Designation */}
                                                <div className="text-primary fw-semibold">{agent.designation}</div>
                                                {/* /.End Designation */}
                                                {/* Start Agent About */}
                                                <div className="mt-3">
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                                    amet sint. Velit officia consequat duis enim velit mollit.
                                                    Exercitation{" "}
                                                </div>
                                                {/* /.End Agent About */}
                                            </div>
                                            {/* Start Agent Information */}
                                            <div className="border-top mt-auto pt-3">
                                                <div className="row gy-2 gx-4">
                                                    <div className="col-auto">
                                                        <div className="d-flex align-items-center text-dark">
                                                            <div className="flex-shrink-0">
                                                                <i className="fa-solid fa-chart-line fs-18" />
                                                            </div>
                                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">
                                                                Active Listings : {agent.activeListings}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="d-flex align-items-center text-dark">
                                                            <div className="flex-shrink-0">
                                                                <i className="fa-solid fa-fan fs-18" />
                                                            </div>
                                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">
                                                                Experience Since : {agent.experience}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="d-flex align-items-center text-dark">
                                                            <div className="flex-shrink-0">
                                                                <i className="fa-solid fa-chart-area fs-18" />
                                                            </div>
                                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">
                                                                Areas : {agent.areas}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="d-flex align-items-center text-dark">
                                                            <div className="flex-shrink-0">
                                                                <i className="fa-solid fa-language fs-18" />
                                                            </div>
                                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">
                                                                Language : {agent.language}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /. End Agent Information */}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-xl-3 p-3 p-lg-4 p-md-3 p-sm-4 align-self-center">
                                        <div className="row align-items-center justify-content-center g-3">
                                            {/* Start Agent Counter  */}
                                            <div className="col col-xl-12">
                                                <div className="border gap-3 gap-xl-2 gap-xxl-3 hstack justify-content-center p-2 rounded-3">
                                                    <div className="text-center">
                                                        <div className="fw-semibold text-dark fs-23">{agent.rent}</div>
                                                        <div className="fs-14">For Rent</div>
                                                    </div>
                                                    <span className="vr" />
                                                    <div className="text-center">
                                                        <div className="fw-semibold text-dark fs-23">{agent.rent}</div>
                                                        <div className="fs-14">For Sell</div>
                                                    </div>
                                                    <span className="vr" />
                                                    <div className="text-center">
                                                        <div className="fw-semibold text-dark fs-23">{agent.commercial}</div>
                                                        <div className="fs-14">Commercial</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /. End Agent Counter  */}
                                            {/* Start button */}
                                            <div className="col-auto col-xl-12 d-flex flex-wrap gap-2 justify-content-center position-relative z-1">
                                                <button
                                                    type="button"
                                                    className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                                                >
                                                    <i className="fa fa-phone fs-14 me-1" />
                                                    Call
                                                </button>
                                                <button
                                                    type="button"
                                                    className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                                                >
                                                    <i className="fa fa-user-tie fs-14 fs-e me-1" />
                                                    Email
                                                </button>
                                                <button
                                                    type="button"
                                                    className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                                                >
                                                    <i className="fa fa-phone fs-14 me-1" />
                                                    WhatsApp
                                                </button>
                                            </div>
                                            {/* /.End button */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )
                })
            }

        </div>
    );
}
