<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header">
      <section class="container">
<!--        <h1 id="logo">-->
<!--          <a href="#" title="保康县农村综合服务信息平台">-->
<!--            <img src="~/assets/img/logo.png" width="100%" alt="保康县农村综合服务信息平台">-->
<!--          </a>-->
<!--        </h1>-->
        <h3>保康县农村综合服务信息平台</h3>
        <div class="h-r-nsl">
          <ul class="nav" v-if="loginInfo.id">
            <router-link to="/" tag="li" active-class="current" exact>
              <a>首页</a>
            </router-link>
            <router-link to="/tpa" tag="li" active-class="current" exact>
              <a>精准扶贫</a>
            </router-link>
            <router-link to="/em" tag="li" active-class="current">
              <a>电子商务</a>
            </router-link>
            <router-link to="/teacher" tag="li" active-class="current">
              <a>电子村务</a>
            </router-link>
            <router-link to="/article" tag="li" active-class="current">
              <a>政府公开</a>
            </router-link>
            <router-link to="/qa" tag="li" active-class="current">
              <a>便民服务</a>
            </router-link>
            <router-link to="/qa" tag="li" active-class="current">
              <a>远程医疗</a>
            </router-link>
            <router-link to="/qa" tag="li" active-class="current">
              <a>远程就业</a>
            </router-link>
            <router-link to="/qa" tag="li" active-class="current">
              <a>视频会议</a>
            </router-link>
          </ul>
          <!-- / nav -->

          <ul class="h-r-login">
            <li v-if="loginInfo.id" id="no-login">
              <a href="/login" title="登录">
                <em class="icon18 login-icon">&nbsp;</em>
                <span class="vam ml5">登录</span>
              </a>
              |
              <a href="/register" title="注册">
                <span class="vam ml5">注册</span>
              </a>
            </li>
            <li v-if="loginInfo.id" id="is-login-one" class="mr10">
              <a id="headerMsgCountId" href="#" title="消息">
                <em class="icon18 news-icon">&nbsp;</em>
              </a>
              <q class="red-point" style="display: none">&nbsp;</q>
            </li>
            <li v-if="!loginInfo.id" id="is-login-two" class="h-r-user">
              <a href="/ucenter" title>
                <img
                  :src="loginInfo.avatar"
                  width="30"
                  height="30"
                  class="vam picImg"
                  alt
                >
                <span id="userName" class="vam disIb">{{ loginInfo.nickname }}</span>
              </a>
              <a href="javascript:void(0);" title="退出" @click="logout()" class="ml5">退出</a>
            </li>
            <!-- /未登录显示第1 li；登录后显示第2，3 li -->
          </ul>
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"></div>
        </aside>
        <div class="clear"></div>
      </section>
    </header>
    <!-- /公共头引入 -->

    <nuxt/>

    <!-- 公共底引入 -->
    <footer id="footer">
      <section class="container">
        <div class>
          <h4 class="hLh30">
            <span class="fsize18 f-fM c-999">友情链接</span>
          </h4>
          <ul class="of flink-list">
            <li>
              <a href="http://www.atguigu.com/" title="湖北文理计算机工程学院" target="_blank">湖北文理计算机工程学院</a>
            </li>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="b-foot">
          <section class="fl col-7">
            <section class="mr20">
              <section class="b-f-link">
                <a href="#" title="关于我们" target="_blank">关于我们</a>|
                <a href="#" title="联系我们" target="_blank">联系我们</a>|
                <a href="#" title="帮助中心" target="_blank">帮助中心</a>|
                <a href="#" title="资源下载" target="_blank">资源下载</a>|
                <span>服务热线：010-56253825(湖北文理学院)</span>
                <span>Email：info@hbwl.com</span>
              </section>
              <section class="b-f-link mt10">
                <span>©2020课程版权均归湖北文理计算机工程学院所有 京ICP备17055252号</span>
              </section>
            </section>
          </section>
          <aside class="fl col-3 tac mt15">
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wx-icon.png" alt>
              </span>
            </section>
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wb-icon.png" alt>
              </span>
            </section>
          </aside>
          <div class="clear"></div>
        </div>
      </section>
    </footer>
    <!-- /公共底引入 -->
  </div>
</template>
<script>
  import "~/assets/css/reset.css"
  import "~/assets/css/theme.css"
  import "~/assets/css/global.css"
  import "~/assets/css/web.css"
  import storage from "@/utils/storage.js"

  export default {
    data() {
      return {
        loginInfo: {
          id: '',
          age: '',
          avatar: '',
          mobile: '',
          nickname: '',
          sex: ''
        }
      }
    },
    created() {

    },
    mounted() {
      var  id =storage.get("loginInfoId")
      // if (id!=null){
        this.loginInfo.id=id
      //   this.$router.push('/')
      // }
    },
    methods:{


    },
    watch: {
      'loginInfo.id':function () {
        var  id =storage.get("loginInfoId")

        this.loginInfo.id= id



      }

    }

  };
</script>
