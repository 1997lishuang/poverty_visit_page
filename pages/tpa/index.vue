<!--<template>-->
<!--  <div class="container">-->

<!--    <router-link to="/tpainfoquery/userinfo" tag="li" active-class="current" exact>-->
<!--      <a>tpainfosurvey</a>-->
<!--    </router-link>-->
<!--    <router-link to="/tpa/tpainfosurvey/1" tag="li" active-class="current" exact>-->
<!--      <a>tpa政策页面</a>-->
<!--    </router-link>-->
<!--    <router-link to="/tpapolicy/pro_tpa/" tag="li" active-class="current" exact>-->
<!--      <a>tpapolicy政策信息</a>-->
<!--    </router-link>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "tpa"-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
<template>
  <div class="container">
<!--    <svg class="icon" aria-hidden="true">-->
<!--      <use xlink:href="#el-icon-zzfanhuianniu1">返回-->
<!--      </use>-->
<!--    </svg>-->
<!--    <div class="top">-->
<!--      <el-form :inline="true" :model="formInline" class="demo-form-inline">-->
<!--        <el-form-item>-->
<!--          <el-input v-model="formInline.username" placeholder="请输入户主姓名查询"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item>-->
<!--          <el-button type="primary" @click="querytq">查询</el-button>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--    </div>-->
    <div class="bottom">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <!-- 精准扶贫信息查询 -->
        <el-tab-pane label="精准扶贫信息查询" name="first">
          <div class="top">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item>
                <el-input v-model="formInline.username" placeholder="请输入户主姓名查询"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="querytq">查询</el-button>
              </el-form-item>
            </el-form>
          </div>
          <Table border :columns="columns" :data="data6"></Table>
          <!-- 分页 -->
          <el-pagination
            :current-page="page"
            :page-size="limit"
            :total="total"
            style="padding: 30px 0; text-align: center;"
            layout="total, prev, pager, next, jumper"
            @current-change="getList"
          />
        </el-tab-pane>

        <!-- 精准扶贫信息概况 -->
        <el-tab-pane label="精准扶贫信息概况" name="second">
          <!-- 嵌套问题-->
          <div class="one">
            <el-tabs v-model="activeNameinfo" type="card" @tab-click="handleClickinfo">
              <!-- 精准扶贫信息概况2016 -->
              <el-tab-pane label="2016" name="firstinfo">
                <i-circle
                  :size="250"
                  :trail-width="4"
                  :stroke-width="5"
                  :percent="percent"
                  stroke-linecap="square"
                  stroke-color="#43a3fb">
                  <div class="demo-Circle-custom">
                    <p>贫困人口</p>
                    <h1>{{tptotal}}</h1>
                    <p>脱贫人口</p>
                    <h1>{{tpNuber}}</h1>
                    <span>
                                  所占贫困人口的比例
                                  <i>{{percent}}%</i>
                              </span>
                  </div>
                </i-circle>

              </el-tab-pane>
              <!-- 精准扶贫信息概况2017 -->
              <el-tab-pane label="2017" name="secondinfo">
                <i-circle
                  :size="250"
                  :trail-width="4"
                  :stroke-width="5"
                  :percent="percent"
                  stroke-linecap="square"
                  stroke-color="#43a3fb">
                  <div class="demo-Circle-custom">
                    <p>贫困人口</p>
                    <h1>{{tptotal}}</h1>
                    <p>脱贫人口</p>
                    <h1>{{tpNuber}}</h1>
                    <span>
                                          所占贫困人口的比例
                                          <i>{{percent}}%</i>
                                      </span>
                  </div>
                </i-circle>
              </el-tab-pane>
              <!-- 精准扶贫信息概况2018 -->
              <el-tab-pane label="2018" name="thirdinfo">
                <i-circle
                  :size="250"
                  :trail-width="4"
                  :stroke-width="5"
                  :percent="percent"
                  stroke-linecap="square"
                  stroke-color="#43a3fb">
                  <div class="demo-Circle-custom">
                    <p>贫困人口</p>
                    <h1>{{tptotal}}</h1>
                    <p>脱贫人口</p>
                    <h1>{{tpNuber}}</h1>
                    <span>
                                  所占贫困人口的比例
                                  <i>{{percent}}%</i>
                              </span>
                  </div>
                </i-circle>
              </el-tab-pane>

            </el-tabs>
          </div>
        </el-tab-pane>

        <!-- 精准扶贫政策游览 -->
        <el-tab-pane label="精准扶贫政策游览" name="third">
          <!---->
          <div id="myChart" :style="{width: '500px', height: '300px'}"></div>
        </el-tab-pane>
      </el-tabs>

    </div>
    <div class="three">


      <!--  <quick-menu :menu-count=menu_count :icon-class=icon_class :menu-url-list=menu_url_list :isOpenNewTab=true></quick-menu> -->
