<template>
    <div id="indexpage">
        <div class="top_bg"></div>
        <div class="nav_top" style="background: none">
            <a class="logo_block" href>
                <img class="logo_img1" src="../assets/images/home-logo-dark.png" style="display:inline-block" alt="logo" />
                <img class="logo_img2" src="../assets/images/home-logo-light.png" style="display:none" alt="logo" />
            </a>
            <div class="meau" style="display:none">
                全部频道
                <i class="el-icon-arrow-down"></i>
            </div>
            <div class="search">
                <el-input v-model="input" placeholder="请搜索课程/老师/学校">
                    <el-button icon="el-icon-search" slot="suffix">搜索</el-button>
                </el-input>
            </div>
            <div class="carte">
                <ul>
                    <li class="carte_block" v-for="(obj,index) in carte" :key="index">
                        <span class="carte_icon">
                            <i :class="obj.icon"></i>
                        </span>
                        <span class="carte_title">{{obj.text}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="banner">
            <el-carousel height="500px" arrow="never">
                <el-carousel-item v-for="item in 3" :key="item">
                    <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="content">
            <div class="nav">
                <div class="nav_left">
                    <a href="#">
                        <img src="../assets/images/20220419-100608.png" alt />
                    </a>
                    <a href="#">
                        <img src="../assets/images/20220419-100601.png" alt />
                    </a>
                </div>
                <div class="nav_center">
                    <div class="nav_center_t">
                        <ul>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                        </ul>
                    </div>
                    <div class="nav_center_b">
                        <ul>
                            <li class="ncb_l">
                                <a class="frist_a" href="#">
                                    <span class="sp_icon"></span>
                                    <span>职业专业库</span>
                                </a>
                                <a class="second_a" href="#">智能制造</a>
                                <a class="last_a" href="#">新媒体营销</a>
                            </li>
                            <li class="ncb_r">
                                <a class="frist_a" href="#">
                                    <span class="sp_icon"></span>
                                    <span>微专业</span>
                                </a>
                                <a class="second_a" href="#">人工智能+</a>
                                <a class="last_a" href="#">大数据</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="nav_right">
                    <a href="#">语言留学</a>
                    <a href="#">培训考证</a>
                    <a href="#">IT互联网</a>
                    <a href="#">
                        更多
                        <i></i>
                    </a>
                </div>
            </div>
            <div class="live_course">
                <div class="live_title">
                    <h3>直播LIVE</h3>
                    <div class="live_more">
                        <span class="text">更多</span>
                        <span class="block">></span>
                    </div>
                </div>
                <div class="live_flow">
                    <div class="timeLine">
                        <ul>
                            <li>
                                <div class="li_one">
                                    <div class="time_dian"></div>
                                    <div class="time_line"></div>
                                </div>
                                <div class="li_two">
                                    <span class="m_day">12/17</span>
                                    <span class="hour_time">19:30-21:00</span>
                                </div>
                                <div class="li_three">
                                    <img src="../assets/images/live1.jpg" alt />
                                    <div class="li_text">
                                        <div class="title">星光学堂.北斗新航向|嬴创好未来</div>
                                        <div class="content">山东大学教育拓展大讲堂 |</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="li_one">
                                    <div class="time_dian"></div>
                                    <div class="time_line"></div>
                                </div>
                                <div class="li_two">
                                    <span class="m_day">12/12</span>
                                    <span class="hour_time">19:30-21:00</span>
                                </div>
                                <div class="li_three">
                                    <img src="../assets/images/live2.jpg" alt />
                                    <div class="li_text">
                                        <div class="title">第8章 卤代烃、第9章 醇</div>
                                        <div class="content">俞善辉 | 华东理工大学</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="li_one">
                                    <div class="time_dian"></div>
                                    <div class="time_line"></div>
                                </div>
                                <div class="li_two">
                                    <span class="m_day">12/9</span>
                                    <span class="hour_time">19:30-21:00</span>
                                </div>
                                <div class="li_three">
                                    <img src="../assets/images/live3.jpg" alt />
                                    <div class="li_text">
                                        <div class="title">晚年马克思的一以贯之</div>
                                        <div class="content">王熙雯 | 海南大学</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="li_one">
                                    <div class="time_dian"></div>
                                    <div class="time_line"></div>
                                </div>
                                <div class="li_two">
                                    <span class="m_day">12/9</span>
                                    <span class="hour_time">19:30-21:00</span>
                                </div>
                                <div class="li_three">
                                    <img src="../assets/images/live4.jpg" alt />
                                    <div class="li_text">
                                        <div class="title">案例化项目路演展评</div>
                                        <div class="content">邢建平 | 山东大学</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="li_one">
                                    <div class="time_dian"></div>
                                    <div class="time_line"></div>
                                </div>
                                <div class="li_two">
                                    <span class="m_day">12/9</span>
                                    <span class="hour_time">19:30-21:00</span>
                                </div>
                                <div class="li_three">
                                    <img src="../assets/images/live5.jpg" alt />
                                    <div class="li_text">
                                        <div class="title">呼吸系统疾病的小儿推拿治疗</div>
                                        <div class="content">陈远青 | 浙江中医药大学</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: "",
            carte: [
                {
                    icon: "el-icon-files",
                    text: "同步课堂"
                },
                {
                    icon: "el-icon-sunny",
                    text: "白天模式"
                },
                {
                    icon: "el-icon-mobile",
                    text: "app下载"
                },
                {
                    icon: "el-icon-school",
                    text: "我的课堂"
                },
                {
                    icon: "el-icon-s-custom",
                    text: "登陆注册"
                }
            ],
            nav_Arr: [
                {
                    imgSrc: "../assets/images/1x.png",
                    back: "#fff8f4"
                },
                {
                    imgSrc: "../assets/images/2x.png",
                    back: "#fff8f4"
                },
                {
                    imgSrc: "../assets/images/3x.png",
                    back: "#fff8f4"
                },
                {
                    imgSrc: "../assets/images/4x.png",
                    back: "#fff8f4"
                },
                {
                    imgSrc: "../assets/images/5x.png",
                    back: "#fff8f4"
                }
            ]
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll, true);
    },
    methods: {
        // eslint-disable-next-line no-unused-vars
        handleScroll(e) {
            let topDom = document.querySelector(".nav_top");
            let meauDom = document.querySelector(".meau");
            let logo_imgDom1 = document.querySelector(".logo_img1");
            let logo_imgDom2 = document.querySelector(".logo_img2");

            let scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop == 0) {
                topDom.style.background = "none";
                meauDom.style.display = "none";
                logo_imgDom1.style.display = "inline-block";
                logo_imgDom2.style.display = "none";
            } else {
                topDom.style.background = "#ffffff";
                meauDom.style.display = "inline-block";
                logo_imgDom1.style.display = "none";
                logo_imgDom2.style.display = "inline-block";
            }
        }
    }
};
</script>
<style lang="scss" scoped>
#indexpage {
    width: 100%;
    height: 3000px;
    min-width: 1280px;
    .top_bg {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 150px;
        background-image: linear-gradient(
            360deg,
            rgb(255 255 255 / 0%) 0%,
            rgb(0, 0, 0) 100%
        );
    }
    .nav_top {
        height: 72px;
        width: 100%;
        box-sizing: border-box;
        padding: 0 60px;
        // background: none;
        z-index: 1000;
        position: fixed;
        .logo_block {
            float: left;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            img {
                width: 200px;
            }
        }
        .meau {
            height: 33px;
            line-height: 32px;
            float: left;
            margin: 20px 0 0 30px;
            border-radius: 20px;
            background: #ededed;
            padding: 0 15px;
            font-size: 16px;
            color: #2a2a2a;
            i {
                font-weight: 700;
                font-size: 14px;
            }
        }
        .search {
            float: left;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 420px;
            .el-input__inner {
                height: 44px;
                border-radius: 50px;
            }
        }
        .carte {
            float: right;
            .carte_block {
                width: 54px;
                height: 56px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-top: 10px;
                align-items: center;
                float: left;
                margin-left: 20px;
                cursor: pointer;
                .carte_icon {
                    width: 32px;
                    height: 32px;
                    background: #f5f5f51c;
                    border-radius: 15px;
                    line-height: 32px;
                    text-align: center;
                    color: #9c9c9c;
                    font-weight: 700;
                }
                .carte_title {
                    font-size: 12px;
                    color: #9c9c9c;
                }
            }
        }
    }
    .banner {
        height: 500px;
        width: 100%;
        .el-carousel__item h3 {
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 150px;
            margin: 0;
        }

        .el-carousel__item:nth-child(1) {
            background: url(../assets/images/PC_banner.jpg) no-repeat;
            background-size: 100% 100%;
        }

        .el-carousel__item:nth-child(2) {
            background: url(../assets/images/ban_2.jpg) no-repeat;
            background-size: 100% 100%;
        }
        .el-carousel__item:nth-child(3) {
            background: url(../assets/images/banner.jpg) no-repeat;
            background-size: 100% 100%;
        }
    }
}
.content {
    width: 1280px;
    margin: 20px auto 0;
    // background: red;
    .nav {
        height: 140px;
        .nav_left {
            float: left;
            a {
                img {
                    width: 120px;
                    height: 120px;
                    margin-right: 20px;
                }
            }
        }
        .nav_center {
            float: left;
            .nav_center_t {
                ul {
                    li {
                        float: left;
                        width: 136px;
                        height: 50px;
                        margin: 0 10px 20px 0;
                        border-radius: 50px;
                        background: no-repeat;
                        background-size: 100% 100%;
                        cursor: pointer;
                    }
                    li:nth-child(1) {
                        background: url(../assets/images/1x.png) no-repeat;
                        background-size: 100% 100%;
                    }
                    li:nth-child(2) {
                        background: url(../assets/images/2x.png) no-repeat;
                        background-size: 100% 100%;
                    }
                    li:nth-child(3) {
                        background: url(../assets/images/3x.png) no-repeat;
                        background-size: 100% 100%;
                    }
                    li:nth-child(4) {
                        background: url(../assets/images/4x.png) no-repeat;
                        background-size: 100% 100%;
                    }
                    li:nth-child(5) {
                        background: url(../assets/images/5x.png) no-repeat;
                        background-size: 100% 100%;
                        margin-right: 0;
                    }
                }
            }
            .nav_center_b {
                ul {
                    li {
                        float: left;
                        width: 355px;
                        height: 50px;
                        margin: 0 10px 20px 0;
                        border-radius: 50px;
                        background: #fafafa;
                        a {
                            float: left;
                            font-size: 14px;
                            line-height: 50px;
                            height: 50px;
                            margin-left: 23px;
                            span {
                                float: left;
                            }
                            .sp_icon {
                                float: left;
                                // display: inline-block;
                                width: 24px;
                                height: 24px;
                                // border: 1px solid red;
                                background: url(../assets/images/ku.png)
                                    no-repeat;
                                background-size: 100% 100%;
                                margin-right: 5px;
                                margin-top: 12px;
                            }
                        }
                        .frist_a {
                            width: 115px;
                            font-weight: bold;
                            color: #2a2a2a;
                        }
                        .second_a {
                            width: 75px;
                        }
                        .last_a {
                            width: 75px;
                        }
                    }
                    .ncb_r {
                        margin-right: 0;
                        .sp_icon {
                            background: url(../assets/images/ku2.png) no-repeat;
                            background-size: 100% 100%;
                        }
                    }
                }
            }
        }
        .nav_right {
            float: left;
            width: 206px;
            a {
                display: inline-block;
                width: 83px;
                height: 50px;
                margin: 0 10px 20px;
                line-height: 50px;
                i {
                    display: inline-block;
                    width: 13px;
                    height: 13px;
                    line-height: 13px;
                    background: #3d84ff;
                    border-radius: 16px;
                }
            }
        }
    }
    .live_course {
        margin-top: 30px;
        overflow: hidden;
        clear: both;
        .live_title {
            margin-bottom: 30px;
            h3 {
                display: inline-block;
                font-size: 30px;
                line-height: 42px;
                color: #2a2a2a;
                font-weight: 500;
                margin-right: 30px;
            }
            .live_more {
                display: inline-block;
                width: 63px;
                height: 28px;
                line-height: 26px;
                border: 1px solid #eeeeee;
                box-sizing: border-box;
                border-radius: 28px;
                cursor: pointer;
                .text {
                    margin-left: 8px;
                    font-size: 14px;
                    color: #777;
                }
                .block {
                    display: inline-block;
                    width: 13px;
                    height: 13px;
                    border-radius: 40px;
                    line-height: 13px;
                    font-size: 12px;
                    margin-left: 5px;
                    text-align: center;
                    color: #ffffff;
                    background: #777777;
                }
            }
            .live_more:hover {
                border-color: #3d84ff;
                .text {
                    color: #3d84ff;
                }
                .block {
                    background: #3d84ff;
                }
            }
        }
        .live_flow {
            .timeLine {
                li {
                    float: left;
                    width: 256px;
                    .li_one {
                        float: left;
                        margin-bottom: 15px;
                        .time_dian {
                            float: left;
                            width: 48px;
                            height: 48px;
                            border-radius: 50px;
                            background: #f6f6f6;
                            background-image: url(../assets/images/bo.png);
                            background-repeat: no-repeat;
                            background-size: 60%;
                            background-position: 55% 50%;
                            cursor: pointer;
                        }
                        .time_line {
                            float: left;
                            height: 4px;
                            width: 208px;
                            background: #f6f6f6;
                            margin-top: 22px;
                        }
                    }
                    .li_two {
                        float: left;
                        height: 34px;
                        margin-bottom: 10px;
                        .m_day {
                            font-size: 24px;
                            color: #2a2a2a;
                            line-height: 34px;
                            margin-right: 15px;
                        }
                        .hour_time {
                            color: #9c9c9c;
                            font-size: 14px;
                            opacity: 0.6;
                        }
                    }
                    .li_three {
                        float: left;
                        width: 240px;
                        img {
                            width: 240px;
                            height: 136px;
                            border-radius: 6px;
                        }
                        .li_text {
                            font-size: 16px;
                            font-weight: 500;
                            color: #2a2a2a;
                            overflow: hidden;
                            margin-top: 10px;
                        }
                        .content {
                            font-size: 14px;
                            color: #9c9c9c;
                            margin-top: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>
<style lang="scss">
.search {
    .el-input__inner {
        height: 44px;
        border-radius: 50px;
        border: none;
        font-size: 16px;
        background: #9c9c9c33;
    }
    .el-input__inner:hover {
        border: none;
    }
    .el-input__suffix {
        .el-button {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 4px;
            border-radius: 50px;
            height: 36px;
            width: 80px;
            background: #3d84ff;
            font-size: 16px;
            color: #ffffff;
            border: none;
            i {
                font-size: 20px;
            }
        }
        .el-button:hover {
            background: #6099fb;
        }
    }
}
.banner {
    .el-carousel__button {
        opacity: 0.5;
        border: 2px solid #ffffff;
        border-radius: 12px;
        width: 14px;
        height: 14px;
        box-sizing: border-box;
        background: inherit;
        margin-right: 14px;
        cursor: pointer;
    }
}
</style>
