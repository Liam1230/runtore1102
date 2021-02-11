<template>
<article class="mt-16">
    <div class="pt-10">
        <v-container>
            <h2 class="mb-4">管理画面</h2>
            <canvas id="resultCharts"></canvas>
            <v-btn class="my-10" color="primary" @click="signOut">
                ログアウト
            </v-btn>
        </v-container>
    </div>
</article>
</template>
<script>
export default {
    data : ()=>({
        mail:"",
        pass:"",
        userType2:[
            {
                form : 0,
                body: 0,
                purpose : 0,
            }
        ],
        userType3:[],
        userType4:[],
        userType5:[],
        userType6:[],
        scoreSum2 : 
        {
            form: 0,
            body: 0,
            purpose: 0,
            count: 0
        },
        scoreSum3 : {
            form: 0,
            body: 0,
            purpose: 0,
            count: 0
        },
        scoreSum4 : {
            form: 0,
            body: 0,
            purpose: 0,
            count: 0
        },
        scoreSum5 : {
            form: 0,
            body: 0,
            purpose: 0,
            count: 0
        },
        scoreSum6 : {
            form: 0,
            body: 0,
            purpose: 0,
            count: 0
        },
        init: false
    }),
    watch: {
        init: function(newdata,olddata){
            if(this.init){
                const ctx = document.getElementById("resultCharts")
                const myChart = new Chart(ctx, {
                    type:'bar',
                    data: {
                        labels: ["2","3","4","5","6"],
                        datasets:[
                            {
                                label:"フォーム・技術",
                                data:[
                                    this.scoreSum2.form,
                                    this.scoreSum3.form,
                                    this.scoreSum4.form,
                                    this.scoreSum5.form,
                                    this.scoreSum6.form,
                                ],
                                backgroundColor: "rgba(219,39,91,0.5)"
                            },
                            {
                                label:"目標計画",
                                data:[
                                    this.scoreSum2.purpose,
                                    this.scoreSum3.purpose,
                                    this.scoreSum4.purpose,
                                    this.scoreSum5.purpose,
                                    this.scoreSum6.purpose,
                                ],
                                backgroundColor: "rgba(130,201,169,0.5)"
                            },
                            {
                                label:"体に関すること",
                                data:[
                                    this.scoreSum2.body,
                                    this.scoreSum3.body,
                                    this.scoreSum4.body,
                                    this.scoreSum5.body,
                                    this.scoreSum6.body,
                                ],
                                backgroundColor: "rgba(255,183,76,0.5)"
                            },
                        ]
                    },
                    options:{
                        title:{
                            display:false,
                            text:""
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    suggestedMax: 40,
                                    suggestedMin: 0,
                                    stepSize: 10,
                                    // callback: function(value, index, values){
                                    //     return  value +  '人'
                                    //     }
                                }
                            }]
                        },
                    }
                })
            }
        }
    },
    async asyncData(ctx) {
        ctx.$fireAuth.onAuthStateChanged(async user => {
            if(user){
            }else{
                ctx.redirect("/admin/login")
            }
        })
    },
    mounted(){
        this.$fireAuth.onAuthStateChanged(async user => {
            if(user){
                await this.$firestore.collection("checkrecords").get()
                .then(snapshot => {
                    let userType2 = []
                    let userType3 = []
                    let userType4 = []
                    let userType5 = []
                    let userType6 = []
                    let scoreSum2 = {
                        form: 0,
                        body: 0,
                        purpose: 0,
                        count: 0
                    }
                    let scoreSum3 = {
                        form: 0,
                        body: 0,
                        purpose: 0,
                        count: 0
                    }
                    let scoreSum4 = {
                        form: 0,
                        body: 0,
                        purpose: 0,
                        count: 0
                    }
                    let scoreSum5 = {
                        form: 0,
                        body: 0,
                        purpose: 0,
                        count: 0
                    }
                    let scoreSum6 = {
                        form: 0,
                        body: 0,
                        purpose: 0,
                        count: 0
                    }

                    snapshot.forEach(doc=>{
                        const data = doc.data()
                        if(data.fullTime <= 2){
                            userType2.push({
                                form : data.toatlFormandTec,
                                body: data.totalBody,
                                purpose : data.totalPurpose,
                            })
                            scoreSum2.form += data.toatlFormandTec
                            scoreSum2.body += data.totalBody
                            scoreSum2.purpose += data.totalPurpose
                            scoreSum2.count++
                        }else if(data.fullTime == 3){
                            userType3.push({
                                form : data.toatlFormandTec,
                                body: data.totalBody,
                                purpose : data.totalPurpose,
                            })
                            scoreSum3.form += data.toatlFormandTec
                            scoreSum3.body += data.totalBody
                            scoreSum3.purpose += data.totalPurpose
                            scoreSum3.count++
                        }else if(data.fullTime == 4){
                            userType4.push({
                                form : data.toatlFormandTec,
                                body: data.totalBody,
                                purpose : data.totalPurpose,
                            })
                            scoreSum4.form += data.toatlFormandTec
                            scoreSum4.body += data.totalBody
                            scoreSum4.purpose += data.totalPurpose
                            scoreSum4.count++
                        }else if(data.fullTime == 5){
                            userType5.push({
                                form : data.toatlFormandTec,
                                body: data.totalBody,
                                purpose : data.totalPurpose,
                            })
                            scoreSum5.form += data.toatlFormandTec
                            scoreSum5.body += data.totalBody
                            scoreSum5.purpose += data.totalPurpose
                            scoreSum5.count++
                        }else if(data.fullTime == 6){
                            userType6.push({
                                form : data.toatlFormandTec,
                                body: data.totalBody,
                                purpose : data.totalPurpose,
                            })
                            scoreSum6.form += data.toatlFormandTec
                            scoreSum6.body += data.totalBody
                            scoreSum6.purpose += data.totalPurpose
                            scoreSum6.count++
                        }
                    })
                    if(scoreSum2.count){
                        scoreSum2 = {
                            form : scoreSum2.form / scoreSum2.count,
                            body : scoreSum2.body / scoreSum2.count,
                            purpose : scoreSum2.purpose / scoreSum2.count,
                        }
                    }
                    if(scoreSum3.count){
                        scoreSum3 = {
                            form : scoreSum3.form / scoreSum3.count,
                            body : scoreSum3.body / scoreSum3.count,
                            purpose : scoreSum3.purpose / scoreSum3.count,
                        }
                    }
                    if(scoreSum4.count){
                        scoreSum4 = {
                            form : scoreSum4.form / scoreSum4.count,
                            body : scoreSum4.body / scoreSum4.count,
                            purpose : scoreSum4.purpose / scoreSum4.count,
                        }
                    }
                    if(scoreSum5.count){
                        scoreSum5 = {
                            form : scoreSum5.form / scoreSum5.count,
                            body : scoreSum5.body / scoreSum5.count,
                            purpose : scoreSum5.purpose / scoreSum5.count,
                        }
                    }
                    if(scoreSum6.count){
                        scoreSum6 = {
                            form : scoreSum6.form / scoreSum6.count,
                            body : scoreSum6.body / scoreSum6.count,
                            purpose : scoreSum6.purpose / scoreSum6.count,
                        }
                    }
                    // console.log({
                    //     scoreSum2,
                    //     scoreSum3,
                    //     scoreSum4,
                    //     scoreSum5,
                    //     scoreSum6,
                    // })

                    
                    this.scoreSum2 = scoreSum2
                    this.scoreSum3 = scoreSum3
                    this.scoreSum4 = scoreSum4
                    this.scoreSum5 = scoreSum5
                    this.scoreSum6 = scoreSum6
                    this.init = true
                })
            }else{
                self.$router.push("/admin/login")
            }
        })
        
    },
    methods: {
        signOut(){
            const self = this
            this.$fireAuth.signOut()
            .then(user=>{
                self.$router.push("/admin/login")
            })
        },
    }
}
</script>