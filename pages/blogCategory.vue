<template>
<div>
    <header>
        <v-img width="100vw" src="/img/blogtop.png" lazy-src="/img/blogtop_l.png" alt=""></v-img>
    </header>
    <section>
        <v-container>
            <v-row>
                <v-col cols="9">
                    <div class="d-flex main-under-line">
                        <h2 class="main-color text-h4 mt-3">カテゴリー</h2>
                        <v-select :items="categorys" filled rounded class="ml-5" style="max-width:500px;" v-model="category" @change="getContens()">
                        </v-select>
                    </div>
                    <div v-for="(content,i) in contents" :key="i" class="blog-post pa-5 mt-5">
                        <nuxt-link :to="`/${content.id}`">
                            <div class="d-flex justify-end text-subtitle-2 title-text-color">
                                {{content.date | dateFilter}}
                            </div>
                            <v-row>
                                <v-col cols="5">
                                    <v-img class="rounded" :aspect-ratio="16/9" :src="content.headerImg.url"></v-img>
                                </v-col>
                                <v-col cols="7">
                                    <h3 class="text-h4 sub-under-line title-text-color">{{content.title}}</h3>
                                    <p class="main-text-color mt-5 text-body-2">
                                        {{content.seoDescription}}
                                    </p>
                                    <div>
                                        <h4 class="text-caption title-text-color">カテゴリー</h4>
                                        <div class="d-flex mt-1">
                                            <v-btn outlined rounded small class="mr-3">
                                                {{content.category1.name}}
                                            </v-btn>
                                            <v-btn outlined rounded small class="mr-3">
                                                {{content.category2.name}}
                                            </v-btn>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </nuxt-link>
                    </div>
                </v-col>
                <v-col cols="3">
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
        content:null,
        category:null,
        categorys:[
            '肩',
            '腰',
            '股関節',
            'マラソン'
        ]
    }),
    filters:{
        dateFilter(val){
            const date = new Date(val)
            return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`
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
           const { data } = await axios.get(
                // your-service-id部分は自分のサービスidに置き換えてください
                `https://runtrainingnote.microcms.io/api/v1/blog?filters=title[contains]${this.category}`,
                {
                    headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
                }
            )
            
            alert('getContens')
            alert(this.category)
            return data
        }
    }
}
</script>