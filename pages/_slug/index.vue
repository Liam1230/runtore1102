<template>
  <v-container>
      <v-row class="blog">
          <v-col cols=12 md="9">
              <v-container class="min-container" column justify-center>
                <div class="d-flex justify-space-between main-under-line pb-1 mb-5 align-end">
                  <h1 class="title main-color text-h4">{{ title }}</h1>
                  <p class="mb-0">{{date | dateFilter}}</p>
                </div>
                <div class="youtube" v-if="youtubeURL">
                  <iframe :src="youtubeURL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div v-if="dics" class="mt-5 pa-3 dictionary">
                  目次
                  <ul class="mt-3">
                    <nuxt-link to="#" v-scroll-to="{el: `#${dic.id}`}" v-for="(dic,i) in dics" :key="i">
                      <li>{{dic.text}}</li>
                    </nuxt-link>
                  </ul>
                </div>
                <div class="post" v-html="text"></div>
                <!-- <div class="d-flex justify-start align-start py-3">
                  <div class="d-flex justify-start">
                    <img class="avatar mr-5" src="/img/avatar.png" alt="">
                  </div>
                  <div class="l-buble">
                    ajlkdfjlaksdjlfjaldfjldfaskdjflaskjdflkasjdfslkdfjasdkljfklasjdf <br>dfasdfasdfasd
                  </div>
                </div>
                <div class="d-flex justify-end align-start py-3">
                  <div class="r-buble">
                    ajlkdfjlaksdjlfjaldfjl
                  </div>
                  <div class="d-flex justify-start">
                    <img class="avatar ml-5" src="/img/avatar.png" alt="">
                  </div>
                </div> -->
                <div>
                  <h2>おすすめの記事</h2>
                  <div v-for="(recomend,i) in recomends" :key="i" class="blog-post pa-5 mt-5">
                    <nuxt-link :to="`/${recomend.id}`">
                      <div class="d-flex justify-end text-subtitle-2 title-text-color">
                        {{recomend.date | dateFilter}}
                      </div>
                      <v-row>
                          <v-col cols="12" md="5">
                            <v-img v-if="recomend.headerImg" class="rounded" :aspect-ratio="16/9" :src="recomend.headerImg.url"></v-img>
                          </v-col>
                          <v-col cols="12" md="7">
                            <h3 class="text-h5 sub-under-line title-text-color">{{recomend.title}}</h3>
                            <p class="main-text-color mt-5 text-body-2">
                              {{recomend.seoDescription | blogTextFileter}}
                            </p>
                            <div>
                              <h4 class="text-caption title-text-color">カテゴリー</h4>
                              <div class="d-flex mt-1 flex-wrap">
                                <v-btn v-if="recomend.category1" outlined rounded small class="mr-3 mb-3">
                                  {{recomend.category1.name}}
                                </v-btn>
                                <v-btn v-if="recomend.category2" outlined rounded small class="mr-3">
                                  {{recomend.category2.name}}
                                </v-btn>
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                    </nuxt-link>
                  </div>
                </div>
              </v-container>
          </v-col>
          <v-col cols=12 md="3">
            <lazy-blog-side-menu></lazy-blog-side-menu>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title:"大人のRUNトレ練習帳",
    youtubeURL:"",
  }),
  async asyncData(ctx) {
    let { data } = await ctx.$axios.get(
        // your-service-id部分は自分のサービスidに置き換えてください
        `https://runtrainingnote.microcms.io/api/v1/blog/${ctx.params.slug}?depth=2`,
        {
            headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
        }
    )

    // const recomends = await ctx.$axios.get(
    //     // your-service-id部分は自分のサービスidに置き換えてください
    //     `https://runtrainingnote.microcms.io/api/v1/blog/${ctx.params.slug}`,
    //     {
    //         headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
    //     }
    // )
    // console.log(data)

    const titlePattern = /<h2.*?>.+?<\/h2>/g
    const res = data.text.match(titlePattern)

    if(res){
      const dics = []
      for(const r of res){
        const id = r.match(/id="(.+?)"/)[1]
        let text = r.match(/<h2.*?>(.+?)<\/h2>/)[1]
        text = text.replace(/<.*?>/g,"")
        dics.push({
          id:id,
          text:text
        })
      }
      data["dics"] = dics
    }

    const userPattern = /\|%user%\|/g
    data.text = data.text.replace(userPattern, `<div class="d-flex justify-end align-start py-3"><div class="r-buble">`)
    const userEndPattern = /\|%enduser%\|/g
    data.text = data.text.replace(userEndPattern, `</div><div class="d-flex justify-start"><img class="avatar ml-5" src="/img/avatar.png" alt=""></div></div>`)

    const menterPattern = /\|%menter%\|/g
    data.text = data.text.replace(menterPattern, `<div class="d-flex justify-start align-start py-3"><div class="d-flex justify-start"><img class="avatar mr-5" src="/img/avatar.png" alt=""></div><div class="l-buble">`)
    const menterEndPattern = /\|%endmenter%\|/g
    data.text = data.text.replace(menterEndPattern, `</div></div>`)
    // if(talkRes){
    //   for(const r of talkRes){
    //     const userPattern = /<%user%>.+?<%\/user%>/g
    //     const userRes = data.text.match(userPattern)
    //     const id = r.match(/id="(.+?)"/)[1]
    //     let text = r.match(/<h2.*?>(.+?)<\/h2>/)[1]
    //     text = text.replace(/<.*?>/g,"")
    //   }
    // }

    // console.log(data.text)

    // console.log(data.youtubeURL)
    return data
  },
  head () {
    return {
      title: this.seoTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.seoDescription },
        { hid: 'og:type', property: 'og:type', content: "article" },
        { hid: 'og:title', property: 'og:title', content: this.seoTitle },
        { hid: 'og:description', property: 'og:description', content: this.seoDescription },
        { hid: 'og:url', property: 'og:url', content: `https://runtore.netlify.app/${this.id}` },
        { hid: 'og:image', property: 'og:image', content: this.headerImg ? this.headerImg.url : "" },
      ],
    }
  },
  filters:{
    dateFilter(val){
      const date = new Date(val)
      return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`
    },
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
}
</script>

<style>

</style>
