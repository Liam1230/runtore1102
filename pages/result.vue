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
						<v-col cols="8">
							<div class="talk">
								<p class="text-left main-text-color">
                                    あなたの点数は {{this.totlaScore}}点<br>
                                    Aランクです
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
		</v-container>
  </article>
</template>

<script>
export default {
	data: () => ({
        totlaScore:0
    }),
    mounted(){
        //datasets[0].data.push(this.$route.query.toatlFormandTec)
        this.totlaScore = Number(this.$route.query.toatlFormandTec) + Number(this.$route.query.totalBody) + Number(this.$route.query.totalPurpose)
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