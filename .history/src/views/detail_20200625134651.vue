<template>
<div>
    <div class="box">

        <div class="top ">

            <div class="goback " @click="goback">
                <van-icon name="arrow-left" />
            </div>

        </div>

        <div v-if="obj">

            <van-swipe :autoplay="3000">

                <van-swipe-item><img class="w375" :src="obj.image" alt=""></van-swipe-item>
                <van-swipe-item><img class="w375" :src="obj.image" alt=""></van-swipe-item>

            </van-swipe>
        </div>

        <div>
            <div>

            </div>
        </div>

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
            id: '',
            obj: null,
        }
    },
    methods: {

        getDetail() {
            this.$api.getGoodsOne(this.id).then(res => {

                this.obj = res.goods.goodsOne
                console.log(this.obj);

            }).catch(err => {
                console.log(err);
            })
        },
        goback() {
            history.go(-1)
        }

    },
    mounted() {
        this.id = this.$route.query.id
        console.log(this.id);
        this.getDetail()
        this.$api.getCard().then(
            res=>{
                console.log(res);
            }
        ).catch(err=>{
            console.log(object);
        })

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.box{
    position: relative;
}
.top{
        height: 50px;
        position: absolute;
        z-index: 999;
    }
.goback {
    width: 36px;
    height: 36px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #c8cecc;
    opacity: 0.6;
    position: relative;
    left: 10px;
    top: 15px;
}
</style>
