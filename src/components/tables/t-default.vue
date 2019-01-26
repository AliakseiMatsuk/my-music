<template lang="pug">
  table.t-default
    thead
      tr.t-default__row._light
        th.t-default__cell(
        v-for="(header,index) in format",
        @click="sort(header.field)",
        :key="`header-${index}`") {{ header.title }}
    tbody.t-default__body
      tr.t-default__row(v-for="(row,index) in sortedDataList", :key="`row-${index}`")
        td.t-default__cell(v-for="(cell,index) in format", :key="`cell-${index}`") {{row[cell.field]}}
</template>

<script>
  export default {
    name: "tDefault",
    data() {
      return {
        currentSort: '',
        currentSortDir: 'asc'
      }
    },
    props: {
      format: {
        type: Array,
        required: true
      },
      dataList: {
        type: Array,
        required: true
      }
    },
    created() {
      // set sort order by first column
      this.currentSort = this.format[1].field;
    },
    methods: {
      sort(s) {
        //if s == current sort, reverse
        if (s === this.currentSort) {
          this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
        }
        this.currentSort = s;
      }
    },
    computed: {
      sortedDataList() {
        return this.dataList.slice().sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDir === 'desc') modifier = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          return 0;
        });
      }
    }
  }
</script>

<style scoped lang="stylus">
  .t-default
    width 100%
    text-align left
    border 1px solid $border-color-dark
    &__row
      cursor pointer
      &:nth-child(odd)
        background-color #D3D3D3
      &:nth-child(even)
        background-color #C0C0C0
      &._light
        background-color #808080
    &__cell
      padding 10px
    &__body
      .t-default
      &__row
        trbg()
        &:hover
          background-color #778899
</style>