<!--      <circeComponent></circeComponent>-->
    </div>
  </div>
</template>


<script>
  import tpa from '@/api/tpa/tpa_someone_year'


  // import quickMenu from 'vue-quick-menu'
  export default {
    components: {
      },
    data() {
      return {
        datacatagory: ['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子'],
        datatotal:[5, 20, 36, 10, 10, 20],
        option:true,
        menu_count:4,
        icon_class:4,
        menu_url_list:[2,3,4,5],
        formInline: {
          username: ''
        },
        list:null,//查询之后接口返回集合
        page:1,//当前页
        limit:10,//每页记录数
        total:10,//总记录数
        huzhuQuery:{},
        data:[],//存取返回来的贫困户数据
        activeName: 'first',
        activeNameinfo: 'firstinfo',
        tptotal: 42776,
        tpNuber: 100,
        percent:30,
        columns: [
          {
            title: '户主姓名',
            key: 'name',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person'
                  }
                }),
                h('strong', params.row.name)
              ]);
            }
          },
          {
            title: '就业培训扶贫',
            key: 'medicalGuardMoney'
          },
          {
            title: '拆迁扶贫',
            key: 'revealGuardMoney'
          },
          {
            title: '产业扶贫',
            key: 'worksGuardMoney'
          },
          {
            title: '医疗扶贫',
            key: 'medicalGuardMoney'
          },
          {
            title: '教育扶贫',
            key: 'industryMoney'
          },
          {
            title: '兜底保障扶贫',
            key: 'educationMoney'
          },
          {
            title: '总金额',
            key: 'fpSumMoney'
          },
          {
            title: '展示',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '详情')

              ]);
            }
          }
        ],
        data6: [
          {
            name: 'John Brown',
            medicalGuardMoney: 18,
            revealGuardMoney: 'New York No. 1 Lake Park',
            worksGuardMoney: 3000,
            industryMoney:5000,
            educationMoney:60000,
            removalMoney:22222,
            fpSumMoney:99999
          },
          {
            name: 'Jim Green',
            medicalGuardMoney: 24,
            revealGuardMoney: 'London No. 1 Lake Park',
            worksGuardMoney: 3000,
            industryMoney:5000,
            educationMoney:666666,
            removalMoney:22222,
            fpSumMoney:99999
          },
          {
            name: 'Joe Black',
            medicalGuardMoney: 30,
            revealGuardMoney: 'Sydney No. 1 Lake Park',
            worksGuardMoney: 3000,
            industryMoney:5000,
            educationMoney:666666,
            removalMoney:22222,
            fpSumMoney:99999
          },
          {
            name: 'Jon Snow',
            medicalGuardMoney: 26,
            revealGuardMoney: 'Ottawa No. 2 Lake Park',
            worksGuardMoney: 3000,
            industryMoney:5000,
            educationMoney:666666,
            removalMoney:22222,
            fpSumMoney:99999
          }
        ]
      };
    },
    mounted () {
      this.drawLine();
    },
    created() {
      //调用精准扶贫信息查询接口
      this.getList()
      // this.data6 = 接口返回的数据
    },
    methods: {
      drawLine () {
        var echarts = require('echarts');
        var myChart = echarts.init(document.getElementById('myChart'));
        myChart.setOption({
          title: {
            text: '脱贫人数统计图'
          },
          tooltip: {},
          xAxis: {
            data: this.datacatagory
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: this.datatotal
          }]
        });
      },
      getList(page=1) {
        this.page = page
        tpa.get_tpa_tist_page(this.page,this.limit)
          .then(response =>{//请求成功
            //response接口返回的数据
            //将limit 删除 解决数据的分页增加的问题

            console.log(response)
            this.data6= response.data.data
            this.total = response.data.count
            this.limit = response.data.number

          }).catch(() => console.log('promise catch err'));
      },

      // getList(page=1) {
      //       this.page = page
      //       tpa.get_tpa_tist_page(this.page,this.limit)
      //           .then(response =>{//请求成功
      //               //response接口返回的数据
      //               //console.log(response)
      //               // this.data = response.data.
      //               console.log(response.data)
      //           }).catch(() => console.log('promise catch err'));
      //   },
      show (index) {
        this.$Modal.info({
          title: '详细信息',
          content: `Name：${this.data6[index].name}<br>medicalGuardMoney：${this.data6[index].medicalGuardMoney}<br>
                        revealGuardMoney：${this.data6[index].revealGuardMoney}<br>
                        worksGuardMoney：${this.data6[index].worksGuardMoney}<br>
                        industryMoney：${this.data6[index].industryMoney}<br>
                        educationMoney：${this.data6[index].educationMoney}<br>
                        removalMoney：${this.data6[index].removalMoney}<br>
                         fpSumMoney：${this.data6[index].fpSumMoney}
                    `
        })
      },
      querytq(){
        alert("111")
        //获取用户名 调用根据用户名查询 放回 True False
        //成功就调用扶贫信息接口查询
        tpa.get_tpa_person(this.formInline.username,this.limit,this.page)
          .then(response=>{

            this.data6= response.data.data

          })
        this.formInline.username = ""


      },
      handleClickinfo(tab, event){
        if (tab.$options.propsData.label==="2016") {
          //调用精准扶贫信息查询接口
          console.log(tab.$options.propsData.label)
          // tpa.get_tap_one_year(tab.$options.propsData.label).then(response=>{

          //   console.log("1111")
          // })
          this.percent = 50
        }else if (tab.$options.propsData.label==="2017") {
          //调用精准扶贫信息概况

          this.percent = 90
        }else{
          //调用精准扶贫政策游览
          this.percent = 30


        }

      },
      handleClick(tab, event) {
        if (tab.$options.propsData.label==="精准扶贫信息查询") {
          //调用精准扶贫信息查询接口
          // console.log("精准扶贫信息查询")
          //  console.log(tab)
          alert("精准扶贫信息查询")
          this.activeName = tab.$options.propsData.name
          this.getList()
        }else if (tab.$options.propsData.label==="精准扶贫信息概况") {
          //调用精准扶贫信息概况
          this.activeName = tab.$options.propsData.name
          // console.log("精准扶贫信息概况")
          //获取2016的数据贫困人口的人数以及脱贫的人数 以及脱贫人口的比例
          // 发送接口

        }else{
          //调用精准扶贫政策游览
          // console.log("精准扶贫政策游览")
          this.activeName = tab.$options.propsData.name
        }
      }
    }
  };
</script>
<style>
  .container{
    margin: auto 20%;
  }

  .demo-Circle-custom h1 {
    color: #3f414d;
    font-size: 28px;
    font-weight: normal;
  }
  .demo-Circle-custom p {
    color: #657180;
    font-size: 14px;
    margin: 10px 0 15px;
  }
  .demo-Circle-custom span {
    display: block;
    padding-top: 15px;
    color: #657180;
    font-size: 14px;
  }
  .demo-Circle-custom span::before {
    content: '';
    display: block;
    width: 50px;
    height: 1px;
    margin: 0 auto;
    background: #e0e3e6;
    position: relative;
    top: -15px;
  }
  .demo-Circle-custom span i {
    font-style: normal;
    color: #3f414d;
  }
  .one{
    padding:30px;
    margin:10px auto;
  }

</style>
