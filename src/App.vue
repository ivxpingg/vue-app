<template lang="html">
    <div class="">
        <v-header :seller="seller"></v-header>
        <div class="tab">
            <router-link class="tab-item" to="/goods">商品</router-link>
            <router-link class="tab-item" to="/ratings">评论</router-link>
            <router-link class="tab-item" to="/seller">商家</router-link>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import vHeader from 'components/header/header.vue';
export default {
    data: function () {
        return {
           seller: {}
        };
    },
    created: function () {
        this.$http.get('/api/seller').then(function (res) {
            this.seller = res.body.data;
        });
    },
    components: {vHeader}
};
</script>

<style lang="scss">
@import './common/style/mixin.scss';
.tab {
    position: relative;
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    // border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    &:after {
        @include setBottomLine(rgba(7, 17, 27, 0.1));
    }
    .tab-item {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: rgb(77, 85, 93);

        &.active {
            color: rgb(240, 20, 20);
        }
    }
}
</style>
