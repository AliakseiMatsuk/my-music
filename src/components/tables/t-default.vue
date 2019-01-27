<template lang="pug">
  table.t-default
    thead
      tr.t-default__row._light
        th.t-default__cell(
        v-for="(header,index) in format",
        @click="sort(header.field)",
        :class="sortedColumnClassName(header)",
        :key="`header-${index}`")
          .t-default__cell-value {{ header.title }}
    tbody.t-default__body
      tr.t-default__row(
      v-for="(row,index) in sortedDataList",
      @click="$emit('showDetails', row)",
      :key="`row-${index}`")
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
      this.currentSort = this.format[0].field;
    },
    methods: {
      sort(s) {
        //if s == current sort, reverse
        if (s === this.currentSort) {
          this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
        }
        this.currentSort = s;
      },
      sortedColumnClassName(header) {
        return {
          ['_active ' + '_' + this.currentSortDir]: header.field === this.currentSort,
        }
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
    margin-bottom 20px
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
      &._active
        .t-default
          &__cell-value
            font-weight bold
            display inline-flex
            align-items center
            &:after
              margin-left 10px
              content ''
              width 0
              height 0
              border-style solid
              border-width 5px 5px 0 5px
              border-color $bg-color-base transparent transparent transparent
      &._asc
        .t-default
          &__cell-value
            &:after
              transform rotate(180deg)
    &__body
      .t-default
        &__row
          trbg()
          &:hover
            background-color #778899
</style>
