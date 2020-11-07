<template>
<div id="nav">
    <router-view />
    <van-tabbar route>
        <van-tabbar-item to="/" icon="home-o">home</van-tabbar-item>
        <van-tabbar-item to="/profile" icon="setting-o">profile</van-tabbar-item>
        <van-tabbar-item to="/mine" icon="friends-o">mine</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>
