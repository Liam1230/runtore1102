<template>
  <article class="mt-5 pt-5">
		<v-container column justify-center class="min-container text-center pt-5">
			<v-snackbar v-model="snackBar" multi-line top>
				{{ errorText }}
				<template v-slot:action="{ attrs }">
					<v-btn color="pink" text v-bind="attrs" @click="snackBar = false">
						Close
					</v-btn>
				</template>
			</v-snackbar>
			<h1 class="text-h3 mt-5 title-text-color">ランニング力チェック</h1>
			<h2 class="mt-3 pb-5 title-text-color">-RunCheck-</h2>
			<v-row class="align-center justify-center pt-5 mt-5 flex-wrap">
				<v-col cols=12 sm=12 md=1></v-col>
				<v-col cols=10 class="text-center">
					<v-row class="align-center justify-center pt-5 mt-5 flex-wrap">
						<v-col cols=12 md="4" class="text-right">
							<v-avatar size="auto" max-width="100%">
								<v-img src="/img/avatar.png"></v-img>
							</v-avatar>
						</v-col>
						<v-col cols=12 md="8">
							<div class="talk">
								<p class="text-left main-text-color">
									あなたのランニング力をチェックしましょう！ランナーに必要な要素を3項目に分けています！直感で選べ、5分程度で終わるよう問題を作成しました！採点後、間違えた場所の解説記事・おすすめ記事を読み、弱点を克服してレベルアップしていきましょう！
								</p>
							</div>
						</v-col>
					</v-row>
					<v-row class="square-box align-center justify-center pt-5 mt-5 mx-0">
						<v-col cols=12>
							<h2 class="main-color">あなたのフルマラソンのタイムを教えてください。</h2>
						</v-col>
						<v-row class="justify-center align-center">
							<v-col cols="7" md="2">
								<v-select
									rounded
									:items="times"
									filled
									v-model="fullTime"
								></v-select>
							</v-col>
							<v-col cols=4 md="2" class="text-left">
								<h2 class="text-h4 main-color pb-3">時間</h2>
							</v-col>
							<v-col cols=7 md="3">
								<v-select
									rounded
									:items="minutes"
									filled
									v-model="fullMinute"
								></v-select>
							</v-col>
							<v-col cols=4 md="2" class="text-left">
								<h2 class="text-h4 main-color pb-3">分</h2>
							</v-col>
						</v-row>
					</v-row>
					<v-row class="square-box align-center justify-center pt-5 mt-5 mx-0">
						<v-col cols=12>
							<h2 class="main-color">あなたのハーフマラソンのタイムを教えてください。</h2>
						</v-col>
						<v-row class="justify-center align-center">
							<v-col cols=7 md="2">
								<v-select
									rounded
									:items="halfTimes"
									filled
									v-model="halfTime"
								></v-select>
							</v-col>
							<v-col cols=4 md="2" class="text-left">
								<h2 class="text-h4 main-color pb-3">時間</h2>
							</v-col>
							<v-col cols=7 md="3">
								<v-select
									rounded
									:items="minutes"
									filled
									v-model="halfMinute"
								></v-select>
							</v-col>
							<v-col cols=4 md="2" class="text-left">
								<h2 class="text-h4 main-color pb-3">分</h2>
							</v-col>
						</v-row>
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
												<v-img :src="src.image" class="text-left pa-2" @click="toggle">
													<v-btn fab>
														<v-icon color="rgba(0, 173, 255, 1)" large>
															{{ active ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
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
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="quiz2selected" active-class="border" color="indigo">
									<v-list-item v-for="(src, m) in quiz2srcs" :key="m">
										<v-list-item-content class="text-left">
											{{src.item}}
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card>
					</v-row>
					<v-row class="align-center justify-center mt-3 mx-0">
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.3 {{quiz3text}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="quiz3selected" active-class="border" color="indigo">
									<v-list-item v-for="(src, r) in quiz3srcs" :key="r">
										<v-list-item-content class="text-left">
											{{src.item}}
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card>
					</v-row>
					<v-row class="align-center justify-center mt-3 mx-0">
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.4 {{quiz4text}}</h3>
						</v-col>
						<v-card width="750" >
							<v-container class="pa-1">
								<v-item-group v-model="quiz4selected" multiple>
									<v-row>
										<v-col v-for="(src, j) in quiz4srcs" :key="j" cols="12" md="6">
											<v-item v-slot="{ active, toggle }">
												<v-img :src="src.image" class="text-left pa-2" @click="toggle">
													<v-btn fab>
														<v-icon color="rgba(0, 173, 255, 1)" large>
															{{ active ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
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
							<h3 class="main-color text-h5">Q.5 {{quiz5text}}</h3>
						</v-col>
						<v-card width="750" >
							<v-container class="pa-1">
								<v-item-group v-model="quiz5selected" >
									<v-row>
										<v-col v-for="(src, n) in quiz5srcs" :key="n" cols="12" md="6">
											<v-item v-slot="{ active, toggle }">
												<v-img :src="src.image" class="text-left pa-2" @click="toggle">
													<v-btn fab>
														<v-icon color="rgba(0, 173, 255, 1)" large>
															{{ active ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
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
							<h3 class="main-color text-h5">Q.6 {{quiz6text}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="quiz6selected" active-class="border" color="indigo">
									<v-list-item v-for="(src, s) in quiz6srcs" :key="s">
										<v-list-item-content class="text-left">
											{{src.item}}
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card>
					</v-row>
					<v-row class="align-center justify-center mt-3 mx-0">
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.7 {{quiz7text}}</h3>
						</v-col>
						<v-card width="750" >
							<v-container class="pa-1">
								<v-item-group v-model="quiz7selected" >
									<v-row>
										<v-col v-for="(src, k) in quiz7srcs" :key="k" cols="12" md="6" >
											<v-item v-slot="{ active, toggle }">
												<v-img :src="src.image" class="text-left pa-2" @click="toggle">
													<v-btn fab>
														<v-icon color="rgba(0, 173, 255, 1)" large>
															{{ active ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
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
								<v-item-group v-model="quiz8selected" multiple>
									<v-row>
										<v-col v-for="(src, p) in quiz8srcs" :key="p" cols="12" md="6">
											<v-item v-slot="{ active, toggle }">
												<v-img :src="src.image" class="text-left pa-2" @click="toggle">
													<v-btn fab>
														<v-icon color="rgba(0, 173, 255, 1)" large>
															{{ active ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
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
							<h3 class="main-color text-h5">Q.9 {{quiz9text}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="quiz9selected" active-class="border" color="indigo">
									<v-list-item v-for="(src, t) in quiz9srcs" :key="t">
										<v-list-item-content class="text-left">
											{{src.item}}
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
									<v-list-item v-for="(src, l) in quiz10srcs" :key="l">
										<v-list-item-content class="text-left">
											{{src.item}}
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
						<v-card width="750" >
							<v-container class="pa-1">
								<v-item-group v-model="quiz11selected">
									<v-row>
										<v-col v-for="(src, q) in quiz11srcs" :key="q" cols="12" md="6">
											<v-item v-slot="{ active, toggle }">
												<v-img :src="src.image" class="text-left pa-2" @click="toggle">
													<v-btn fab>
														<v-icon color="rgba(0, 173, 255, 1)" large>
															{{ active ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
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
					<v-row v-if="Number(this.fullTime) >= 5 || !this.fullTime" class="align-center justify-center mt-3 mx-0" >
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.12 {{extraquize1}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="extraquize1selected" active-class="border" color="indigo">
									<v-list-item v-for="(extraquize, n) in extraquize1srcs" :key="n">
										<v-list-item-content class="text-left">
											{{extraquize.item}}
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card>
					</v-row>
					<v-row v-else-if="Number(this.fullTime) >= 4" class="align-center justify-center mt-3 mx-0" >
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.12 {{extraquize2}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="extraquize2selected" active-class="border" color="indigo">
									<v-list-item v-for="(extraquize, p) in extraquize2srcs" :key="p">
										<v-list-item-content class="text-left">
											{{extraquize.item}}
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card>
					</v-row>
					<v-row v-else-if="Number(this.fullTime) >= 3 && Number(this.fullMinute) >= 30" class="align-center justify-center mt-3 mx-0" >
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.12 {{extraquize3}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="extraquize3selected" active-class="border" color="indigo">
									<v-list-item v-for="(extraquize, q) in extraquize3srcs" :key="q">
										<v-list-item-content class="text-left">
											{{extraquize.item}}
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card>
					</v-row>
					<v-row v-else class="align-center justify-center mt-3 mx-0" >
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.12 {{extraquize4}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="extraquize4selected" active-class="border" color="indigo">
									<v-list-item v-for="(extraquize, r) in extraquize4srcs" :key="r">
										<v-list-item-content class="text-left">
											{{extraquize.item}}
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
		errorText:"",
		snackBar:false,
		fullTime:null,
		fullMinute:null,
		halfTime:null,
		halfMinute:null,
		typeNum:0,
		items: ['1', '2', '3', '4', '5', '6','7'],
        halfTimes:['1','2','3'],
        times: ['1', '2', '3', '4', '5', '6','7'],
		minutes:[],
		quiz1category:"フォーム・技術",
		quiz1text:"腰の落ちたフォームを選んでください",
		quiz1srcs:[
			{checked:false,score:0,image:"/img/check/f_1-1.jpg"},
			{checked:false,score:3,image:"/img/check/f_1-2.jpg"},
			{checked:false,score:6,image:"/img/check/f_1-3.jpg"},
			{checked:false,score:1,image:"/img/check/f_1-4.jpg"},
		],
		quiz1selected:[],

		quiz2category:"体に関すること",
		quiz2text:"フルマラソンを走るペースは、どの程度の速度が良いか選んでください",
		quiz2srcs:[
			{checked:false,score:2,item:"全く辛くなくしゃべられる速度"},
			{checked:false,score:0,item:"息が上がりかなりつらいと思う速度"},
			{checked:false,score:6,item:"息が軽く上がるが余裕のある速度"},
			{checked:false,score:2,item:"息が上がり余裕の無い速度"},
		],
		quiz2selected:[],

		quiz3category:"目標計画",
		quiz3text:"練習の目的として「適切ではないもの」を選んでください",
		quiz3srcs:[
			{checked:false,score:1,item:"ロングジョグ-毛細血管を増やし、脚の耐久性強化"},
			{checked:false,score:1,item:"インターバル走-疲労物質(乳酸)を除去する能力を高める"},
			{checked:false,score:1,item:"全力走-脚の回転数・ストライド向上で最大速度を高める"},
			{checked:false,score:6,item:"ペース走-呼吸循環を高めて疲労回復"},
		],
		quiz3selected:[],

		quiz4category:"フォーム・技術",
		quiz4text:"着地位置として「正しいもの」を「2つ」選んでください",
		quiz4srcs:[
			{checked:false,score:0,image:"/img/check/f_2-1.jpg"},
			{checked:false,score:3,image:"/img/check/f_2-2.jpg"},
			{checked:false,score:3,image:"/img/check/f_2-3.jpg"},
			{checked:false,score:1,image:"/img/check/f_2-4.jpg"},
		],
		quiz4selected:[],

		quiz5category:"体に関すること",
		quiz5text:"伸ばしたい筋肉とストレッチ方法の組み合わせとして「間違っているもの」はどれか選んでください",
		quiz5srcs:[
			{checked:false,score:6,image:"/img/check/t_2-1.jpg"},
			{checked:false,score:0,image:"/img/check/t_2-2.jpg"},
			{checked:false,score:0,image:"/img/check/t_2-3.jpg"},
			{checked:false,score:0,image:"/img/check/t_2-4.jpg"},
		],
		quiz5selected:[],

		quiz6category:"目標計画",
		quiz6text:"ランニングにおいて練習方法として適しているものを選んでください!",
		quiz6srcs:[
			{checked:false,score:6,item:"全力走では、休憩を長く取って行う。"},
			{checked:false,score:1,item:"インターバル走は休憩を長く取って行う練習として適している"},
			{checked:false,score:1,item:"ペース走を行うときは息が上がらない速度で行う"},
			{checked:false,score:0,item:"ロングジョグは息が上がる程度の速度を維持し続けないと効果は小さい"},
		],
		quiz6selected:[],

		quiz7category:"フォーム・技術",
		quiz7text:"腰の落ちたフォームを改善するために「効果の低いもの」を選んでください",
		quiz7srcs:[
			{checked:false,score:2,image:"/img/check/f_3-1.jpg"},
			{checked:false,score:2,image:"/img/check/f_3-2.jpg"},
			{checked:false,score:2,image:"/img/check/f_3-3.jpg"},
			{checked:false,score:6,image:"/img/check/f_3-4.jpg"},
		],
		quiz7selected:[],

		quiz8category:"体に関すること",
		quiz8text:"ランニング前後の食事摂取の方法として「適切ではない」組み合わせのものを「2つ」選んでください",
		quiz8srcs:[
			{checked:false,score:3,image:"/img/check/t_3-1.jpg"},
			{checked:false,score:3,image:"/img/check/t_3-2.jpg"},
			{checked:false,score:1,image:"/img/check/t_3-3.jpg"},
			{checked:false,score:1,image:"/img/check/t_3-4.jpg"},
		],
		quiz8selected:[],

		quiz9category:"目標計画",
		quiz9text:"課題に合わせた練習内容として適したものを選んでください!",
		quiz9srcs:[
			{checked:false,score:1,item:"1km走のタイムが上がらない-ペース走"},
			{checked:false,score:2,item:"5km走の途中で疲労で脚が動かない感覚がある-短い距離の全力走"},
			{checked:false,score:2,item:"10km走のタイムが上がらない-インターバル走"},
			{checked:false,score:6,item:"30km以降いつも歩いてしまう-ロングジョグ"},
		],
		quiz9selected:[],

		quiz10category:"フォーム・技術",
		quiz10text:"ご自身でペースをコントロールできますか？",
		quiz10srcs:[
			{checked:false,score:2,item:"普段タイムの計測を行っていない"},
			{checked:false,score:6,item:"1kmあたり5秒以内のふり幅でコントロールできる"},
			{checked:false,score:3,item:"1kmあたり10秒以内のふり幅でコントロールできる"},
			{checked:false,score:2,item:"1kmあたり11秒以上タイムが変動する"},
		],
		quiz10selected:[],

		quiz11category:"体に関すること",
		quiz11text:"クールダウン・セルフケアの方法と効果で組み合わせが「間違っているもの」を選んでください",
		quiz11srcs:[
			{checked:false,score:6,image:"/img/check/t_4-1.jpg"},
			{checked:false,score:3,image:"/img/check/t_4-2.jpg"},
			{checked:false,score:0,image:"/img/check/t_4-3.jpg"},
			{checked:false,score:1,image:"/img/check/t_4-4.jpg"},
		],
		quiz11selected:[],

		quiz12category:"目標計画",
		quiz12text:"フルマラソンを○○切りするための設定タイムとしてものとして「適切ではないもの」を選んでください ※あなたのベストタイムに合わせて問 題文が変わるようになっています!あなたのレベルに沿った答えをお選びください!",
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

		extraquize2:"フルマラソンを4時間切りするための設定タイムとしてものとして「適切ではないもの」を選んでください",
		extraquize2srcs:[
			{checked:false,score:0,item:"1km 4分40秒"},
			{checked:false,score:0,item:"5km 25分"},
			{checked:false,score:0,item:"10km 45分"},
			{checked:false,score:6,item:"ハーフ 1時間51分~52分"},
		],
		extraquize2point:0,
		extraquize2selected:[],

		extraquize3:"フルマラソンを3時間30分切りするための設定タイムとしてものとして「適切ではないもの」を選んでください",
		extraquize3srcs:[
			{checked:false,score:0,item:"5km 25分"},
			{checked:false,score:6,item:"5km 21分40秒"},
			{checked:false,score:0,item:"10km 45分"},
			{checked:false,score:0,item:"ハーフ 1時間51分~52分"},
		],
		extraquize3point:0,
		extraquize3selected:[],

		extraquize4:"フルマラソンを3時間切りするための設定タイムとしてものとして「適切ではないもの」を選んでください",
		extraquize4srcs:[
			{checked:false,score:0,item:"1km 3分30秒"},
			{checked:false,score:0,item:"5km 21分40秒"},
			{checked:false,score:6,item:"10km 38分20秒~39分"},
			{checked:false,score:0,item:"ハーフ 1時間22分~25分"},
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

			// if(this.fullTime ==null || this.fullMinute == null){
			// 	errorMessages.push("フルマラソンのタイムが未回答です。")
			// }
			// if(this.halfTime == null || this.halfMinute == null){
			// 	errorMessages.push("ハーフマラソンのタイムが未回答です。")
			// }
			if(this.quiz1selected.length == 0){
				errorMessages.push("Q.1が未回答です。")
			}
			if(this.quiz2selected.length == 0){
				errorMessages.push("Q.2が未回答です。")
			}
			if(this.quiz3selected.length == 0){
				errorMessages.push("Q.3が未回答です。")
			}
			if(this.quiz4selected.length != 2){
				errorMessages.push("Q.4を二つ選択して下さい。")
			}
			if(this.quiz5selected.length == 0){
				errorMessages.push("Q.5が未回答です。")
			}
			if(this.quiz6selected.length == 0){
				errorMessages.push("Q.6が未回答です。")
			}
			if(this.quiz7selected.length == 0){
				errorMessages.push("Q.7が未回答です。")
			}
			if(this.quiz8selected.length != 2){
				errorMessages.push("Q.8を二つ選択して下さい。")
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
			// if(this.quiz12selected.length == 0){
			// 	errorMessages.push("Q.12が未回答です。")
			// }
			if(this.extraquize1selected.length == 0 && this.extraquize2selected.length == 0 && this.extraquize3selected.length == 0 && this.extraquize4selected.length == 0){
				errorMessages.push("Q.12が未回答です。")
			}

			if (errorMessages.length != 0) {
				this.errorText = errorMessages.join('\n');
				this.snackBar = true;
				// alert(errorMessages.join('\n'));
				return false;
			}else{
				this.$store.dispatch('setSelectAnswers',{no:'1',answer:this.quiz1selected})
				this.$store.dispatch('setSelectAnswers',{no:'2',answer:this.quiz2selected})
				this.$store.dispatch('setSelectAnswers',{no:'3',answer:this.quiz3selected})
				this.$store.dispatch('setSelectAnswers',{no:'4',answer:this.quiz4selected})
				this.$store.dispatch('setSelectAnswers',{no:'5',answer:this.quiz5selected})
				this.$store.dispatch('setSelectAnswers',{no:'6',answer:this.quiz6selected})
				this.$store.dispatch('setSelectAnswers',{no:'7',answer:this.quiz7selected})
				this.$store.dispatch('setSelectAnswers',{no:'8',answer:this.quiz8selected})
				this.$store.dispatch('setSelectAnswers',{no:'9',answer:this.quiz9selected})
				this.$store.dispatch('setSelectAnswers',{no:'10',answer:this.quiz10selected})
				this.$store.dispatch('setSelectAnswers',{no:'11',answer:this.quiz11selected})
			 	this.toatlFormandTec = Number(this.quiz1srcs[this.quiz1selected].score)+ Number(this.quiz4srcs[this.quiz4selected[0]].score) + Number(this.quiz4srcs[this.quiz4selected[1]].score)  + Number(this.quiz7srcs[this.quiz7selected].score) + + Number(this.quiz10srcs[this.quiz10selected].score)
			 	this.totalBody = Number(this.quiz2srcs[this.quiz2selected].score) + Number(this.quiz5srcs[this.quiz5selected].score) + Number(this.quiz8srcs[this.quiz8selected[0]].score) + Number(this.quiz8srcs[this.quiz8selected[1]].score) + Number(this.quiz11srcs[this.quiz11selected].score) 
				if(this.extraquize1selected.length != 0	){
					this.$store.dispatch('setSelectAnswers',{no:'12',answer:this.extraquize1selected})
					this.totalPurpose = Number(this.quiz3srcs[this.quiz3selected].score) + Number(this.quiz6srcs[this.quiz6selected].score) + Number(this.quiz9srcs[this.quiz9selected].score) + Number(this.extraquize1srcs[this.extraquize1selected].score)
				}else if(this.extraquize2selected.length != 0){
					this.$store.dispatch('setSelectAnswers',{no:'12',answer:this.extraquize2selected})
					this.totalPurpose = Number(this.quiz3srcs[this.quiz3selected].score) + Number(this.quiz6srcs[this.quiz6selected].score) + Number(this.quiz9srcs[this.quiz9selected].score) + Number(this.extraquize2srcs[this.extraquize2selected].score)
				}else if(this.extraquize3selected.length != 0){
					this.$store.dispatch('setSelectAnswers',{no:'12',answer:this.extraquize3selected})
					this.totalPurpose = Number(this.quiz3srcs[this.quiz3selected].score) + Number(this.quiz6srcs[this.quiz6selected].score) + Number(this.quiz9srcs[this.quiz9selected].score) + Number(this.extraquize3srcs[this.extraquize3selected].score)
				}else{
					this.$store.dispatch('setSelectAnswers',{no:'12',answer:this.extraquize4selected})
					this.totalPurpose = Number(this.quiz3srcs[this.quiz3selected].score) + Number(this.quiz6srcs[this.quiz6selected].score) + Number(this.quiz9srcs[this.quiz9selected].score) + Number(this.extraquize4srcs[this.extraquize4selected].score)
				}
				this.typeNum = (Number(this.fullTime * 60) + Number(this.fullMinute)) / (Number(this.halfTime * 60) + Number(this.halfMinute))
				this.$router.push({ path: 'result' , query :{ toatlFormandTec: this.toatlFormandTec, totalBody: this.totalBody, totalPurpose: this.totalPurpose,  typeNum: this.typeNum, fullTime: this.fullTime, fullMinute: this.fullMinute}});
				
				
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
	},
	
	head () {
		return {
		title: "ランニング力チェック",
		meta: [
			// { hid: 'description', name: 'description', content: this.seoDescription },
			{ hid: 'og:type', property: 'og:type', content: "article" },
			{ hid: 'og:title', property: 'og:title', content: "ランニング力チェック" },
			// { hid: 'og:description', property: 'og:description', content: this.seoDescription },
			{ hid: 'og:url', property: 'og:url', content: `https://runtore.netlify.app/running` },
			// { hid: 'og:image', property: 'og:image', content: this.headerImg ? this.headerImg.url : "" },
		],
		}
	},
		
  
	
	
}
</script>