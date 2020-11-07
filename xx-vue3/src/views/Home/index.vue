<template>
<div class="home">
    <!--导航-->
    <HomeHeader :category="category" @setCurrentCategory="setCurrentCategory"></HomeHeader>
    <!--传入store里面拿到的值-->
    <div class="content">hello</div>
    <!--轮播图-->
    <HomeSwiper></HomeSwiper>
    <!--显示列表-->
    <HomeList></HomeList>
</div>
</template>

<style lang="scss">
.content {
    margin-top: 65px;
}
</style>

<script lang="ts">
import HomeHeader from "./home-header.vue";
import HomeSwiper from "./home-swiper.vue";
import HomeList from "./home-list.vue";
import {
    computed,
    defineComponent
} from "vue";
import {
    Store,
    useStore
} from "vuex";

import * as Types from "../../store/action_types";
import {
    IGlobalstate
} from "../../store";
import {
    CATEGORY
} from "../../Typing/home";

function useCategory(store: Store < IGlobalstate > ) {
    // computed
    // console.log("state", store.state.home);
    let category = computed(() => store.state.home.currentCategory);

    function setCurrentCategory(category: CATEGORY) {
        // console.log("diayongle");
        store.commit(`home/${Types.SET_CURRENTCATEGORY}`, category); //commit home module 里面的‘SET_CURRENTCATEGORY’。  so  ->  `home/'SET_CURRENTCATEGORY'` ,带上参数
    }
    return {
        category,
        setCurrentCategory,
    };
}
export default defineComponent({
    components: {
        HomeHeader,
        HomeSwiper,
        HomeList,
    },

    setup() {
        // 需要获取store里面的分类状态，并且有个更改状态的功能
        // 新建store
        let store = useStore < IGlobalstate > ();
        //操作store获得，store里home的state，以及得到改变其状态的方法
        let {
            category,
            setCurrentCategory
        } = useCategory(store);

        console.log("category", store.state.home.currentCategory);

        return {
            category,
            setCurrentCategory,
        };
    },
});
</script>
