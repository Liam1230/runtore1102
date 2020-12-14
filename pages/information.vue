<template>
	<v-container class="lp-body">
		<v-system-bar height="56" color="#000000e4" fixed>
			<v-row class="d-flex justify-end" no-gutters>
				<div class="d-flex align-center line-green rounded-lg mr-12 overflow-hidden">
					<v-img width="40" contain src="/img/LINE_icon.png"></v-img>
					<div class="ml-1 mr-3 button font-weight-bold white--text">今すぐLINE公式アカウントに登録</div>
				</div>
			</v-row>
		</v-system-bar>
		<v-col no-gutters class="pa-0 text-h3 font-weight-bold" align="center">
			<v-img class="mt-11" width="100%" src="/img/firstview.png"></v-img>
			<div class="mt-12">フォーム改善で自己ベストを</div>
			<div>更新しましょう！</div>
			<div class="mt-12">『LINE』を使ってあなたの</div>
			<div>ランニングフォームを簡単チェック</div>
			<v-row class="mt-8 d-flex justify-center" no-gutters>
				<div class="d-flex align-center line-green rounded-lg mr-12 overflow-hidden pa-0">
					<v-img class="ml-1" width="48" contain src="/img/LINE_icon.png"></v-img>
					<div class="ml-3 mr-8 text-body-1 font-weight-bold white--text">今すぐLINE公式アカウントに登録</div>
				</div>
			</v-row>
			<div class="hr mt-16 info-dark pa-12 pl-16 pr-16 pt-14 white--text justify-center">
				<div style="width:50%;">
					<div class="info-card-1">
						<img class="ml-auto mr-0" width="100%" src="/img/picture_1.png">
					</div>
				</div>
				<v-col class="">
					<v-col class="text-justify text-h5 font-weight-bold">
						<div>理論をもとにあなたの、</div>
						<div>ランニングフォームをチェックします！</div>
					</v-col>
					<v-col class="text-justify text-body-1 font-weight-bold mt-1">
						<div>{{info1}}</div>
					</v-col>
				</v-col>
			</div>
			<div class="hr mt-16 pa-12 pt-14 pl-16 pr-16 black--text justify-center">
				<v-col>
					<v-col class="text-justify text-h5 font-weight-bold">
						<div>実績豊富なプロがチェックします！</div>
					</v-col>
					<v-col class="text-justify text-body-1 font-weight-bold mt-1">
						<div>{{info2}}</div>
					</v-col>
				</v-col>
				<div style="width:50%;">
					<div class="info-card-2">
						<img class="ml-auto mr-0" width="100%" src="/img/picture_2.png">
					</div>
				</div>
			</div>
			<div class="hr mt-16 info-dark pa-12 pt-14 pl-16 pr-16 white--text justify-center">
				<div style="width:50%;">
					<div class="info-card-1">
						<img class="ml-auto mr-0" width="100%" src="/img/picture_3.png">
					</div>
				</div>
				<v-col style="margin-left:auto;margin-right:0">
					<v-col class="text-justify text-h5 font-weight-bold">
						<div>気軽にご相談ください。</div>
					</v-col>
					<v-col class="text-justify text-body-1 font-weight-bold mt-1">
						<div>{{info3}}</div>
					</v-col>
				</v-col>
			</div>
			<v-col style="width:80%;">
				<div class="info-dark mt-6 pa-3 white--text text-h6 font-weight-bold">
					お客様の声
				</div>
				<div class="triangle-under pa-0 ma-0 mb-12"></div>
				<div v-for="(v, i) in voices" class="pa-12 pl-14 pr-14 mt-10 rounded-xl voices text-justify" :key="i">
					<div style="display:flex; align-items:center;">
						<img :src="(v.gender=='male' ? '/img/male.png':'img/female.png')" width="48">
						<div class="ml-4 text-h3" style="color:#404040">{{v.name}}</div>
					</div>
					<img class="mt-4" src="/img/STAR.png" height="20">
					<div class="mt-2 text-body-2" style="line-height:1.7em;">
						{{v.comment}}
					</div>
				</div>
				<div class="info-dark mt-8 pa-3 white--text text-h6 font-weight-bold">
					こんな不安があっても大丈夫‼︎
				</div>
				<div class="info-dark mt-1 pa-1 white--text text-h6 font-weight-bold"></div>
				<div class="hr mt-8">
					<img width="160" src="/img/woman.png">
					<div class="bubble-1 ml-8 rounded-pill pa-6 pl-14 pr-14 text-body-1 font-weight-bold">
						オンラインって難しいし手間がかかる？
					</div>
				</div>
			</v-col>
		</v-col>
	</v-container>
</template>

<script>
	export default {
		layout: 'lp',
		head: ()=>({
			title:"大人のRunトレ塾"
		}),
		data: ()=>({
			info1:`ブログやYouTubeで解説している理論をもとに、あなたのランニングフォームをチェックします！
			感覚だけのフォーム指導ではなく、「なぜなのか」をしっかり解説してフォームの改善ができるようお伝えします！`,
			info2:`現場で５００名以上のランナーを見てきた私が一人一人手作業でランニングフォームをチェックします！
			実店舗で実際に結果が出ている内容をお伝えするので安心！`,
			info3:`一人一人のランニングフォームの課題点を分かりやすくレポートにしてまとめます。
			質問の回答に合わせてランニングのアドバイスも致します。`,

			//ユーザーの声を編集するならココ！
			/*
				name:ユーザー名
				gender:male or female
				comment:ユーザーのコメント
			*/
			voices:[
				{
					name:"HM",
					gender:"female",
					comment:`はじめはトレーニングでタイムが伸びるなんて半信半疑でした。
					ランナー専門のトレーニングジムと知り、体験を受けてみました。
					半年たって１kmあたり５秒以上伸びています。
					ランニングでは意識できない事もトレーニングでじっくり動きを反復するから体に染み込んで行くのがわかります。
					その結果はタイムに現れています！`
				},
				{
					name:"HM",
					gender:"female",
					comment:`はじめはトレーニングでタイムが伸びるなんて半信半疑でした。
					ランナー専門のトレーニングジムと知り、体験を受けてみました。
					半年たって１kmあたり５秒以上伸びています。
					ランニングでは意識できない事もトレーニングでじっくり動きを反復するから体に染み込んで行くのがわかります。
					その結果はタイムに現れています！`
				},
				{
					name:"HM",
					gender:"female",
					comment:`はじめはトレーニングでタイムが伸びるなんて半信半疑でした。
					ランナー専門のトレーニングジムと知り、体験を受けてみました。
					半年たって１kmあたり５秒以上伸びています。
					ランニングでは意識できない事もトレーニングでじっくり動きを反復するから体に染み込んで行くのがわかります。
					その結果はタイムに現れています！`
				},
			],
		})
	}
</script>
