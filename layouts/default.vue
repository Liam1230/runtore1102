<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed color="rgba(0, 173, 255, 0.7)">
      <v-toolbar-title class="ml-3 white--text" v-text="title" />
      <v-spacer />
      <nuxt-link :to="item.to" v-for="(item,i) in items" :key="i" class="white--text mx-5">
        {{item.title}}
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
            <span>&copy; {{ new Date().getFullYear() }} 大人のRunトレ塾</span>
          </v-col>
          <v-col cols="5" class="pl-5 py-0" style="border-left: solid 2px #ffffff;">
            <table style="border-spacing: 30px 10px;">
              <tr>
                <td>TEL</td>
                <td>000-0000-0000</td>
              </tr>
              <tr>
                <td>EMAIL</td>
                <td>aaaaa@xxx.jp</td>
              </tr>
              <tr>
                <td>ADRESS</td>
                <td>
                  〒000-0000<br>
                  大阪府大阪市・・・・・
                </td>
              </tr>
            </table>
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
