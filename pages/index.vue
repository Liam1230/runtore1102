<template>
  <v-container column justify-center>
    <ul>
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          {{ content.title }}
        </nuxt-link>
      </li>
    </ul>
  </v-container>
</template>

<script>
export default {
  async asyncData(ctx) {
    const { data } = await ctx.$axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://valuup.microcms.io/api/v1/blog`,
      {
        headers: { 'X-API-KEY': '66a46bb5-4cfd-4a48-903d-cd75f0ad4cd6' }
      }
    )
    return data
  }
}
</script>