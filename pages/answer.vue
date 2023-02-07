<template>
  <article class="mt-5 pt-5">
    <v-container column justify-center class="min-container text-center pt-5">
      <v-snackbar v-model="snackBar" multi-line top>
        {{ errorText }}
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackBar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <h1 class="text-h3 mt-5 title-text-color">回答</h1>
      <h2 class="mt-3 title-text-color">-Answer-</h2>
      <v-row class="align-center justify-center flex-wrap">
        <v-col cols="12" sm="12" md="1"></v-col>
        <v-col cols="10" class="text-center">
          <v-row class="align-center justify-center mt-3 mx-0">
            <v-col cols="12" class="text-left">
              <h3 class="main-color text-h5">Q.1 {{ quiz1text }}</h3>
            </v-col>
            <v-card width="750">
              <v-container class="pa-1">
                <v-item-group v-model="quiz1userselected" multiple>
                  <v-row>
                    <v-col
                      v-for="(src, j) in quiz1srcs"
                      :key="j"
                      cols="12"
                      md="6"
                    >
                      <v-item
                        v-slot="{ active, toggle }"
                        v-bind:class="{ borderRed: j == quiz1selected }"
                      >
                        <v-img
                          :src="src.image"
                          class="text-left pa-2"
                          @click="toggle"
                          style="pointer-events: none"
                        >
                          <v-btn fab>
                            <v-icon color="rgba(0, 173, 255, 1)" large>
                              {{
                                active
                                  ? "mdi-checkbox-marked"
                                  : "mdi-checkbox-blank-outline"
                              }}
                            </v-icon>
                          </v-btn>
                        </v-img>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-item-group>
              </v-container>
            </v-card>
            <v-btn
              v-if="quiz1CommentId"
              color="primary"
              class="mt-3 mb-5"
              block
              rounded
              @click="moveTo(quiz1CommentId)"
              >解説はこちら</v-btn
            >
          </v-row>
          <v-row class="align-center justify-center mt-3 mx-0">
            <v-col cols="12" class="text-left">
              <h3 class="main-color text-h5">Q.2 {{ quiz2text }}</h3>
            </v-col>
            <v-card width="750">
              <v-list>
                <v-list-item-group v-model="quiz2selected" multiple>
                  <template v-for="(src, k) in quiz2srcs">
                    <v-divider v-if="!src" :key="`divider-${k}`"></v-divider>
                    <v-list-item
                      v-else
                      :key="`src-${k}`"
                      :value="src"
                      :class="classList(2, k)"
                      :disabled="true"
                    >
                      <v-list-item-content class="text-left">
                        <v-list-item-title
                          v-text="src.item"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
            <v-btn
              v-if="quiz2CommentId"
              color="primary"
              class="mt-3 mb-5"
              block
              rounded
              @click="moveTo(quiz2CommentId)"
              >解説はこちら</v-btn
            >
          </v-row>

          <v-row class="align-center justify-center mt-3 mx-0">
            <v-col cols="12" class="text-left">
              <h3 class="main-color text-h5">Q.3 {{ quiz3text }}</h3>
            </v-col>
            <v-card width="750">
              <v-list>
                <v-list-item-group v-model="quiz3selected" multiple>
                  <template v-for="(src, m) in quiz3srcs">
                    <v-divider v-if="!src" :key="`divider-${m}`"></v-divider>
                    <v-list-item
                      v-else
                      :key="`src-${m}`"
                      :value="src"
                      :class="classList(3, m)"
                      :disabled="true"
                    >
                      <v-list-item-content class="text-left">
                        <v-list-item-title
                          v-text="src.item"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
            <v-btn
              v-if="quiz3CommentId"
              color="primary"
              class="mt-3 mb-5"
              block
              rounded
              @click="moveTo(quiz3CommentId)"
              >解説はこちら</v-btn
            >
          </v-row>
          <v-row class="align-center justify-center mt-3 mx-0">
            <v-col cols="12" class="text-left">
              <h3 class="main-color text-h5">Q.4 {{ quiz4text }}</h3>
            </v-col>
            <v-card width="750">
              <v-container class="pa-1">
                <v-item-group v-model="quiz4userselected" multiple>
                  <v-row>
                    <v-col
                      v-for="(src, n) in quiz4srcs"
                      :key="n"
                      cols="12"
                      md="6"
                    >
                      <v-item
                        v-slot="{ active, toggle }"
                        v-bind:class="{
                          borderRed:
                            n == quiz4selected[0] || n == quiz4selected[1],
                        }"
                      >
                        <v-img
                          :src="src.image"
                          class="text-left pa-2"
                          @click="toggle"
                          style="pointer-events: none"
                        >
                          <v-btn fab>
                            <v-icon color="rgba(0, 173, 255, 1)" large>
                              {{
                                active
                                  ? "mdi-checkbox-marked"
                                  : "mdi-checkbox-blank-outline"
                              }}
                            </v-icon>
                          </v-btn>
                        </v-img>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-item-group>
              </v-container>
            </v-card>
            <v-btn
              v-if="quiz4CommentId"
              color="primary"
              class="mt-3 mb-5"
              block
              rounded
              @click="moveTo(quiz4CommentId)"
              >解説はこちら</v-btn
            >
          </v-row>
          <v-row class="align-center justify-center mt-3 mx-0">
            <v-col cols="12" class="text-left">
              <h3 class="main-color text-h5">Q.5 {{ quiz5text }}</h3>
            </v-col>
            <v-card width="750">
              <v-container class="pa-1">
                <v-item-group v-model="quiz5userselected" multiple>
                  <v-row>
                    <v-col
                      v-for="(src, p) in quiz5srcs"
                      :key="p"
                      cols="12"
                      md="6"
                    >
                      <v-item
                        v-slot="{ active, toggle }"
                        v-bind:class="{ borderRed: p == quiz5selected }"
                      >
                        <v-img
                          :src="src.image"
                          class="text-left pa-2"
                          @click="toggle"
                          style="pointer-events: none"
                        >
                          <v-btn fab>
                            <v-icon color="rgba(0, 173, 255, 1)" large>
                              {{
                                active
                                  ? "mdi-checkbox-marked"
                                  : "mdi-checkbox-blank-outline"
                              }}
                            </v-icon>
                          </v-btn>
                        </v-img>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-item-group>
              </v-container>
            </v-card>
            <v-btn
              v-if="quiz5CommentId"
              color="primary"
              class="mt-3 mb-5"
              block
              rounded
              @click="moveTo(quiz5CommentId)"
              >解説はこちら</v-btn
            >
          </v-row>
          <v-row class="align-center justify-center mt-3 mx-0">
            <v-col cols="12" class="text-left">
              <h3 class="main-color text-h5">Q.6 {{ quiz6text }}</h3>
            </v-col>
            <v-card width="750">
              <v-list>
                <v-list-item-group v-model="quiz6selected" multiple>
                  <template v-for="(src, q) in quiz6srcs">
                    <v-divider v-if="!src" :key="`divider-${q}`"></v-divider>
                    <v-list-item
                      v-else
                      :key="`src-${q}`"
                      :value="src"
                      :class="classList(6, q)"
                      :disabled="true"
                    >
                      <v-list-item-content class="text-left">
                        <v-list-item-title
                          v-text="src.item"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
            <v-btn
              v-if="quiz6CommentId"
              color="primary"
              class="mt-3 mb-5"
              block
              rounded
              @click="moveTo(quiz6CommentId)"
              >解説はこちら</v-btn
            >
          </v-row>
          <v-row class="align-center justify-center mt-3 mx-0">
            <v-col cols="12" class="text-left">
              <h3 class="main-color text-h5">Q.7 {{ quiz7text }}</h3>
            </v-col>
            <v-card width="750">
              <v-container class="pa-1">
                <v-item-group v-model="quiz7userselected" multiple>
                  <v-row>
                    <v-col
                      v-for="(src, r) in quiz7srcs"
                      :key="r"
                      cols="12"
                      md="6"
                    >
                      <v-item
                        v-slot="{ active, toggle }"
                        v-bind:class="{ borderRed: r == quiz7selected }"
                      >
                        <v-img
                          :src="src.image"
                          class="text-left pa-2"
                          @click="toggle"
                          style="pointer-events: none"
                        >
                          <v-btn fab>
                            <v-icon color="rgba(0, 173, 255, 1)" large>
                              {{
                                active
                                  ? "mdi-checkbox-marked"
                                  : "mdi-checkbox-blank-outline"
                              }}
                            </v-icon>
                          </v-btn>
                        </v-img>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-item-group>
              </v-container>
            </v-card>
            <v-btn
              v-if="quiz7CommentId"
              color="primary"
              class="mt-3 mb-5"
              block
              rounded
              @click="moveTo(quiz7CommentId)"
              >解説はこちら</v-btn
            >
          </v-row>
          <v-row class="align-center justify-center mt-3 mx-0">
            <v-col cols="12" class="text-left">
              <h3 class="main-color text-h5">Q.8 {{ quiz8text }}</h3>
            </v-col>
            <v-card width="750">
              <v-container class="pa-1">
                <v-item-group v-model="quiz8userselected" multiple>
                  <v-row>
                    <v-col
                      v-for="(src, s) in quiz8srcs"
                      :key="s"
                      cols="12"
                      md="6"
                    >
                      <v-item
                        v-slot="{ active, toggle }"
                        v-bind:class="{
                          borderRed:
                            s == quiz8selected[0] || s == quiz8selected[1],
                        }"
                      >
                        <v-img
                          :src="src.image"
                          class="text-left pa-2"
                          @click="toggle"
                          style="pointer-events: none"
                        >
                          <v-btn fab>
                            <v-icon color="rgba(0, 173, 255, 1)" large>
                              {{
                                active
                                  ? "mdi-checkbox-marked"
                                  : "mdi-checkbox-blank-outline"
                              }}
                            </v-icon>
                          </v-btn>
                        </v-img>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-item-group>
              </v-container>
            </v-card>
            <v-btn
              v-if="quiz8CommentId"
              color="primary"
              class="mt-3 mb-5"
              block
              rounded
              @click="moveTo(quiz8CommentId)"
              >解説はこちら</v-btn
            >
          </v-row>
          <v-row class="align-center justify-center mt-3 mx-0">
            <v-col cols="12" class="text-left">
              <h3 class="main-color text-h5">Q.9 {{ quiz9text }}</h3>
            </v-col>
            <v-card width="750">
              <v-list>
                <v-list-item-group v-model="quiz9selected" multiple>
                  <template v-for="(src, t) in quiz9srcs">
                    <v-divider v-if="!src" :key="`divider-${t}`"></v-divider>
                    <v-list-item
                      v-else
                      :key="`src-${t}`"
                      :value="src"
                      :class="classList(9, t)"
                      :disabled="true"
                    >
                      <v-list-item-content class="text-left">
                        <v-list-item-title
                          v-text="src.item"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
            <v-btn
              v-if="quiz9CommentId"
              color="primary"
              class="mt-3 mb-5"
              block
              rounded
              @click="moveTo(quiz9CommentId)"
              >解説はこちら</v-btn
            >
          </v-row>
          <v-row class="align-center justify-center mt-3 mx-0">
            <v-col cols="12" class="text-left">
              <h3 class="main-color text-h5">Q.10 {{ quiz10text }}</h3>
            </v-col>
            <v-card width="750">
              <v-list>
                <v-list-item-group v-model="quiz10selected" multiple>
                  <template v-for="(src, u) in quiz10srcs">
                    <v-divider v-if="!src" :key="`divider-${u}`"></v-divider>
                    <v-list-item
                      v-else
                      :key="`src-${u}`"
                      :value="src"
                      :class="classList(10, u)"
                      :disabled="true"
                    >
                      <v-list-item-content class="text-left">
                        <v-list-item-title
                          v-text="src.item"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
            <v-btn
              v-if="quiz10CommentId"
              color="primary"
              class="mt-3 mb-5"
              block
              rounded
              @click="moveTo(quiz10CommentId)"
              >解説はこちら</v-btn
            >
          </v-row>
          <v-row class="align-center justify-center mt-3 mx-0">
            <v-col cols="12" class="text-left">
              <h3 class="main-color text-h5">Q.11 {{ quiz11text }}</h3>
            </v-col>
            <v-card width="750">
              <v-container class="pa-1">
                <v-item-group v-model="quiz11userselected" multiple>
                  <v-row>
                    <v-col
                      v-for="(src, v) in quiz11srcs"
                      :key="v"
                      cols="12"
                      md="6"
                    >
                      <v-item
                        v-slot="{ active, toggle }"
                        v-bind:class="{ borderRed: v == quiz11selected }"
                      >
                        <v-img
                          :src="src.image"
                          class="text-left pa-2"
                          @click="toggle"
                          style="pointer-events: none"
                        >
                          <v-btn fab>
                            <v-icon color="rgba(0, 173, 255, 1)" large>
                              {{
                                active
                                  ? "mdi-checkbox-marked"
                                  : "mdi-checkbox-blank-outline"
                              }}
                            </v-icon>
                          </v-btn>
                        </v-img>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-item-group>
              </v-container>
            </v-card>
            <v-btn
              v-if="quiz11CommentId"
              color="primary"
              class="mt-3 mb-5"
              block
              rounded
              @click="moveTo(quiz11CommentId)"
              >解説はこちら</v-btn
            >
          </v-row>
          <v-row
            v-if="Number(this.fullTime) >= 5 || !this.fullTime"
            class="align-center justify-center mt-3 mx-0"
          >
            <v-col cols="12" class="text-left">
              <h3 class="main-color text-h5">Q.12 {{ extraquize1 }}</h3>
            </v-col>
            <v-card width="750">
              <v-list>
                <v-list-item-group v-model="extraquize1selected" multiple>
                  <template v-for="(src, w) in extraquize1srcs">
                    <v-divider v-if="!src" :key="`divider-${w}`"></v-divider>
                    <v-list-item
                      v-else
                      :key="`src-${w}`"
                      :value="src"
                      :class="classList(11, w)"
                      :disabled="true"
                    >
                      <v-list-item-content class="text-left">
                        <v-list-item-title
                          v-text="src.item"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
            <v-btn
              v-if="extraquize1CommentId"
              color="primary"
              class="mt-3 mb-5"
              block
              rounded
              @click="moveTo(extraquize1CommentId)"
              >解説はこちら</v-btn
            >
          </v-row>
          <v-row
            v-else-if="Number(this.fullTime) >= 4"
            class="align-center justify-center mt-3 mx-0"
          >
            <v-col cols="12" class="text-left">
              <h3 class="main-color text-h5">Q.12 {{ extraquize2 }}</h3>
            </v-col>
            <v-card width="750">
              <v-list>
                <v-list-item-group v-model="extraquize2selected" multiple>
                  <template v-for="(src, w) in extraquize2srcs">
                    <v-divider v-if="!src" :key="`divider-${w}`"></v-divider>
                    <v-list-item
                      v-else
                      :key="`src-${w}`"
                      :value="src"
                      :class="classList(12, w)"
                      :disabled="true"
                    >
                      <v-list-item-content class="text-left">
                        <v-list-item-title
                          v-text="src.item"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
            <v-btn
              v-if="extraquize2CommentId"
              color="primary"
              class="mt-3 mb-5"
              block
              rounded
              @click="moveTo(extraquize2CommentId)"
              >解説はこちら</v-btn
            >
          </v-row>
          <v-row
            v-else-if="
              Number(this.fullTime) >= 3 && Number(this.fullMinute) >= 30
            "
            class="align-center justify-center mt-3 mx-0"
          >
            <v-col cols="12" class="text-left">
              <h3 class="main-color text-h5">Q.12 {{ extraquize3 }}</h3>
            </v-col>
            <v-card width="750">
              <v-list>
                <v-list-item-group v-model="extraquize3selected" multiple>
                  <template v-for="(src, w) in extraquize3srcs">
                    <v-divider v-if="!src" :key="`divider-${w}`"></v-divider>
                    <v-list-item
                      v-else
                      :key="`src-${w}`"
                      :value="src"
                      :class="classList(13, w)"
                      :disabled="true"
                    >
                      <v-list-item-content class="text-left">
                        <v-list-item-title
                          v-text="src.item"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
            <v-btn
              v-if="extraquize3CommentId"
              color="primary"
              class="mt-3 mb-5"
              block
              rounded
              @click="moveTo(extraquize3CommentId)"
              >解説はこちら</v-btn
            >
          </v-row>
          <v-row v-else class="align-center justify-center mt-3 mx-0">
            <v-col cols="12" class="text-left">
              <h3 class="main-color text-h5">Q.12 {{ extraquize4 }}</h3>
            </v-col>
            <v-card width="750">
              <v-list>
                <v-list-item-group v-model="extraquize4selected" multiple>
                  <template v-for="(src, w) in extraquize4srcs">
                    <v-divider v-if="!src" :key="`divider-${w}`"></v-divider>
                    <v-list-item
                      v-else
                      :key="`src-${w}`"
                      :value="src"
                      :class="classList(14, w)"
                      :disabled="true"
                    >
                      <v-list-item-content class="text-left">
                        <v-list-item-title
                          v-text="src.item"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
            <v-btn
              v-if="extraquize4CommentId"
              color="primary"
              class="mt-3 mb-5"
              block
              rounded
              @click="moveTo(extraquize4CommentId)"
              >解説はこちら</v-btn
            >
          </v-row>
        </v-col>
        <v-col cols="12" sm="12" md="1"></v-col>
      </v-row>
      <v-row class="my-5 align-center justify-center">
        <nuxt-link to="/" class="black--text px-5 my-5">
          トップに戻る 　</nuxt-link
        >
      </v-row>
    </v-container>
  </article>
