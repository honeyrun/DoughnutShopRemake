<template>
  <GoogleMap
    :api-key="key"
    style="width: 100%; height: 450px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>
<script>

import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { APIKey } from "../api";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 49.259732228917976, lng: -123.10063475883308 };
    const key = APIKey;
    return { center, key };
  },
});
</script>

