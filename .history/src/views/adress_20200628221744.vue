<template>
<div>
    <div class="top df  h50">
        <div class="ccc text1">
            <div @click="goback">
                <van-icon name="arrow-left" />
            </div>
        </div>

        <div class="ccc w300 text2 ">地址列表</div>

    </div>

    <div>

        <div class="noGood">暂无收货地址~~</div>

    </div>

    <div>

        <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @add="onAdd" />

    </div>

</div>
</template>

<script>
import {
    Toast
} from 'vant';
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            chosenAddressId: '1',
            list: [],
            content: [],

        }
    },
    methods: {
        goback() {
            history.go(-1)
        },
        onAdd() {
            this.$router.push({
                name: 'adressEdit'
            })
        },
        onEdit(item, index) {
            Toast('编辑地址:' + index);
        },
        fn() {
            this.content = JSON.parse(localStorage.getItem('content'))
            console.log(this.content);
            this.list.push({

                id: this.list.length + 1,
                name: this.content.name,
                tel: this.content.tel,
                address: this.content.addressDetail,
            })
            clg
        }

    },
    mounted() {
        this.fn()
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.top {
    border-bottom: 1px solid rgb(180, 176, 176);
}

.text1 {
    width: 40px;
}

.text2 {
    color: rgb(116, 87, 87);
    font-weight: 700;
}

.noGood {
    color: gray;
    font-size: 20px;
}
</style>