</template>

<script>
export default {
  filters: {
    dateFilter(val) {
      const date = new Date(val);
      return `${date.getFullYear()}年${
        date.getMonth() + 1
      }月${date.getDate()}日`;
    },
    blogTextFileter(val) {
      if (!val) return "";
      if (val.length > 40) {
        let tmp = val.substr(0, 40);
        tmp += "…";
        return tmp;
      } else {
        return val;
      }
    },
  },
  data: () => ({
    errorText: "",
    snackBar: false,
    fullTime: null,
    fullMinute: null,
    halfTime: null,
    halfMinute: null,
    userAnswers: [],
    typeNum: 0,
    items: ["1", "2", "3", "4", "5", "6", "7"],
    halfTimes: ["1", "2", "3"],
    times: ["1", "2", "3", "4", "5", "6", "7"],
    minutes: [],
    quiz1category: "フォーム・技術",
    quiz1text: "腰の落ちたフォームを選んでください",
    quiz1srcs: [
      { checked: false, score: 0, image: "/img/check/f_1-1.jpg" },
      { checked: false, score: 2, image: "/img/check/f_1-2.jpg" },
      { checked: false, score: 6, image: "/img/check/f_1-3.jpg" },
      { checked: false, score: 0, image: "/img/check/f_1-4.jpg" },
    ],
    quiz1selected: [2],
    quiz1userselected: [],
    quiz1Comment: {},
    // quiz1CommentId: "rke9zq62x",
    quiz1CommentId:
      "https://tlwiki.org/%e8%85%b0%e3%81%ae%e8%90%bd%e3%81%a1%e3%81%9f%e3%83%95%e3%82%a9%e3%83%bc%e3%83%a0%e6%94%b9%e5%96%84/",

    quiz2category: "体に関すること",
    quiz2text:
      "フルマラソンを走るペースは、どの程度の速度が良いか選んでください",
    quiz2srcs: [
      { checked: false, score: 2, item: "全く辛くなくしゃべられる速度" },
      { checked: false, score: 0, item: "息が上がりかなりつらいと思う速度" },
      { checked: false, score: 6, item: "息が軽く上がるが余裕のある速度" },
      { checked: false, score: 2, item: "息が上がり余裕の無い速度" },
    ],
    quiz2selected: 2,
    quiz2userselected: 0,
    quiz2Comment: {},
    // quiz2CommentId: "nr0oamb2x",
    quiz2CommentId:
      "https://tlwiki.org/%e3%83%95%e3%83%ab%e3%83%9e%e3%83%a9%e3%82%bd%e3%83%b3%e3%81%ab%e9%81%a9%e3%81%97%e3%81%9f%e9%80%9f%e5%ba%a6/",

    quiz3category: "目標計画",
    quiz3text: "練習の目的として「適切ではないもの」を選んでください",
    quiz3srcs: [
      {
        checked: false,
        score: 2,
        item: "ロングジョグ-毛細血管を増やし、脚の耐久性強化",
      },
      {
        checked: false,
        score: 2,
        item: "インターバル走-疲労物質(乳酸)を除去する能力を高める",
      },
      {
        checked: false,
        score: 2,
        item: "全力走-脚の回転数・ストライド向上で最大速度を高める",
      },
      { checked: false, score: 6, item: "ペース走-呼吸循環を高めて疲労回復" },
    ],
    quiz3selected: 3,
    quiz3userselected: 0,
    quiz3Comment: {},
    // quiz3CommentId: "zpkbhj0q9",
    quiz3CommentId:
      "https://tlwiki.org/%e7%ad%8b%e8%82%89%e3%81%ab%e9%85%b8%e7%b4%a0%e3%82%92%e5%8f%96%e3%82%8a%e8%be%bc%e3%82%80%e3%80%8e%e3%83%9a%e3%83%bc%e3%82%b9%e8%b5%b0%e3%80%8f%e3%81%ae%e5%8a%b9%e6%9e%9c/",

    quiz4category: "フォーム・技術",
    quiz4text: "着地位置として「正しいもの」を「2つ」選んでください",
    quiz4srcs: [
      { checked: false, score: 0, image: "/img/check/f_2-1.jpg" },
      { checked: false, score: 3, image: "/img/check/f_2-2.jpg" },
      { checked: false, score: 3, image: "/img/check/f_2-3.jpg" },
      { checked: false, score: 0, image: "/img/check/f_2-4.jpg" },
    ],
    quiz4selected: [1, 2],
    quiz4userselected: [],
    quiz4Comment: {},
    // quiz4CommentId: "zxkx8pntb",
    quiz4CommentId:
      "https://tlwiki.org/%e6%9c%80%e5%88%9d%e3%81%ab%e5%9c%b0%e9%9d%a2%e3%81%ab%e7%9d%80%e3%81%8f%e3%81%ae%e3%81%af%e8%a6%aa%e6%8c%87%e3%81%8b%e3%82%89%ef%bc%9f%e5%b0%8f%e6%8c%87%e5%81%b4%e3%81%8b%e3%82%89%ef%bc%9f%e3%81%9d/",

    quiz5category: "体に関すること",
    quiz5text:
      "伸ばしたい筋肉とストレッチ方法の組み合わせとして「間違っているもの」はどれか選んでください",
    quiz5srcs: [
      { checked: false, score: 6, image: "/img/check/t_2-1.jpg" },
      { checked: false, score: 0, image: "/img/check/t_2-2.jpg" },
      { checked: false, score: 0, image: "/img/check/t_2-3.jpg" },
      { checked: false, score: 0, image: "/img/check/t_2-4.jpg" },
    ],
    quiz5selected: 0,
    quiz5userselected: [],
    quiz5Comment: {},
    quiz5CommentId:
      "https://tlwiki.org/%e3%83%97%e3%83%ad%e3%81%8c%e5%ae%9f%e8%b7%b5%e3%81%97%e3%81%a6%e3%81%84%e3%82%8b%e3%81%8a%e3%81%99%e3%81%99%e3%82%81%e3%82%b9%e3%83%88%e3%83%ac%e3%83%83%e3%83%815%e9%81%b8%ef%bc%81/",

    quiz6category: "目標計画",
    quiz6text:
      "ランニングにおいて練習方法として適しているものを選んでください!",
    quiz6srcs: [
      { checked: false, score: 6, item: "全力走では、休憩を長く取って行う。" },
      {
        checked: false,
        score: 2,
        item: "インターバル走は休憩を長く取って行う練習として適している",
      },
      {
        checked: false,
        score: 2,
        item: "ペース走を行うときは息が上がらない速度で行う",
      },
      {
        checked: false,
        score: 0,
        item: "ロングジョグは息が上がる程度の速度を維持し続けないと効果は小さい",
      },
    ],
    quiz6selected: 0,
    quiz6userselected: 0,
    quiz6Comment: {},
    quiz6CommentId:
      "https://tlwiki.org/%e7%b7%b4%e7%bf%92%e6%96%b9%e6%b3%95%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6/",

    quiz7category: "フォーム・技術",
    quiz7text:
      "腰の落ちたフォームを改善するために「効果の低いもの」を選んでください",
    quiz7srcs: [
      { checked: false, score: 2, image: "/img/check/f_3-1.jpg" },
      { checked: false, score: 2, image: "/img/check/f_3-2.jpg" },
      { checked: false, score: 2, image: "/img/check/f_3-3.jpg" },
      { checked: false, score: 6, image: "/img/check/f_3-4.jpg" },
    ],
    quiz7selected: 3,
    quiz7userselected: [],
    quiz7Comment: {},
    quiz7CommentId:
      "https://tlwiki.org/%e8%85%b0%e3%81%ae%e8%90%bd%e3%81%a1%e3%81%9f%e3%83%95%e3%82%a9%e3%83%bc%e3%83%a0%e6%94%b9%e5%96%84/",

    quiz8category: "体に関すること",
    quiz8text:
      "ランニング前後の食事摂取の方法として「適切ではない」組み合わせのものを「2つ」選んでください",
    quiz8srcs: [
      { checked: false, score: 3, image: "/img/check/t_3-1.jpg" },
      { checked: false, score: 3, image: "/img/check/t_3-2.jpg" },
      { checked: false, score: 1, image: "/img/check/t_3-3.jpg" },
      { checked: false, score: 1, image: "/img/check/t_3-4.jpg" },
    ],
    quiz8selected: [0, 1],
    quiz8userselected: [],
    quiz8Comment: {},
    quiz8CommentId:
      "https://tlwiki.org/%e5%a4%a7%e4%bc%9a%e5%89%8d%e3%81%ae%e9%a3%9f%e4%ba%8b%e6%96%b9%e6%b3%95%ef%bc%81/",

    quiz9category: "目標計画",
    quiz9text: "課題に合わせた練習内容として適したものを選んでください!",
    quiz9srcs: [
      { checked: false, score: 2, item: "1km走のタイムが上がらない-ペース走" },
      {
        checked: false,
        score: 2,
        item: "5km走の途中で疲労で脚が動かない感覚がある-短い距離の全力走",
      },
      {
        checked: false,
        score: 2,
        item: "10km走のタイムが上がらない-インターバル走",
      },
      {
        checked: false,
        score: 6,
        item: "30km以降いつも歩いてしまう-ロングジョグ",
      },
    ],
    quiz9selected: 3,
    quiz9userselected: 0,
    quiz9Comment: {},
    quiz9CommentId: "https://tlwiki.org/%e7%b7%b4%e7%bf%92%e5%8a%b9%e6%9e%9c/",

    quiz10category: "フォーム・技術",
    quiz10text: "ご自身でペースをコントロールできますか？",
    quiz10srcs: [
      { checked: false, score: 1, item: "普段タイムの計測を行っていない" },
      {
        checked: false,
        score: 6,
        item: "1kmあたり5秒以内のふり幅でコントロールできる",
      },
      {
        checked: false,
        score: 2,
        item: "1kmあたり10秒以内のふり幅でコントロールできる",
      },
      { checked: false, score: 1, item: "1kmあたり11秒以上タイムが変動する" },
    ],
    quiz10selected: 1,
    quiz10userselected: 0,
    quiz10Comment: {},
    quiz10CommentId:
      "https://tlwiki.org/%e7%a7%92%e5%8d%98%e4%bd%8d%e3%81%a7%e3%83%9a%e3%83%bc%e3%82%b9%e3%82%92%e3%82%b3%e3%83%b3%e3%83%88%e3%83%ad%e3%83%bc%e3%83%ab%e3%81%99%e3%82%8b%e6%96%b9%e6%b3%95/",

    quiz11category: "体に関すること",
    quiz11text:
      "クールダウン・セルフケアの方法と効果で組み合わせが「間違っているもの」を選んでください",
    quiz11srcs: [
      { checked: false, score: 2, image: "/img/check/t_4-1.jpg" },
      { checked: false, score: 3, image: "/img/check/t_4-2.jpg" },
      { checked: false, score: 2, image: "/img/check/t_4-3.jpg" },
      { checked: false, score: 6, image: "/img/check/t_4-4.jpg" },
    ],
    quiz11selected: 3,
    quiz11userselected: [],
    quiz11Comment: {},
    quiz11CommentId:
      "https://tlwiki.org/%e5%a4%a7%e4%bc%9a%e5%89%8d%e6%97%a5%e3%81%ae%e3%82%bb%e3%83%ab%e3%83%95%e3%82%b1%e3%82%a2%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6/",

    quiz12category: "目標計画",
    quiz12text:
      "フルマラソンを○○切りするための設定タイムとしてものとして「適切ではないもの」を選んでください ※あなたのベストタイムに合わせて問題文が変わるようになっています!あなたのレベルに沿った答えをお選びください!",
    quiz12srcs: [
      { checked: false, score: 6, item: "1kmを○○で走ることができる" },
      { checked: false, score: 3, item: "5kmを○○で走ることができる" },
      { checked: false, score: 0, item: "10kmを○○で走ることができる" },
      { checked: false, score: 1, item: "ハーフを○○で走ることができる" },
    ],
    quiz12selected: 0,
    quiz12userselected: 0,
    quiz12Comment: {},
    quiz12CommentId: "",

    extraquize1: "フルマラソンを5時間切りするために 適切な内容をお選びください",
    extraquize1srcs: [
      {
        checked: false,
        score: 0,
        item: "10km全力を70分で走れる走力が望ましい",
      },
      {
        checked: false,
        score: 0,
        item: "10km全力を75分で走れる走力が望ましい",
      },
      { checked: false, score: 6, item: "7分/kmで完走すれば5時間を切れる" },
      { checked: false, score: 0, item: "8分/kmで完走すれば5時間を切れる" },
    ],
    extraquize1point: 0,
    extraquize1selected: 2,
    extraquize1Comment: {},
    extraquize1CommentId:
      "https://tlwiki.org/%e3%80%8e%e3%82%b5%e3%83%96%ef%bc%95%e3%80%8f%e3%82%92%e7%8b%99%e3%81%88%e3%82%8b%e5%9f%ba%e6%ba%96/",

    extraquize2: "フルマラソンを4時間切りするために 適切な内容をお選びください",
    extraquize2srcs: [
      { checked: false, score: 0, item: "1kmを4分40秒で走ることができる" },
      { checked: false, score: 0, item: "5kmを25分で走ることができる" },
      { checked: false, score: 6, item: "10kmを45分で走ることができる" },
      { checked: false, score: 0, item: "ハーフを51分~52分で走ることができる" },
    ],
    extraquize2point: 0,
    extraquize2selected: 2,
    extraquize2Comment: {},
    extraquize2CommentId:
      "https://tlwiki.org/%e3%80%8e%e3%82%b5%e3%83%96%ef%bc%94%e3%80%8f%e3%81%ae%e5%a3%81%e3%82%92%e8%b6%85%e3%81%88%e3%82%8b%e5%9f%ba%e6%ba%96%e3%81%a8%e7%b7%b4%e7%bf%92%e3%83%a1%e3%83%8b%e3%83%a5%e3%83%bc%e3%83%bb%e5%bf%85/",

    extraquize3:
      "フルマラソンを3時間30分切りするために 適切な内容をお選びください",
    extraquize3srcs: [
      { checked: false, score: 0, item: "5kmを25分で走ることができる" },
      { checked: false, score: 0, item: "5kmを21分40秒で走ることができる" },
      { checked: false, score: 0, item: "10kmを45分で走ることができる" },
      { checked: false, score: 6, item: "ハーフを51分~52分で走ることができる" },
    ],
    extraquize3point: 3,
    extraquize3selected: 3,
    extraquize3Comment: {},
    extraquize3CommentId:
      "https://tlwiki.org/%e3%80%8e%e3%82%b5%e3%83%963-5%e3%80%8f%e3%81%ae%e5%a3%81%e3%82%92%e8%b6%85%e3%81%88%e3%82%8b%e5%9f%ba%e6%ba%96%e3%81%a8%e7%b7%b4%e7%bf%92%e3%83%a1%e3%83%8b%e3%83%a5%e3%83%bc%e3%83%bb%e5%bf%85/",

    extraquize4: "フルマラソンを3時間切りするために 適切な内容をお選びください",
    extraquize4srcs: [
      { checked: false, score: 0, item: "1kmを3分30秒で走ることができる" },
      { checked: false, score: 6, item: "5kmを21分40秒で走ることができる" },
      {
        checked: false,
        score: 0,
        item: "10kmを38分20秒~39分で走ることができる",
      },
      { checked: false, score: 0, item: "ハーフを22分~25分で走ることができる" },
    ],
    extraquize4point: 0,
    extraquize4selected: 1,
    extraquize4Comment: {},
    extraquize4CommentId:
      "https://tlwiki.org/%e3%80%8e%e3%82%b5%e3%83%963%e3%80%8f%e3%81%ae%e5%a3%81%e3%82%92%e8%b6%85%e3%81%88%e3%82%8b%e5%9f%ba%e6%ba%96%e3%81%a8%e7%b7%b4%e7%bf%92%e3%83%a1%e3%83%8b%e3%83%a5%e3%83%bc%e3%83%bb%e5%bf%85%e8%a6%81/",

    toatlFormandTec: 0,
    totalBody: 0,
    totalPurpose: 0,
  }),

  mounted: async function () {
    this.fullTime = this.$route.query.fullTime;
    this.fullMinute = this.$route.query.fullMinute;
    const selectAnswers = JSON.parse(this.$route.query.selectAnswers);
    //console.log(this.$store.getters.selectAnswers[0].answer)
    for (let i = 0; i < selectAnswers.length; i++) {
      //this.$set(this.quiz5userselected, 0, this.$store.state.selectAnswer[i].answer);
      if (i == 0) {
        this.quiz1userselected.push(selectAnswers[i].answer);
      } else if (i == 1) {
        this.quiz2userselected = selectAnswers[i].answer;
      } else if (i == 2) {
        this.quiz3userselected = selectAnswers[i].answer;
      } else if (i == 3) {
        for (let j = 0; j < selectAnswers[i].answer.length; j++) {
          //this.quiz4userselected.push(this.$store.getters.selectAnswers[i].answer[j])
          this.$set(this.quiz4userselected, j, selectAnswers[i].answer[j]);
        }
        console.log(this.quiz4userselected);
      } else if (i == 4) {
        this.quiz5userselected.push(selectAnswers[i].answer);
      } else if (i == 5) {
        this.quiz6userselected = selectAnswers[i].answer;
      } else if (i == 6) {
        this.quiz7userselected.push(selectAnswers[i].answer);
      } else if (i == 7) {
        for (let j = 0; j < selectAnswers[i].answer.length; j++) {
          this.quiz8userselected.push(selectAnswers[i].answer[j]);
        }
      } else if (i == 8) {
        this.quiz9userselected = selectAnswers[i].answer;
      } else if (i == 9) {
        this.quiz10userselected = selectAnswers[i].answer;
      } else if (i == 10) {
        this.quiz11userselected.push(selectAnswers[i].answer);
      } else if (i == 11) {
        this.quiz12userselected = selectAnswers[i].answer;
      }
    }

    // this.quiz1Comment = await this.blog.find((blog) => {
    // 	return (blog.id == this.quiz1CommentId);
    // });
    // this.quiz2Comment = await this.blog.find((blog) => {
    // 	return (blog.id == this.quiz2CommentId);
    // });
    // this.quiz3Comment = await this.blog.find((blog) => {
    // 	return (blog.id == this.quiz3CommentId);
    // });
    // this.quiz4Comment = await this.blog.find((blog) => {
    // 	return (blog.id == this.quiz4CommentId);
    // });
    // this.quiz5Comment = await this.blog.find((blog) => {
    // 	return (blog.id == this.quiz5CommentId);
    // });
    // this.quiz6Comment = await this.blog.find((blog) => {
    // 	return (blog.id == this.quiz6CommentId);
    // });
    // this.quiz7Comment = await this.blog.find((blog) => {
    // 	return (blog.id == this.quiz7CommentId);
    // });
    // this.quiz8Comment = await this.blog.find((blog) => {
    // 	return (blog.id == this.quiz8CommentId);
    // });
    // this.quiz9Comment = await this.blog.find((blog) => {
    // 	return (blog.id == this.quiz9CommentId);
    // });
    // this.quiz10Comment = await this.blog.find((blog) => {
    // 	return (blog.id == this.quiz10CommentId);
    // });
    // this.quiz11Comment = await this.blog.find((blog) => {
    // 	return (blog.id == this.quiz11CommentId);
    // });
    // //console.log(this.userAnswers)
    // this.extraquize1Comment = await this.blog.find((blog) => {
    // 	return (blog.id == this.extraquize1CommentId);
    // });
    // this.extraquize2Comment = await this.blog.find((blog) => {
    // 	return (blog.id == this.extraquize2CommentId);
    // });
    // this.extraquize3Comment = await this.blog.find((blog) => {
    // 	return (blog.id == this.extraquize3CommentId);
    // });
    // this.extraquize4Comment = await this.blog.find((blog) => {
    // 	return (blog.id == this.extraquize4CommentId);
    // });
  },

  methods: {
    moveTo(to) {
      // window.open(`/${to}`, '_blank');
      window.open(`${to}`, "_blank");
    },
  },
  async asyncData(ctx) {
    // const quizCommentIds = [
    // 	"rke9zq62x",
    // 	"nr0oamb2x",
    // 	"zpkbhj0q9",
    // 	"zxkx8pntb",
    // 	"1nyhd6cmb",
    // 	// "",
    // 	"rke9zq62x",
    // 	// "",
    // 	// "",
    // 	"rt7thpswy",
    // 	// "",
    // 	//12問目
    // 	"ze6dougzw",
    // 	"xocg0ahey1",
    // 	"4xphoxv-1",
    // 	"3oevrcrl4"
    // ]
    // let query = "?ids=" + quizCommentIds.join(',')
    // const { data } = await ctx.$axios.get(
    //     // your-service-id部分は自分のサービスidに置き換えてください
    //     `https://runtrainingnote.microcms.io/api/v1/blog${query}`,
    //     {
    //         headers: { 'X-API-KEY': '52975eee-cb37-4b73-9769-bb902ce81adc' }
    //     }
    // )
    // // console.log(data)
    // return {
    // 	blog: data.contents
    // }
  },
  computed: {
    classList: function () {
      return function (no, item) {
        let classList = [];
        if (no === 2) {
          if (item === 2) {
            classList.push("boxshadow");
          }
          if (item === this.quiz2userselected) {
            classList.push("border");
          }
        }
        if (no === 3) {
          if (item === 3) {
            classList.push("boxshadow");
          }
          if (item === this.quiz3userselected) {
            classList.push("border");
          }
        }
        if (no === 6) {
          if (item === 0) {
            classList.push("boxshadow");
          }
          if (item === this.quiz6userselected) {
            classList.push("border");
          }
        }
        if (no === 9) {
          if (item === 3) {
            classList.push("boxshadow");
          }
          if (item === this.quiz9userselected) {
            classList.push("border");
          }
        }
        if (no === 10) {
          if (item === 1) {
            classList.push("boxshadow");
          }
          if (item === this.quiz10userselected) {
            classList.push("border");
          }
        }
        if (no === 11) {
          if (item === 2) {
            classList.push("boxshadow");
          }
          if (item === this.quiz12userselected) {
            classList.push("border");
          }
        }
        if (no === 12) {
          if (item === 2) {
            classList.push("boxshadow");
          }
          if (item === this.quiz12userselected) {
            classList.push("border");
          }
        }
        if (no === 13) {
          if (item === 3) {
            classList.push("boxshadow");
          }
          if (item === this.quiz12userselected) {
            classList.push("border");
          }
        }
        if (no === 14) {
          if (item === 1) {
            classList.push("boxshadow");
          }
          if (item === this.quiz12userselected) {
            classList.push("border");
          }
        }
        return classList;
      };
    },
  },
};
</script>
