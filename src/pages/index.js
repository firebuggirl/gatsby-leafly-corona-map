import React from 'react';
import Helmet from 'react-helmet';
import L from 'leaflet';
import axios from 'axios';
import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee);

//center of earth
const LOCATION = {
// lat: 38.9072,
// lng: -77.0369
  lat: 0,
  lng: 0
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 2;

const IndexPage = () => {

  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement: map } = {}) {
    let response;

    // data => info => https://github.com/NovelCOVID/API
    //endpoints => https://corona.lmao.ninja/docs/#/
    try {//endpoint deprecated 3pm Pacific time 4-16-2020 => https://github.com/novelcovid/api
      //response = await axios.get('https://corona.lmao.ninja/countries');
      //v2 endpoint
      response = await axios.get('https://corona.lmao.ninja/v2/countries')
      // Data from Johns Hopkins University
      //response = await axios.get('https://corona.lmao.ninja/v2/jhucsse');
    } catch(e) {
      console.log(`Failed to fetch countries: ${e.message}`, e);
      return;
    }


    // destructure data from the response and set the default value to an empty array
    const { data = [] } = response;
    console.log(data);
    //console.log(response);

    //  checks if our data variable is an array and has data
    const hasData = Array.isArray(data) && data.length > 0;

    if ( !hasData ) return;

    // geoJson object =>  GeoJSON document
   // Transform the Coronavirus data into a geographic data format
    const geoJson = {
      type: 'FeatureCollection',
      features: data.map((country = {}) => {
        const { countryInfo = {} } = country;
        const { lat, long: lng } = countryInfo;
        return {
          type: 'Feature',
          properties: {
            ...country,
          },
          geometry: {
            type: 'Point',
            coordinates: [ lng, lat ]
          }
        }
      })
    }
    //copy the contents/output + paste this into geojson.io => see the location data show up correctly
   //console.log(geoJson);

    // Adding the Coronavirus data to the map
   // create new instance of L.GeoJSON => transforms GeoJSON doc into something Leaflet will understand
    const geoJsonLayers = new L.GeoJSON(geoJson, {
      // customize the map layer Leaflet creates for map
      pointToLayer: (feature = {}, latlng) => {
        const { properties = {} } = feature;
        let updatedFormatted;
        let casesString;

        const {
          country,
          updated,
          cases,
          deaths,
          recovered
        } = properties

        casesString = `${cases}`;

        // format the cases count to show 1k+ instead of 1000
        if ( cases > 1000 ) {
          casesString = `${casesString.slice(0, -3)}k+`
        }
        // formatted date instead of the timestamp
        if ( updated ) {
          updatedFormatted = new Date(updated).toLocaleString();
        }

        // define map marker that will be added to map
      // + HTML for the tooltip that will pop up when hovering over a marker
        const html = `
          <span class="icon-marker">
            <span class="icon-marker-tooltip">
              <h2>${country}</h2>
              <ul>
                <li><strong>Confirmed:</strong> ${updated}</li>
                <li><strong>Deaths:</strong> ${deaths}</li>
                <li><strong>Recovered:</strong> ${recovered}</li>
                <li><strong>Last Update:</strong> ${updatedFormatted}</li>
              </ul>
            </span>
            ${ casesString }
          </span>
        `;
        // custom configuration
      // riseOnHover => when hovering over a marker, it surfaces itself above over the other markers
        return L.marker( latlng, {
          icon: L.divIcon({
            className: 'icon',
            html
          }),
          riseOnHover: true
        });
      }
    });

    geoJsonLayers.addTo(map)
  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'OpenStreetMap',
    //use this after attaining GATSBY_MAPBOX_KEY
    // defaultBaseMap: 'Mapbox',
    zoom: DEFAULT_ZOOM,
    mapEffect
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Map {...mapSettings} />

      <Container type="content" className="text-center home-start">

        {/* <h2>Still Getting Started?</h2>
        <p>Run the following in your terminal!</p>
        <pre>
          <code>gatsby new [directory] https://github.com/colbyfayock/gatsby-starter-leaflet</code>
        </pre>
        <p className="note">Note: Gatsby CLI required globally for the above command</p> */}
      </Container>
    </Layout>
  );
};

export default IndexPage;




