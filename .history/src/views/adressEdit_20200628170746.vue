<template>
<div>
    <van-address-edit :area-list="areas" show-postal show-delete show-set-default show-search-result :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete" @change-detail="onChangeDetail" />
</div>
</template>

<script>
import {
    Toast
} from 'vant';
import area from './lib/area.js'
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            areas: ar,
            searchResult: [],

        }
    },
    methods: {
        onSave() {
            Toast('save');
        },
        onDelete() {
            Toast('delete');
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [{
                    name: '黄龙万科中心',
                    address: '杭州市西湖区',
                }, ];
            } else {
                this.searchResult = [];
            }
        },

    },
    mounted() {

        this.areas = area

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
