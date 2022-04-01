import mapboxgl from "mapbox-gl";
import { useEffect, useContext } from "react";
import { UberContext } from "../context/uberContext";

const style = {
  wrapper: `flex-1 h-full w-full`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

function Map() {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext);
  console.log(pickupCoordinates, dropoffCoordinates);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/manish73/cl0fvffw9000s16pashb434m5",
      center: [138.6007, -34.928],
      zoom: 13,
    });
    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }
    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], {
        padding: 60,
      });
    }
  }, []);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return (
    <div className={style.wrapper} id="map">
      Map
    </div>
  );
}

export default Map;
