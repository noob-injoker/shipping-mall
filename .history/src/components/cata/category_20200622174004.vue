<template>
<div>
    <div class="top">商品分内</div>
    <div class="df">

        <div class="left">
            <div class="left_text" v-for="(item,index) in listCategory" :key="index">
                <div> {{item.mallCategoryName}}</div>
            </div>
        </div>
        <div class="right">

            <div v-if="l">
                <div v-for="(item,index) in list" :key="index">
                    {{item.mallSubName}}
            </div>
            </div>

        </div>

    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {

    },
    components: {

    },
    data() {
        return {
            list: []

        }
    },
    methods: {
        someFunction() {
            if (this.oneIndex !== (-1)) {
                this.list = this.listCategory[this.oneIndex].bxMallSubDto
            }else{
                this.list = this.listCategory[0].bxMallSubDto
            }
        }

    },
    mounted() {
        console.log(this.listCategory[0].bxMallSubDto);
        this.someFunction()

    },
    watch: {

    },
    computed: {

        listCategory() {

            return this.$store.state.listCategory
        },
        oneIndex() {
            return this.$store.state.oneIndex
        }

    }
}
</script>

<style lang="scss" scoped>
.top {
    width: 375px;
    height: 40px;
    border: 1px solid red;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.left {
    width: 75px;
    height: 564px;
    border: 1px solid red;
}

.left_text {
    margin-top: 5px;
    margin-bottom: 5px;
    height: 30px;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
}

.right {
    width: 300px;
    height: 564px;
    border: 1px solid red;
}
</style>
