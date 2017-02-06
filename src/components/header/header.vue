<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        seller: {
            type: Object
        }
    }
}
</script>

<style lang="scss">
    .header {
        color: #fff;
        background-color: #000;
        .content-wrapper {
            padding: 24px 12px 18px 24px;
            .avatar {
                display: inline-block;
                img {
                    width: 64px;
                    height: 64px;
                }
            }
            .content {
                display: inline-block;
            }
        }
    }
</style>
