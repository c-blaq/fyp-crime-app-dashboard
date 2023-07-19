import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import PageLayout from "../../component/Layout";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map",
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  });

  console.log(import.meta.env.VITE_API_KEY);

  return (
    <PageLayout>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            // left: "0",
            bottom: "0",
          }}
          center={{
            lat: 8.71,
            lng: 4.4666,
          }}
          zoom={10}
        >
          Tests
        </GoogleMap>
      ) : (
        <p>ssnnn</p>
      )}
    </PageLayout>
  );
};

export default Map;
