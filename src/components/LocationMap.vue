<template>
  <div class="flex h-screen items-center justify-center">
    <div class="flex flex-col items-center">
      <button
        class="mb-5 h-fit w-fit rounded-lg border-4 border-primary-accent-color-green bg-white p-2 text-black"
        @click="getUserLocation"
      >
        Get your Location
      </button>
      <p>{{ sightName }}</p>
      <div
        ref="map"
        class="h-[400px] w-[400px] border-2 border-primary-accent-color-green"
      ></div>
    </div>
  </div>
</template>

<script>
  import "leaflet/dist/leaflet.css";
  import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
  import L from "leaflet";
  import "leaflet-routing-machine";
  import questionsData from "@/data/data.js";

  export default {
    data() {
      return {
        map: null,
        userMarker: null,
        routingControl: null,
        latitude: null,
        longitude: null,
        sightName: questionsData[0].SightName,
        updateInterval: 120000,
      };
    },
    mounted() {
      this.initMap();
      this.getUserLocation();

      setInterval(() => {
        this.getUserLocation();
      }, this.updateInterval);
    },

    methods: {
      initMap() {
        this.map = L.map(this.$refs.map).setView([51.505, -0.09], 13);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: "© OpenStreetMap contributors",
        }).addTo(this.map);
      },
      getUserLocation() {
        // Browser geolocation API to get user's location
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            this.map.setView([latitude, longitude], 20); // Set map view to user's location

            if (this.userMarker) {
              this.userMarker.setLatLng([latitude, longitude]);
            } else {
              this.userMarker = L.marker([latitude, longitude]).addTo(this.map);
            }

            this.latitude = latitude;
            this.longitude = longitude;

            // Create route after obtaining the user's location
            this.createRouteToAddress("Destination Address");
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      },
      createRouteToAddress(address) {
        console.log("Creating route to address:", address);

        const destination = [
          questionsData[0].coordinatesSight[0],
          questionsData[0].coordinatesSight[1],
        ]; // Coordiaten Burg

        if (this.userMarker) {
          if (this.routingControl) {
            this.map.removeControl(this.routingControl);
          }

          this.routingControl = L.Routing.control({
            waypoints: [
              L.latLng(this.userMarker.getLatLng().lat, this.userMarker.getLatLng().lng),
              L.latLng(destination[0], destination[1]),
            ],
          }).addTo(this.map);
        }
      },
    },
  };
</script>
