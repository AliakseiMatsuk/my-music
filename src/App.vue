<template lang="pug">
  #app.wrapper
    transition(name="fade", mode="out-in")
      router-view
</template>


<style lang="stylus">
  // Settings
  @import 'assets/stylus/settings/optimize'
  @import 'assets/stylus/settings/variables'
  @import 'assets/stylus/settings/mixins'
  @import 'assets/stylus/settings/default'
  @import 'assets/stylus/settings/animations'
  @import '~c3/c3.css'
</style>
