<template>
  <v-container column justify-center>
    <h1 class="title">{{ title }}</h1>
    <!-- <p class="publishedAt">{{ publishedAt }}</p> -->
    <div class="post" v-html="body"></div>
  </v-container>
</template>

<script>
export default {
  async asyncData(ctx) {
    const { data } = await ctx.$axios.get(
      `https://valuup.microcms.io/api/v1/blog/${ctx.params.slug}`,
      {
        headers: { 'X-API-KEY': '66a46bb5-4cfd-4a48-903d-cd75f0ad4cd6' }
      }
    )
    return data
  }
}
</script>