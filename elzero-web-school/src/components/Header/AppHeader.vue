

<template>
  <div class="AppHeader">
    <div class="container">
      <div class="logo"> <img src="@/assets/logo.png"></div>
      <div class="line0"></div>
      <ul class="text-right">
        <li>  <router-link to="/" >Home</router-link> </li>
        <li  @mouseover="open = true" @mouseleave="open = false" >  <span v-if="open"><Dropdown :services="services"/> </span> Services </li>
        <li>  <router-link to="/About" >About</router-link> </li>
        <li>  <router-link to="/help" >help</router-link> </li>
        <li>  <router-link to="/blog" >blog</router-link> </li>
      </ul>
      <ul class="social-icons">
        <li> <a href="#" class="fa fa-instagram"></a> </li>
        <li> <a href="#" class="fa fa-linkedin"></a> </li>
        <li> <a href="#" class="fa fa-twitter"></a> </li>
        <li> <a href="#" class="fa fa-facebook"></a> </li>
      </ul>
      <div class="line1"></div>
      <div class="search-icon">
        <button type="submit"><i class="fa fa-search"></i></button>
        <div class="line2"></div>
      </div>
      <div class="contact">
        <p style="text-align: left;">Need Help?</p>
        <p style="text-align: left;">+92 666 888 0000</p>
      </div>
    </div>
  </div>
</template>

<script>
import {createApp} from "vue";
import App from "@/App.vue";
import Dropdown from "@/components/Header/Dropdown.vue";

export default {
  name: 'AppHeader',
  components: {
    Dropdown
  },

  data() {
    return {
      services: services,
      open: false
    }
  }
}
  const services = {
    "service 1 ": {"Title": "Service 1", "link" : "#"},
    "service 2 ": {"Title": "Service 2", "link" : "#"},
    "service 3 ": {"Title": "service 3", "link" : "#"}
  }

const app = createApp(App);


app.mount('#app');
</script>

<style lang="scss" scoped>
.AppHeader {
  position: fixed;
  background-color: #474747;
  color: #FFF;
  overflow: hidden;
  z-index: 1000;
  width: 100%;
  margin-top: -60px;
  height: 10%;
  padding: 10px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.logo {
  position: absolute;
  right: 92%;
  padding: 20px;
  float: left;
  width: 10%;

}
ul {
  list-style: none;
    float: left;
    margin: 0;
    li {
      padding: 20px;
      display: inline-block;
      font-size: 18px;
      color: white;
      cursor: pointer;
      background-color:transparent;
    }

}
.social-icons {
  margin-right: 0px;
  float: right;
  right: 250px;
  position: absolute;
}
.social-icons a {
  color: white;

}

.search-icon button{
  color: white;
  background: transparent;
  border: none;
  float: right;
  right: 185px;
  position: absolute;
    margin-top: 25px;
}

.contact {
  position: absolute;
  float: right;
  right: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}
.line1 {
  width: 2px;
  height: 70px;
  background-color: white;
  transform: rotate(180deg);
  float: right;
  left: 450px;
  position: relative;

}
.line2 {
  width: 2px;
  height: 70px;
  background-color: white;
  transform: rotate(180deg);
  float: right;
  right: -170px;
  position: relative;

}

.line0 {
  width: 2px;
  height: 70px;
  background-color: white;
  float: left;
  right: 280px;
  position: relative;

}
.text-right a{
  color: white;
  text-decoration: none;
}
.text-right li:hover{
  background-color: #302d2d;
  border-radius: 10px;
  box-shadow: 0px 0px 10px grey;
}

</style>