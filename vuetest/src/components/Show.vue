<template>
    <div class="show">
        <router-view></router-view>
        <Paginate :curPage="curPage"></Paginate>
    </div>
</template>

<script>
    import Paginate from "./Paginate.vue"
    export default {
        name: "Show",
        components: {
            Paginate
        },
        computed: {
        },
        props: ["curPage"],
        mounted() {

        }
    }
</script>

<style lang="css" scoped>
    .show {
        background-color:#9494b8
    }
</style>
