

export default async function SectionHeader() {
    return (
        <div className="row">
            <div className="col-md-10 offset-md-1">
                {/* Start Section Header Title */}
                <div className="section-header text-center mb-5" data-aos="fade-down">
                    {/* Start Subtitle */}
                    <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                        Top Regions
                    </div>
                    {/* /. End Subtitle */}
                    {/* Start Section Header title */}
                    <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Explore unique <span className="underline position-relative text-primary">properties</span> in top regions</h2>
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
    );
}
