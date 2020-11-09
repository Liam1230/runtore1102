<template>
  <article class="mt-5 pt-5">
		<v-container column justify-center class="text-center pt-5">
			<h1 class="text-h3 mt-5 title-text-color">ランニング力チェック</h1>
			<h2 class="mt-3 pb-5 title-text-color">-Diagnosis-</h2>
			<v-row class="align-center justify-center pt-5 mt-5 flex-wrap">
				<v-col cols=12 sm=12 md=1></v-col>
				<v-col cols=10 class="text-center">
					<v-row class="align-center justify-center pt-5 mt-5 flex-wrap">
						<v-col cols="4" class="text-right">
							<v-avatar size="auto">
								<v-img src="/img/avatar.png"></v-img>
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
					<div v-for="(quiz,i) in quizs" :key="i">
						<v-row class="align-center justify-center pt-5 mt-5 mx-0">
							<v-col cols=12 class="main-color-bg">
								<h2 class="white--text">【{{quiz.category}}】</h2>
							</v-col>
						</v-row>
						<v-row v-if="content.type == 'img'" class="align-center justify-center mt-3 mx-0" v-for="(content,j) in quiz.contents" :key="j">
							<v-col cols="12" class="text-left">
								<h3 class="main-color text-h5">Q.{{j+1}} {{content.text}}</h3>
							</v-col>
							<v-col cols="6">
								<v-img :src="content.src[0]"></v-img>
							</v-col>
							<v-col cols="6">
								<v-img :src="content.src[1]"></v-img>
							</v-col>
							<v-col cols="6">
								<v-img :src="content.src[2]"></v-img>
							</v-col>
							<v-col cols="6">
								<v-img :src="content.src[3]"></v-img>
							</v-col>
						</v-row>
						<v-row v-else class="align-center justify-center mt-3 mx-0">
							<v-col cols="12" class="text-left">
								<h3 class="main-color text-h5">Q.{{j+1}} {{content.text}}</h3>
							</v-col>
							<v-col cols="12">
								<v-btn block outlined rounded x-large>{{content.src[0]}}</v-btn>
							</v-col>
							<v-col cols="12">
								<v-btn block outlined rounded x-large>{{content.src[1]}}</v-btn>
							</v-col>
							<v-col cols="12">
								<v-btn block outlined rounded x-large>{{content.src[2]}}</v-btn>
							</v-col>
							<v-col cols="12">
								<v-btn block outlined rounded x-large>{{content.src[3]}}</v-btn>
							</v-col>
						</v-row>
					</div>
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
		quizs:[
			{
				category:"フォーム・技術",
				contents:[
					{
						type:"img",
						text:"腰の落ちたフォームを選んでください",
						src:[
							"/img/sampleqa.png",
							"/img/sampleqa.png",
							"/img/sampleqa.png",
							"/img/sampleqa.png",
						]
					},
					{
						type:"img",
						text:"着地位置として\"正しいもの\"を\"2つ\"選んでください",
						src:[
							"/img/sampleqa.png",
							"/img/sampleqa.png",
							"/img/sampleqa.png",
							"/img/sampleqa.png",
						]
					},
					{
						type:"img",
						text:"腰の落ちたフォームを改善するために\"効果の低いもの\"を選んでください",
						src:[
							"/img/sampleqa.png",
							"/img/sampleqa.png",
							"/img/sampleqa.png",
							"/img/sampleqa.png",
						]
					},
					{
						type:"text",
						text:"ご自身でペースをコントロールできますか？",
						src:[
							"普段タイムの計測を行っていない",
							"1kmあたり5秒以内のふり幅でコントロールできる",
							"1kmあたり10秒以内のふり幅でコントロールできる",
							"1kmあたり11秒以上タイムが変動する",
						]
					},
				]
			},
			{
				category:"体に関すること",
				contents:[
					{
						type:"text",
						text:"フルマラソンを走るペースは、どの程度の速度が良いか選んでください",
						src:[
							"全く辛くなくしゃべられる速度",
							"息が上がりかなりつらいと思う速度",
							"息が軽く上がるが余裕のある速度",
							"息が上がり余裕の無い速度",
						]
					},
					{
						type:"img",
						text:"伸ばしたい筋肉とストレッチ方法の組み合わせとして\"間違っているもの\"はどれか選んでください",
						src:[
							"/img/sampleqa.png",
							"/img/sampleqa.png",
							"/img/sampleqa.png",
							"/img/sampleqa.png",
						]
					},
					{
						type:"img",
						text:"ランニング前後の食事摂取の方法として\"適切ではない\"組み合わせのものを\"2つ\"選んでください",
						src:[
							"/img/sampleqa.png",
							"/img/sampleqa.png",
							"/img/sampleqa.png",
							"/img/sampleqa.png",
						]
					},
					{
						type:"img",
						text:"クールダウン・セルフケアの方法と効果で組み合わせが\"間違っているもの\"を選んでください",
						src:[
							"/img/sampleqa.png",
							"/img/sampleqa.png",
							"/img/sampleqa.png",
							"/img/sampleqa.png",
						]
					},
				]
			}
		]
	}),
}
</script>