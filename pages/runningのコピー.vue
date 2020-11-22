<template>
  <article class="mt-5 pt-5">
		<v-container column justify-center class="min-container text-center pt-5">
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
									rounded
									:items="times"
									filled
									v-model="fullTime"
								></v-select>
							</v-col>
							<v-col cols="2" class="text-left">
								<h2 class="text-h4 main-color pb-3">時間</h2>
							</v-col>
							<v-col cols="3">
								<v-select
									rounded
									:items="minutes"
									filled
									v-model="fullMinute"
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
									rounded
									:items="halfTimes"
									filled
									v-model="halfTime"
								></v-select>
							</v-col>
							<v-col cols="2" class="text-left">
								<h2 class="text-h4 main-color pb-3">時間</h2>
							</v-col>
							<v-col cols="3">
								<v-select
									rounded
									:items="minutes"
									filled
									v-model="halfMinute"
								></v-select>
							</v-col>
							<v-col cols="2" class="text-left">
								<h2 class="text-h4 main-color pb-3">分</h2>
							</v-col>
						</v-row>
					</v-row>
					<vue-select-image 
					　　:dataImages="dataImages"
						@onselectimage="onSelectImage">
					</vue-select-image>

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
								<div class="flex">
									<label class="flex">
										<input type="radio" name="profile_image" :value="content.srcs[0].score" v-model="content.srcs[0].checked" :class="classList(i,j,0)" active-class="border"><br>
										<v-img :src="content.srcs[0].image"></v-img>
									</label>
								</div>
							</v-col>
							<v-col cols="6">
								<label>
									<input type="radio" name="profile_image" :value="content.srcs[1].score" v-model="content.srcs[1].checked"><br>
									<v-img :src="content.srcs[1].image"></v-img>
								</label>
							</v-col>
							<v-col cols="6">
								<label>
									<input type="radio" name="profile_image" :value="content.srcs[2].score" v-model="content.srcs[2].checked"><br>
									<v-img :src="content.srcs[2].image"></v-img>
								</label>
							</v-col>
							<v-col cols="6">
								<label>
									<input type="radio" name="profile_image" :value="content.srcs[3].score" v-model="content.srcs[3].checked"><br>
									<v-img :src="content.srcs[3].image"></v-img>
								</label>
							</v-col>
						</v-row>
						<v-row v-else class="align-center justify-center mt-3 mx-0">
							<v-col cols="12" class="text-left">
								<h3 class="main-color text-h5">Q.{{j+1}} {{content.text}}</h3>
							</v-col>
							<v-btn-toggle v-model="content.point">
								<v-col cols="12">
									<v-btn :value="content.srcs[0].score" block outlined rounded x-large>{{content.srcs[0].item}}</v-btn>
								</v-col>
								<v-col cols="12">
									<v-btn :value="content.srcs[1].score" block outlined rounded x-large>{{content.srcs[1].item}}</v-btn>
								</v-col>
								<v-col cols="12">
									<v-btn :value="content.srcs[2].score" block outlined rounded x-large>{{content.srcs[2].item}}</v-btn>
								</v-col>
								<v-col cols="12">
									<v-btn :value="content.srcs[3].score" block outlined rounded x-large>{{content.srcs[3].item}}</v-btn>
								</v-col>
							</v-btn-toggle>
							<v-card width="750">
								<v-list>
									<v-list-item-group v-model="model" active-class="border" color="indigo">
										<v-list-item v-for="(src, k) in content.srcs" :key="k">
											<v-list-item-content>
												<v-list-item-title v-text="src.item"></v-list-item-title>
											</v-list-item-content>
										</v-list-item>
									</v-list-item-group>
								</v-list>
							</v-card>
						</v-row>
					</div>
				</v-col>
				<v-col cols=12 sm=12 md=1></v-col>
			</v-row>
			<v-row class="align-center justify-center pt-5 mt-5 flex-wrap">
				<v-btn color="secondary" rounded x-large class="my-5" to="result">診断結果をみる</v-btn>
			</v-row>
		</v-container>
  </article>
</template>

<script>

