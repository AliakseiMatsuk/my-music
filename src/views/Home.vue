<template lang="pug">
  s-default(:title="'My Music'")
    ul.m-primary
      li.m-primary__item
        router-link.m-primary__link(to='/statistic') My Music

    transition(name="fade-modal", mode='out-in', appear)
      .p-home__playlist(v-if="GET_PLAYLIST.length", key="playlist")
        t-default(
        :format="playListFormat",
        :dataList="GET_PLAYLIST",
        @showDetails="showDetails")
        transition(name="fade-modal", appear)
          b-details(
          v-if="details",
          :detailsData="details",
          @updateDetails="updateDetails")
      .p-home__loader(v-else, key="loader")
        b-loading


</template>

<script>
  import { mapActions, mapGetters } from "vuex"
  import sDefault from "@/components/sections/s-default.vue"
  import tDefault from "@/components/tables/t-default.vue";
  import bDetails from "../components/blocks/b-details.vue";

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
        ],
        details: null
      }
    },
    components: {
      sDefault,
      bDetails,
      tDefault
    },
    created() {
      this.A_GET_PLAYLIST();
    },
    methods: {
      ...mapActions("playlist", ["A_GET_PLAYLIST", "A_UPDATE_PLAYLIST_ITEM"]),
      showDetails(payload) {
        this.details = payload;
      },
      updateDetails(payload) {
        this.A_UPDATE_PLAYLIST_ITEM(payload);
      }
    },
    computed: {
      ...mapGetters("playlist", ["GET_PLAYLIST"]),
    }
  };
</script>

<style lang="stylus">
  .m-primary
    margin-bottom 30px
</style>
