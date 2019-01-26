<template lang="pug">
  s-default(:title="'My Music'")
    t-default(
    :format="playListFormat",
    :dataList="GET_PLAYLIST",
    @showDetails="showDetails")
    b-details(
    v-if="details",
    :detailsData="details",
    @updateDetails="updateDetails")


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
