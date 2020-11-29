<template>
  <article class="mt-5 pt-5">
    <section class="my-5 py-5">
      <v-container column justify-center class="min-container text-center pt-5">
        <h1 class="text-h3 mt-5 title-text-color">自己紹介</h1>
        <h2 class="mt-3 pb-5 title-text-color">-Profile-</h2>
        <v-row class="align-center justify-space-between pt-5 mt-5">
          <v-col cols="12" md=5 class="mr-5">
            <v-img src="/img/profile.png" lazy-src="/img/profile_l.png"></v-img>
          </v-col>
          <v-col cols=12 md=6 class="pl-5 text-center">
            <h1 class="text-h4 text-left main-color">大人のRUNトレ塾</h1>
            <h2 class="text-h6 mt-3 text-left title-text-color">代表 吉野洸希</h2>
            <v-divider class="my-5"></v-divider>
            <p class="text-left main-text-color">
              ランナーの皆さん！初めまして！
              大人のRUNトレ塾の吉野洸希と申します！
              大阪でランナー専門のパーソナルトレーニングジムを営み、総勢500名弱のランナーの皆さんの体やランニングフォームを見てきました！
              もちろん私自身もランニングが大好きで、常にベストの更新を目指して練習しています！
              トレーナーとして、ランナーとしての経験を活かし、皆さんのお悩みを改善できる情報をこのサイトを通して解説していきます！
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container column justify-center class="min-container text-left pt-5">
        <h2 class="text-h4 text-left main-color border-h2 mb-5">ベストレコード</h2>
        <v-row class="main-color text-h4 font-weight-bold justify-space-between">
          <v-col cols="8">
            <v-row>
              <v-col>
                <span>2019年 12月</span>
              </v-col>
              <v-col>
                <span>大阪マラソン</span>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="text-right justify-end align-center d-flex" cols="4">
            <span>2:48'56</span>
          </v-col>
        </v-row>
        <v-row class="main-color text-h4 font-weight-bold">
          <v-col cols="8">
            <v-row>
              <v-col>
                <span>2020年 1月</span>
              </v-col>
              <v-col>
                <span>大阪ハーフ</span>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="text-right justify-end align-center d-flex" cols="4">
            <span>1:18'57</span>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container column justify-center class="min-container text-left pt-5">
        <h2 class="text-h4 text-left main-color border-h2 mb-5">経歴</h2>
        <p class="text-h6 text-left main-text-color">
          <table style="border-spacing: 15px 10px;">
            <tr>
              <td>2014年</td><td>某大阪陸上競技部　トレーナー</td>
            </tr>
            <tr>
              <td>2017年</td><td>和歌山ボクシングジム　トレーナー</td>
            </tr>
            <tr>
              <td>2019年</td><td>ランナー専門パーソナルジム開業</td>
            </tr>
            <tr>
              <td></td><td>天満橋ランニングステーション「ジョグスタウィズ」チーフトレーナー</td>
            </tr>
            <tr>
              <td></td><td>サブ3、サブ4、サブ5練習会を大阪城で開催</td>
            </tr>
          </table>
        </p>
      </v-container>
    </section>
    <section>
      <v-container column justify-center class="min-container text-left pt-5">
        <h2 class="text-h4 text-left main-color border-h2 mb-5">想い</h2>
        <p class="text-h6 text-left main-text-color">
          私自身もマラソンに挑戦し、怪我やベスト更新が出来ずに悩んだ時期がありました。
          もともと、ランニングが好きで始めたはずなのに悩みがあることで、走るのが辛いし、距離を走っても成長を感じられず苦しい。
          視点を変えて、ランニングフォームを体の使い方から見直したことでその辛い時期を乗り越えることができました！
          その内容を分かりやすくお伝えしていくことで、同じ悩みを持つランナーの皆さんの悩みを改善し「ランニングって最高に楽しい！」を引き出します！
        </p>
      </v-container>
    </section>
    <section class="my-5 py-5">
      <v-container column justify-center class="min-container text-center py-5 my-5">
        <v-btn text to="/" class="main-text-color text-h6 font-weight-bold">トップに戻る</v-btn>
      </v-container>
    </section>
  </article>
</template>

<script>
export default {
}
</script>