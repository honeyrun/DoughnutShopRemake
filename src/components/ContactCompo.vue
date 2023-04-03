<template>
  <div>
    <article></article>
    <div>
        <map-compo />
    </div>
  </div>
</template>

<script>
import MapCompo from './MapCompo.vue';

export default {
  name: "ContactCompo",
  components: {
    MapCompo
  },
  props: [],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
</style>
