<template>
  <article class="mt-5 pt-5">
		<v-container column justify-center class="min-container text-center pt-5">
			<h1 class="text-h3 mt-5 title-text-color">ランニング力チェック</h1>
			<h2 class="mt-3 pb-5 title-text-color">-RunCheck-</h2>
			<v-row class="align-center justify-center pt-5 mt-5 flex-wrap">
                <v-col cols=12 md="4" class="text-right">
                    <v-avatar size="auto" max-width="100%">
                        <v-img src="/img/avatar.png"></v-img>
                    </v-avatar>
                </v-col>
                <v-col cols=12 md="5" class="background-color-yellow">
                    <div class="talk-answer">
                        <p class="text-left main-text-color">
                            あなたの点数は<span style="font-size:3em;">{{this.totlaScore}}</span>点<br>
                            <span style="font-size:3em;">{{this.rank}}</span><span style="font-size:2em;">ランクです</span>
                        </p>
                    </div>
                </v-col>
			</v-row>
            <v-row class="align-center justify-center pt-5 mt-5 flex-wrap">
				<v-col cols=12 class="text-center">
                    <canvas id="resultCharts"></canvas>
				</v-col>
			</v-row>
            <h2 class="mt-3 pb-5 title-text-color">あなたは・・・</h2>
            <h1 class="text-h3 mt-5 red--text">{{runnerType}}</h1>
            <v-btn color="secondary" rounded x-large class="my-5"  @click="toAnswer()">問題の正しい答えが知りたい</v-btn>
            <div class="main-under-line mt-5">
                <h3 class="text-h4 main-color text-left">あなたの弱点は・・・</h3>
            </div>
            <template>
                <h2  class="my-5 text-left" v-if="toatlFormandTec <= totalBody && toatlFormandTec <= totalPurpose">{{taskFormTitle}}</h2>
                <h2  class="my-5 text-left" v-else-if="totalPurpose <= totalBody && totalPurpose <= toatlFormandTec">{{taskPracticeTitle}}</h2>
                <h2  class="my-5 text-left" v-else>{{taskBodyTitle}}</h2>
            </template>
            <template>
                <p class="text-left" v-if="toatlFormandTec <= totalBody && toatlFormandTec <= totalPurpose">{{taskForm}}</p>
                <p class="text-left" v-else-if="totalPurpose <= totalBody && totalPurpose <= toatlFormandTec">{{taskPractice}}</p>
                <p class="text-left" v-else>{{taskBody}}</p>
            </template>
            <div class="main-under-line mb-5 mt-5">
                <h3 class="text-h4 main-color text-left">お勧めの記事</h3>
            </div>
            <div v-for="(content,i) in contents" :key="i" class="blog-post pa-5 mt-5">
                <nuxt-link :to="`/${content.id}`">
                    <div class="d-flex justify-end text-subtitle-2 title-text-color">
                        {{content.date | dateFilter}}
                    </div>
                    <v-row>
                        <v-col cols="12" md="5">
                            <v-img v-if="content.headerImg" class="rounded" :aspect-ratio="16/9" :src="content.headerImg.url"></v-img>
                        </v-col>
                        <v-col cols="12" md="7">
                            <h3 class="text-h5 sub-under-line title-text-color">{{content.title}}</h3>
                            <p class="main-text-color mt-5 text-body-2">
                                {{content.seoDescription}}
                            </p>
                            <div>
                                <h4 class="text-caption title-text-color">カテゴリー</h4>
                                <div class="d-flex mt-1">
                                    <v-btn v-if="content.category1" outlined rounded small class="mr-3">
                                        {{content.category1.name}}
                                    </v-btn>
                                    <v-btn v-if="content.category2" outlined rounded small class="mr-3">
                                        {{content.category2.name}}
                                    </v-btn>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </nuxt-link>
            </div>
            <v-row  class="my-5 align-center justify-center">
				<nuxt-link  to="/" class="black--text px-5 my-5">
					トップに戻る
			　</nuxt-link>
			</v-row>
		</v-container>
  </article>
</template>

