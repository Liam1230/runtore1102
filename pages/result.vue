<template>
  <article class="mt-5 pt-5">
		<v-container column justify-center class="min-container text-center pt-5">
			<h1 class="text-h3 mt-5 title-text-color">ランニング力チェック</h1>
			<h2 class="mt-3 pb-5 title-text-color">-Diagnosis-</h2>
			<v-row class="align-center justify-center pt-5 mt-5 flex-wrap">
				<v-col cols=10 class="text-center">
					<v-row class="align-center justify-center pt-5 mt-5 flex-wrap">
						<v-col cols="4" class="text-right">
							<v-avatar size="auto">
								<v-img src="/img/avatar.png"></v-img>
							</v-avatar>
						</v-col>
						<v-col cols="5" class="background-color-yellow">
							<div class="talk-answer">
								<p class="text-left main-text-color">
                                    あなたの点数は<span style="font-size:3em;">{{this.totlaScore}}</span>点<br>
                                    <span style="font-size:3em;">{{this.rank}}</span><span style="font-size:2em;">ランクです</span>
                                </p>
							</div>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
            <v-row class="align-center justify-center pt-5 mt-5 flex-wrap">
				<v-col cols=10 class="text-center">
                    <canvas id="resultCharts"></canvas>
				</v-col>
			</v-row>
            <h2 class="mt-3 pb-5 title-text-color">あなたは・・・</h2>
            <h1 class="text-h3 mt-5 red--text">{{this.runnerType}}</h1>
            <v-btn color="secondary" rounded x-large class="my-5" to="answer">問題の正しい答えが知りたい</v-btn>
            <h3 class="text-h4 my-5 py-5 blue-sub-title">あなたの弱点は・・・&emsp;&emsp;&emsp;&emsp;&emsp;</h3>
            <h3 class="text-h4 my-5 py-5 blue-sub-title">お勧めの記事&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</h3>
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
        totlaScore:0,
        rank:null,
        runnerType:null
    }),
    mounted(){
        //datasets[0].data.push(this.$route.query.toatlFormandTec)
        this.totlaScore = Number(this.$route.query.toatlFormandTec) + Number(this.$route.query.totalBody) + Number(this.$route.query.totalPurpose) + Number(28)
        
        if(this.totlaScore <= 50){
            this.rank = "D"
        }else if(this.totlaScore <= 65){
            this.rank = "C"
        }else if(this.totlaScore <= 84){
            this.rank = "B"
        }else{
            this.rank = "A"
        }

        if(Number(this.$route.query.totalBody) < 2.2){
            this.runnerType = "マラソンタイプ"
        }else{
            this.runnerType = "スピードタイプ"
        }

        const ctx = document.getElementById("resultCharts")
        const myChart = new Chart(ctx, {
            type:'radar',
            data: {
                labels: ["フォーム・技術", "体に関すること", "目標計画"],
                datasets:[
                    {
                        label:"得点",
                        data:[this.$route.query.toatlFormandTec,this.$route.query.totalBody,this.$route.query.totalPurpose],
                        backgroundColor:'RGBA(255,95,150,0.5)',
                        pointBackgroundColor:'RGB(46,106,177)'
                    }
                ]
            },
            options:{
                title:{
                    display:false,
                    text:""
                },
                scale:{
                    ticks:{
                        suggestedMax:12,
                        suggestedMin:0,
                    },
                    stepSize:5
                }
            }
        })
    }
}
</script>