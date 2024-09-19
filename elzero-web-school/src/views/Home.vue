<template>
  <div class="home">
    <home-page-block1/>
    <home-page-block2/>
    <home-page-block4/>
    <home-page-block5/>
    <home-page-block6/>
    <home-page-block7/>
    <home-page-block8/>
    <home-page-block10/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePageBlock1 from "@/components/HomePageStyle/HomePageBlock1.vue";
import HomePageBlock2 from "@/components/HomePageStyle/HomePageBlock2.vue";
import HomePageBlock4 from "@/components/HomePageStyle/HomePageBlock4.vue";
import HomePageBlock5 from "@/components/HomePageStyle/HomePageBlock5.vue";
import HomePageBlock6 from "@/components/HomePageStyle/HomePageBlock6.vue";
import HomePageBlock7 from "@/components/HomePageStyle/HomePageBlock7.vue";
import HomePageBlock8 from "@/components/HomePageStyle/HomePageBlock8.vue";
import HomePageBlock10 from "@/components/HomePageStyle/HomePageBlock10.vue";

export default {
  name: `Home`,
  components: { HomePageBlock1,
    HomePageBlock2,

    HomePageBlock4,
    HomePageBlock5,
    HomePageBlock6,
    HomePageBlock7,
    HomePageBlock8,
    HomePageBlock10},
}
</script>

