<template>
    <v-container class="text-center side-bar">
        <v-avatar size="auto" max-width="80%">
            <v-img src="/img/avatar.png"></v-img>
        </v-avatar>
        <h4 class="text-h6 mt-3 title-text-color">
            大人のRUNトレ塾<br>代表 吉野洸希
        </h4>
        <v-btn rounded color="primary" class="mt-3" to="/profile">
            自己紹介ページ
        </v-btn>
        <div class="d-flex justify-center" style="margin-top:60px;">
            <v-text-field rounded filled dense placeholder="サイト内検索" v-model="search">
            </v-text-field>
            <v-btn color="primary" @click="getContens()">
                検索
            </v-btn>
        </div>
        <v-divider></v-divider>
        <h2 class="dence text-h6">
            最新記事
        </h2>
        <div v-if="newPost" class="sidebar-post">
            <nuxt-link :to="`/${newPost.id}`">
                <h4 class="text-left main-color pa-2">
                    {{newPost.title}}
                </h4>
                <v-divider class="mx-1"></v-divider>
                <p class="text-body-2 px-2 pt-2">{{newPost.seoDescription}}</p>
            </nuxt-link>
        </div>
        <h2 class="dence text-h6">
            人気記事
        </h2>
        <div v-if="newPost" class="sidebar-post">
            <nuxt-link :to="`/${newPost.id}`">
                <h4 class="text-left main-color pa-2">
                    {{newPost.title}}
                </h4>
                <v-divider class="mx-1"></v-divider>
                <p class="text-body-2 px-2 pt-2">{{newPost.seoDescription}}</p>
            </nuxt-link>
        </div>

    </v-container>
</template>
<script>
import axios from 'axios'
export default {
	data: () => ({
        search:null,
        newPost:null
    }),
    async mounted(){
        const { data } = await this.$axios.get(
            // your-service-id部分は自分のサービスidに置き換えてください
            `https://runtrainingnote.microcms.io/api/v1/blog`,
            {
                headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
            }
        )
        this.newPost = data.contents[0]
    },
    methods:{
        async getContens(){
            const { data } = await axios.get(
                // your-service-id部分は自分のサービスidに置き換えてください
                `https://runtrainingnote.microcms.io/api/v1/blog?q=${this.search}`,
                {
                    headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
                }
            )
            //alert('検索' + data.contents[0])
            this.newPost = await data.contents[0]

            this.$router.push({ path: '/blogCategory' , query :{ search: this.search}});
            //alert('ページ遷移')
        }
        
    }

}
</script>