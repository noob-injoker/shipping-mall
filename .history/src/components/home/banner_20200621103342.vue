<template>
<div class="container" ref="container">

    <div class="df">
        <div  v-for="(item,index) in slides" :key="index">
            <img class="w375" :src="item.image" alt="">
        </div>
    </div>

</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: '',
    props: {
        slides: {
            type: Array
        }
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {
      new BScroll(this.$refs.container, {
        scrollX: true,
        click: true
      })

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
