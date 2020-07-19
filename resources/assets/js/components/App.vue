<template>
    <div>
        <Header></Header>
        <SiteMenu></SiteMenu>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "./Header";
import SiteMenu from "./SiteMenu";

export default {
    components: {
        Header,
        SiteMenu
    }
};
</script>