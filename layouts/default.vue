<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed color="rgba(0, 173, 255, 0.7)">
      <nuxt-link to="/">
        <v-toolbar-title class="ml-3 white--text" v-text="title" />
      </nuxt-link>
      <v-spacer />
      <nuxt-link :to="items[0].to" class="white--text px-5" style="border-left: solid 2px white;">
        {{items[0].title}}
      </nuxt-link>
      <v-menu open-on-hover offset-y tile transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <nuxt-link is="a" v-on="on" v-bind="attrs" :to="items[1].to" class="white--text px-5" style="border-left: solid 2px white;">
            {{items[1].title}}
          </nuxt-link>
        </template>
        <v-card tile class="mt-5">
          <v-card-text>
            肩
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            腰
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            股関節
          </v-card-text>
        </v-card>
      </v-menu>
      <v-menu open-on-hover offset-y tile transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <nuxt-link is="a" v-on="on" v-bind="attrs" :to="items[2].to" class="white--text px-5" style="border-left: solid 2px white;">
            {{items[2].title}}
          </nuxt-link>
        </template>
        <v-card tile class="mt-5">
          <v-card-text>
            肩
          </v-card-text>
          <v-card-text>
            腰
          </v-card-text>
          <v-card-text>
            股関節
          </v-card-text>
        </v-card>
      </v-menu>
      <nuxt-link :to="items[3].to" class="white--text px-5" style="border-left: solid 2px white;">
        {{items[3].title}}
      </nuxt-link>
    </v-app-bar>
    <v-main>
      <transition name="fade-transform">
        <nuxt />
      </transition>
    </v-main>    
    <v-footer class="white--text py-5" color="#00ADFF">
      <v-container>
        <v-row class="justify-center align-center">
          <v-col cols="5" class="text-center">
            <span>&copy; 大人のRunトレ塾</span>
          </v-col>
          <v-col cols="5" class="pl-5 py-0" style="border-left: solid 2px #ffffff;">
            <v-row class="pl-5">
              <v-col class="text-left" cols="3">
                TEL
              </v-col>
              <v-col cols="9">
                000-0000-0000
              </v-col>
            </v-row>
            <v-row class="pl-5">
              <v-col class="text-left" cols="3">
                EMAIL
              </v-col>
              <v-col cols="9">
                aaaaa@xxx.jp
              </v-col>
            </v-row>
            <v-row class="pl-5">
              <v-col class="text-left" cols="3">
                ADRESS
              </v-col>
              <v-col cols="9">
                〒000-0000<br>
                大阪府大阪市・・・・・
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
      items: [
        {
          title: '月間100kmメソッド',
          to: '/'
        },
        {
          title: '痛み',
          to: '/inspire'
        },
        {
          title: 'フォーム',
          to: '/inspire'
        },
        {
          title: 'LINE練習帳',
          to: '/inspire'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '大人のRunトレ練習帳'
    }
  }
}
</script>
