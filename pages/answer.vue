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
			<h1 class="text-h3 mt-5 title-text-color">回答</h1>
			<h2 class="mt-3  title-text-color">-Answer-</h2>
			<v-row class="align-center justify-center   flex-wrap">
				<v-col cols=12 sm=12 md=1></v-col>
				<v-col cols=10 class="text-center">
					
					<v-row class="align-center justify-center mt-3 mx-0">
						<v-col cols="12" class="text-left">
							<h3 class="main-color text-h5">Q.1 {{quiz1text}}</h3>
						</v-col>
						<v-card width="750" >
							<v-container class="pa-1">
								<v-item-group v-model="quiz1selected" multiple active-class="border-red" >
									<v-row>
										<v-col v-for="(src, j) in quiz1srcs" :key="j" cols="12" md="6">
											<v-item v-slot="{ active, toggle }">
												<v-img :src="src.image" class="text-left pa-2" @click="toggle" style="pointer-events: none;">
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
							<h3 class="main-color text-h5">Q.2 {{quiz5text}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="quiz5selected" active-class="border-red" color="indigo">
									<v-list-item v-for="(src, m) in quiz5srcs" :key="m" :disabled="true">
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
							<h3 class="main-color text-h5">Q.3 {{quiz9text}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="quiz9selected" active-class="border-red" color="indigo">
									<v-list-item v-for="(src, r) in quiz9srcs" :key="r" :disabled="true">
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
							<h3 class="main-color text-h5">Q.4 {{quiz2text}}</h3>
						</v-col>
						<v-card width="750" >
							<v-container class="pa-1">
								<v-item-group v-model="quiz2selected" multiple active-class="border-red" >
									<v-row>
										<v-col v-for="(src, j) in quiz2srcs" :key="j" cols="12" md="6">
											<v-item v-slot="{ active, toggle }" >
												<v-img :src="src.image" class="text-left pa-2" @click="toggle" style="pointer-events: none;">
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
							<h3 class="main-color text-h5">Q.5 {{quiz6text}}</h3>
						</v-col>
						<v-card width="750" >
							<v-container class="pa-1">
								<v-item-group v-model="quiz6selected" active-class="border-red">
									<v-row>
										<v-col v-for="(src, n) in quiz6srcs" :key="n" cols="12" md="6">
											<v-item v-slot="{ active, toggle }">
												<v-img :src="src.image" class="text-left pa-2" @click="toggle" style="pointer-events: none;">
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
							<h3 class="main-color text-h5">Q.10 {{quiz10text}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="quiz10selected" active-class="border-red" color="indigo">
									<v-list-item v-for="(src, s) in quiz10srcs" :key="s" :disabled="true">
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
							<h3 class="main-color text-h5">Q.7 {{quiz3text}}</h3>
						</v-col>
						<v-card width="750" >
							<v-container class="pa-1">
								<v-item-group v-model="quiz3selected" active-class="border-red">
									<v-row>
										<v-col v-for="(src, k) in quiz3srcs" :key="k" cols="12" md="6" >
											<v-item v-slot="{ active, toggle }">
												<v-img :src="src.image" class="text-left pa-2" @click="toggle" style="pointer-events: none;">
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
							<h3 class="main-color text-h5">Q.8 {{quiz7text}}</h3>
						</v-col>
						<v-card width="750" >
							<v-container class="pa-1">
								<v-item-group v-model="quiz7selected" multiple active-class="border-red">
									<v-row>
										<v-col v-for="(src, p) in quiz7srcs" :key="p" cols="12" md="6">
											<v-item v-slot="{ active, toggle }">
												<v-img :src="src.image" class="text-left pa-2" @click="toggle" style="pointer-events: none;">
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
							<h3 class="main-color text-h5">Q.9 {{quiz11text}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="quiz11selected" active-class="border-red" color="indigo">
									<v-list-item v-for="(src, t) in quiz11srcs" :key="t" :disabled="true">
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
							<h3 class="main-color text-h5">Q.10 {{quiz4text}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="quiz4selected" active-class="border-red" color="indigo">
									<v-list-item v-for="(src, m) in quiz4srcs" :key="m" :disabled="true">
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
							<h3 class="main-color text-h5">Q.11 {{quiz8text}}</h3>
						</v-col>
						<v-card width="750" >
							<v-container class="pa-1">
								<v-item-group v-model="quiz8selected" active-class="border-red">
									<v-row>
										<v-col v-for="(src, q) in quiz8srcs" :key="q" cols="12" md="6">
											<v-item v-slot="{ active, toggle }">
												<v-img :src="src.image" class="text-left pa-2" @click="toggle" style="pointer-events: none;">
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
								<v-list-item-group v-model="extraquize1selected" active-class="border-red" color="indigo">
									<v-list-item v-for="(extraquize, n) in extraquize1srcs" :key="n" :disabled="true">
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
							<h3 class="main-color text-h5">Q.12 {{extraquize2}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="extraquize2selected" active-class="border-red" color="indigo">
									<v-list-item v-for="(extraquize, p) in extraquize2srcs" :key="p" :disabled="true">
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
							<h3 class="main-color text-h5">Q.12 {{extraquize3}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="extraquize3selected" active-class="border-red" color="indigo">
									<v-list-item v-for="(extraquize, q) in extraquize3srcs" :key="q" :disabled="true">
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
							<h3 class="main-color text-h5">Q.12 {{extraquize4}}</h3>
						</v-col>
						<v-card width="750">
							<v-list>
								<v-list-item-group v-model="extraquize4selected" active-class="border-red" color="indigo">
									<v-list-item v-for="(extraquize, r) in extraquize4srcs" :key="r" :disabled="true">
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
			<v-row  class="my-5 align-center justify-center">
				<nuxt-link  to="/" class="black--text px-5 my-5">
					トップに戻る
			　</nuxt-link>
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
			{checked:false,score:6,image:"/img/check/f_1-1.jpg"},
			{checked:false,score:3,image:"/img/check/f_1-2.jpg"},
			{checked:false,score:0,image:"/img/check/f_1-3.jpg"},
			{checked:false,score:1,image:"/img/check/f_1-4.jpg"},
		],
		quiz1selected:[0],

		quiz2category:"フォーム・技術",
		quiz2text:"着地位置として「正しいもの」を「2つ」選んでください",
		quiz2srcs:[
			{checked:false,score:0,image:"/img/check/f_2-1.jpg"},
			{checked:false,score:3,image:"/img/check/f_2-2.jpg"},
			{checked:false,score:3,image:"/img/check/f_2-3.jpg"},
			{checked:false,score:1,image:"/img/check/f_2-4.jpg"},
		],
		quiz2selected:[1,2],

		quiz3category:"フォーム・技術",
		quiz3text:"腰の落ちたフォームを改善するために「効果の低いもの」を選んでください",
		quiz3srcs:[
			{checked:false,score:2,image:"/img/check/f_3-1.jpg"},
			{checked:false,score:2,image:"/img/check/f_3-2.jpg"},
			{checked:false,score:2,image:"/img/check/f_3-3.jpg"},
			{checked:false,score:6,image:"/img/check/f_3-4.jpg"},
		],
		quiz3selected:3,

		quiz4category:"フォーム・技術",
		quiz4text:"ご自身でペースをコントロールできますか？",
		quiz4srcs:[
			{checked:false,score:2,item:"普段タイムの計測を行っていない"},
			{checked:false,score:6,item:"1kmあたり5秒以内のふり幅でコントロールできる"},
			{checked:false,score:3,item:"1kmあたり10秒以内のふり幅でコントロールできる"},
			{checked:false,score:2,item:"1kmあたり11秒以上タイムが変動する"},
		],
		quiz4selected:1,

		quiz5category:"体に関すること",
		quiz5text:"フルマラソンを走るペースは、どの程度の速度が良いか選んでください",
		quiz5srcs:[
			{checked:false,score:2,item:"全く辛くなくしゃべられる速度"},
			{checked:false,score:0,item:"息が上がりかなりつらいと思う速度"},
			{checked:false,score:6,item:"息が軽く上がるが余裕のある速度"},
			{checked:false,score:2,item:"息が上がり余裕の無い速度"},
		],
		quiz5selected:2,

		quiz6category:"体に関すること",
		quiz6text:"伸ばしたい筋肉とストレッチ方法の組み合わせとして「間違っているもの」はどれか選んでください",
		quiz6srcs:[
			{checked:false,score:6,image:"/img/check/t_2-1.jpg"},
			{checked:false,score:0,image:"/img/check/t_2-2.jpg"},
			{checked:false,score:0,image:"/img/check/t_2-3.jpg"},
			{checked:false,score:0,image:"/img/check/t_2-4.jpg"},
		],
		quiz6selected:0,

		quiz7category:"体に関すること",
		quiz7text:"ランニング前後の食事摂取の方法として「適切ではない」組み合わせのものを「2つ」選んでください",
		quiz7srcs:[
			{checked:false,score:3,image:"/img/check/t_3-1.jpg"},
			{checked:false,score:3,image:"/img/check/t_3-2.jpg"},
			{checked:false,score:1,image:"/img/check/t_3-3.jpg"},
			{checked:false,score:1,image:"/img/check/t_3-4.jpg"},
		],
		quiz7selected:[0,1],

		quiz8category:"体に関すること",
		quiz8text:"クールダウン・セルフケアの方法と効果で組み合わせが「間違っているもの」を選んでください",
		quiz8srcs:[
			{checked:false,score:6,image:"/img/check/t_4-1.jpg"},
			{checked:false,score:3,image:"/img/check/t_4-2.jpg"},
			{checked:false,score:0,image:"/img/check/t_4-3.jpg"},
			{checked:false,score:1,image:"/img/check/t_4-4.jpg"},
		],
		quiz8selected:0,

		quiz9category:"目標計画",
		quiz9text:"練習の目的として「適切ではないもの」を選んでください",
		quiz9srcs:[
			{checked:false,score:1,item:"ロングジョグ-毛細血管を増やし、脚の耐久性強化"},
			{checked:false,score:1,item:"インターバル走-疲労物質(乳酸)を除去する能力を高める"},
			{checked:false,score:1,item:"全力走-脚の回転数・ストライド向上で最大速度を高める"},
			{checked:false,score:6,item:"ペース走-呼吸循環を高めて疲労回復"},
		],
		quiz9selected:3,

		quiz10category:"目標計画",
		quiz10text:"ランニングにおいて練習方法として適しているものを選んでください!",
		quiz10srcs:[
			{checked:false,score:6,item:"全力走では、休憩を長く取って行う。"},
			{checked:false,score:1,item:"インターバル走は休憩を長く取って行う練習として適している"},
			{checked:false,score:1,item:"ペース走を行うときは息が上がらない速度で行う"},
			{checked:false,score:0,item:"ロングジョグは息が上がる程度の速度を維持し続けないと効果は小さい"},
		],
		quiz10selected:0,

		quiz11category:"目標計画",
		quiz11text:"課題に合わせた練習内容として適したものを選んでください!",
		quiz11srcs:[
			{checked:false,score:1,item:"1km走のタイムが上がらない-ペース走"},
			{checked:false,score:2,item:"5km走の途中で疲労で脚が動かない感覚 がある-短い距離の全力走"},
			{checked:false,score:2,item:"10km走のタイムが上がらない-インター バル走"},
			{checked:false,score:6,item:"30km以降いつも歩いてしまう-ロング ジョグ"},
		],
		quiz11selected:3,

		quiz12category:"目標計画",
		quiz12text:"フルマラソンを○○切りするための設定タイムとしてものとして「適切ではないもの」を選んでください ※あなたのベストタイムに合わせて問 題文が変わるようになっています!あなたのレベルに沿った答えをお選びください!",
		quiz12srcs:[
			{checked:false,score:6,item:"1kmを○○で走ることができる"},
			{checked:false,score:3,item:"5kmを○○で走ることができる"},
			{checked:false,score:0,item:"10kmを○○で走ることができる"},
			{checked:false,score:1,item:"ハーフを○○で走ることができる"},
		],
		quiz12selected:0,

		extraquize1:"フルマラソンを5時間切りするために 適切な内容をお選びください",
		extraquize1srcs:[
			{checked:false,score:0,item:"10km全力を70分で走れる走力が望ましい"},
			{checked:false,score:0,item:"10km全力を75分で走れる走力が望ましい"},
			{checked:false,score:6,item:"7分/kmで完走すれば5時間を切れる"},
			{checked:false,score:0,item:"8分/kmで完走すれば5時間を切れる"},
		],
		extraquize1point:0,
		extraquize1selected:2,

		extraquize2:"フルマラソンを4時間切りするために 適切な内容をお選びください",
		extraquize2srcs:[
			{checked:false,score:0,item:"1km 4分40秒"},
			{checked:false,score:0,item:"5km 25分"},
			{checked:false,score:0,item:"10km 45分"},
			{checked:false,score:6,item:"ハーフ 51分~52分"},
		],
		extraquize2point:0,
		extraquize2selected:3,

		extraquize3:"フルマラソンを3時間30分切りするために 適切な内容をお選びください",
		extraquize3srcs:[
			{checked:false,score:0,item:"5km 25分"},
			{checked:false,score:6,item:"5km 21分40秒"},
			{checked:false,score:0,item:"10km 45分"},
			{checked:false,score:0,item:"ハーフ 51分~52分"},
		],
		extraquize3point:0,
		extraquize3selected:1,

		extraquize4:"フルマラソンを3時間切りするために 適切な内容をお選びください",
		extraquize4srcs:[
			{checked:false,score:0,item:"1km 3分30秒"},
			{checked:false,score:0,item:"5km 21分40秒"},
			{checked:false,score:6,item:"10km 38分20秒~39分"},
			{checked:false,score:0,item:"ハーフ 22分~25分"},
		],
		extraquize4point:0,
		extraquize4selected:2,

		toatlFormandTec:0,
		totalBody:0,
		totalPurpose:0
		
	}),

	mounted: async function(){
        this.fullTime = this.$route.query.fullTime
		this.fullMinute = this.$route.query.fullMinute
		
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

			if(this.fullTime ==null || this.fullMinute == null){
				errorMessages.push("フルマラソンのタイムが未回答です。")
			}

			if(this.halfTime == null || this.halfMinute == null){
				errorMessages.push("ハーフマラソンのタイムが未回答です。")
			}
			
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
			 	this.toatlFormandTec = Number(this.quiz1srcs[this.quiz1selected].score) + Number(this.quiz2srcs[this.quiz2selected[0]].score) + Number(this.quiz2srcs[this.quiz2selected[1]].score) +　Number(this.quiz3srcs[this.quiz3selected].score) + Number(this.quiz4srcs[this.quiz4selected].score)
			 	this.totalBody = Number(this.quiz5srcs[this.quiz5selected].score) + Number(this.quiz6srcs[this.quiz6selected].score) + Number(this.quiz7srcs[this.quiz7selected[0]].score) + Number(this.quiz7srcs[this.quiz7selected[1]].score) + Number(this.quiz8srcs[this.quiz8selected].score) 
				this.totalPurpose = Number(this.quiz9srcs[this.quiz9selected].score) + Number(this.quiz10srcs[this.quiz10selected].score) + Number(this.quiz11srcs[this.quiz11selected].score) + Number(this.quiz12srcs[this.quiz12selected].score)
				this.typeNum = (Number(this.fullTime * 60) + Number(this.fullMinute)) / (Number(this.halfTime * 60) + Number(this.halfMinute))
				this.$router.push({ path: 'result' , query :{ toatlFormandTec: this.toatlFormandTec, totalBody: this.totalBody, totalPurpose: this.totalPurpose,  typeNum: this.typeNum}});
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