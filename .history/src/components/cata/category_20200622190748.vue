<template>
<div>
    <div class="top">商品分内</div>
    <div class="df">

        <div class="left" v-if="somedata.length>0">
            <div class="left_text" v-for="(item,index) in somedata" :key="index">
                <div> {{item.mallCategoryName}}</div>
            </div>
        </div>
        <div class="right ">

            <div v-if="somedata.length>0">
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
            list: [],
            somedata:[],
            oneIndex:''

        }
    },
    methods: {
        someFunction() {
            if(this.oneIndex>(-1)){
                
            }
        }

    },
    mounted() {
        
        this.someFunction()
        this.somedata = JSON.parse(localStorage.getItem('somedata'))
        this.oneIndex = localStorage.getItem('oneIndex')
        // console.log(this.somedata[0].bxMallSubDto);

    },
    watch: {

    },
    computed: {

        
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
    display: flex;
}
</style>
