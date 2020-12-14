<template>
  <article>
    <section class="p-relative mb-5">
      <v-img width="100vw" height="100vh" src="/img/first.png" lazy-src="/img/first_l.png" alt=""></v-img>
      <img class="p-absolute absolute-rb" style="width:35vw; height:35wh; min-width:250px; min-height:250px;" src="/img/triangle.png">
      <div id="first-view-content" class="white--text">
        <div v-if="$vuetify.breakpoint.mdAndUp" id="first-view-logo-pc">
          <v-img class="top-logo mb-3" max-width="60%" src="/img/Run_tore_rogo.png"></v-img>
        </div>
        <div id="first-view-content-text">
          <div id="first-view-content-text-inner">
            <v-img v-if="$vuetify.breakpoint.smAndDown" class="top-logo mb-3" max-width="60%" src="/img/Run_tore_rogo.png"></v-img>
            <h1 v-if="$vuetify.breakpoint.mdAndUp" class="text-h3 mb-5">全てのランナーの<br>やったできた！をこの一冊に！</h1>
            <h1 v-else class="text-h3 mb-5">全てのランナーの<br>やったできた！を<br>この一冊に！</h1>
            <p v-if="$vuetify.breakpoint.mdAndUp" class="text-h6">目標タイム達成・ファンラン・健康増進など、1人1人に違った目的がありますが、「ランニングが好き」という気持ちは皆さん同じではないでしょうか？「完走・ベスト更新の高揚感や達成感」「青空のもと走る爽快感」は何物にも代えられません！そんな日々のランニングライフをよりよいものとする情報をまとめました！</p>
          </div>
        </div>
      </div>
    </section>
    <section class="my-5 py-5">
      <v-container column justify-center class="min-container text-center">
        <p v-if="$vuetify.breakpoint.smAndDown" class="main-text-color text-h6">目標タイム達成・ファンラン・健康増進など、1人1人に違った目的がありますが、「ランニングが好き」という気持ちは皆さん同じではないでしょうか？「完走・ベスト更新の高揚感や達成感」「青空のもと走る爽快感」は何物にも代えられません！そんな日々のランニングライフをよりよいものとする情報をまとめました！</p>
        <h1 class="text-h3 mt-5 title-text-color">RUNトレについて</h1>
        <h2 class="mt-3 title-text-color">-About-</h2>
        <h3 class="text-h4 my-5 py-5 blue-sub-title">一人ではたどりつけない自己ベストへ</h3>
        <p class="text-h6 text-left py-5 main-text-color">ランニングの痛みや ランニングフォームで悩んでいるあなたへ！「たくさん練習をこなしてもベストが更新できない」「怪我を繰り返す」 本当につらいものですよね 。多くのランナーが同じ悩みでつまずいてしまっています。あなた１人で背負い込む必要はありません！ この情報サイト の中で 、他の多くのランナーの悩みとともに 改善策を提示していきます。 その中にあなたの悩みを改善するヒントがあるかもしれません！</p>
      </v-container>
    </section>
    <section class="my-5 py-5">
      <v-container column justify-center class="min-container text-center">
        <v-row class="align-center justify-space-between">
          <v-col cols=12 md=5 class="mr-5">
            <v-img src="/img/profile.png" lazy-src="/img/profile_l.png"></v-img>
          </v-col>
          <v-col cols=12 md=6 class="pl-5 text-center">
            <h1 class="text-h4 text-left main-color">大人のRUNトレ塾</h1>
            <h2 class="text-h6 mt-3 text-left title-text-color">代表 吉野洸希</h2>
            <v-divider class="my-5"></v-divider>
            <p class="text-left main-text-color text-h6">
              私は月間走行距離100ｋｍで2:48:56を実現しました。初のフルマラソンで は月間250ｋｍ練習し、膝の痛みや足底筋膜炎に顔をゆがめながらも3:45でゴール。もっと良いタイムが出ると思っていたのに、走ってもベストは伸びないばかりか、痛みが出てしまう。ただ走るだけの非効率な練習に疑問を持つように。そこで当サイトでお伝えしている月間100ｋｍメソッドを生み出しました！
            </p>
            <v-btn color="primary" large rounded to="profile">詳しく見る</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="my-5 pb-5 p-relative">
      <img class="p-absolute absolute-lt" style="top:10%;" width="90%" src="/img/sectiontop1.png" lazy-src="/img/sectiontop1_l.png">
      <img style="width:100vw;" src="/img/blueTriangle.png">
      <div class="main-color-bg" style="padding-bottom:120px; padding-top:70px;">
        <v-container column justify-center class="min-container text-center main-color-bg" style="margin-top:-1px;">
          <h1 class="text-h3 mt-5 pt-5 white--text">フォームの重要性について</h1>
          <h2 class="mt-3 white--text">-Form-</h2>
          <h3 class="text-h4 my-5 py-5 yellow-sub-title">独自の型で無理に走り続けていませんか？</h3>
          <p class="text-h6 text-left py-5 white--text">練習量をこなしてもタイムが伸びない。多くのランナーの悩みの種です。それは 体力に問題があるのではなく 、ロスの多いランニングフォーム のせいかもしれません。ランニングは手軽に始めやすいために自己流のフォームになってしまいがち。 最初はそれでも良いですが、高みを目指すなら確実に頭打ちが来てしまいます。どんどん進む楽なフォームを身に付け、周りを魅了する格好いいフォームを身につけましょう！</p>
          <v-btn color="secondary" rounded x-large class="mb-5" to="running">無料でランニング力をチェック</v-btn>
        </v-container>
      </div>
    </section>
    <section class="mb-5 pb-5 p-relative" style="margin-top: -100px;">
      <v-img width="90%" style="margin-left: auto;" src="/img/sectiontop2.png" lazy-src="/img/sectiontop2_l.png"></v-img>
      <div class="">
        
        <v-container column justify-center class="min-container text-center" style="margin-top:-1px;">
          <h1 class="text-h3 mt-5 pt-5 title-text-color">痛みをそのまま放置しないために</h1>
          <h2 class="mt-3 title-text-color">-Pain-</h2>
          <h3 class="text-h4 my-5 py-5 blue-sub-title">我慢して痛みを放置しすぎると…</h3>
          <p class="text-h6 text-left py-5 main-text-color">ランニング中の痛みは本当に辛いもの。故障・痛みを治すために練習を休めば体力は落ちるし、ただ、痛みを放置して練習を続けると、どんどん体はボロボロになり、走れない体になってしまいます「怪我が癖になってしまっている」「ランニングをしていれば必ずどこかに痛みは出るもの」それは痛みの原因を改善することで変えることが可能。痛みは誤った体の使い方であることを知らせる合図。 正しい知識があれば、怪我は更なるレベルアップの 大きな チャンスなのです！その方法をお伝えします。</p>
        </v-container>
      </div>
    </section>
    <section class="my-5 py-5 p-relative text-center">
      <p class="main-color-bg pa-3 white--text text-h5" style="display: inline-block;">あなたが気になる悩みはどっち？</p>
      <v-row style="max-width:100%; margin:0 auto;" class="d-flex justify-center align-start pt-5 mt-5">
        <v-col cols="12" md="5">
          <v-btn rounded x-large @click="formClick" color="secondary">フォーム</v-btn>
          <v-expansion-panels flat v-model="formOpen" multiple class="mt-5">
            <v-expansion-panel class="">
              <v-expansion-panel-content>
                <v-card class="my-3 expantion-content" color="#FFE200" v-for="(content, i) in formcontens" :key="i">
                  <nuxt-link :to="`/blogCategory?categoryId=${content.id}`">
                    <v-row class="d-flex black--text flex-no-wrap justify-space-between py-0">
                      <v-col cols="7" class="d-flex align-center pt-2 pl-5">
                        <h3 class="text-left text-h6">
                          ・{{content.name}}
                        </h3>
                        <!-- <p class="text-body-2 text-left">
                          {{content.seoDescription | blogTextFileter}}
                        </p> -->
                        <!-- <v-card-title class="text-h5" v-text=""></v-card-title> -->
                      </v-col>
                      <v-col cols="5" class="py-0">
                        <v-img v-if="content.image" :height="$vuetify.breakpoint.mdAndUp ? '120px' : '60px' " :src="content.image.url"></v-img>
                        <v-img v-else  :height="$vuetify.breakpoint.mdAndUp ? '120px' : '60px'" src="/img/Run_tore_rogo.png"></v-img>
                      </v-col>
                    </v-row>
                  </nuxt-link>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" md="2">
          <span class="text-h3 mx-5 title-text-color">or</span>
        </v-col>
        <v-col cols="12" md="5">
          <v-btn rounded x-large @click="painClick" color="secondary">痛み</v-btn>
          <v-expansion-panels flat v-model="painOpen" multiple class="mt-5 px-0">
            <v-expansion-panel>
              <v-expansion-panel-content>
                <v-card class="my-3 expantion-content" color="#FFE200" v-for="(content, i) in paincontens" :key="i">
                  <nuxt-link :to="`/blogCategory?categoryId=${content.id}`">
                    <v-row class="d-flex black--text flex-no-wrap justify-space-between pa-0">
                      <v-col cols="7" class="d-flex align-center pt-2 pl-5">
                        <h3 class="text-left text-h6">
                          ・{{content.name}}
                        </h3>
                        <!-- <p class="text-body-2 text-left">
                          {{content.seoDescription | blogTextFileter}}
                        </p> -->
                        <!-- <v-card-title class="text-h5" v-text=""></v-card-title> -->
                      </v-col>
                      <v-col cols="5" class="py-0">
                        <v-img v-if="content.image" :height="$vuetify.breakpoint.mdAndUp ? '120px' : '60px' " :src="content.image.url"></v-img>
                        <v-img v-else  :height="$vuetify.breakpoint.mdAndUp ? '120px' : '60px'" src="/img/Run_tore_rogo.png"></v-img>
                      </v-col>
                    </v-row>
                  </nuxt-link>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </section>
    <hr style="">
    <section class="py-5 my-5">
      <v-container class="min-container text-center">
        <h3 class="text-h4 my-5 blue-sub-title">無料でランニング力をチェック</h3>
        <p class="text-h6 text-left py-5 main-text-color">スポーツトレーナーとして多くのランナーの怪我やランニングフォームの相談を受けてきました。経験をもとに解決策を当サイトにまとめております。痛み・ランニングフォームのあなたのお悩みに合った記事をご覧ください！</p>
        <v-btn color="secondary" rounded x-large class="my-5" to="running">無料でランニング力をチェック</v-btn>
        <p class="text-h6 text-left py-5 mt-5 main-text-color">あなたのランニング力チェックしませんか？ランナーに必要だと考える「ランニング技術」「練習内容」「体に関する知識」の3項目から問題を作成しております。5分で終了する直感で選ぶ問題で、あなたの強みや弱点を発見しましょう！その弱点に合わせ、あなたにオススメの記事も用意しております！</p>
      </v-container>
    </section>
  </article>
  <!-- <v-container column justify-center> -->

    <!-- <ul>
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          {{ content.title }}
        </nuxt-link>
      </li>
    </ul> -->
  <!-- </v-container> -->
