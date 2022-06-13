<template>
  <div>
    <div id="map-wrap" style="height: 100vh; width: 100%;">
      <no-ssr>
        <l-map @mouseup="selectLong" :zoom="6" :center="[41.311081, 69.240562]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker :lat-lng="lang"></l-marker>
        </l-map>
      </no-ssr>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeafletMaps",
  data () {
    return {
      lang: [41.311081, 69.240562],
    }
  },
  methods: {
    selectLong (event) {
      this.lang = [event.latlng.lat, event.latlng.lng]
    }
  }
}
</script>

<style scoped>

</style>
