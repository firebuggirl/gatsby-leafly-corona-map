# Create Corona Dasbhoard and Map App

https://www.freecodecamp.org/news/how-to-create-a-coronavirus-covid-19-dashboard-map-app-in-react-with-gatsby-and-leaflet/


- `repo` => https://github.com/colbyfayock/my-coronavirus-map/blob/master/src/pages/index.js

- `YouTube Channel` => https://www.youtube.com/watch?v=GryBIsfBfro&feature=emb_title

  - go back here to get more `tips on uploading CSV files` 
  
  - notes from instructor:

    -  `CSV files`: is in order to integrate it you'll need to be able to obtain the dataset to import into the map, whether that's storing the files locally in the app or being able to fetch the CSV files and load them into the map

        - it's basically just a plaintext list of data, we `can parse that into json` and `shape the data` to work with the map. you could probably use something like this (just googled for it) `https://github.com/Keyang/node-csvtojson` to transform into json

        - the harder part will be having a way to fetch the CSVs in a regular way that will provide the most recent updates, though there are definitely solutions you can figure out

  - where to put my `mapbox access token`:

    https://github.com/colbyfayock/my-mapbox-gatsby-starter-leaflet/commit/16027c9010f07a4512d1912dcc357e59b050c794

`nvm use 12`

- Gatsby’s CLI - `yarn global add gatsby-cli`

- set up a foundation for map w/ Leaflet Gatsby Starter:

 `gatsby new my-coronavirus-map https://github.com/colbyfayock/gatsby-starter-leaflet`

```js
cd my-coronavirus-map
yarn develop
http://localhost:8000/
```

## Fetching the Coronavirus data

- use the `NovelCOVID API (https://github.com/NovelCOVID/API)` w/ the `countries endpoint` to fetch the list of our countries and the stats associated with them.

## Transform the Coronavirus data into a geographic data format

- transform data to GeoJSON

## Step 4: Adding the Coronavirus data to the map


## Add more styles and a custom basemap

- Mapbox account, you can even copy the style I used and make it your own => https://api.mapbox.com/styles/v1/colbyfayock/ck8c2foj72lqk1jnug0g2haw0.html?fresh=true&title=copy&access_token=pk.eyJ1IjoiY29sYnlmYXlvY2siLCJhIjoiY2swODZzbXYxMGZzdzNjcXczczF6MnlvcCJ9.HCfgUYZUTP7uixjYF7tBSw#5.91/49.722/22.844

- Basic Dark Mapbox Theme => https://api.mapbox.com/styles/v1/colbyfayock/ck8c2foj72lqk1jnug0g2haw0.html?fresh=true&title=copy&access_token=pk.eyJ1IjoiY29sYnlmYXlvY2siLCJhIjoiY2swODZzbXYxMGZzdzNjcXczczF6MnlvcCJ9.HCfgUYZUTP7uixjYF7tBSw#5.91/49.722/22.844


- to integrate:

  - check out the source code of original demo:

  - https://github.com/colbyfayock/coronavirus-map-dashboard


## Add overview dashboard stats

- Dashboards with maps like the Johns Hopkins University app allows us to see more than a look on the map, but a glimpse at quick stats about the cases around the world.

- The `NovelCOVID API (https://github.com/NovelCOVID/API)` has more endpoints like `/all` that provide a few global stats.

## Learn more about maps?

https://www.freecodecamp.org/news/how-to-create-a-coronavirus-covid-19-dashboard-map-app-in-react-with-gatsby-and-leaflet/#want-to-learn-more-about-maps

## How to build a mapping app in React the easy way with Leaflet

https://www.freecodecamp.org/news/easily-spin-up-a-mapping-app-in-react-with-leaflet/


## Add Custom js

https://stevenmercatante.com/how-to-add-custom-javascript-to-a-gatsby-site

##  FortAwesome / react-fontawesome 

https://github.com/FortAwesome/react-fontawesome


