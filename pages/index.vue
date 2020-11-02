<template>
  <article>
    <section class="p-relative mb-5">
      <v-img width="100vw" height="100vh" src="/img/first.png" alt=""></v-img>
      <img class="p-absolute absolute-rb" style="width:35vw; height:35wh; min-width:250px; min-height:250px;" src="/img/triangle.png">
      <div id="first-view-content" class="white--text">
        <div id="first-view-content-text">
          <div id="first-view-content-text-inner">
            <h1 class="text-h4 mb-5">全てのランナーの<br>「やったできた！」をこの一冊に！</h1>
            <p class="text-h6">目標タイムを達成したい・ファンラン・健康増進など、1人1人に違った目的がありますが、「ランニングが好き」という気持ちは皆さん同じではないでしょうか？「ベストを更新した時の高揚感」「ゴール後の達成感」「青空のもと走る爽快感」は日常の中でもなかなか味わえないものもちろんうまくいかないことばかりでつらい経験をすることも。その時に当サイトをご活用ください。ランニングのお悩みを解決し日々のランニングライフを満喫しましょう！</p>
          </div>
        </div>
      </div>
    </section>
    <section class="my-5 py-5">
      <v-container column justify-center class="text-center">
        <h1 class="text-h3 mt-5">Runトレについて</h1>
        <h2 class="mt-3">-About-</h2>
        <h3 class="text-h4 mt-5">一人ではたどりつけない自己ベストへ</h3>
      </v-container>
    </section>
  </article>
  <!-- <v-container column justify-center> -->

    <!-- <ul>
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          {{ content.title }}
        </nuxt-link>
      </li>
    </ul> -->
  <!-- </v-container> -->
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