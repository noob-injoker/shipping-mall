<template>
<div>
    <div class="top df h50">
        <div class="ccc text1">
            <div @click="goback">
                <van-icon name="arrow-left" />
            </div>
        </div>

        <div class="ccc w300 text2">我的订单</div>
    </div>

    <div >
        <van-tabs @click="onClick">

            <van-tab title="全部"></van-tab>
            <van-tab title="待支付"></van-tab>
            <van-tab title="dai'fa'huo"></van-tab>
            <van-tab title="标签 2"></van-tab>
            <van-tab title="标签 1"></van-tab>
            
        </van-tabs>
    </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
        goback() {
            this.$router.back()
        },
        onClick(name, title) {
            
        },

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
.text1 {
    width: 40px;
}

.text2 {
    color: rgb(116, 87, 87);
    font-weight: 700;
}
/deep/.van-tab{
    
    flex-basis: 20% !important;
}
</style>
