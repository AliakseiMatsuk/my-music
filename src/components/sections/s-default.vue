<template lang="pug">
  section.s-default
    .container
      h1.s-default__title._centered {{ title }}
      .s-default__content
        slot

</template>

<script>
  export default {
    name: 'sDefault',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
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
