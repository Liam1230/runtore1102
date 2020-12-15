<template>
	<v-container class="lp-body">
		<v-system-bar height="56" color="#000000e4" fixed>
			<v-row class="d-flex justify-end" no-gutters>
				<div class="d-flex align-center line-green rounded-lg mr-8 overflow-hidden">
					<v-img width="40" contain src="/img/LINE_icon.png"></v-img>
					<div class="ml-1 mr-3 text-s font-weight-bold white--text">今すぐLINE公式アカウントに登録</div>
				</div>
			</v-row>
		</v-system-bar>
		<v-col no-gutters class="pa-0 font-weight-bold" align="center" wrap>
			<picture>
				<source media="(max-width:960px)" srcset="/img/firstview_Mobile.png">
				<img class="mt-11" width="100%" src="/img/firstview.png">
			</picture>
			<div class="text-xl">
				<div class="mt-12">フォーム改善で自己ベストを</div>
				<div>更新しましょう！</div>
			</div>
			<div class="text-xl">
				<div class="mt-12">『LINE』を使ってあなたの</div>
				<div>ランニングフォームを簡単チェック</div>
			</div>
			<div class="mt-8 hr justify-center" no-gutters>
				<div class="d-flex align-center line-green rounded-lg overflow-hidden pa-0">
					<v-img class="ml-1" width="48" contain src="/img/LINE_icon.png"></v-img>
					<div class="ml-3 mr-8 text-s font-weight-bold white--text">今すぐLINE公式アカウントに登録</div>
				</div>
			</div>
			<v-container style="max-width:none; padding:0">
				<v-row class="hr mt-16 info-dark pa-8 pl-12 pr-12 pt-14 white--text justify-center" wrap no-gutters>
					<v-col cols="12" sm="12" md="6" lg="6" xl="6">
						<img class="ml-auto mr-0" width="100%" src="/img/picture_1.png">
					</v-col>
					<v-col cols="12" sm="12" md="6" lg="6" xl="6">
						<div class="pt-8 text-justify text-lg font-weight-bold">
							<div>理論をもとにあなたの、</div>
							<div>ランニングフォームをチェックします！</div>
						</div>
						<div class="pt-4 text-justify text-md font-weight-bold mt-1">
							<div>{{info1}}</div>
						</div>
					</v-col>
				</v-row>
			</v-container>
			<v-container style="max-width:none; padding:0">
				<v-row class="hr flex-row-reverse mt-8 pa-8 pt-14 pl-12 pr-12 black--text justify-center">
					<v-col cols="12" sm="12" md="6" lg="6" xl="6">
						<img class="ml-auto mr-0" width="100%" src="/img/picture_2.png">
					</v-col>
					<v-col cols="12" sm="12" md="6" lg="6" xl="6">
						<div class="text-justify text-lg font-weight-bold pt-8">
							<div>実績豊富なプロがチェックします！</div>
						</div>
						<div class="text-justify text-md font-weight-bold mt-1 pt-4">
							<div>{{info2}}</div>
						</div>
					</v-col>
				</v-row>
			</v-container>
			<v-container style="max-width:none; padding:0">
				<v-row class="hr mt-8 info-dark pa-8 pl-12 pr-12 pt-14 white--text justify-center" wrap no-gutters>
					<v-col cols="12" sm="12" md="6" lg="6" xl="6">
							<img class="ml-auto mr-0" width="100%" src="/img/picture_3.png">
					</v-col>
					<v-col cols="12" sm="12" md="6" lg="6" xl="6">
						<div class="text-justify text-lg font-weight-bold pt-8">
							<div>気軽にご相談ください。</div>
						</div>
						<div class="text-justify text-md font-weight-bold mt-1 pt-4">
							<div>{{info3}}</div>
						</div>
					</v-col>
				</v-row>
			</v-container>
			<v-col style="padding:0; width:100%; max-width:1200px" wrap>
				<div class="info-dark mt-6 pa-3 white--text text-lg font-weight-bold">
					お客様の声
				</div>
				<div class="triangle-under pa-0 ma-0 mb-12"></div>
				<div v-for="(v, i) in voices" class="mr-4 ml-4 mt-10 rounded-xl voices text-justify" :key="i">
					<div style="display:flex; align-items:center;">
						<img :src="(v.gender=='male' ? '/img/male.png':'img/female.png')" width="48">
						<div class="ml-4 text-xl" style="color:#404040">{{v.name}}</div>
					</div>
					<img class="mt-4" src="/img/STAR.png" height="20">
					<div class="mt-2 text-md" style="line-height:1.7em;">
						{{v.comment}}
					</div>
				</div>
				<div class="info-dark mt-16 pa-3 white--text text-lg font-weight-bold">
					こんな不安があっても大丈夫‼︎
				</div>
				<div class="info-dark mt-1 pa-1"></div>
				<div class="hr mt-8">
					<img width="16%" src="/img/woman.png">
					<div class="bubble bubble-1 rounded-xl text-s font-weight-bold">
						オンラインって難しいし手間がかかる？
					</div>
				</div>
				<div class="hr q-a">
					<div class="text-justify ml-auto bubble bubble-2 rounded-xl text-s font-weight-bold">
						簡単 ３STEP！ LINEを登録してランニングフォームの動画を送るだけ！
					</div>
					<img width="16%" src="/img/man.png">
				</div>
				<div class="hr q-a">
					<img width="16%" src="/img/woman.png">
					<div class="bubble bubble-1 rounded-xl text-s font-weight-bold">
						直接顔を見て話す？
					</div>
				</div>
				<div class="hr q-a">
					<div class="text-justify ml-auto bubble bubble-2 rounded-xl text-s font-weight-bold">
						LINE上のやり取りで完結するため、直接顔を合わせてお話する事はないので安心です！
					</div>
					<img width="16%" src="/img/man.png">
				</div>
				<div class="text-xl">
					<div class="mt-12">『LINE』を使ってあなたの</div>
					<div>ランニングフォームを簡単チェック</div>
				</div>
				<div class="mt-8 hr justify-center" no-gutters>
					<div class="d-flex align-center line-green rounded-lg overflow-hidden pa-0">
						<v-img class="ml-1" width="48" contain src="/img/LINE_icon.png"></v-img>
						<div class="ml-3 mr-8 text-s font-weight-bold white--text">今すぐLINE公式アカウントに登録</div>
					</div>
				</div>
				<div class="three-step mt-16">
					<img style="width:90%; max-width:400px; grid-area:timg" src="/img/3Step_title.png">
					<div class="steps mt-14 text-h5 font-weight-bold">
						<div class="sflow hr ml-7 mr-7 justify-center text-h4 font-weight-bold white--text">
							<div class="step-circle hr justify-center black rounded-circle">1</div>
							<div class="step-line"></div>
							<div class="step-circle hr justify-center black rounded-circle">2</div>
							<div class="step-line"></div>
							<div class="step-circle hr justify-center black rounded-circle">3</div>
						</div>
						<div style="grid-area:ftext">LINE登録</div>
						<div style="grid-area:stext">質問回答</div>
						<div style="grid-area:ttext">動画を送信</div>
						<img style="grid-area:fimg" src="/img/3Step_1.png">
						<img style="grid-area:simg" src="/img/3Step_2.png">
						<img style="grid-area:timg" src="/img/3Step_3.png">
					</div>
					<div class="isteps mt-14 text-xl font-weight-bold align-center">
						<div class="hr align-center">
							<div class="step-circle hr justify-center black rounded-circle text-lg white--text">1</div>
							<div class="ml-3"> LINE登録</div>
						</div>
						<img class="mt-3" src="/img/3Step_1.png">
						<div class="hr align-center mt-12">
							<div class="step-circle hr justify-center black rounded-circle text-lg white--text">2</div>
							<div class="ml-3"> 質問回答</div>
						</div>
						<img class="mt-3" src="/img/3Step_2.png">
						<div class="hr align-center mt-12">
							<div class="step-circle hr justify-center black rounded-circle text-lg white--text">3</div>
							<div class="ml-3"> 動画を送信</div>
						</div>
						<img class="mt-3" src="/img/3Step_3.png">
					</div>
					<div style="grid-area:tindex" class="text-s font-weight-bold">
						<div class="mt-10">
							質問・フォームの課題・改善方法をレポートにして返信します！
						</div>
						<div class="mt-1">
							レポートやおすすめする記事・動画でランニングフォームを改善しよう！
						</div>
					</div>
				</div>
				<v-col class="mt-16" style="max-width:900px">
					<div class="to-runner justify-center rounded-xl">
						<div class="text-xl font-weight-bold text-decoration-underline">ランナーの皆さんへ</div>
						<div class="mt-10 ml-8 mr-8 text-md font-weight-bold text-justify">
							<div>
								ランナーの皆さんは本当に勤勉な方が多く、目標に向けて練習を重ねられています。
							</div>
							<div class="mt-6">
								ただ、ランニングフォームの乱れによって、『結果が出ない』『体に痛みが出てしまう』などで
								悩んでいるランナーの声をたくさん聞いてきました。
							</div>
							<div class="mt-6">
								実は、それらは体の専門家であるトレーナーからみれば、簡単に改善できるものばかり！
							</div>
							<div class="mt-6">
								お悩みを１人で背負い込まずにご相談ください！
								あなたのランニングライフをよりよいものとするために全力でサポートさせて頂きます！
							</div>
						</div>
					</div>
					<div class="black justify-center pa-2 pt-4 rounded-xl mt-16 white--text">
						<div class="text-h3">※ 人数限定 ※</div>
						<div class="white pa-8 rounded-xl mt-2 black--text">
							<div class="text-md font-weight-bold">
								このサービスは一人一人手作業で行うので
							</div>
							<v-row class="font-weight-bold mt-4 align-center">
								<v-col class="mt-n2 to-right" cols="12" sm="12" md="6" lg="6" xl="6">
									<span class="text-h3 white--text black pa-2">1ヶ月10名限定</span>
								</v-col>
								<v-col class="mt-n2 text-xl to-left" cols="12" sm="12" md="6" lg="6" xl="6">
									とさせて頂きます！
								</v-col>
							</v-row>
							<div class="text-s font-weight-bold grey--text text--darken-3 mt-8">
								<div>このオンラインフォームチェックの募集は人数が定員に達し次第、終了を予定しております！</div>
								<div class="mt-1">また、一人一人手作業でフォーム改善を行うので人数も１ヶ月１０名限定とさせて頂きます！</div>
								<div class="mt-1">迷われている方はお早めにお申し込みください！</div>
							</div>
						</div>
					</div>
					<div class="text-xl">
						<div class="mt-12">『LINE』を使ってあなたの</div>
						<div>ランニングフォームを簡単チェック</div>
					</div>
					<div class="mt-8 hr justify-center" no-gutters>
						<div class="d-flex align-center line-green rounded-lg overflow-hidden pa-0">
							<v-img class="ml-1" width="48" contain src="/img/LINE_icon.png"></v-img>
							<div class="ml-3 mr-8 text-s font-weight-bold white--text">今すぐLINE公式アカウントに登録</div>
						</div>
					</div>
				</v-col>
			</v-col>
			<div class="info-dark mt-16 pt-14"></div>
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
					name:"AS",
					gender:"male",
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
