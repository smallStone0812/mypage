<template>
    <div>
        <myecharts :width="'80%'" :height="'20vw'" :option="option1"></myecharts>
    </div>
</template>
<script>
import myecharts from "@/components/my-echarts.vue";
export default {
    components: {
        myecharts
    },
    data() {
        return {
            //三角形柱状图
            option1: {
                tooltip: {
                    trigger: "axis",
                    formatter: `{b}<br/>
                                {a}： {c} 千人`
                },
                //图表的内边距
                grid: {
                    left: "3%",
                    top: "20%",
                    right: "3%",
                    bottom: "1%",
                    show: true,
                    borderColor: "rgb(47,32,71)",
                    containLabel: true
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子"],
                    type: "category",
                    axisLabel: {
                        show: true,
                        color: "rgb(142,175,220)"
                    },
                    axisTick: {
                        //不显示刻度线
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 1,
                            color: "rgba(47,32,71)"
                        }
                    },
                    // 区域分割线
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: "rgba(204, 204, 204,0.3)"
                        }
                    }
                },
                yAxis: {
                    name: "单位：千人",
                    nameTextStyle: {
                        color: "rgb(142,175,220)"
                    },
                    // 区域分割线
                    splitLine: {
                        lineStyle: {
                            color: "rgba(47,32,71)"
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        color: "rgb(142,175,220)"
                    },
                    axisLine: {
                        lineStyle: {
                            show: true, //是否显示坐标轴轴线，
                            color: "white", //y轴轴线的颜色
                            width: 0.5 //x轴粗细
                        }
                    }
                },
                series: [
                    {
                        name: "销量",
                        //三角形柱状图
                        type: "pictorialBar",
                        barCategoryGap: "30",
                        symbol:
                            "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
                        //渐变色

                        data: [5, 20, 36, 10]
                    }
                ]
            }
        };
    },

    mounted() {},
    methods: {}
};
</script>
<style lang="scss" scoped>
</style>