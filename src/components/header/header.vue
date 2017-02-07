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
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if="seller.supports"  @click="showDetail" class="support-count">
                <span class="count">{{seller.supports.length}}个</span>
                <span class="icon-keyboard_arrow_right"></span>
            </div>
        </div>
        <div class="bulletin-wrapper">
            <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
            <span class="icon-keyboard_arrow_right"></span>
        </div>
        <div class="background">
            <img :src="seller.avatar" width="100%" height="100%" alt="">
        </div>
        <transition name="fade">
            <div v-show="detailShow" class="detail">
                <div class="detail-wrapper clearfix">
                    <div class="detail-main">
                        <h1 class="name">{{seller.name}}</h1>
                        <div class="start-wrapper">
                            <v-star :size="48" :score="seller.score"></v-star>
                        </div>
                        <div class="title">
                            <div class="line"></div>
                            <div class="text">优惠信息</div>
                            <div class="line"></div>
                        </div>
                        <ul v-if="seller.supports" class="supports">
                            <li v-for="(item, index) in seller.supports" class="support-item">
                                <span class="icon" :class="classMap[index]"></span>
                                <span class="text">{{item.description}}</span>
                            </li>
                        </ul>
                        <div class="title">
                            <div class="line"></div>
                            <div class="text">商家公告</div>
                            <div class="line"></div>
                        </div>
                        <div class="bulletin">
                            <p class="content">{{seller.bulletin}}</p>
                        </div>
                    </div>
                </div>
                <div @click="closeDetail" class="detail-close">
                    <i class="icon-close"></i>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import vStar from 'components/star/star';
