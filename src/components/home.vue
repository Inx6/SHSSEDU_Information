<template>
  <div class="home">
    <div class="title">
      <div class="imgs">
        <img src="https://raw.githubusercontent.com/SHSSEDU/shssedu.github.io/main/img/logo.jpg" alt="山河大学信息学院">
      </div>
      <div class="tips">
        <div>
          <i class="fa fa-university"></i><b>专业概况</b>
        </div>
        <div>
          <i class="fa fa-graduation-cap"></i><b>招生就业</b>
        </div>
        <div>
          <i class="fa fa-balance-scale"></i><b>合作交流</b>
        </div>
        <div @click="go(4)">
          <i class="fa fa-handshake-o"></i><b>加入我们</b>
        </div>
      </div>
    </div>
    <div class="botx">
      <div class="bg">
        <p v-if="this.pageText == 1">{{chinese[0].aloud1}}  {{english[0].aloud1_e}}</p>
        <p v-if="this.pageText == 2">{{chinese[1].aloud2}}  {{english[1].aloud2_e}}</p>
        <p v-if="this.pageText == 3">{{chinese[2].aloud3}}  {{english[2].aloud3_e}}</p>
        <p v-if="this.pageText == 4">{{chinese[3].aloud4}}  {{english[3].aloud4_e}}</p>
      </div>
      <div class="lad"></div>
      <div class="tops">
        <p style="font-size:25px;font-family: 'Abril Fatface', cursive;"><b>欢迎来到信息学院！</b></p>
      </div>
      <div class="descript">
        <div class="lad1">公告</div>
        <div class="news">
          <!-- 一 -->
          <div>
            <img src="https://shssedu.github.io/img/news/640.jpg" alt="" >
            <p>{{mt}}</p>
          </div>
          <!-- 二 -->
          <div>
            <ul>
              <li class="paper" v-for="item in 5" :key="item">
                <div class="icons_paper" style="width:15%;font-size:5px;text-align:center;">
                  <i class="fa fa-newspaper-o"></i>
                  <p>2023/6/30</p>
                </div>
                <div style="width:100%;float:left;font-size:15px;">
                  <p>等待挖掘...</p>
                </div>
              </li>
            </ul>
          </div>
          <!-- 三 -->
          <div>
            <ul>
              <li class="paper" v-for="item in 5" :key="item">
                <div class="icons_paper" style="width:15%;font-size:5px;text-align:center;">
                  <i class="fa fa-newspaper-o"></i>
                  <p>2023/6/30</p>
                </div>
                <div style="width:100%;float:left;font-size:15px;">
                  <p>等待挖掘...</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="lad1">专题专栏</div>
        <div class="names">
          <div>
            <img src="https://www.hunnu.edu.cn/shenruxuexixuanchuanguanchedangdeershidajingshen4.jpg">
          </div>
          <div>
            <img src="https://www.hunnu.edu.cn/images/20/10/26/6ahi9s48nz/tjsyl.png">
          </div>
          <div>
            <img src="https://www.hunnu.edu.cn/images/ztjy_logo.jpg">
          </div>
          <div>
            <img src="https://www.hunnu.edu.cn/images/zhutijiaoyu0421.jpg">
          </div>
        </div>
        <div class="lad1" style="margin-top:5vh">山河大·鸟瞰校园</div>
        <div class="school" >
          <img src="https://shssedu.github.io/img/program/map.jpeg">
          <p>注：信息学院暂未新建独立楼院，暂时位于理工学院楼三栋</p>
        </div>
      </div>
    </div>
    <div class="botm">
      <div class="bom">
        <div style="width:100%">
          <img src="https://raw.githubusercontent.com/SHSSEDU/shssedu.github.io/main/img/logo.jpg" alt="山河大学信息学院">
        </div>
        <div>
          <p style="font-size:1.5em;">
            <b>合作学院</b>
          </p>
          <div style="width:100%;margin-top:2vh;float:left;color:#7A838B;line-height:4vh;">
            <ul style="width:50%;float:left">
              <li>理学院</li>
              <li>传媒学院</li>
              <li>文学院</li>
              <li>地球科学学院</li>
              <li>体育学院</li>
              <li>农学院</li>
            </ul>
            <ul style="width:50%;float:left">
              <li>医学院</li>
              <li>哲学院</li>
              <li>工学院</li>
              <li>社会科学学院</li>
              <li>农学院</li>
              <li>公共管理学院</li>
            </ul>
          </div>
        </div>
        <div>
          <p style="font-size:1.5em;text-align:left">
            <b>关注我们</b>
          </p>
          <div style="width:100%;margin-top:2vh;float:left;color:#7A838B;line-height:4vh;text-align:left">
            <ul style="width:50%;float:left">
              <li @click="go(1)">抖音@山河大学</li>
              <li @click="go(2)">Bilibili@山河大学</li>
              <li @click="go(3)">微信公众号@山河大学</li>
            </ul>
            <ul style="width:50%;float:left">
             <li>本网站纯属娱乐，希望广大高考生擦亮双眼，谨防上当受骗，任何打着山河大学的名号收取任何费用的人都是骗子。祝愿每一名高考生最终都能被自己的理想院校录取。</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottoms_tip"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      pageText: 1,
      chinese:[
        {
          aloud1: "你好",
        },{
          aloud2: "我们是",
        },{
          aloud3: "信息学院",
        },{
          aloud4: "欢迎你们的到来！",
        }
      ],
      english:[
        {
          aloud1_e: "Hello!",
        },{
          aloud2_e: "We Are",
        },{
          aloud3_e: "The School of Information",
        },{
          aloud4_e: "Welcome to you!",
        }
      ],
      msg:[{
        id: 1,
        msg: "热烈祝贺河南考生在山河大学的录取！"
      },{
        id: 2,
        msg: "山河大团队创造出新物质，成果登上《自然》"
      },{
        id: 3,
        msg: "热烈庆祝信息学院成立！"
      },{
        id: 4,
        msg: "厚德、博学是我们的行动！"
      }],
      mt: "",
    }
  },
  mounted(){
    setInterval(()=>{
      this.update(this.pageText);
    },Math.random(1000)*3000);

    setInterval(()=>{
      this.updateTX(this.msg[0].id);
    },5000)
  },
  methods:{
    update(em){
      switch(em){
        case 4:
          this.pageText = 0;
          this.mt = this.msg[0].msg;
          break;
          default:
            this.pageText = em + 1;
            this.mt = this.msg[em].msg;
            break;
      }
      
    },
    updateTX(em){
      switch(em){
        case 4:
          this.mt = this.msg[0].msg;
          break;
          default:
            this.mt = this.msg[em].msg;
            break;
      }
    },
    go(i){
      switch(i){
        case 1:
          window.location.href = "https://shssedu.github.io/?#";
          break;
          case 2:
            window.location.href = "https://shssedu.github.io/?#";
            break;
            case 3:
              window.location.href = "https://shssedu.github.io/?#";
              break;
              case 4:
                window.location.href = "https://github.com/Inx6";
                break;  
              default:
                break;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.title{
  /* background-color: aqua; */
  height: 20vh;
  display: flex;
  flex-direction: row;
}
.title .imgs{
  flex-grow: 3;
  height: 100%;
}
.title .imgs img{
  height: 100%;
  margin-left: 0.5vw; 
}
.title .tips{
  flex-grow: 2;
  align-items: center;
  display: flex;
  flex-direction: row;
  align-content: space-between;
}
.title .tips div{
  /* text-align: center; */
  flex-grow: 2;
  font-size: 1.35vw;
}

.botx{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bg{
  flex-grow: 2;
  height: 60vh;
  width: 100%;
  background-image: url(https://shssedu.github.io/img/banner/shss0.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  line-height: 60vh;
  text-align: center;
}
.bg p{
  font-size: 2em;
  color: white;
  font-family: "Abril Fatface", cursive;
}

.lad{
  width: 100%;
  height: 5vh;
  background-color: rgb(31, 0, 170);
}

.tops{
  width: 100%;
  text-align: center;
  margin-top: 5vh;
  margin-bottom: 2.5vh;
}

.descript{
  width: 80%;
  /* background-color: aquamarine; */
}
.descript .news{
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
}
.news div{
  flex-grow: 1;
  width: 100%;
  margin: 1.5vw;
}
.lad1{
  width: 100%;
  text-align: left;
  font-size: 20px;
  line-height: 50px;
  border-bottom: 5px solid rgb(31, 0, 170);
}
.new div img{
  width: 100%;
}

.paper{
  display: flex;
  flex-direction: row;
  height: 8vh;
  background-color: rgba(0, 0, 0, 0.066);
  border-bottom: 1px solid rgba(10, 39, 170, 0.822);
}

.names{
  width: 100%;
  display: flex;
  margin-top: 2vh;
  flex-direction: row;
  justify-content: space-around;
}
.names div{
  width: 20%;
  /* background-color: aqua; */
}
.names div img{
  height: 13vh;
}

.botm{
  width: 100%;
  height: 60vh;
  margin-top: 5vh;
  background-color: rgb(31, 0, 170);
}

.school{
  width: 100%;
}
.school img{
  width: 100%;
}

.bom{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 10%;
  width: 80%;
  height: 100%;
  /* background-color: aqua; */
}
.bom div{
  margin-top: 8vh;
  flex-grow: 1;
  width: 100%;
  text-align: center;
  color: white;
  /* background-color: bisque; */
}
.bom div img{
  margin-top: 5%;
  width: 50%;
}
.bottoms_tip{
  width: 60%;
  margin-left: 20%;
  margin-top: -15vh;
  border: 1px solid rgba(141, 141, 141, 0.54);
}
</style>
