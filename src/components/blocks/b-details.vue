<template lang="pug">
  .b-details
    .container
      .b-details__container
        .b-details__info
          h2._fwbold {{detailsData.artist}}
          .b-details__cover
            .b-details__cover-inner
              img.b-details__cover-image(
              :src="getImage",
              :alt="detailsData.name",
              data-object-fit="cover",
              data-object-position="center")
        .b-details__content
          h2.b-details__content-title {{detailsData.name}}
          .b-details__comment
            h4.b-details__comment-title Comment
            textarea.b-details__comment-field(
            @focus="onFieldFocus",
            @blur="onFieldBlur",
            v-model.trim="comment",
            :key="detailsData.name")
</template>

<script>
  export default {
    name: "bDetails",
    data() {
      return {
        comment: "",
        autoSaveTimer: null,
      }
    },
    props: {
      detailsData: {
        type: Object,
        required: true
      }
    },
    computed: {
      getImage() {
        return this.detailsData.name ? `https://ui-avatars.com/api/?name=${this.detailsData.artist}&size=300` : "http://placehold.it/300x300";
      }
    },
    created() {
      this.updateCommentIfNeed(this.detailsData);
    },
    methods: {
      onFieldFocus() {
        this.autoSaveTimer = setInterval(() => {
          this.emitUpdateDetails()
        }, 5000);
      },
      onFieldBlur() {
        clearInterval(this.autoSaveTimer);
        this.emitUpdateDetails();
      },
      emitUpdateDetails() {
        this.$emit('updateDetails', { ...this.detailsData, comment: this.comment });
      },
      updateCommentIfNeed(data) {
        this.comment = !data.comment ? '' : data.comment;
      }
    },
    watch: {
      detailsData: {
        handler(data) {
          this.updateCommentIfNeed(data);
        },
        deep: true
      },
    }
  }
</script>

<style lang="stylus">
  .b-details
    border 1px solid $border-color-dark
    padding 20px
    &__container
      display flex
    &__info
      fw(300px)
      margin-right 50px
    &__cover
      &-inner
        position relative
        padding-top 100%
      &-image
        position absolute
        top 0
        left 0
        width 100%
        height 100%
    &__content
      flex-grow 1
      &-title
        margin-bottom 20px
    &__comment
      &-title
        margin-bottom 10px
      &-field
        min-height 200px
        width 100%
        border 1px solid $border-color-dark
        padding 20px
        font-size $font-size-large-desktop
</style>
