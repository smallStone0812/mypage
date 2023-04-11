<template>
    <div id="login">
        <div class="logoBox">
            <div class="login-logo" @click="goHome"></div>
            <div class="ma-login" @click="swithLogin" v-if="login == 'number' && isactive != 3"></div>
            <div class="ma-login ma-login2" @click="swithLogin2" v-if="login == 'ma' && isactive != 3"></div>
            <div class="numberLogin" v-if="login == 'number'">
                <div class="swith-nav">
                    <a :class="{swithActive:isactive == 1}" @click="changeActive(1)" href="#">手机号</a>
                    <a :class="{swithActive:isactive == 2}" @click="changeActive(2)" href="#">学号</a>
                    <a :class="{swithActive:isactive == 3}" class="right" @click="changeActive(3)" href="#">注册</a>
                </div>
                <div class="line"></div>
                <div class="swith-from">
                    <el-form :model="formInline" class="demo-form-inline" v-if="isactive =='1'">
                        <el-form-item>
                            <el-input prefix-icon="el-icon-mobile-phone" v-model="formInline.user" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input prefix-icon="el-icon-lock" v-model="formInline.region" placeholder="请输入密码" show-password></el-input>
                        </el-form-item>
                        <el-form-item class="last-item">
                            <el-button type="primary" @click="onSubmit">登&nbsp;&nbsp;录</el-button>
                        </el-form-item>
                    </el-form>
                    <el-form :model="formInline2" class="demo-form-inline" v-if="isactive == '2'">
                        <el-form-item>
                            <el-input prefix-icon="el-icon-office-building" v-model="formInline2.school" placeholder="输入你的学校"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input prefix-icon="el-icon-s-custom" v-model="formInline2.user" placeholder="大学学号"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input prefix-icon="el-icon-lock" v-model="formInline2.region" placeholder="密码" show-password></el-input>
                        </el-form-item>
                        <el-form-item class="last-item">
                            <el-button type="primary" @click="onSubmit">登&nbsp;&nbsp;录</el-button>
                        </el-form-item>
                    </el-form>
                    <el-form :model="formInline2" class="demo-form-inline" v-if="isactive == '3'">
                        <el-form-item>
                            <el-input prefix-icon="el-icon-office-building" v-model="formInline2.school" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input prefix-icon="el-icon-lock" v-model="formInline2.user" placeholder="8-16位（大写字母+小写字母+数字）密码" show-password></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input prefix-icon="el-icon-message" v-model="formInline2.region" placeholder="请输入手机验证码">
                                <el-button style="background: #f6f6f6; border: 1px solid #ededed; border-left: none;" slot="suffix">获取验证码</el-button>
                            </el-input>
                        </el-form-item>
                        <el-form-item class="last-item">
                            <el-button type="primary" @click="onSubmit">登&nbsp;&nbsp;录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="signin-misc" v-if=" isactive != 3">
                    <div class="remember">
                        <el-checkbox v-model="radio" label="1">记住我</el-checkbox>
                    </div>
                    <a href="#" class="forget">忘记密码</a>
                </div>
                <div class="buttomDiv" v-if=" isactive != 3">
                    <div class="other-signin-way-tit">
                        <span>其他登录方式</span>
                    </div>
                    <div class="other-login">
                        <div>
                            <a class="ten-QQ" href="#"></a>
                        </div>
                        <div>
                            <a class="ten-wei" href="#"></a>
                        </div>
                        <div class="teacher">
                            <el-button plain>教工号登录</el-button>
                        </div>
                    </div>
                </div>
                <div class="registration" v-if=" isactive == 3">
                    <div class="registration_text">
                        点击“注册”按钮，即代表您同意
                        <a href="https://www.zhihuishu.com/user/protocal.html" target="_blank">《智慧树用户协议》</a>、
                        <a href="https://www.zhihuishu.com/columnsapp/student/UserPrivacyProtocol/PrivacyPolicy1.html" target="_blank">《隐私政策》</a>
                    </div>
                </div>
                <div class="signin-over">
                    <p>
                        如登录、注册遇到问题，请
                        <a href="#">联系客服</a>
                    </p>
                </div>
            </div>
            <div class="maLogin" v-if="login == 'ma'">
                <div class="swith-nav">
                    <a href="#">扫码登陆</a>
                </div>
                <div class="line"></div>
                <div class="qrcode">
                    <div class="ma-code">
                        <img src="../assets/images/malogin.png" alt />
                        <div class="mebad" v-if="maShow">
                            <p>二维码已失效</p>
                            <span @click="refresh">刷新</span>
                        </div>
                    </div>

                    <div class="openApp">
                        <p>
                            打开
                            <a href="#">知到APP</a>,扫描二维码
                        </p>
                        <p class="larger">更快，更安全，更省事</p>
                        <div class="signin-over">
                            <p>
                                如登录、注册遇到问题，请
                                <a href="#">联系客服</a>
                            </p>
                        </div>
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
            isactive: 1,
            formInline: {
                user: "",
                region: ""
            },
            formInline2: {
                school: "",
                user: "",
                region: ""
            },
            radio: "1", //记住密码
            login: "number",
            phone_or_student: true,
            maShow: false
        };
    },
    mounted() {},
    methods: {
        changeActive(i) {
            this.isactive = i;
            if (i == 2) {
                this.phone_or_student = false;
            } else if (i == 1) {
                this.phone_or_student = true;
            }
        },
        onSubmit() {
            console.log("submit!");
        },
        // 切换登录方式
        swithLogin() {
            this.login = "ma";
            this.countDown();
            console.log("扫码登录");
        },
        swithLogin2() {
            this.login = "number";
            console.log("手机号登陆");
        },
        countDown() {
            const timer = setTimeout(() => {
                this.maShow = true;
                console.log(this.maShow);
                clearTimeout(timer);
            }, 10000);
        },
        refresh() {
            this.maShow = false;
            console.log(this.maShow);
            this.countDown();
        },
        goHome() {
            this.$router.push("/zhihuishu");
        }
    }
};
</script>
<style lang="scss" scoped>
#login {
    height: 100%;
    width: 100%;
    .logoBox {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -315px;
        margin-left: -200px;
        width: 400px;
        height: 630px;
        background: #ffffff;
        box-shadow: 0 0 10px 0 rgb(0 33 79 / 11%);
        border-radius: 6px;
        .login-logo {
            width: 200px;
            height: 34px;
            background: url("../assets/images/login-logo.png") no-repeat center;
            background-size: 100%;
            margin: 30px 100px 0;
        }

        .ma-login {
            position: absolute;
            top: 0;
            right: 0;
            width: 60px;
            height: 60px;
            background: url("../assets/images/ma.png") no-repeat center;
            background-size: 100%;
            cursor: pointer;
        }
        .ma-login:hover {
            opacity: 0.8;
        }
        .ma-login2 {
            background: url("../assets/images/pc.png") no-repeat center;
        }
        .numberLogin {
            .swith-nav {
                width: 355px;
                height: 40px;
                margin: 45px auto 0;
                a {
                    display: inline-block;
                    width: 60px;
                    height: 25px;
                    line-height: 25px;
                    font-size: 14px;
                    color: #777;
                    transition: all ease-in 0.2s;
                    // float: left;
                    margin-right: 20px;
                    text-align: center;
                    padding-bottom: 8px;
                    border-bottom: 4px solid #fff;
                }
                .swithActive {
                    color: #000;
                    font-size: 16px;
                    font-weight: bold;
                    padding-bottom: 8px;
                    border-bottom: 4px solid #3d84ff;
                }
                .right {
                    float: right;
                    margin-right: 0;
                }
            }
            .line {
                width: 100%;
                height: 1px;
                background: #ededed;
                margin-top: 5px;
            }
            .swith-from {
                margin: 20px auto 0;
                width: 340px;
                .el-form-item {
                    margin-bottom: 25px;
                }
                .last-item {
                    margin-bottom: 0;
                }
                .el-input__icon {
                    width: 16px;
                    height: 16px;
                    font-weight: 700;
                    color: red;
                }
                .el-input__suffix {
                    right: 0;
                    .el-button {
                        color: #3d84ff;
                    }
                }
                .el-button:focus,
                .el-button:hover {
                    color: none;
                }
            }
            .signin-misc {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 340px;
                height: 20px;
                margin: 13px auto 0;
                font-size: 12px;
                a {
                    color: #777777;
                }
            }
            .buttomDiv {
                margin: 0 auto;
                width: 340px;
                .other-signin-way-tit {
                    width: 340px;
                    height: 9px;
                    margin-top: 30px;
                    border-bottom: 1px solid #ededed;
                    span {
                        display: block;
                        margin: -9px auto 0;
                        width: 84px;
                        height: 18px;
                        border-radius: 9px;
                        background: #fff;
                        text-align: center;
                        line-height: 18px;
                        font-size: 14px;
                        color: #777;
                        padding: 0 10px;
                    }
                }
                .other-login {
                    width: 303px;
                    margin: 26px auto 0;
                    text-align: center;
                    display: flex;
                    a {
                        display: inline-block;
                        background-size: 100%;
                        width: 40px;
                        height: 40px;
                        margin-right: 40px;
                    }
                    .ten-QQ {
                        background: url("../assets/images/qq.png") no-repeat
                            center;
                    }
                    .ten-wei {
                        background: url("../assets/images/wei.png") no-repeat
                            center;
                    }
                    .teacher {
                        flex: 1;
                        .el-button {
                            width: 100%;
                            height: 100%;
                            color: #777777;
                            font-size: 16px;
                            border: 1px solid #e1dfdf;
                        }
                        .el-button:hover {
                            border: 1px solid #ededed;
                            color: #939292;
                        }
                    }
                }
            }
            .registration {
                .registration_text {
                    height: 18px;
                    line-height: 18px;
                    font-size: 12px;
                    color: #bfbfbf;
                    text-align: center;
                    margin: 10px auto 0;
                    a {
                        color: #3d84ff;
                    }
                    a:hover {
                        color: #3d84ff;
                        text-decoration: none;
                        opacity: 0.8;
                    }
                }
            }
            .signin-over {
                position: absolute;
                bottom: 57px;
                left: 30px;
                width: 340px;
                height: 16px;
                margin: 0 auto;
                p {
                    font-size: 12px;
                    text-align: center;
                    color: #777777;
                    a {
                        color: #000000;
                    }
                }
            }
        }
        .maLogin {
            .swith-nav {
                width: 355px;
                height: 40px;
                margin: 45px auto 0;
                a {
                    display: inline-block;
                    height: 25px;
                    line-height: 25px;
                    font-size: 14px;
                    font-weight: 700;
                    color: #000;
                    text-align: center;
                    padding-bottom: 8px;
                    border-bottom: 4px solid #3d84ff;
                }
            }
            .line {
                width: 100%;
                height: 1px;
                background: #ededed;
                margin-top: 5px;
            }
            .qrcode {
                margin-top: 54px;
                width: 100%;

                .ma-code {
                    margin: 0 auto;
                    width: 240px;
                    height: 240px;
                    border: 1px solid #ededed;
                    padding: 20px;
                    box-sizing: border-box;
                    position: relative;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: over;
                    }
                    .mebad {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(237, 237, 237, 0.9);
                        p {
                            margin-top: 90px;
                            text-align: center;
                            font-size: 18px;
                        }
                        span {
                            display: block;
                            width: 90px;
                            height: 40px;
                            border-radius: 20px;
                            color: #fdfdfd;
                            background: #9ba9d3;
                            text-align: center;
                            line-height: 40px;
                            font-size: 18px;
                            margin: 15px auto;
                            cursor: pointer;
                        }
                    }
                }
                .openApp {
                    text-align: center;
                    font-size: 14px;
                    color: #777777;
                    a {
                        color: #3d84ff;
                    }
                    .larger {
                        font-size: 24px;
                        color: #3d84ff;
                    }
                    .signin-over {
                        position: absolute;
                        bottom: 57px;
                        left: 30px;
                        width: 340px;
                        height: 16px;
                        margin: 0 auto;
                        p {
                            font-size: 12px;
                            text-align: center;
                            color: #777777;
                            a {
                                color: #000000;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
<style lang="scss">
.swith-from {
    .el-input__icon {
        font-weight: 700;
        color: #777777;
        font-size: 17px;
    }
    .el-input__inner {
        background: #f6f6f6;
        border: 1px solid #ededed;
        border-radius: 0;
    }
    .el-input__prefix {
        left: 8px;
    }
    .el-input--prefix .el-input__inner {
        padding-left: 45px;
    }
    .el-button--primary {
        width: 340px;
        height: 40px;
        margin-top: 15px;
        color: #fff;
        background: #3d84ff;
        border-radius: 0;
        font-size: 16px;
        cursor: pointer;
        text-align: center;
    }
    .el-button--primary:hover {
        background: #649dff;
        font-size: 16px;
    }
}
.signin-misc {
    .el-checkbox {
        color: #777777;
        .el-checkbox__label {
            font-size: 12px;
        }
    }
    .el-checkbox__inner {
        width: 16px;
        height: 16px;
        border-radius: 0;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner,
    .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background: #3d84ff;
    }
}
</style>