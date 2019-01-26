<template lang="pug">
  section.s-default
    .container
      h1.s-default__title._centered My Music
      .s-default__content
        t-default(
        :format="playListFormat",
        :dataList="GET_PLAYLIST")

</template>

<script>
  import { mapActions, mapGetters } from "vuex"
  import sDefault from "@/components/sections/s-default.vue"
  import tDefault from "../components/tables/t-default.vue";

  export default {
    name: "home",
    data() {
      return {
        playListFormat: [
          {
            title: "Last played",
            field: "last_played"
          },
          {
            title: "Artist",
            field: "artist"
          },
          {
            title: "Name",
            field: "name"
          },
          {
            title: "Genre",
            field: "genre"
          },
          {
            title: "Stars",
            field: "stars"
          }
        ]
      }
    },
    components: {
      sDefault,
      tDefault
    },
    created() {
      this.A_GET_PLAYLIST()
    },
    methods: {
      ...mapActions("playlist", ["A_GET_PLAYLIST"])
    },
    computed: {
      ...mapGetters("playlist", ["GET_PLAYLIST"]),
    }
  };
</script>


<style lang="stylus">
  .s-default
    padding 50px 0
    &__title
      margin-bottom 50px
    &__content
      max-width 800px
      margin 0 auto
</style>
