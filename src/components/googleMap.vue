<template>
  <div class="app-map app-footer__map" id="googleMap"></div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader"
export default {
    data() {
        return {
            apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
            map: null,
            marker: null,
            mapPoint: { lat: 52.4157984, lng: 16.9315507 },
            mapOptions: {
              center: {
                lat: 52.4157984, lng: 16.9315507
              },
              styles: [{
                elementType: "labels",
                stylers: [{
                  visibility: "off"
                }]
              }],
              zoom: 16,
              disableDefaultUI: true,
              zoomControl: false,
              gestureHandling: "none"
            }
        }
    },
    mounted() {
     const loader = new Loader({
        apiKey: this.apiKey,
        version: "weekly",
      });

      const mapDiv = document.getElementById("googleMap")

      loader
      .load()
      .then((google) => {
        this.map = new google.maps.Map(mapDiv, this.mapOptions)
        new google.maps.Marker({
          position: this.mapPoint,
          map: this.map,
          icon: require('@/assets/placeholder-filled-point.svg')
        });
      })
      .catch(e => {
        console.log(e)
      });
    }
}
</script>

<style lang="scss">
#googleMap {
  width: 200px;
  height: 200px;
}
</style>