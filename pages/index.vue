<template>

  <div>
    <!-- 幻灯片 开始 -->
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">

        <div  class="swiper-slide" style="background: #040B1B;">
<!--          <a target="_blank" href="/">-->
            <img src="~/assets/photo/banner/bk_1.jpg" alt="1111">
<!--          </a>-->
        </div>
        <div  class="swiper-slide" style="background: #040B1B;">
<!--          <a target="_blank" href="/">-->
            <img src="~/assets/photo/banner/baokuang.jpg" alt="222">
<!--          </a>-->
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </div>
    <!-- 幻灯片 结束 -->
    <div class="one">
      <logout></logout>
    </div>


  </div>
</template>

<script>
  import logout from '~/components/head.vue'

  export default {
    components:{
      'logout':logout
    },
    data () {
      return {

        swiperOption: {
          loop:true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          //配置分页
          pagination: {
            el: '.swiper-pagination'//分页的dom节点
          },
          //配置导航
          navigation: {
            nextEl: '.swiper-button-next',//下一页dom节点
            prevEl: '.swiper-button-prev'//前一页dom节点
          }
        }

      }
    },
    created() {

    },
    methods:{

    }
  }
</script>
