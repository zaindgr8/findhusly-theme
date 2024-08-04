"use client"
import React, { useState } from 'react'
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import Link from 'next/link';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 40.7128, // Latitude of your desired location
    lng: -74.0060,

};

function GooglePropertyMapsComponent() {
    const [activeMarker, setActiveMarker] = useState(null);
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };
    var markers = [
        {
            id: 1,
            name: "Hoboken, NJ, USA",
            position: { lat: 40.743992, lng: -74.032364 },
            propertyname: "Koh Samui, Thailand",
            description: "The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City."
        },
        {
            id: 2,
            name: "Long Island City, Queens, NY, USA",
            position: { lat: 40.744678, lng: -73.948540 },
            propertyname: "Belle Mare, Mauritius",
            description: "The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City."
        },
        {
            id: 3,
            name: "Midwood, Brooklyn, NY, USA",
            position: { lat: 40.622581, lng: -73.962799 },
            propertyname: "Balian Beach, Indonesia",
            description: "The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City."
        },
        {
            id: 4,
            name: "Brooklyn Childrens Museum, museum, New York, United States",
            position: { lat: 40.67439655, lng: -73.94404613465176 },
            propertyname: "Koh Samui, Thailand",
            description: "The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City."
        },
        {
            id: 5,
            name: "South Slope, neighbourhood, New York, United States",
            position: { lat: 40.67439655, lng: -73.94404613465176 },
            propertyname: "Pantai Nyanyi, Indonesia<",
            description: "The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City."
        },
        {
            id: 6,
            name: "South Slope, neighbourhood, New York, United States",
            position: { lat: 40.67439655, lng: -73.94404613465176 },
            propertyname: "Koh Samui, Thailand",
            description: "The Prospect Park Zoo is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City."
        },
    ];

    const mapStyles = [
        { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "labels.text", "stylers": [{ "visibility": "on" }, { "color": "#8e8e8e" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#7f7f7f" }] }, { "featureType": "administrative", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [{ "color": "#bebebe" }] }, { "featureType": "administrative.province", "elementType": "geometry.stroke", "stylers": [{ "visibility": "on" }, { "color": "#cbcbcb" }, { "weight": "0.69" }] }, { "featureType": "administrative.locality", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#ffffff" }, { "saturation": "0" }] }, { "featureType": "poi.attraction", "elementType": "all", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "saturation": "0" }] }, { "featureType": "poi.attraction", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.business", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.government", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.medical", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#b5d7ef" }, { "visibility": "on" }] }, { "featureType": "poi.park", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.place_of_worship", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.school", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.sports_complex", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.sports_complex", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.sports_complex", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": "-100" }, { "lightness": "50" }, { "gamma": "1" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#e4e4e4" }, { "saturation": "0" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "saturation": "0" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "saturation": "0" }] }, { "featureType": "road.highway", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [{ "saturation": "0" }] }, { "featureType": "road.arterial", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#e4e4e4" }, { "lightness": "0" }, { "gamma": "1" }, { "saturation": "0" }] }, { "featureType": "road.local", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "transit", "elementType": "labels", "stylers": [{ "hue": "#ff0000" }, { "saturation": "-100" }, { "visibility": "simplified" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#cbcbcb" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#f3f3f3" }, { "saturation": "0" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }] }
    ];

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB4iuUg1YDRIBRZ5e-jdssfqDuT9VLiOnY"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onLoad={onLoad}
            markers={markers}
            onUnmount={onUnmount}
            options={{
                styles: mapStyles, // Add the custom styles here
            }}

        >
            {markers.map(({ id, name, position, description }) => (
                <MarkerF
                    key={id}
                    position={position}
                    onClick={() =>
                        handleActiveMarker(id)
                    }
                    icon={{
                        url: "https://findhusly.vercel.app/assets/img/map/marker.png",
                        scaledSize: { width: 40, height: 40 }
                    }}


                >
                    {activeMarker === id ? (
                        <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                            <div className="infoWindowContent">
                                <Link href="property-details" className="d-block info_content text-dark text-decoration-none">
                                    <img src="assets/img/map/01.jpg" className="img-fluid mb-3 rounded-3 w-100" alt="" />
                                    <h5>{name}</h5>
                                    <div className="text-warning mb-2"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i><i className="fa-regular fa-star"></i></div>
                                    <p>{description}</p>
                                </Link>

                                <Link href="#" className="directions-link"><i className="fa-solid fa-compass me-2"></i>Directions</Link>
                                <Link href="tel:+(123) 456-7890" className="directions-link ms-2"><i className="fa-solid fa-phone me-2"></i>(123) 456-7890</Link>
                            </div>
                        </InfoWindowF>
                    ) : null}

                </MarkerF>
            ))}


            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

export default GooglePropertyMapsComponent;

