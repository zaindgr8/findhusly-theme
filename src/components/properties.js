import Link from "next/link";
import PropertiesData from "../data/properties.json"
export default async function Properties() {

    return (
      <div className="row g-4 justify-content-center">
        {
           PropertiesData?.map((property) => {
            return (
                <div className="col-sm-6 col-lg-4 col-xl-3 d-flex" key={property.id}>
                {/* Start Card Property */}
                <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
                  {/* Start Card Link */}
                  <Link href="property-details" className="card-link" />
                  {/* /. End Card Link */}
                  {/* Start Property Image */}
                  <div className="property-img card-image-hover overflow-hidden">
                    <img
                      src={property.img}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="bg-white card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-dark top-1">
                    {property.status}
                    </div>
                  </div>
                  {/* /. End Property Image */}
                  <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                    {/* Start Card Property Price */}
                    <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                      <h3 className="m-0 fw-bold text-primary">${property.money}</h3>
                      <div> {property.day}</div>
                    </div>
                    {/* /. End Card Property Price */}
                    <h4 className="property-card-title mb-3">
                    {property.name}
                    </h4>
                    <div className="card-property-description mb-3">
                    {property.location}
                    </div>
                    {/* Start Card Property Facilities */}
                    <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                      <div className="">
                        <i className="fa-solid fa-bed text-dark me-1" />
                        <span>{property.bedroom} Beds</span>
                      </div>
                      <span className="vr" />
                      <div className="">
                        <i className="fa-solid fa-bath text-dark me-1" />
                        <span>{property.bathroom} Baths</span>
                      </div>
                      <span className="vr" />
                      <div className="">
                        <i className="fa-solid fa-vector-square text-dark me-1" />
                        <span>{property.area} m²</span>
                      </div>
                    </div>
                    {/* /. End Card Property Facilities */}
                  </div>
                </div>
                {/* /. End Card Property */}
              </div>
            )
          })
        }
  
  
      </div>
    );
  }