export default {
	data: () => ({
		fullTime:null,
		fullMinute:null,
		halfTime:null,
		halfMinute:null,
		items: ['1', '2', '3', '4', '5', '6','7'],
        halfTimes:['1','2','3'],
        times: ['1', '2', '3', '4', '5', '6','7'],
		minutes:[],
		dataImages:[
			{
				id: '1',
				src: '/img/sampleqa.png',
				alt: 'Alt Image 1'
			}, 
			{
				id: '2',
				src: '/img/sampleqa.png',
				alt: 'Alt Image ２'
			},
		],
		quizs:[
			{
				category:"フォーム・技術",
				contents:[
					{
						type:"img",
						text:"腰の落ちたフォームを選んでください",
						srcs:[
							{checked:false,score:6,image:"/img/sampleqa.png"},
							{checked:false,score:3,image:"/img/sampleqa.png"},
							{checked:false,score:0,image:"/img/sampleqa.png"},
							{checked:false,score:1,image:"/img/sampleqa.png"},
						],
						point:0
						
					},
					{
						type:"img",
						text:"着地位置として\"正しいもの\"を\"2つ\"選んでください",
						srcs:[
							{checked:false,score:6,image:"/img/sampleqa.png"},
							{checked:false,score:3,image:"/img/sampleqa.png"},
							{checked:false,score:0,image:"/img/sampleqa.png"},
							{checked:false,score:1,image:"/img/sampleqa.png"},
						],
						point:0
					},
					{
						type:"img",
						text:"腰の落ちたフォームを改善するために\"効果の低いもの\"を選んでください",
						srcs:[
							{checked:false,score:6,image:"/img/sampleqa.png"},
							{checked:false,score:3,image:"/img/sampleqa.png"},
							{checked:false,score:0,image:"/img/sampleqa.png"},
							{checked:false,score:1,image:"/img/sampleqa.png"},
						],
						point:0
					},
					{
						type:"text",
						text:"ご自身でペースをコントロールできますか？",
						srcs:[
							{checked:false,score:6,item:"普段タイムの計測を行っていない"},
							{checked:false,score:3,item:"1kmあたり5秒以内のふり幅でコントロールできる"},
							{checked:false,score:0,item:"1kmあたり10秒以内のふり幅でコントロールできる"},
							{checked:false,score:1,item:"1kmあたり11秒以上タイムが変動する"},
						],
						point:0
					},
				]
			},
			{
				category:"体に関すること",
				contents:[
					{
						type:"text",
						text:"フルマラソンを走るペースは、どの程度の速度が良いか選んでください",
						srcs:[
							{checked:false,score:6,item:"全く辛くなくしゃべられる速度"},
							{checked:false,score:3,item:"息が上がりかなりつらいと思う速度"},
							{checked:false,score:0,item:"息が軽く上がるが余裕のある速度"},
							{checked:false,score:1,item:"息が上がり余裕の無い速度"},
						],
						point:0
					},
					{
						type:"img",
						text:"伸ばしたい筋肉とストレッチ方法の組み合わせとして\"間違っているもの\"はどれか選んでください",
						srcs:[
							{checked:false,score:6,image:"/img/sampleqa.png"},
							{checked:false,score:3,image:"/img/sampleqa.png"},
							{checked:false,score:0,image:"/img/sampleqa.png"},
							{checked:false,score:1,image:"/img/sampleqa.png"},
						],
						point:0
					},
					{
						type:"img",
						text:"ランニング前後の食事摂取の方法として\"適切ではない\"組み合わせのものを\"2つ\"選んでください",
						srcs:[
							{checked:false,score:6,image:"/img/sampleqa.png"},
							{checked:false,score:3,image:"/img/sampleqa.png"},
							{checked:false,score:0,image:"/img/sampleqa.png"},
							{checked:false,score:1,image:"/img/sampleqa.png"},
						],
						point:0
					},
					{
						type:"img",
						text:"クールダウン・セルフケアの方法と効果で組み合わせが\"間違っているもの\"を選んでください",
						srcs:[
							{checked:false,score:6,image:"/img/sampleqa.png"},
							{checked:false,score:3,image:"/img/sampleqa.png"},
							{checked:false,score:0,image:"/img/sampleqa.png"},
							{checked:false,score:1,image:"/img/sampleqa.png"},
						],
						point:0
					},
				]
			}
		]
	}),

	mounted: async function(){
        
        for (var i=0; i<60;i++){
            this.minutes.push(i)
        }
        
	},

	methods:{
		onAddcss(i,j,k){
			this.quizs[idx].contents[idx2].srcs[idx3]
		},
	},

	computed: {
		classList: function () {
			return function(i,j,k) {
				const classList = []
				if (this.quizs[i].contents[j].type== 'img' && this.quizs[i].contents[j].srcs[k].checked) {
					classList.push('active')
				}else{
					classList.push('inactive')
				}
				return classList
			}
		},	
    }
		
  
	
	
}
</script>