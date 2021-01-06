<template>
  <v-app dark>
    <v-dialog v-model="menu" class="" overlay-color="rgba(0, 173, 255, 0.7)" overlay-opacity="255">
      <v-card class="pa-3">
        <v-treeview :items="items" transition activatable hoverable open-on-click>
          <template v-slot:label="{ item }">
            <template v-if="!item.children">
              <template v-if="item.to">
                <nuxt-link is="a" @click="movePage(`${item.to}`)">
                  <u><b class="">{{ item.name }}</b></u>
                </nuxt-link>
              </template>
              <template v-else>
                <nuxt-link is="a" @click="movePage(`blogCategory?categoryId=${item.id}`)">
                  <u><b class="">{{ item.name }}</b></u>
                </nuxt-link>
              </template>
            </template>
            <template v-else>
              <b class="main-color">{{ item.name }}</b>
            </template>
          </template>
        </v-treeview>
      </v-card>
    </v-dialog>
    <v-app-bar :clipped-left="clipped" fixed color="rgba(0, 173, 255, 0.7)">
      <nuxt-link to="/">
        <v-toolbar-title class="ml-md-3 white--text" v-text="title" />
      </nuxt-link>
      <v-spacer />
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <v-menu open-on-hover offset-y tile transition="slide-y-transition" v-for="(item,i) in items" :key="i">
          <template v-slot:activator="{ on, attrs }" v-if="i != largeCatCount">
            <nuxt-link is="a" v-on="on" v-bind="attrs"  class="white--text px-5" style="border-left: solid 2px white;">
              {{items[i].name}}
            </nuxt-link>
          </template>
          <v-list v-if="item && i != largeCatCount">
            <template>
              <nuxt-link v-for="(child,j) in item.children" :key="j" :to="`blogCategory?categoryId=${child.id}`">       
                <v-list-item link>
                  <v-list-item-title v-text="child.name">
                  </v-list-item-title>
                </v-list-item>
              </nuxt-link>
            </template>
          </v-list>
        </v-menu>
        <nuxt-link class="white--text px-5" to="information" style="border-left: solid 2px white;">
          オンラインフォームチェック
        </nuxt-link>
      </template>
      <template v-else>
        <v-btn color="white" @click="menu=!menu" icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
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
      getLargeCategorys:{},
      largeCatCount:0,
      items: [],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '大人のRUNトレ練習帳'
    }
  },
  methods:{
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
    this.largeCatCount = this.getLargeCategorys.data.contents.length
    this.$set(this.items, this.largeCatCount, {
      name:"オンラインフォームチェック",
      to:"/information"
    });

    console.log(this.items)

    //this.items = this.getLargeCategorys.data.contents

    
  }
}
</script>
