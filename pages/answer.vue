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
								<v-item-group v-model="quiz1userselected" multiple>
									<v-row>
										<v-col v-for="(src, j) in quiz1srcs" :key="j" cols="12" md="6" >
											<v-item v-slot="{ active, toggle }" v-bind:class="{borderRed: j==quiz1selected}"> 
												<v-img :src="src.image" class="text-left pa-2" @click="toggle" style="pointer-events: none;">
													<v-btn fab >
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
								 <v-list-item-group v-model="quiz2selected" multiple>
									<template v-for="(src, k) in quiz2srcs">
									<v-divider v-if="!src" :key="`divider-${k}`"></v-divider>
									<v-list-item v-else :key="`src-${k}`" :value="src" :class="classList(2,k)" :disabled="true">
										<v-list-item-content class="text-left">
											<v-list-item-title v-text="src.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									</template>
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
								 <v-list-item-group v-model="quiz3selected" multiple>
									<template v-for="(src, m) in quiz3srcs">
									<v-divider v-if="!src" :key="`divider-${m}`"></v-divider>
									<v-list-item v-else :key="`src-${m}`" :value="src" :class="classList(3,m)" :disabled="true">
										<v-list-item-content class="text-left" >
											<v-list-item-title v-text="src.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									</template>
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
								<v-item-group v-model="quiz4userselected" multiple>
									<v-row>
										<v-col v-for="(src, n) in quiz4srcs" :key="n" cols="12" md="6" >
											<v-item v-slot="{ active, toggle }" v-bind:class="{borderRed: n==quiz4selected[0] || n==quiz4selected[1]}"> 
												<v-img :src="src.image" class="text-left pa-2" @click="toggle" style="pointer-events: none;">
													<v-btn fab >
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
								<v-item-group v-model="quiz5userselected" multiple>
									<v-row>
										<v-col v-for="(src, p) in quiz5srcs" :key="p" cols="12" md="6" >
											<v-item v-slot="{ active, toggle }" v-bind:class="{borderRed: p==quiz5selected}"> 
												<v-img :src="src.image" class="text-left pa-2" @click="toggle" style="pointer-events: none;">
													<v-btn fab >
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
								 <v-list-item-group v-model="quiz6selected" multiple>
									<template v-for="(src, q) in quiz6srcs">
									<v-divider v-if="!src" :key="`divider-${q}`"></v-divider>
									<v-list-item v-else :key="`src-${q}`" :value="src" :class="classList(6,q)" :disabled="true">
										<v-list-item-content class="text-left" >
											<v-list-item-title v-text="src.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									</template>
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
								<v-item-group v-model="quiz7userselected" multiple>
									<v-row>
										<v-col v-for="(src, r) in quiz7srcs" :key="r" cols="12" md="6" >
											<v-item v-slot="{ active, toggle }" v-bind:class="{borderRed: r==quiz7selected}"> 
												<v-img :src="src.image" class="text-left pa-2" @click="toggle" style="pointer-events: none;">
													<v-btn fab >
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
								<v-item-group v-model="quiz8userselected" multiple>
									<v-row>
										<v-col v-for="(src, s) in quiz8srcs" :key="s" cols="12" md="6" >
											<v-item v-slot="{ active, toggle }" v-bind:class="{borderRed: s==quiz8selected[0] || s==quiz8selected[1]}"> 
												<v-img :src="src.image" class="text-left pa-2" @click="toggle" style="pointer-events: none;">
													<v-btn fab >
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
								 <v-list-item-group v-model="quiz9selected" multiple>
									<template v-for="(src, t) in quiz9srcs">
									<v-divider v-if="!src" :key="`divider-${t}`"></v-divider>
									<v-list-item v-else :key="`src-${t}`" :value="src" :class="classList(9,t)" :disabled="true">
										<v-list-item-content class="text-left" >
											<v-list-item-title v-text="src.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									</template>
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
								 <v-list-item-group v-model="quiz10selected" multiple>
									<template v-for="(src, u) in quiz10srcs">
									<v-divider v-if="!src" :key="`divider-${u}`"></v-divider>
									<v-list-item v-else :key="`src-${u}`" :value="src" :class="classList(10,u)" :disabled="true">
										<v-list-item-content class="text-left" >
											<v-list-item-title v-text="src.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									</template>
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
								<v-item-group v-model="quiz11userselected" multiple>
									<v-row>
										<v-col v-for="(src, v) in quiz11srcs" :key="v" cols="12" md="6" >
											<v-item v-slot="{ active, toggle }" v-bind:class="{borderRed: v==quiz11selected}"> 
												<v-img :src="src.image" class="text-left pa-2" @click="toggle" style="pointer-events: none;">
													<v-btn fab >
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
								 <v-list-item-group v-model="extraquize1selected" multiple>
									<template v-for="(src, w) in extraquize1srcs">
									<v-divider v-if="!src" :key="`divider-${w}`"></v-divider>
									<v-list-item v-else :key="`src-${w}`" :value="src" :class="classList(11,w)" :disabled="true">
										<v-list-item-content class="text-left" >
											<v-list-item-title v-text="src.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									</template>
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
								 <v-list-item-group v-model="extraquize2selected" multiple>
									<template v-for="(src, w) in extraquize2srcs">
									<v-divider v-if="!src" :key="`divider-${w}`"></v-divider>
									<v-list-item v-else :key="`src-${w}`" :value="src" :class="classList(12,w)" :disabled="true">
										<v-list-item-content class="text-left" >
											<v-list-item-title v-text="src.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									</template>
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
								 <v-list-item-group v-model="extraquize3selected" multiple>
									<template v-for="(src, w) in extraquize3srcs">
									<v-divider v-if="!src" :key="`divider-${w}`"></v-divider>
									<v-list-item v-else :key="`src-${w}`" :value="src" :class="classList(13,w)" :disabled="true">
										<v-list-item-content class="text-left" >
											<v-list-item-title v-text="src.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									</template>
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
								 <v-list-item-group v-model="extraquize4selected" multiple>
									<template v-for="(src, w) in extraquize4srcs">
									<v-divider v-if="!src" :key="`divider-${w}`"></v-divider>
									<v-list-item v-else :key="`src-${w}`" :value="src" :class="classList(14,w)" :disabled="true">
										<v-list-item-content class="text-left" >
											<v-list-item-title v-text="src.item"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									</template>
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
		userAnswers:[],
		typeNum:0,
		items: ['1', '2', '3', '4', '5', '6','7'],
        halfTimes:['1','2','3'],
        times: ['1', '2', '3', '4', '5', '6','7'],
		minutes:[],
		quiz1category:"フォーム・技術",
		quiz1text:"腰の落ちたフォームを選んでください",
		quiz1srcs:[
			{checked:false,score:0,image:"/img/check/f_1-1.jpg"},
			{checked:false,score:2,image:"/img/check/f_1-2.jpg"},
			{checked:false,score:6,image:"/img/check/f_1-3.jpg"},
			{checked:false,score:0,image:"/img/check/f_1-4.jpg"},
		],
		quiz1selected:[2],
		quiz1userselected:[],

		quiz2category:"体に関すること",
		quiz2text:"フルマラソンを走るペースは、どの程度の速度が良いか選んでください",
		quiz2srcs:[
			{checked:false,score:2,item:"全く辛くなくしゃべられる速度"},
			{checked:false,score:0,item:"息が上がりかなりつらいと思う速度"},
			{checked:false,score:6,item:"息が軽く上がるが余裕のある速度"},
			{checked:false,score:2,item:"息が上がり余裕の無い速度"},
		],
		quiz2selected:2,
		quiz2userselected:0,

		quiz3category:"目標計画",
		quiz3text:"練習の目的として「適切ではないもの」を選んでください",
		quiz3srcs:[
			{checked:false,score:2,item:"ロングジョグ-毛細血管を増やし、脚の耐久性強化"},
			{checked:false,score:2,item:"インターバル走-疲労物質(乳酸)を除去する能力を高める"},
			{checked:false,score:2,item:"全力走-脚の回転数・ストライド向上で最大速度を高める"},
			{checked:false,score:6,item:"ペース走-呼吸循環を高めて疲労回復"},
		],
		quiz3selected:3,
		quiz3userselected:0,

		quiz4category:"フォーム・技術",
		quiz4text:"着地位置として「正しいもの」を「2つ」選んでください",
		quiz4srcs:[
			{checked:false,score:0,image:"/img/check/f_2-1.jpg"},
			{checked:false,score:3,image:"/img/check/f_2-2.jpg"},
			{checked:false,score:3,image:"/img/check/f_2-3.jpg"},
			{checked:false,score:0,image:"/img/check/f_2-4.jpg"},
		],
		quiz4selected:[1,2],
		quiz4userselected:[],

		quiz5category:"体に関すること",
		quiz5text:"伸ばしたい筋肉とストレッチ方法の組み合わせとして「間違っているもの」はどれか選んでください",
		quiz5srcs:[
			{checked:false,score:6,image:"/img/check/t_2-1.jpg"},
			{checked:false,score:0,image:"/img/check/t_2-2.jpg"},
			{checked:false,score:0,image:"/img/check/t_2-3.jpg"},
			{checked:false,score:0,image:"/img/check/t_2-4.jpg"},
		],
		quiz5selected:0,
		quiz5userselected:[],

		quiz6category:"目標計画",
		quiz6text:"ランニングにおいて練習方法として適しているものを選んでください!",
		quiz6srcs:[
			{checked:false,score:6,item:"全力走では、休憩を長く取って行う。"},
			{checked:false,score:2,item:"インターバル走は休憩を長く取って行う練習として適している"},
			{checked:false,score:2,item:"ペース走を行うときは息が上がらない速度で行う"},
			{checked:false,score:0,item:"ロングジョグは息が上がる程度の速度を維持し続けないと効果は小さい"},
		],
		quiz6selected:0,
		quiz6userselected:0,

		quiz7category:"フォーム・技術",
		quiz7text:"腰の落ちたフォームを改善するために「効果の低いもの」を選んでください",
		quiz7srcs:[
			{checked:false,score:2,image:"/img/check/f_3-1.jpg"},
			{checked:false,score:2,image:"/img/check/f_3-2.jpg"},
			{checked:false,score:2,image:"/img/check/f_3-3.jpg"},
			{checked:false,score:6,image:"/img/check/f_3-4.jpg"},
		],
		quiz7selected:3,
		quiz7userselected:[],

		quiz8category:"体に関すること",
		quiz8text:"ランニング前後の食事摂取の方法として「適切ではない」組み合わせのものを「2つ」選んでください",
		quiz8srcs:[
			{checked:false,score:3,image:"/img/check/t_3-1.jpg"},
			{checked:false,score:3,image:"/img/check/t_3-2.jpg"},
			{checked:false,score:1,image:"/img/check/t_3-3.jpg"},
			{checked:false,score:1,image:"/img/check/t_3-4.jpg"},
		],
		quiz8selected:[0,1],
		quiz8userselected:[],

		quiz9category:"目標計画",
		quiz9text:"課題に合わせた練習内容として適したものを選んでください!",
		quiz9srcs:[
			{checked:false,score:2,item:"1km走のタイムが上がらない-ペース走"},
			{checked:false,score:2,item:"5km走の途中で疲労で脚が動かない感覚がある-短い距離の全力走"},
			{checked:false,score:2,item:"10km走のタイムが上がらない-インターバル走"},
			{checked:false,score:6,item:"30km以降いつも歩いてしまう-ロングジョグ"},
		],
		quiz9selected:3,
		quiz9userselected:0,

		quiz10category:"フォーム・技術",
		quiz10text:"ご自身でペースをコントロールできますか？",
		quiz10srcs:[
			{checked:false,score:1,item:"普段タイムの計測を行っていない"},
			{checked:false,score:6,item:"1kmあたり5秒以内のふり幅でコントロールできる"},
			{checked:false,score:2,item:"1kmあたり10秒以内のふり幅でコントロールできる"},
			{checked:false,score:1,item:"1kmあたり11秒以上タイムが変動する"},
		],
		quiz10selected:1,
		quiz10userselected:0,

		quiz11category:"体に関すること",
		quiz11text:"クールダウン・セルフケアの方法と効果で組み合わせが「間違っているもの」を選んでください",
		quiz11srcs:[
			{checked:false,score:2,image:"/img/check/t_4-1.jpg"},
			{checked:false,score:3,image:"/img/check/t_4-2.jpg"},
			{checked:false,score:2,image:"/img/check/t_4-3.jpg"},
			{checked:false,score:6,image:"/img/check/t_4-4.jpg"},
		],
		quiz11selected:3,
		quiz11userselected:[],

		quiz12category:"目標計画",
		quiz12text:"フルマラソンを○○切りするための設定タイムとしてものとして「適切ではないもの」を選んでください ※あなたのベストタイムに合わせて問 題文が変わるようになっています!あなたのレベルに沿った答えをお選びください!",
		quiz12srcs:[
			{checked:false,score:6,item:"1kmを○○で走ることができる"},
			{checked:false,score:3,item:"5kmを○○で走ることができる"},
			{checked:false,score:0,item:"10kmを○○で走ることができる"},
			{checked:false,score:1,item:"ハーフを○○で走ることができる"},
		],
		quiz12selected:0,
		quiz12userselected:0,

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
			{checked:false,score:6,item:"10km 45分"},
			{checked:false,score:0,item:"ハーフ 51分~52分"},
		],
		extraquize2point:0,
		extraquize2selected:2,

		extraquize3:"フルマラソンを3時間30分切りするために 適切な内容をお選びください",
		extraquize3srcs:[
			{checked:false,score:0,item:"5km 25分"},
			{checked:false,score:0,item:"5km 21分40秒"},
			{checked:false,score:0,item:"10km 45分"},
			{checked:false,score:6,item:"ハーフ 51分~52分"},
		],
		extraquize3point:3,
		extraquize3selected:3,

		extraquize4:"フルマラソンを3時間切りするために 適切な内容をお選びください",
		extraquize4srcs:[
			{checked:false,score:0,item:"1km 3分30秒"},
			{checked:false,score:6,item:"5km 21分40秒"},
			{checked:false,score:0,item:"10km 38分20秒~39分"},
			{checked:false,score:0,item:"ハーフ 22分~25分"},
		],
		extraquize4point:0,
		extraquize4selected:1,

		toatlFormandTec:0,
		totalBody:0,
		totalPurpose:0
		
	}),

	mounted: async function(){
        this.fullTime = this.$route.query.fullTime
		this.fullMinute = this.$route.query.fullMinute
		
		console.log(this.$store.getters.selectAnswers)
		//console.log(this.$store.getters.selectAnswers[0].answer)
        for (let i=0; i<this.$store.getters.selectAnswers.length;i++){
			//this.$set(this.quiz5userselected, 0, this.$store.state.selectAnswer[i].answer);
			if(i==0){
				this.quiz1userselected.push(this.$store.getters.selectAnswers[i].answer)
			}else if(i==1){
				this.quiz2userselected = this.$store.getters.selectAnswers[i].answer
			}else if(i==2){
				this.quiz3userselected = this.$store.getters.selectAnswers[i].answer
			}else if(i==3){
				for (let j=0; j<this.$store.getters.selectAnswers[i].answer.length;j++){
					//this.quiz4userselected.push(this.$store.getters.selectAnswers[i].answer[j])
					this.$set(this.quiz4userselected, j, this.$store.getters.selectAnswers[i].answer[j]);
				}
				console.log(this.quiz4userselected)
			}else if(i==4){
				this.quiz5userselected.push(this.$store.getters.selectAnswers[i].answer)
			}else if(i==5){
				this.quiz6userselected = this.$store.getters.selectAnswers[i].answer
			}else if(i==6){
				this.quiz7userselected.push(this.$store.getters.selectAnswers[i].answer)
			}else if(i==7){
				for (let j=0; j<this.$store.getters.selectAnswers[i].answer.length;j++){
					this.quiz8userselected.push(this.$store.getters.selectAnswers[i].answer[j])
				}
			}else if(i==8){
				this.quiz9userselected = this.$store.getters.selectAnswers[i].answer
			}else if(i==9){
				this.quiz10userselected = this.$store.getters.selectAnswers[i].answer
			}else if(i==10){
				this.quiz11userselected.push(this.$store.getters.selectAnswers[i].answer)
			}else if(i==11){
				this.quiz12userselected = this.$store.getters.selectAnswers[i].answer
			}
		}
		
		//console.log(this.userAnswers)
        
	},

	methods:{
	},

	computed: {
		classList: function () {
			return function(no,item) {
				let classList = []
				if(no===2){
					if (item===2) {
						classList.push('boxshadow')
					}if(item===this.quiz2userselected){
						classList.push('border')
					}
				}
				if(no===3){
					if (item===3) {
						classList.push('boxshadow')
					}
					if(item===this.quiz3userselected){
						classList.push('border')
					}
				}
				if(no===6){
					if (item===0) {
						classList.push('boxshadow')
					}
					if(item===this.quiz6userselected){
						classList.push('border')
					}
				}
				if(no===9){
					if (item===3) {
						classList.push('boxshadow')
					}
					if(item===this.quiz9userselected){
						classList.push('border')
					}
				}
				if(no===10){
					if (item===1) {
						classList.push('boxshadow')
					}
					if(item===this.quiz10userselected){
						classList.push('border')
					}
				}
				if(no===11){
					if (item===2) {
						classList.push('boxshadow')
					}
					if(item===this.quiz12userselected){
						classList.push('border')
					}
				}
				if(no===12){
					if (item===2) {
						classList.push('boxshadow')
					}
					if(item===this.quiz12userselected){
						classList.push('border')
					}
				}
				if(no===13){
					if (item===3) {
						classList.push('boxshadow')
					}
					if(item===this.quiz12userselected){
						classList.push('border')
					}
				}
				if(no===14){
					if (item===1) {
						classList.push('boxshadow')
					}
					if(item===this.quiz12userselected){
						classList.push('border')
					}
				}
				return classList
			}
		},	
    }
		
  
	
	
}
</script>