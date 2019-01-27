<template lang="pug">
  .b-details(:class="{ _visible : isDataUpdating, _hidden : !isDataUpdating}")
    .container
      .b-details__container
        .b-details__info
          h2.b-details__info-title._fwbold {{currentData.artist}}
          .b-details__cover
            .b-details__cover-inner
              img.b-details__cover-image(
              :src="getImage",
              :alt="currentData.name",
              data-object-fit="cover",
              data-object-position="center")
        .b-details__content
          h2.b-details__content-title {{currentData.name}}
          .b-details__comment
            h4.b-details__comment-title Comment
            textarea.b-details__comment-field(
            @focus="onCommentFocus",
            @blur="onCommentBlur",
            v-model.trim="comment",
            :key="currentData.name")
          .b-details__share(:class="{ _show : comment }")
            a.b-details__share-twitter(:href="setTweetShareParams", target="_blank")
              svg-use(:svg="{name:'twitter'}")
</template>

<script>
  export default {
    name: "bDetails",
    data() {
      return {
        autoSaveTimer: null,
        isDataUpdating: false,
        currentData: null,
        comment: ""
      }
    },
    props: {
      detailsData: {
        type: Object,
        required: true
      }
    },
    created() {
      this.currentData = this.detailsData;
      this.updateComment(this.currentData);
    },
    methods: {
      onCommentFocus() {
        this.autoSaveTimer = setInterval(() => {
          this.emitUpdateDetails()
        }, 5000);
      },
      onCommentBlur() {
        clearInterval(this.autoSaveTimer);
        this.emitUpdateDetails();
      },
      emitUpdateDetails() {
        this.$emit('updateDetails', { ...this.currentData, comment: this.comment });
      },
      updateComment(data) {
        this.comment = data.comment || '';
      }
    },
    computed: {
      getImage() {
        return this.currentData.name ? `https://ui-avatars.com/api/?name=${this.currentData.artist}&size=300` : "http://placehold.it/300x300";
      },
      setTweetShareParams() {
        return `https://twitter.com/intent/tweet?text=${this.comment.replace(/ /g, '%20')}`;
      }
    },
    watch: {
      detailsData: {
        handler(newData, oldData) {
          if (newData !== oldData) {
            this.isDataUpdating = true;
            setTimeout(() => {
              this.currentData = this.detailsData;
              this.updateComment(newData);
              this.isDataUpdating = false;
            }, 250)
          }
        },
        deep: true
      }
    }
  }
</script>

<style lang="stylus">
  .b-details
    border 1px solid $border-color-dark
    padding 20px
    position relative
    background-color #cecece
    &._visible
      &:before
        visibility visible
        opacity 1
        transition opacity .25s
    &._hidden
      &:before
        visibility hidden
        opacity 0
        transition visibility 0s .25s, opacity .25s linear
    &:before
      content ''
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      background-color #cecece
      z-index 1
    &__container
      display flex
    &__info
      fw(500px)
      margin-right 50px
      &-title
        margin-bottom 20px
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
        background-color $bg-color-light
        padding 20px
        font-size $font-size-large-desktop
    &__share
      display inline-block
      visibility hidden
      opacity 0
      margin-top 20px
      tro(.5s)
      &._show
        visibility visible
        opacity 1
      .svg-twitter
        width 40px
        height 40px
</style>