<script>
import axios from 'axios'
export default {
	data: () => ({
        typeId:"9thfr5thv8",
        timeID:null,
        randomId:null,
        totalPurpose:null,
        toatlFormandTec:null,
        totalBody:null,
        randomsrc:[
            {quiz:1,id:"rke9zq62x"},
            {quiz:2,id:"aas01mw7n"},
            {quiz:3,id:"rke9zq62x"},
            {quiz:4,id:"rt7thpswy"},
            {quiz:5,id:"zpkbhj0q9"},
            {quiz:6,id:"1nyhd6cmb"},
            {quiz:7,id:"k9l0ukjce"},
            {quiz:8,id:"mcbfdje6c"},
            {quiz:9,id:"iiitblfmd"},
        ],
        totlaScore:0,
        rank:null,
        runnerType:null,
        fullTime:null,
        fullMinute:null,
        toatlFormandTec:null,
        totalBody:null,
        totalPurpose:null,
        taskBodyTitle:"【体に関する知識】",
        taskBody:"ストレッチやトレーニング・栄養面など、体作りに関する知識のレベルを高めれば、ランニングを行う上で土台となる身体をメンテナンスできるようになり、更なるレベルアップを狙えます！課題に合わせたおすすめの記事を厳選しておりますので、そちらも合わせてご覧ください！",
        taskPracticeTitle:"【練習メニューに関する知識】",
        taskPractice:"練習メニューの組み方に関する知識のレベルを高めれば、効果の高い練習を行えるようになり、更なるレベルアップを狙えます！弱点に合わせた練習を組み合わせることで、効率良くタイムアップを狙えるでしょう！課題に合わせたおすすめの記事を厳選しておりますので、そちらも合わせてご覧ください！",
        taskFormTitle:"【フォームに関する知識】",
        taskForm:"ランニングフォームに対しての知識が課題となっています！正しいフォームや不良フォームの違いを知り、修正することで、エネルギーロスの少ないランニングを行っていきましょう！課題に合わせたおすすめの記事を厳選しておりますので、そちらも合わせてご覧ください！"
    }),

    filters:{
        dateFilter(val){
            const date = new Date(val)
            return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`
        }
    },

    methods:{
        async toAnswer(){
            this.$router.push({ path: 'answer' , query :{fullTime: this.fullTime, fullMinute: this.fullMinute}});
        }
    },

    async asyncData(ctx) {
        const { data } = await ctx.$axios.get(
            // your-service-id部分は自分のサービスidに置き換えてください
            `https://runtrainingnote.microcms.io/api/v1/blog`,
            {
                headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
            }
        )
        return data
    },

    async mounted(){
        //datasets[0].data.push(this.$route.query.toatlFormandTec)
        this.totlaScore = Number(this.$route.query.toatlFormandTec) + Number(this.$route.query.totalBody) + Number(this.$route.query.totalPurpose) + Number(28)
        this.fullTime = this.$route.query.fullTime
        this.fullMinute = this.$route.query.fullMinute

        this.toatlFormandTec = Number(this.$route.query.toatlFormandTec)
        this.totalBody = Number(this.$route.query.totalBody)
        this.totalPurpose = Number(this.$route.query.totalPurpose)

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

        if(this.fullTime > 5){
            this.timeID = "ze6dougzw"
        }else if(this.fullTime > 4){
            this.timeID = "xocg0ahey1"
        }else{
            this.timeID = "3oevrcrl4"
        }

        this.randomId = this.randomsrc[Math.floor(Math.random() * this.randomsrc.length)].id

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
                    stepSize:6
                }
            }
        })

        const { data } = await axios.get(
            // your-service-id部分は自分のサービスidに置き換えてください
            `https://runtrainingnote.microcms.io/api/v1/blog?filters=id[equals]${this.typeId}[or]id[equals]${this.timeID}[or]id[equals]${this.randomId}`,
            {
                headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
            }
        )
        console.log(data)
        this.contents.splice(0)
        for (let i=0; i<data.contents.length;i++){
            this.$set(this.contents, i, data.contents[i]);
        }

        
    }
}
</script>

<style>
#resultCharts{
    /* min-height: 50vh; */
}
</style>