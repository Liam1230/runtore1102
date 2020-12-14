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
    const { data } = await ctx.$axios.get(
        // your-service-id部分は自分のサービスidに置き換えてください
        `https://runtrainingnote.microcms.io/api/v1/blog/${ctx.params.slug}`,
        {
            headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
        }
    )
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

    console.log(data.youtubeURL)
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
    }
  },
}
</script>

<style>

</style>
