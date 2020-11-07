<template>
<div class="home_header">
    <img class="img" src="@/assets/logo.png" />
    <van-dropdown-menu>
        <van-dropdown-item :modelValue="category" :options="options" @change="change" />
    </van-dropdown-menu>
</div>
</template>

<style lang="scss">
.home_header {
    height: 65px;
    background: #2a2a2a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    padding: 0 2.5%;
    position: fixed;
    top: 0;
    left: 0;

    img {
        height: 50px;
    }
}
</style>

<script lang="ts">
import {
    defineComponent,
    PropType,
    reactive,
    toRefs
} from "vue";
import {
    CATEGORY
} from "../../Typing/home";

export default defineComponent({
    props: {
        //接受传进来的参数  ,比如之前的category
        category: {
            type: Number as PropType < CATEGORY > ,
        },
    },
    emits: ["setCurrentCategory"],
    setup(props, context) {
        console.log("category", props.category);
        // 这个时候传进来的是number类型;
        let state = reactive({
            options: [{
                    text: "全部课程",
                    value: CATEGORY.ALL,
                },
                {
                    text: "react课程",
                    value: CATEGORY.REACT,
                },
                {
                    text: "vue课程",
                    value: CATEGORY.VUE,
                },
                {
                    text: "node课程",
                    value: CATEGORY.NODE,
                },
            ],
        });

        function change(value: CATEGORY) {
            // emits: ["setCurrentCategory", value];
            // console.log("context", context);
            context.emit("setCurrentCategory", value);
            // console.log("vaule", value);
            console.log("cate", props.category);
        }

        return {
            ...toRefs(state),
            change,
        };
    },
});
</script>
