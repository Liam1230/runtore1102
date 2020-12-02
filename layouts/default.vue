<template>
  <v-app dark>
    <v-dialog v-model="menu" class="" overlay-color="rgba(0, 173, 255, 0.7)" overlay-opacity="255">
      <v-card class="pa-3">
      </v-card>
    </v-dialog>
    <v-app-bar :clipped-left="clipped" fixed color="rgba(0, 173, 255, 0.7)">
      <nuxt-link to="/">
        <v-toolbar-title class="ml-md-3 white--text" v-text="title" />
      </nuxt-link>
      <v-spacer />
      <template v-if="$vuetify.breakpoint.mdAndUp">
         <v-menu open-on-hover offset-y tile transition="slide-y-transition" v-for="(item,i) in items" :key="i">
          <template v-slot:activator="{ on, attrs }">
            <nuxt-link is="a" v-on="on" v-bind="attrs"  class="white--text px-5" style="border-left: solid 2px white;">
              {{items[i].name}}
            </nuxt-link>
          </template>
          <v-list>
            <nuxt-link v-for="(child,j) in item.children" :key="j" :to="`blogCategory?categoryId=${child.id}`">       
              <v-list-item link>
                <v-list-item-title v-text="child.name">
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
          </v-list>
        </v-menu>
      </template>
      <template v-else>
        <v-btn color="white" @click="menu=!menu" icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <!-- <nuxt-link :to="items[3].to" class="white--text px-5" style="border-left: solid 2px white;">
        {{items[3].title}}
      </nuxt-link> -->
    </v-app-bar>
    <v-main>
      <transition name="fade-transform">
        <nuxt />
      </transition>
    </v-main>    
    <v-footer class="white--text py-5" color="#00ADFF">
      <v-container>
        <v-row class="justify-center align-center ">
          <v-col cols="12" md="5" class="text-center">
            <span>&copy; 大人のRUNトレ塾</span>
          </v-col>
          <v-col cols="12" md="5" class="pl-md-5 py-0" style="border-left: solid 2px #ffffff;">
            <v-row class="pl-5">
              <v-col class="text-left mb-0 pb-0" cols=12 md="3">
                TEL
              </v-col>
              <v-col class="mt-0 pt-0 pt-md-3" cols=12 md="9">
                080-6143-0685
              </v-col>
            </v-row>
            <v-row class="pl-5">
              <v-col class="text-left mb-0 pb-0" cols=12 md="3">
                EMAIL
              </v-col>
              <v-col class="mt-0 pt-0 pt-md-3" cols=12 md="9">
                k.o.k.i.running.abc@gmail.com
              </v-col>
            </v-row>
            <v-row class="pl-5">
              <v-col class="text-left mb-0 pb-0" cols=12 md="3">
                ADRESS
              </v-col>
              <v-col class="mt-0 pt-0 pt-md-3" cols=12 md="9">
                〒530-0044<br>
                大阪府大阪市北区東天満2-5-17 古林タワービル7F
              </v-col>
            </v-row>
          </v-col>
        </v-row>        
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      menu:false,
      clipped: false,
      drawer: false,
      fixed: true,
      blogCategory:null,
      getCategorys:{},
      getLargeCategorys:{},
      categorys:[],
      categorysForm:[],
      categorysMethod:[],
      items: [],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '大人のRUNトレ練習帳'
    }
  },
  methods:{
    async moveBlog(){
      this.$router.push({ path: '/blogCategory' , query :{ blogCategory: this.blogCategory}});
    },
    movePage(to){
      this.$router.push(to);
      this.menu = false
    }
  },
  async mounted(){

    this.getLargeCategorys = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://runtrainingnote.microcms.io/api/v1/hpcategory1?limit=50`,
      {
        headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
      }
    )
    console.log(this.getLargeCategorys.data.contents)
    for (let i=0; i<this.getLargeCategorys.data.contents.length;i++){
      this.$set(this.items, i, this.getLargeCategorys.data.contents[i]);
    }
    //this.items = this.getLargeCategorys.data.contents

    //中カテゴリ取得。取得件数がデフォルト10件なのでlimitを引数に入れて変更する必要あり
    this.getCategorys = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://runtrainingnote.microcms.io/api/v1/hpcategory2?limit=50`,
      {
        headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
      }
    )
    //console.log(this.getCategorys)
    //this.categorys.splice(0)
    let categorysCount =0
    let categorysFormCount = 0
    let categorysMethodCount = 0
    for (let i=0; i<this.getCategorys.data.contents.length;i++){
      if(this.getCategorys.data.contents[i].parent){
        //フォーム
        if(this.getCategorys.data.contents[i].parent.id == "p1nbcm2kg"){
          this.$set(this.categorysForm, categorysFormCount, this.getCategorys.data.contents[i]);
          categorysFormCount = categorysFormCount + 1
        //痛み
        }else if(this.getCategorys.data.contents[i].parent.id == "nnin-08mq"){
          this.$set(this.categorys, categorysCount, this.getCategorys.data.contents[i]);
          categorysCount = categorysCount + 1
        //100kmメソッド
        }else if(this.getCategorys.data.contents[i].parent.id == "qsqzhls2o"){
          this.$set(this.categorysMethod, categorysMethodCount, this.getCategorys.data.contents[i]);
          categorysMethodCount = categorysMethodCount + 1
        }
      }
    }
  }
}
</script>
