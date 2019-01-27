<template lang="pug">
    b-spinner(
    :message="mes",
    :line-size="5",
    :size="130",
    :font-size="22",
    :speed="1",
    :spacing="15"
    line-fg-color="#7dce94",
    line-bg-color="#0d262e",
    text-fg-color="#3d3d3f")
</template>

<script>
    import bSpinner from 'vue-simple-spinner'

    export default {
        name: 'bLoading',
        props: {
            mes: {
                type: String,
                default: 'Loading...'
            }
        },
        components: {
            bSpinner
        }
    }
</script>