</template>

<script>
import axios from 'axios'
export default {
  data:()=>({
    formid:'p1nbcm2kg',
    painid:'nnin-08mq',
    formcontens:[],
    paincontens:[],
    formOpen:[],
    painOpen:[]
  }),
  head () {
    return {
      titleTemplate: null,
      title: '大人のRUNトレ練習帳',
    }
  },
  filters:{
    blogTextFileter(val){
      if(!val) return ""
      if(val.length > 40){
          let tmp = val.substr(0,40)
          tmp += "…"
          return tmp
      }else {
          return val
      }
    }
  },
  methods:{
    async formClick(){
      if(this.formOpen.length){
        this.formOpen = []
      }else{
        this.formOpen = [0]
        const { data } = await axios.get(
          // your-service-id部分は自分のサービスidに置き換えてください
          `https://runtrainingnote.microcms.io/api/v1/hpcategory2?filters=parent[equals]${this.formid}`,
          {
              headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
          }
        )
        // console.log(data)
        //this.formcontens.splice(0)
        //alert(data.contents.length)
        for (let i=0; i<data.contents.length;i++){
            //alert('追加')
            this.$set(this.formcontens, i, data.contents[i]);
        }
      }
    },
    async painClick(){
      if(this.painOpen.length){
        this.painOpen = []
      }else{
        this.painOpen = [0]
        const { data } = await axios.get(
          // your-service-id部分は自分のサービスidに置き換えてください
          `https://runtrainingnote.microcms.io/api/v1/hpcategory2?filters=parent[equals]${this.painid}`,
          {
              headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
          }
        )
        // console.log(data)
        //this.paincontens.splice(0)
        //alert(data.contents.length)
        for (let i=0; i<data.contents.length;i++){
            //alert('追加')
            this.$set(this.paincontens, i, data.contents[i]);
        }
      }
    }
  },
  async asyncData(ctx){
    const { data } = await ctx.$axios.get(
        // your-service-id部分は自分のサービスidに置き換えてください
        `https://runtrainingnote.microcms.io/api/v1/blog?limit=300`,
        {
            headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
        }
    )
    // console.log(data)
    return data
  }
}
</script>