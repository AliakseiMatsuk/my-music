<template lang="pug">
  s-default(:title="'Your Music statistics'")
    ul.m-primary
      li.m-primary__item
        router-link.m-primary__link(to='/') Home
    transition(name="fade-modal", mode='out-in', appear)
      .p-statistic__statistic(v-if="GET_PLAYLIST_STATISTIC.length", key="statistic")
        ul.p-statistic__charts
          li.p-statistic__charts-item(v-for="obj in GET_PLAYLIST_STATISTIC", :key="obj.title")
            b-chart(:chartData="obj")
      .p-statistic__loader(v-else, key="loader")
        b-loading
</template>

<script>
  import { mapActions, mapGetters } from "vuex"
  import sDefault from "@/components/sections/s-default.vue"
  import bChart from "../components/blocks/b-chart.vue";

  export default {
    name: "statistic",
    created() {
      this.A_GET_PLAYLIST();
    },
    components: {
      bChart,
      sDefault
    },
    methods: {
      ...mapActions("playlist", ["A_GET_PLAYLIST"])
    },
    computed: {
      ...mapGetters("playlist", ["GET_PLAYLIST_STATISTIC"]),
    }
  };
</script>

<style lang="stylus">
  .p-statistic
    &__charts
      display flex
      justify-content space-between
      &-item
        fw(calc(50% - 50px))
</style>
