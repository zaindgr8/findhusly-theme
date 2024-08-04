import Link from "next/link";
import Region from "../data/region.json"
export default async function Regions() {

  return (
    <div className="row g-3 g-sm-4 justify-content-center">
      {
        Region?.map((region) => {
          const aosDelay = 300 + parseInt(region.id) * 100;
          return (
              <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2" key={region.id}>
                {/* Start Category Item */}
                <Link
                  href="#"
                  className="d-block category-item position-relative"
                  data-aos="fade"
                  data-aos-delay={aosDelay}
                >
                  {/* Start image Container */}
                  <div className="img-container overflow-hidden position-relative rounded-3 shadow">
                    <img
                      src={region.img}
                      className="w-100"
                      alt=""
                    />
                  </div>
                  {/* End image Container */}
                  <div className="accordion bottom-0 d-flex flex-column h-100 justify-content-end mask overflow-hidden position-absolute start-0 w-100 z-1">
                    <div className="mask-content m-3">
                      <h2>{region.title}</h2>
                      <span className="d-none d-md-block d-xl-none d-xxl-block">
                        {region.properties}
                      </span>
                      <div className="svg-wrap">
                        <svg
                          width="28px"
                          height="12px"
                          viewBox="0 0 28 12"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              className="icon-arrow"
                              transform="translate(-714.000000, -120.000000)"
                              fill="#000000"
                            >
                              <path d="M737.608907,124.700519 L734.322602,121.414214 L735.736815,120 L739.990251,124.253436 L740.001047,124.242641 L741.41526,125.656854 L741.404465,125.66765 L741.41526,125.678445 L740.001047,127.092659 L739.990251,127.081863 L735.736815,131.3353 L734.322602,129.921086 L737.543169,126.700519 L714,126.700519 L714,124.700519 L737.608907,124.700519 Z">

                              </path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
                {/* /.End Category Item */}
              </div>
          )
        })
      }


    </div>
  );
}
async function getRegionData() {
  const res = await fetch('https://findhusly.vercel.app/api/region')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}