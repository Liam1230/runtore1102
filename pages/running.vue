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
					
					<v-row class="align-center justify-center pt-5 mt-5 mx-0">
						<v-col cols=12 class="main-color-bg">
							<h2 class="white--text">【{{quiz1category}}】</h2>
						</v-col>
					</v-row>
					<v-row class="align-center justify-center mt-3 mx-0">
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.1 {{quiz1text}}</h3>
						</v-col>
						<v-card width="750" >
							<v-container class="pa-1">
								<v-item-group v-model="quiz1selected">
									<v-row>
										<v-col v-for="(src, i) in quiz1srcs" :key="i" cols="12" md="6">
											<v-item v-slot="{ active, toggle }">
												<v-img :src="src.image" height="200" class="text-right pa-2" @click="toggle">
													<v-btn icon dark>
														<v-icon color="blue">
															{{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
														</v-icon>
													</v-btn>
												</v-img>
											</v-item>
										</v-col>
									</v-row>
								</v-item-group>
							</v-container>
						</v-card>
					</v-row>
					<v-row class="align-center justify-center mt-3 mx-0">
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.2 {{quiz2text}}</h3>
						</v-col>
						<v-card width="750" >
							<v-container class="pa-1">
								<v-item-group v-model="quiz2selected" multiple>
									<v-row>
										<v-col v-for="(src, j) in quiz2srcs" :key="j" cols="12" md="6">
											<v-item v-slot="{ active, toggle }">
												<v-img :src="src.image" height="200" class="text-right pa-2" @click="toggle">
													<v-btn icon dark>
														<v-icon color="blue">
															{{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
														</v-icon>
													</v-btn>
												</v-img>
											</v-item>
										</v-col>
									</v-row>
								</v-item-group>
							</v-container>
						</v-card>
					</v-row>
					<v-row class="align-center justify-center mt-3 mx-0">
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.3 {{quiz3text}}</h3>
							<div>{{quiz3selected}}</div>
						</v-col>
						<v-card width="750" >
							<v-container class="pa-1">
								<v-item-group v-model="quiz3selected" >
									<v-row>
										<v-col v-for="(src, k) in quiz3srcs" :key="k" cols="12" md="6" >
											<v-item v-slot="{ active, toggle }">
												<v-img :src="src.image" height="200" class="text-right pa-2" @click="toggle">
													<v-btn icon dark>
														<v-icon color="blue">
															{{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
														</v-icon>
													</v-btn>
												</v-img>
											</v-item>
										</v-col>
									</v-row>
								</v-item-group>
							</v-container>
						</v-card>
					</v-row>
					<v-row class="align-center justify-center mt-3 mx-0">
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.4 {{quiz4text}}</h3>
						</v-col>
						
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="quiz4selected" active-class="border" color="indigo">
									<v-list-item v-for="(src, l) in quiz4srcs" :key="l">
										<v-list-item-content>
											<v-list-item-title v-text="src.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card>
					</v-row>

					<v-row class="align-center justify-center pt-5 mt-5 mx-0">
						<v-col cols=12 class="main-color-bg">
							<h2 class="white--text">【{{quiz5category}}】</h2>
						</v-col>
					</v-row>
					<v-row class="align-center justify-center mt-3 mx-0">
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.5 {{quiz5text}}</h3>
						</v-col>
						
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="quiz5selected" active-class="border" color="indigo">
									<v-list-item v-for="(src, m) in quiz5srcs" :key="m">
										<v-list-item-content>
											<v-list-item-title v-text="src.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card>
					</v-row>
					<v-row class="align-center justify-center mt-3 mx-0">
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.6 {{quiz6text}}</h3>
						</v-col>
						<v-card width="750" >
							<v-container class="pa-1">
								<v-item-group v-model="quiz6selected" >
									<v-row>
										<v-col v-for="(src, n) in quiz6srcs" :key="n" cols="12" md="6">
											<v-item v-slot="{ active, toggle }">
												<v-img :src="src.image" height="200" class="text-right pa-2" @click="toggle">
													<v-btn icon dark>
														<v-icon color="blue">
															{{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
														</v-icon>
													</v-btn>
												</v-img>
											</v-item>
										</v-col>
									</v-row>
								</v-item-group>
							</v-container>
						</v-card>
					</v-row>
					<v-row class="align-center justify-center mt-3 mx-0">
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.7 {{quiz7text}}</h3>
						</v-col>
						<v-card width="750" >
							<v-container class="pa-1">
								<v-item-group v-model="quiz7selected" multiple>
									<v-row>
										<v-col v-for="(src, p) in quiz7srcs" :key="p" cols="12" md="6">
											<v-item v-slot="{ active, toggle }">
												<v-img :src="src.image" height="200" class="text-right pa-2" @click="toggle">
													<v-btn icon dark>
														<v-icon color="blue">
															{{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
														</v-icon>
													</v-btn>
												</v-img>
											</v-item>
										</v-col>
									</v-row>
								</v-item-group>
							</v-container>
						</v-card>
					</v-row>
					<v-row class="align-center justify-center mt-3 mx-0">
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.8 {{quiz8text}}</h3>
						</v-col>
						<v-card width="750" >
							<v-container class="pa-1">
								<v-item-group v-model="quiz8selected">
									<v-row>
										<v-col v-for="(src, q) in quiz8srcs" :key="q" cols="12" md="6">
											<v-item v-slot="{ active, toggle }">
												<v-img :src="src.image" height="200" class="text-right pa-2" @click="toggle">
													<v-btn icon dark>
														<v-icon color="blue">
															{{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
														</v-icon>
													</v-btn>
												</v-img>
											</v-item>
										</v-col>
									</v-row>
								</v-item-group>
							</v-container>
						</v-card>
					</v-row>

					<v-row class="align-center justify-center pt-5 mt-5 mx-0">
						<v-col cols=12 class="main-color-bg">
							<h2 class="white--text">【{{quiz9category}}】</h2>
						</v-col>
					</v-row>
					<v-row class="align-center justify-center mt-3 mx-0">
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.9 {{quiz9text}}</h3>
						</v-col>
						
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="quiz9selected" active-class="border" color="indigo">
									<v-list-item v-for="(src, r) in quiz9srcs" :key="r">
										<v-list-item-content>
											<v-list-item-title v-text="src.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card>
					</v-row>
					<v-row class="align-center justify-center mt-3 mx-0">
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.10 {{quiz10text}}</h3>
						</v-col>
						
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="quiz10selected" active-class="border" color="indigo">
									<v-list-item v-for="(src, s) in quiz10srcs" :key="s">
										<v-list-item-content>
											<v-list-item-title v-text="src.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card>
					</v-row>
					<v-row class="align-center justify-center mt-3 mx-0">
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.11 {{quiz11text}}</h3>
						</v-col>
						
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="quiz11selected" active-class="border" color="indigo">
									<v-list-item v-for="(src, t) in quiz11srcs" :key="t">
										<v-list-item-content>
											<v-list-item-title v-text="src.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card>
					</v-row>
					<v-row class="align-center justify-center mt-3 mx-0">
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.12 {{quiz12text}}</h3>
						</v-col>
						
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="quiz12selected" active-class="border" color="indigo">
									<v-list-item v-for="(src, u) in quiz12srcs" :key="u">
										<v-list-item-content>
											<v-list-item-title v-text="src.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card>
					</v-row>

					<v-row v-if="Number(this.fullTime) >= 5 || !this.fullTime" class="align-center justify-center mt-3 mx-0" >
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.13 {{extraquize1}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="extraquize1selected" active-class="border" color="indigo">
									<v-list-item v-for="(extraquize, n) in extraquize1srcs" :key="n">
										<v-list-item-content>
											<v-list-item-title v-text="extraquize.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card>
					</v-row>
					<v-row v-else-if="Number(this.fullTime) >= 4" class="align-center justify-center mt-3 mx-0" >
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.13 {{extraquize2}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="extraquize2selected" active-class="border" color="indigo">
									<v-list-item v-for="(extraquize, p) in extraquize2srcs" :key="p">
										<v-list-item-content>
											<v-list-item-title v-text="extraquize.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card>
					</v-row>
					<v-row v-else-if="Number(this.fullTime) >= 3 && Number(this.fullMinute) >= 30" class="align-center justify-center mt-3 mx-0" >
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.13 {{extraquize3}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="extraquize3selected" active-class="border" color="indigo">
									<v-list-item v-for="(extraquize, q) in extraquize3srcs" :key="q">
										<v-list-item-content>
											<v-list-item-title v-text="extraquize.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card>
					</v-row>
					<v-row v-else class="align-center justify-center mt-3 mx-0" >
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.13 {{extraquize4}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="extraquize4selected" active-class="border" color="indigo">
									<v-list-item v-for="(extraquize, r) in extraquize4srcs" :key="r">
										<v-list-item-content>
											<v-list-item-title v-text="extraquize.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card>
					</v-row>
				</v-col>
				<v-col cols=12 sm=12 md=1></v-col>
			</v-row>
			<v-row class="align-center justify-center pt-5 mt-5 flex-wrap">
				<v-btn color="secondary" rounded x-large class="my-5"  @click="beforeResult()">診断結果をみる</v-btn>
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
		quiz1category:"フォーム・技術",
		quiz1text:"腰の落ちたフォームを選んでください",
		quiz1srcs:[
			{checked:false,score:6,image:"/img/sampleqa.png"},
			{checked:false,score:3,image:"/img/sampleqa.png"},
			{checked:false,score:0,image:"/img/sampleqa.png"},
			{checked:false,score:1,image:"/img/sampleqa.png"},
		],
		quiz1selected:[],

		quiz2category:"フォーム・技術",
		quiz2text:"着地位置として\"正しいもの\"を\"2つ\"選んでください",
		quiz2srcs:[
			{checked:false,score:0,image:"/img/sampleqa.png"},
			{checked:false,score:3,image:"/img/sampleqa.png"},
			{checked:false,score:3,image:"/img/sampleqa.png"},
			{checked:false,score:1,image:"/img/sampleqa.png"},
		],
		quiz2selected:[],

		quiz3category:"フォーム・技術",
		quiz3text:"腰の落ちたフォームを改善するために\"効果の低いもの\"を選んでください",
		quiz3srcs:[
			{checked:false,score:2,image:"/img/sampleqa.png"},
			{checked:false,score:2,image:"/img/sampleqa.png"},
			{checked:false,score:2,image:"/img/sampleqa.png"},
			{checked:false,score:6,image:"/img/sampleqa.png"},
		],
		quiz3selected:[],

		quiz4category:"フォーム・技術",
		quiz4text:"ご自身でペースをコントロールできますか？",
		quiz4srcs:[
			{checked:false,score:2,item:"普段タイムの計測を行っていない"},
			{checked:false,score:6,item:"1kmあたり5秒以内のふり幅でコントロールできる"},
			{checked:false,score:3,item:"1kmあたり10秒以内のふり幅でコントロールできる"},
			{checked:false,score:2,item:"1kmあたり11秒以上タイムが変動する"},
		],
		quiz4selected:[],

		quiz5category:"体に関すること",
		quiz5text:"フルマラソンを走るペースは、どの程度の速度が良いか選んでください",
		quiz5srcs:[
			{checked:false,score:2,item:"全く辛くなくしゃべられる速度"},
			{checked:false,score:0,item:"息が上がりかなりつらいと思う速度"},
			{checked:false,score:6,item:"息が軽く上がるが余裕のある速度"},
			{checked:false,score:2,item:"息が上がり余裕の無い速度"},
		],
		quiz5selected:[],

		quiz6category:"体に関すること",
		quiz6text:"伸ばしたい筋肉とストレッチ方法の組み合わせとして\"間違っているもの\"はどれか選んでください",
		quiz6srcs:[
			{checked:false,score:6,image:"/img/sampleqa.png"},
			{checked:false,score:0,image:"/img/sampleqa.png"},
			{checked:false,score:0,image:"/img/sampleqa.png"},
			{checked:false,score:0,image:"/img/sampleqa.png"},
		],
		quiz6selected:[],

		quiz7category:"体に関すること",
		quiz7text:"ランニング前後の食事摂取の方法として\"適切ではない\"組み合わせのものを\"2つ\"選んでください",
		quiz7srcs:[
			{checked:false,score:3,image:"/img/sampleqa.png"},
			{checked:false,score:3,image:"/img/sampleqa.png"},
			{checked:false,score:1,image:"/img/sampleqa.png"},
			{checked:false,score:1,image:"/img/sampleqa.png"},
		],
		quiz7selected:[],

		quiz8category:"体に関すること",
		quiz8text:"クールダウン・セルフケアの方法と効果で組み合わせが\"間違っているもの\"を選んでください",
		quiz8srcs:[
			{checked:false,score:6,image:"/img/sampleqa.png"},
			{checked:false,score:3,image:"/img/sampleqa.png"},
			{checked:false,score:0,image:"/img/sampleqa.png"},
			{checked:false,score:1,image:"/img/sampleqa.png"},
		],
		quiz8selected:[],

		quiz9category:"目標計画",
		quiz9text:"練習の目的として”適切ではないも の”を選んでください",
		quiz9srcs:[
			{checked:false,score:1,item:"ロングジョグ-毛細血管を増やし、脚の耐久性強化"},
			{checked:false,score:1,item:"インターバル走-疲労物質(乳酸)を除去する能力を高める"},
			{checked:false,score:1,item:"全力走-脚の回転数・ストライド向上で最大速度を高める"},
			{checked:false,score:6,item:"ペース走-呼吸循環を高めて疲労回復"},
		],
		quiz9selected:[],

		quiz10category:"目標計画",
		quiz10text:"ランニングにおいて練習方法として適しているものを選んでください!",
		quiz10srcs:[
			{checked:false,score:6,item:"全力走では、休憩を長く取って行う。"},
			{checked:false,score:1,item:"インターバル走は休憩を長く取って行う練習として適している"},
			{checked:false,score:1,item:"ペース走を行うときは息が上がらない速度で行う"},
			{checked:false,score:0,item:"ロングジョグは息が上がる程度の速度を維持し続けないと効果は小さい"},
		],
		quiz10selected:[],

		quiz11category:"目標計画",
		quiz11text:"課題に合わせた練習内容として 適したものを選んでください!",
		quiz11srcs:[
			{checked:false,score:1,item:"1km走のタイムが上がらない-ペース走"},
			{checked:false,score:2,item:"5km走の途中で疲労で脚が動かない感覚 がある-短い距離の全力走"},
			{checked:false,score:2,item:"10km走のタイムが上がらない-インター バル走"},
			{checked:false,score:6,item:"30km以降いつも歩いてしまう-ロング ジョグ"},
		],
		quiz11selected:[],

		quiz12category:"目標計画",
		quiz12text:"フルマラソンを○○切りするための 設定タイムとしてものとして ”適切ではないもの”を選んでください ※あなたのベストタイムに合わせて問 題文が変わるようになっています!あなたのレベルに沿った答えをお選びください!",
		quiz12srcs:[
			{checked:false,score:6,item:"1kmを○○で走ることができる"},
			{checked:false,score:3,item:"5kmを○○で走ることができる"},
			{checked:false,score:0,item:"10kmを○○で走ることができる"},
			{checked:false,score:1,item:"ハーフを○○で走ることができる"},
		],
		quiz12selected:[],

		extraquize1:"フルマラソンを5時間切りするために 適切な内容をお選びください",
		extraquize1srcs:[
			{checked:false,score:0,item:"10km全力を70分で走れる走力が望ましい"},
			{checked:false,score:0,item:"10km全力を75分で走れる走力が望ましい"},
			{checked:false,score:6,item:"7分/kmで完走すれば5時間を切れる"},
			{checked:false,score:0,item:"8分/kmで完走すれば5時間を切れる"},
		],
		extraquize1point:0,
		extraquize1selected:[],

		extraquize2:"フルマラソンを4時間切りするために 適切な内容をお選びください",
		extraquize2srcs:[
			{checked:false,score:0,item:"1km 4分40秒"},
			{checked:false,score:0,item:"5km 25分"},
			{checked:false,score:0,item:"10km 45分"},
			{checked:false,score:6,item:"ハーフ 51分~52分"},
		],
		extraquize2point:0,
		extraquize2selected:[],

		extraquize3:"フルマラソンを3時間30分切りするために 適切な内容をお選びください",
		extraquize3srcs:[
			{checked:false,score:0,item:"5km 25分"},
			{checked:false,score:6,item:"5km 21分40秒"},
			{checked:false,score:0,item:"10km 45分"},
			{checked:false,score:0,item:"ハーフ 51分~52分"},
		],
		extraquize3point:0,
		extraquize3selected:[],

		extraquize4:"フルマラソンを3時間切りするために 適切な内容をお選びください",
		extraquize4srcs:[
			{checked:false,score:0,item:"1km 3分30秒"},
			{checked:false,score:0,item:"5km 21分40秒"},
			{checked:false,score:6,item:"10km 38分20秒~39分"},
			{checked:false,score:0,item:"ハーフ 22分~25分"},
		],
		extraquize4point:0,
		extraquize4selected:[],
		toatlFormandTec:0,
		totalBody:0,
		totalPurpose:0
		
	}),

	mounted: async function(){
        
        for (let i=0; i<60;i++){
            this.minutes.push(i)
        }
        
	},

	methods:{
		onAddcss(i,j,k){
			this.quizs[idx].contents[idx2].srcs[idx3]
		},
		async beforeResult(){
			let errorMessages = []
			//let toatlFormandTec = 0
			//let totalBody = 0
			//let totalPurpose = 0
			let test = 0
			let quiz1 = this.quiz1selected
			//alert(this.quiz1selected)
			//alert(Number(this.quiz1srcs[q1].score))
			alert(Number(this.quiz1srcs[this.quiz1selected].score))
			//alert(this.quiz1)
			if(this.quiz1selected.length == 0){
				errorMessages.push("Q.1が未回答です。")
			}
			if(this.quiz2selected.length != 2){
				errorMessages.push("Q.2を二つ選択して下さい。")
			}
			if(this.quiz3selected.length == 0){
				errorMessages.push("Q.3が未回答です。")
			}
			if(this.quiz4selected.length == 0){
				errorMessages.push("Q.4が未回答です。")
			}
			if(this.quiz5selected.length == 0){
				errorMessages.push("Q.5が未回答です。")
			}
			if(this.quiz6selected.length == 0){
				errorMessages.push("Q.6が未回答です。")
			}
			if(this.quiz7selected.length != 2){
				errorMessages.push("Q.7を二つ選択して下さい。")
			}
			if(this.quiz8selected.length == 0){
				errorMessages.push("Q.8が未回答です。")
			}
			if(this.quiz9selected.length == 0){
				errorMessages.push("Q.9が未回答です。")
			}
			if(this.quiz10selected.length == 0){
				errorMessages.push("Q.10が未回答です。")
			}
			if(this.quiz11selected.length == 0){
				errorMessages.push("Q.11が未回答です。")
			}
			if(this.quiz12selected.length == 0){
				errorMessages.push("Q.12が未回答です。")
			}
			if(this.extraquize1selected.length == 0 && this.extraquize2selected.length == 0 && this.extraquize3selected.length == 0 && this.extraquize4selected.length == 0){
				errorMessages.push("Q.13が未回答です。")
			}

			if (errorMessages.length != 0) {
				alert(errorMessages.join('\n'));
				return false;
			}else{
			 	this.toatlFormandTec = Number(this.quiz1srcs[this.quiz1selected].score) + Number(this.quiz2srcs[this.quiz2selected[0]].score) + Number(this.quiz2srcs[this.quiz2selected[1]].score) +　Number(this.quiz3srcs[this.quiz3selected].score) + Number(this.quiz4srcs[this.quiz4selected].score)
			 	this.totalBody = Number(this.quiz5srcs[this.quiz5selected].score) + Number(this.quiz6srcs[this.quiz6selected].score) + Number(this.quiz7srcs[this.quiz7selected[0]].score) + Number(this.quiz7srcs[this.quiz7selected[1]].score) + Number(this.quiz8srcs[this.quiz8selected].score) 
			 	this.totalPurpose = Number(this.quiz9srcs[this.quiz9selected].score) + Number(this.quiz10srcs[this.quiz10selected].score) + Number(this.quiz11srcs[this.quiz11selected].score) + Number(this.quiz12srcs[this.quiz12selected].score)
				 //alert(toatlFormandTec);
				this.$router.push({ path: 'result' , query :{ toatlFormandTec: this.toatlFormandTec, totalBody: this.totalBody, totalPurpose: this.totalPurpose }});
			 }
		}
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