export default {
    props: {
        seller: {
            type: Object
        }
    },
    data: function () {
        return {
            detailShow: false
        }
    },
    created: function () {
        this.classMap = ['descrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    methods: {
        showDetail: function () {
            this.detailShow = true;
        },
        closeDetail: function () {
            this.detailShow = false;
        }
    },
    components: {vStar}
}
</script>

<style lang="scss">
    .header {
        position: relative;
        color: #fff;
        background-color: rgba(7, 17, 27, 0.5);
        overflow: hidden;
        .content-wrapper {
            position: relative;
            padding: 24px 12px 18px 24px;
            font-size: 0;
            .avatar {
                display: inline-block;
                vertical-align: top;
                img {
                    width: 64px;
                    height: 64px;
                    border-radius: 2px;
                }
            }
            .content {
                margin-left: 16px;
                display: inline-block;
                .title {
                    margin: 2px 0 8px;
                    font-size: 16px;
                    color: #fff;
                    font-weight: bold;
                    line-height: 18px;

                    .brand {
                        display: inline-block;
                        font-size: 0;
                        vertical-align: top;
                        width: 30px;
                        height: 18px;
                        background-image: url('./images/brand@2x.png');
                        background-repeat: no-repeat;
                        background-size: 30px 18px;

                    }
                }
                .description {
                    margin-bottom: 10px;
                    font-size: 12px;
                    line-height: 12px;
                    color: #FFF;
                    font-weight: 200;
                }
                .support {
                    font-size: 0;
                    .icon {
                        display: inline-block;
                        margin-right: 4px;
                        width: 12px;
                        height: 12px;
                        font-size: 0;
                        vertical-align: top;
                        background-repeat: no-repeat;
                        background-size: 12px;
                        &.descrease {
                            background-image: url('./images/decrease_1@2x.png');
                        }
                        &.discount {
                            background-image: url('./images/discount_1@2x.png');
                        }
                        &.guarantee {
                            background-image: url('./images/guarantee_1@2x.png');
                        }
                        &.invoice {
                            background-image: url('./images/invoice_1@2x.png');
                        }
                        &.special {
                            background-image: url('./images/special_1@2x.png');
                        }
                    }
                    .text {
                        font-size: 10px;
                        line-height: 12px;
                        color: #FFF;
                        font-weight:200;
                    }
                }
            }
            .support-count {
                position: absolute;
                right: 12px;
                bottom: 14px;
                padding: 0 8px;
                height: 24px;
                line-height: 24px;
                border-radius: 14px;
                background-color: rgba(0,0,0,0.2);
                text-align: center;
                .count {
                    vertical-align: top;
                    font-size: 10px;
                }
                .icon-keyboard_arrow_right {
                    margin-left: 2px;
                    line-height: 24px;
                    font-size: 10px;
                    color: inherit;
                    background-color: transparent;
                }
            }
        }
        .bulletin-wrapper {
            position: relative;
            height: 28px;
            line-height: 28px;
            padding: 0 22px 0 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            background-color: rgba(7, 17, 27, 0.2);
            .bulletin-title {
                display: inline-block;
                margin-top: 8px;
                vertical-align: top;
                width: 22px;
                height: 12px;
                background-image: url('./images/bulletin@2x.png');
                background-repeat: no-repeat;
                background-size: 22px 12px;
            }
            .bulletin-text {
                margin: 0 4px;
                vertical-align: top;
                font-size: 10px;
                font-weight: 200px;
            }
            .icon-keyboard_arrow_right {
                position: absolute;
                right: 12px;
                bottom: 8px;
                font-size: 10px;
            }
        }
        .background{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            filter: blur(10px);
        }
        .detail {
            position: fixed;
            top: 0;
            z-index: 100;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(7, 17, 27, 0.8);
            transition: all 0.5s;
            backdrop-filter: blur(10px);
            &.fade-enter-active, &.fade-leave-active {
                opacity: 1;
                background-color: rgba(7, 17, 27, 0.8);
            }
            &.fade-enter, &.fade-leave-active {
                opacity: 0;
                background-color: rgba(7, 17, 27, 0);
            }
            .detail-wrapper {
                min-height: 100%;
                .detail-main {
                    margin-top: 64px;
                    padding-bottom: 64px;
                    .name {
                        line-height: 16px;
                        text-align: center;
                        font-size: 16px;
                        font-weight: 700;
                    }
                    .start-wrapper {
                        margin-top: 18px;
                        padding: 2px 0;
                        text-align: center;
                    }
                    .title {
                        display: flex;
                        margin: 28px auto 24px auto;
                        width: 80%;
                        .line {
                            flex: 1;
                            position: relative;
                            top: -6px;
                            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                        }
                        .text {
                            padding: 0 12px;
                            font-size: 14px;
                            font-weight: 700;
                        }
                    }
                    .supports {
                        margin: 0 auto;
                        width: 80%;
                        .support-item{
                            padding: 0 12px;
                            margin-bottom: 12px;
                            font-size: 0;
                            &:last-child{
                                margin-bottom: 0;
                            }
                            .icon {
                                display: inline-block;
                                margin-right: 6px;
                                width: 16px;
                                height: 16px;
                                vertical-align: top;
                                background-repeat: no-repeat;
                                background-size: 16px;
                                &.descrease {
                                    background-image: url('./images/decrease_2@2x.png');
                                }
                                &.discount {
                                    background-image: url('./images/discount_2@2x.png');
                                }
                                &.guarantee {
                                    background-image: url('./images/guarantee_2@2x.png');
                                }
                                &.invoice {
                                    background-image: url('./images/invoice_2@2x.png');
                                }
                                &.special {
                                    background-image: url('./images/special_2@2x.png');
                                }
                            }
                            .text {
                                font-size: 12px;
                                line-height: 16px;
                            }
                        }
                    }
                    .bulletin {
                        margin: 0 auto;
                        width: 80%;
                        .content{
                            padding: 0 12px;
                            font-size: 12px;
                            line-height: 24px;
                        }
                    }
                }
            }
            .detail-close {
                position: relative;
                bottom: 0;
                width: 32px;
                height: 32px;
                margin: -64px auto 0 auto;
                clear: both;
                font-size: 32px;
            }
        }
    }
</style>
