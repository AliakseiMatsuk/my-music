<template lang="pug">
  .b-chart
    h2.b-chart__title._centered {{chartData.title}}
    .b-chart__chart(ref="chart")
</template>

<script>
  import c3 from 'c3'

  export default {
    name: "bChart",
    props: {
      chartData: {
        type: Object,
        required: true
      }
    },
    mounted() {
      this.$watch('chartData', () => {
        c3.generate({
          bindto: this.$refs.chart,
          data: {
            type: 'pie',
            columns: this.chartData.chartValues
          }
        });
      });
    }
  }
</script>

<style lang="stylus">
  .b-chart
    &__chart
      height 300px
</style>
