import Link from "next/link";
import AgentGrid from '../data/agent-grid.json'
export default async function AgentGridData() {
    return (
        <div className="row g-4">
            {
                AgentGrid.map((agent) => {
                    return (
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3" key={agent.id}>
                            {/* Start Agent Card */}
                            <div className="agent-card shadow p-4 rounded-4 text-center position-relative">
                                <Link href="agent-details" className="card-link" />
                                {/* Start Agent Avatar */}
                                <div className="avatar rounded-circle p-1 border border-primary">
                                    {/* Start Agent Avatar Image */}
                                    <img
                                        src={agent.img}
                                        alt=""
                                        className="avatar-img rounded-circle"
                                    />
                                    {/* /. End Agent Avatar Image */}
                                    {/* Start Agent Badge */}
                                    <div className="align-items-center avatar-badge bg-primary d-flex justify-content-center position-absolute rounded-circle text-white">
                                        <i className="fas fa-medal" />
                                    </div>
                                    {/* /. End Agent Badge */}
                                </div>
                                {/* /. End Agent Avatar */}
                                {/* Start Agent Name */}
                                <h5 className="mt-4 mb-1">{agent.name}</h5>
                                {/* /. End Agent Name */}
                                {/* Start Designation */}
                                <div className="text-primary fw-medium">{agent.designation}</div>
                                {/* /.End Designation */}
                                {/* Start Agent Counter  */}
                                <div className="border fs-13 gap-3 gap-sm-2 gap-md-3 hstack justify-content-center mt-4 py-3 rounded-3">
                                    <div className="text-center">
                                        <div className="fw-semibold text-dark fs-19">{agent.rent}</div>
                                        <div>For Rent</div>
                                    </div>
                                    <span className="vr" />
                                    <div className="text-center">
                                        <div className="fw-semibold text-dark fs-19">{agent.sell}</div>
                                        <div>For Sell</div>
                                    </div>
                                    <span className="vr" />
                                    <div className="text-center">
                                        <div className="fw-semibold text-dark fs-19">{agent.commercial}</div>
                                        <div>Commercial</div>
                                    </div>
                                </div>
                                {/* /. End Agent Counter  */}
                                {/* Start button */}
                                <div className="d-flex flex-wrap gap-2 justify-content-center mt-3 position-relative z-1">
                                    <button
                                        type="button"
                                        className="btn btn-outline-default btn-sm fw-medium"
                                    >
                                        <i className="fa fa-user-tie fs-14 fs-e me-1" />
                                        Email
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-default btn-sm fw-medium"
                                    >
                                        <i className="fa fa-phone fs-14 me-1" />
                                        WhatsApp
                                    </button>
                                </div>
                                {/* /.End button */}
                            </div>
                            {/* /.End Agent Card */}
                        </div>

                    )
                })
            }

        </div>
    );
}
