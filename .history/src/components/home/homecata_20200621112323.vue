<template>
<div class="df b1">

    <div class="f1 picbox" v-for="(item,index) in category" :key="index">

        <div class="r1 ccc">
            <img class="pic" :src="item.image" alt="">
        </div>
        <div class="r1 fs15 ccc">
            {{item.mallCategoryName}}
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {
        category: {
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

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.picbox {
    margin-left: 10px;
    margin-right: 10px;
}

.pic {
    width: 50px;
    height: 50px;
}
</style>
