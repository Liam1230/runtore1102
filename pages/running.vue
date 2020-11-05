<template>
  <article class="mt-5 pt-5">
		<v-container column justify-center class="text-center pt-5">
			<h1 class="text-h3 mt-5 title-text-color">ランニング力チェック</h1>
			<h2 class="mt-3 pb-5 title-text-color">-Diagnosis-</h2>
			<v-row class="align-center justify-center pt-5 mt-5 flex-wrap">
				<v-col cols=12 sm=12 md=1></v-col>
				<v-col cols=10 class="text-center">
					<v-row class="align-center justify-center pt-5 mt-5 flex-wrap">
						<v-col class="text-right">
							<v-avatar size="auto">
								<v-img src="/img/avatar.png" lazy-src="/img/profile_l.png"></v-img>
							</v-avatar>
						</v-col>
						<v-col cols="8">
							<div class="talk">
								<p class="text-left main-text-color">私は月間走行距離100ｋｍで 2:48:56 を 実現しました。初 のフルマラソンで は月間 250 ｋｍ練習し、 膝の痛みや 足底筋膜炎に顔をゆがめながら も 3 45で ゴール。 もっと良いタイムが出ると思っていたのに、 走っても ベストは伸びないばかりか、 痛みが出て しまう。ただ走るだけの 非効率な練習に疑問 を持つように 。そこで 当サイトでお伝えして いる 月間 100 ｋｍメソッドを生み出しました！</p>
							</div>
						</v-col>
					</v-row>
					<v-row class="square-box align-center justify-center pt-5 mt-5 mx-0">
						<v-col cols=12>
							<h2 class="main-color">あなたのフルマラソンのタイムを教えてください。</h2>
						</v-col>
						<v-row class="justify-center align-center">
							<v-col cols="2">
								<v-select
									:items="items"
									filled
									label="Filled style"
								></v-select>
							</v-col>
							<v-col cols="2" class="text-left">
								<h2 class="text-h4 main-color pb-3">時間</h2>
							</v-col>
							<v-col cols="2">
								<v-select
									:items="items"
									filled
									label="Filled style"
								></v-select>
							</v-col>
							<v-col cols="2" class="text-left">
								<h2 class="text-h4 main-color pb-3">分</h2>
							</v-col>
						</v-row>
					</v-row>
					<v-row class="square-box align-center justify-center pt-5 mt-5 mx-0">
						<v-col cols=12>
							<h2 class="main-color">あなたのハーフマラソンのタイムを教えてください。</h2>
						</v-col>
						<v-row class="justify-center align-center">
							<v-col cols="2">
								<v-select
									:items="items"
									filled
									label="Filled style"
								></v-select>
							</v-col>
							<v-col cols="2" class="text-left">
								<h2 class="text-h4 main-color pb-3">時間</h2>
							</v-col>
							<v-col cols="2">
								<v-select
									:items="items"
									filled
									label="Filled style"
								></v-select>
							</v-col>
							<v-col cols="2" class="text-left">
								<h2 class="text-h4 main-color pb-3">分</h2>
							</v-col>
						</v-row>
					</v-row>
					<v-row class="align-center justify-center pt-5 mt-5 mx-0">
						<v-col cols=12 class="main-color-bg">
							<h2 class="white--text">【フォーム・技術】</h2>
						</v-col>
						<v-row class="justify-center align-center">
						</v-row>
					</v-row>
				</v-col>
				<v-col cols=12 sm=12 md=1></v-col>
			</v-row>
		</v-container>
  </article>
</template>

<script>
export default {
	data: () => ({
		items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
	}),
}
</script>