<template>
    <div class="goods">
        <div class="menu-wrapper">
            <ul>
                <li v-for="(item, index) in goods" class="menu-item">
                    <span class="text">
                        <span v-show="item.type>0" class="icon" :class="classMap[index]"></span>{{item.name}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="foods-wrapper">
            <ul>
                <li v-for="(item, index) in goods" class="foods-list">
                    <h1 class="title">{{item.name}}</h1>
                    <ul>
                        <li v-for="food in item.foods" class="food-item">
                            <div class="icon">
                                <img :src="food.icon" height="57px" width="57px" alt="">
                            </div>
                            <div class="content">
                                <h2 class="name">{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span class="count">月售{{food.sellCount}}份</span>
                                    <span>好评率{{food.rating}}%</span>
                                </div>
                                <div class="price">
                                    <span class="now">{{food.price}}</span>
                                    <span class="old" v-show="food.oldPrice">{{food.oldPrice}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        seller: {
            type: Object
        }
    },
    data: function () {
        return {
            goods: []
        };
    },
    created: function () {
        this.classMap = ['descrease', 'discount', 'special', 'invoice', 'guarantee'];

        this.$http.get('/api/goods').then(function (res) {
            if (res.ok) {
                this.goods = res.body.data;
            }
        })
    }
}
</script>

<style lang="scss">
@import '../../common/style/mixin.scss';
    .goods {
        display: flex;
        position: absolute;
        top: 174px;
        bottom: 46px;
        width: 100%;
        overflow: hidden;
        .menu-wrapper {
            flex: 0 0 80px;
            width: 80px;
            background-color: #f3f5f7;
            .menu-item {
                display: table;
                padding: 0 12px;
                height: 54px;
                width: 56px;
                line-height: 14px;
                .icon {
                    display: inline-block;
                    margin-right: 4px;
                    width: 12px;
                    height: 12px;
                    vertical-align: top;
                    background-repeat: no-repeat;
                    background-size: 12px;
                    &.descrease {
                        background-image: url('./images/decrease_3@2x.png');
                    }
                    &.discount {
                        background-image: url('./images/discount_3@2x.png');
                    }
                    &.guarantee {
                        background-image: url('./images/guarantee_3@2x.png');
                    }
                    &.invoice {
                        background-image: url('./images/invoice_3@2x.png');
                    }
                    &.special {
                        background-image: url('./images/special_3@2x.png');
                    }
                }
                .text {
                    position: relative;
                    display: table-cell;
                    width: 56px;
                    vertical-align: middle;
                    font-size: 12px;
                    &:after {
                        @include setBottomLine(rgba(7, 17, 27, 0.2));
                    }
                }
            }
        }
        .foods-wrapper {
            flex: 1;
            .title {
                padding-left: 14px;
                height: 26px;
                line-height: 26px;
                border-left: 2px solid #d9dde1;
                font-size: 12px;
                color: rgb(147, 153, 159);
                background-color: #f3f5f7;
            }
            .food-item {
                display: flex;
                position: relative;
                margin: 18px;
                padding-bottom: 18px;
                &:after {
                    @include setBottomLine(rgba(7, 17, 27, 0.1));
                }
                &:last-child:after {
                    display: none;
                }
                &:last-child {
                    margin-bottom: 0;
                }
                .icon {
                    flex: 0 0 57px;
                    margin-right: 10px;
                }
                .content {
                    flex: 1;
                    .name {
                        margin: 2px 0 8px 0;
                        height: 14px;
                        line-height: 14px;
                        font-size: 14px;
                        color: rgb(7, 17, 27);
                    }
                    .desc, .extra {
                        line-height: 10px;
                        font-size: 10px;
                        color: rgb(147, 153, 159);
                    }
                    .desc {
                        margin-bottom: 8px;
                    }
                    .extra {
                        .count {
                            font-size: 12px;
                        }
                    }
                    .price {
                        font-weight: 700;
                        line-height: 24px;
                        .now {
                            margin-right: 8px;
                            font-size: 14px;
                            color: rgb(240, 20, 20);
                        }
                        .old {
                            text-decoration: line-through;
                            font-size: 10px;
                            color: rgb(147, 153, 159);
                        }
                    }
                }
            }
        }
    }
</style>
