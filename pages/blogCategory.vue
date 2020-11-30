<template>
<div>
    <header class="blogHeader">
        <v-img width="100vw" src="/img/blogtop.png" lazy-src="/img/blogtop_l.png" alt=""></v-img>
    </header>
    <section>
        <v-container>
            <v-row>
                <v-col cols="12" md="9">
                    <div class="d-flex main-under-line">
                        <h2 v-if="$vuetify.breakpoint.mdAndUp" class="main-color text-h4 mt-3">カテゴリー</h2>
                        <v-select :items="categorys" item-text="name" item-value="id" v-model="category" filled rounded class="ml-md-5" style="max-width:500px;" @change="onCategoryChange">
                        </v-select>
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
                                        {{content.seoDescription | blogTextFileter}}
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
                </v-col>
                <v-col cols="12" md="3">
                    <lazy-blog-side-menu></lazy-blog-side-menu>
                </v-col>
            </v-row>
        </v-container>
    </section>
</div>
</template>

<script>
import axios from 'axios'
export default {
	data: () => ({
        //contents:null,
        category:null,
        categorys:[
            { name: "フォーム", id:'p1nbcm2kg' },
            { name: "痛み", id:'nnin-08mq' },
            { name: "肩・首", id:'n35zhq2x8' },
            { name: "すね", id:'ahxwr80o6' },
            { name: "腰", id:'ogw9fi9za' },
            { name: "足首", id:'abznzivci' },
            { name: "太もも", id:'45arjwblp' },
            { name: "ヒザ", id:'u_zfrrxup' },
        ]
    }),
    filters:{
        dateFilter(val){
            const date = new Date(val)
            return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`
        },
        blogTextFileter(val){
            if(!val) return ""
            if(val.length > 40){
                let tmp = val.substr(0,40)
                tmp += "…"
                return tmp
            }else {
                return val
            }
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
    methods:{
        async getContens(){
            if(this.$route.query.search){
                //alert('サイト内検索')
                const { data } = await axios.get(
                    // your-service-id部分は自分のサービスidに置き換えてください
                    `https://runtrainingnote.microcms.io/api/v1/blog?q=${this.$route.query.search}`,
                    {
                        headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
                    }
                )
                console.log(data)
                this.contents.splice(0)
                for (let i=0; i<data.contents.length;i++){
                    this.$set(this.contents, i, data.contents[i]);
                }
            }else if(this.$route.query.categoryId){
                //alert('category')
                const { data } = await axios.get(
                    // your-service-id部分は自分のサービスidに置き換えてください
                    `https://runtrainingnote.microcms.io/api/v1/blog?filters=category1[equals]${this.$route.query.categoryId}[or]category2[equals]${this.$route.query.categoryId}`,
                    {
                        headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
                    }
                )
                console.log(data)
                this.contents.splice(0)
                for (let i=0; i<data.contents.length;i++){
                    this.$set(this.contents, i, data.contents[i]);
                }

                this.category = await this.categorys.find((queryCategoryId) => {
                    return (queryCategoryId.id == this.$route.query.categoryId);
                });
            }else{
                const { data } = await axios.get(
                    // your-service-id部分は自分のサービスidに置き換えてください
                    `https://runtrainingnote.microcms.io/api/v1/blog?filters=category1[equals]${this.category}[or]category2[equals]${this.category}`,
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
        },
        async onCategoryChange(){
            console.log(this.category)
            const { data } = await axios.get(
                `https://runtrainingnote.microcms.io/api/v1/blog?filters=category1[equals]${this.category}[or]category2[equals]${this.category}`,
                {
                    headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
                }
            )
            this.contents.splice(0)
            for (let i=0; i<data.contents.length;i++){
                this.$set(this.contents, i, data.contents[i]);
            }
        },
        resetContent(){
            this.category = null
        }
    },
    async mounted(){
        if(this.$route.query.categoryId){
            //alert('category')
            const { data } = await axios.get(
                // your-service-id部分は自分のサービスidに置き換えてください
                `https://runtrainingnote.microcms.io/api/v1/blog?filters=category1[equals]${this.$route.query.categoryId}[or]category2[equals]${this.$route.query.categoryId}`,
                {
                    headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
                }
            )
            console.log(data)
            this.contents.splice(0)
            for (let i=0; i<data.contents.length;i++){
                this.$set(this.contents, i, data.contents[i]);
            }

            this.category = await this.categorys.find((queryCategoryId) => {
                return (queryCategoryId.id === this.$route.query.categoryId);
            });
        }
    },
    watch: {
        $route (to, from) {
            //alert('getContens')
            this.getContens()
        }
    },
    head () {
		return {
            title: "ブログ一覧",
            meta: [
                // { hid: 'description', name: 'description', content: this.seoDescription },
                { hid: 'og:type', property: 'og:type', content: "article" },
                { hid: 'og:title', property: 'og:title', content: "ブログ一覧" },
                // { hid: 'og:description', property: 'og:description', content: this.seoDescription },
                { hid: 'og:url', property: 'og:url', content: `https://runtore.netlify.app/blogCategory` },
                // { hid: 'og:image', property: 'og:image', content: this.headerImg ? this.headerImg.url : "" },
            ],
		}
	},
}
</script>