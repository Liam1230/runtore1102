<template>
  <v-container>
      <v-row class="blog">
          <v-col cols="9">
              <v-container class="min-container" column justify-center>
                <div class="d-flex justify-space-between main-under-line pb-1 mb-5 align-end">
                  <h1 class="title main-color text-h4">{{ title }}</h1>
                  <p class="mb-0">{{date | dateFilter}}</p>
                </div>
                <div class="post" v-html="text"></div>
              </v-container>
          </v-col>
          <v-col cols="3">
            <lazy-blog-side-menu></lazy-blog-side-menu>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData(ctx) {
    const { data } = await ctx.$axios.get(
        // your-service-id部分は自分のサービスidに置き換えてください
        `https://runtrainingnote.microcms.io/api/v1/blog/${ctx.params.slug}`,
        {
            headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
        }
    )
    return data
  },
  filters:{
    dateFilter(val){
      const date = new Date(val)
      return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`
    }
  },
}
</script>
