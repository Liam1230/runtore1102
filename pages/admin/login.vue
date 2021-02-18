<template>
<article class="mt-16">
    <div class="pt-10">
        <v-container>
            <h2 class="mb-4">管理画面ログイン</h2>
            <v-text-field
                label="メールアドレス"
                placeholder="メールアドレス"
                solo
                dense
                v-model="mail"
            ></v-text-field>
            <v-text-field
                label="パスワード"
                placeholder="パスワード"
                solo
                dense
                v-model="pass"
            ></v-text-field>
            <v-btn color="primary" @click="submit">
                ログイン
            </v-btn>
        </v-container>
    </div>
</article>
</template>
<script>
export default {
    data : ()=>({
        mail:"",
        pass:""
    }),
    async asyncData(ctx) {

    },
    mounted(){

    },
    methods: {
        submit(){
            const self = this
            this.$fireAuth.signInWithEmailAndPassword(this.mail,this.pass)
            .then(user=>{
                self.$router.push("/admin/")
            })
            .catch(err=>{
                alert(err)
            })
        }
    }
}
</script>