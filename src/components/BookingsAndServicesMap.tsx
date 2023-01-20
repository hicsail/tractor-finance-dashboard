import { useRef } from "react";
import { Map, Source, Layer } from "react-map-gl";

import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "./BookingsAndServicesMapLayers";

import type { MapRef } from "react-map-gl";
import type { GeoJSONSource } from "react-map-gl";
import { componentStyles, fontStyles } from "../styles/styles";
import { Stack, Typography } from "@mui/material";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFubnk1NDQiLCJhIjoiY2xjdXVtMGpmMWRoZzN2bXhhbTlkcGowOSJ9.Fu7ZiZU-UhqDD2-Dnu7evg";

export default function BookingsAndServicesMap() {
  const mapRef = useRef<MapRef>(null);

  const onClick = (event: any) => {
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = mapRef.current?.getSource(
      "earthquakes"
    ) as GeoJSONSource;

    mapboxSource.getClusterExpansionZoom(clusterId, (err: any, zoom: any) => {
      if (err || !mapRef.current) {
        return;
      }

      mapRef.current.easeTo({
        center: feature.geometry.coordinates,
        zoom,
        duration: 500,
      });
    });
  };

  return (
    <Stack
      style={{
        ...componentStyles.cardGreyBackground,
        width: "400px",
        height: "400px",
        justifyContent: "space-between",
      }}
    >
      <Typography
        display="inline"
        style={{
          ...fontStyles.avenirBold,
          fontSize: 16,
          marginBottom: "20px",
        }}
      >
        Bookings by Farms and Acres Serviced
      </Typography>
      <Stack
        style={{
          height: "350px",
          justifyContent: "space-between",
        }}
      >
        <Map
          initialViewState={{
            latitude: 40.67,
            longitude: 0,
            zoom: 0,
          }}
          mapStyle="mapbox://styles/mapbox/light-v9"
          mapboxAccessToken={MAPBOX_TOKEN}
          interactiveLayerIds={["clusters"]}
          onClick={onClick}
          ref={mapRef}
        >
          <Source
            id="earthquakes"
            type="geojson"
            data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson" //TODO get ht data
            cluster={true}
            clusterMaxZoom={14}
            clusterRadius={50}
          >
            <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} />
            <Layer {...unclusteredPointLayer} />
          </Source>
        </Map>
      </Stack>
    </Stack>
  );
}
