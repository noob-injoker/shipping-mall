<template>
<div>
    <div class="top">商品分内</div>
    <div class="df">

        <div class="left" v-if="somedata.length>0">
            <div class="left_text b1" v-for="(item,index) in somedata" :key="index">
                <div> {{item.mallCategoryName}}</div>
            </div>
        </div>

        <div class="container b1" ref="container">
            
              <div class="box">
              
                <div class="right_content" v-if="somedata.length>0">

                    <div v-for="(item,index) in somedata[aIndex].bxMallSubDto" :key="index">
                        <div class="right_item">{{item.mallSubName}}</div>
                    </div>

                </div>

              </div>

            
        </div>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: '',
    props: {

    },
    components: {

    },
    data() {
        return {
            list: [],
            somedata: [],
            aIndex: ''

        }
    },
    methods: {

    },
    mounted() {

        this.somedata = JSON.parse(localStorage.getItem('somedata'))
        this.aIndex = localStorage.getItem('oneIndex')
        console.log(this.aIndex);
        console.log(this.somedata);
        // console.log(this.somedata[0].bxMallSubDto);
        new BScroll(this.$refs.container, {
        scrollX: true,
        click: true
      })

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

    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.left {
    width: 75px;
    height: 564px;
    b

}

.left_text {
    margin-top: 5px;
    margin-bottom: 5px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    margin-top: 5px;
    width: 300px;
    height: 30px;
    display:flex;
    overflow: hidden;
   
 

}
.box{
    
    border: 1px solid red;
}

.right_item {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
   

}
.right_content{
    width: 300px;
    border:1px solid green;
    display: flex;
}
</style>
