<template>
  <v-app dark>
    <v-dialog v-model="menu" class="" overlay-color="rgba(0, 173, 255, 0.7)" overlay-opacity="255">
      <v-card class="pa-3">
        <v-treeview :items="items" transition activatable hoverable>
        <template v-slot:label="{ item }">
          <template v-if="item.to">
              <nuxt-link is="a" @click="movePage(item.to)" class="">
                  <u><b class="">{{ item.name }}</b></u>
              </nuxt-link>
          </template>
          <template v-else-if="item.id">
            <nuxt-link is="a" @click="movePage(`blogCategory?categoryId=${item.id}`)">
              <u><b class="">{{ item.name }}</b></u>
            </nuxt-link>
          </template>
          <template v-else>
            <u><b class="">{{ item.name }}</b></u>
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
        <nuxt-link :to="items[0].to" class="white--text px-5" style="border-left: solid 2px white;">
          {{items[0].name}}
        </nuxt-link>
        <v-menu open-on-hover offset-y tile transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <nuxt-link is="a" v-on="on" v-bind="attrs" :to="items[1].to" class="white--text px-5" style="border-left: solid 2px white;">
              {{items[1].name}}
            </nuxt-link>
          </template>
          <v-list>
            <nuxt-link v-for="(category,i) in categorys" :key="i" :to="`blogCategory?categoryId=${category.id}`">       
              <v-list-item link>
                <v-list-item-title v-text="category.name">
                </v-list-item-title>
              </v-list-item>
            </nuxt-link>
          </v-list>
        </v-menu>
        <v-menu open-on-hover offset-y tile transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <nuxt-link is="a" v-on="on" v-bind="attrs" :to="items[2].to" class="white--text px-5" style="border-left: solid 2px white;">
              {{items[2].name}}
            </nuxt-link>
          </template>
          <v-list>
            <nuxt-link v-for="(from,j) in categorysForm" :key="j" :to="`blogCategory?categoryId=${from.id}`">       
              <v-list-item link>
                <v-list-item-title v-text="from.name">
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
export default {
  data () {
    return {
      menu:false,
      clipped: false,
      drawer: false,
      fixed: true,
      blogCategory:null,
      categorys:[
        { name: "肩・首", id:'n35zhq2x8' },
        { name: "すね", id:'ahxwr80o6' },
        { name: "腰", id:'ogw9fi9za' },
        { name: "足首", id:'abznzivci' },
        { name: "太もも", id:'45arjwblp' },
        { name: "ヒザ", id:'u_zfrrxup' },
      ],
      categorysForm:[
        { name: "着地について", id:'2j5l_40ie' },
        { name: "正しいフォーム", id:'gn7fmy_ym' },
        { name: "ダメフォーム6選", id:'wft0bf7in' },
        { name: "楽に進む", id:'dn5atadp6' },
        { name: "ダメ腕ふり5選", id:'eygy4jgn8' },
      ],
      items: [
        {
          id:1,
          name: '月間100kmメソッド',
          to: '/blogCategory?blogCategory=qsqzhls2o'
        },
        {
          id:2,
          name: '痛み',
          to: '/blogCategory',
          children:[
            { name: "肩・首", id:'n35zhq2x8' },
            { name: "すね", id:'ahxwr80o6' },
            { name: "腰", id:'ogw9fi9za' },
            { name: "足首", id:'abznzivci' },
            { name: "太もも", id:'45arjwblp' },
            { name: "ヒザ", id:'u_zfrrxup' },
          ],
        },
        {
          id:3,
          name: 'フォーム',
          to: 'p1nbcm2kg'
        },
        {
          id:4,
          name: 'LINE練習帳',
          to: '/inspire'
        },
      ],
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
  }
}
</script>
