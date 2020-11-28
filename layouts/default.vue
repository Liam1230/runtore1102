<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed color="rgba(0, 173, 255, 0.7)">
      <nuxt-link to="/">
        <v-toolbar-title class="ml-md-3 white--text" v-text="title" />
      </nuxt-link>
      <v-spacer />
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <nuxt-link :to="items[0].to" class="white--text px-5" style="border-left: solid 2px white;">
          {{items[0].title}}
        </nuxt-link>
        <v-menu open-on-hover offset-y tile transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <nuxt-link is="a" v-on="on" v-bind="attrs" :to="items[1].to" class="white--text px-5" style="border-left: solid 2px white;">
              {{items[1].title}}
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
        <nuxt-link :to="`blogCategory?categoryId=${items[2].to}`" class="white--text px-5" style="border-left: solid 2px white;">
          {{items[2].title}}
        </nuxt-link>
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
      items: [
        {
          title: '月間100kmメソッド',
          to: '/'
        },
        {
          title: '痛み',
          to: '/blogCategory'
        },
        {
          title: 'フォーム',
          to: 'p1nbcm2kg'
        },
        {
          title: 'LINE練習帳',
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
    }
  }
}
</script>
