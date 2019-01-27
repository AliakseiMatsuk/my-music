<template lang="pug">
  svg(:class="svgClass")
    use(:xlink:href="svgHref")
</template>

<script>

  export default {
    name: 'svgUse',
    props: {
      svg: {
        type: Object,
        default() {
          return {
            name: '',
            className: ''
          }
        }
      }
    },
    computed: {
      svgClass() {
        return `svg svg-${this.svg.name}${this.svg.className ? ' ' + this.svg.className : ''}`
      },
      svgHref() {
        return `#${this.svg.name}`
      }
    }
  }
</script>

<style lang="stylus">
  .svg
    &-twitter
      width 24px
      height 24px
</style>


