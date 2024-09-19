<script >
export default {
  name: `Dropdown`,
  props: {
    services: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>

    <div class="dropdown" >
        <ul>
          <li class="menu"  v-for="service in services" :key="service.Title"> <a :href="service.link">{{service.Title}}</a></li>
        </ul>
    </div>

</template>

<style scoped>
.dropdown {
  position: absolute;
  top: 60px;
  left: 37.8%;

}

.dropdown ul{
  position: fixed;
  background-color: #8F8DA0;
  list-style: none;
  width: 20%;
  padding-left: 7px;
  z-index: 1500;
  text-align: left;
  border-radius: 5px;
  margin-left: 20px;
}
.dropdown li{
  background-color: #8F8DA0;
  padding: 10px;
  width: 99%;
  box-shadow: 0px 0px 15px grey inset;
  font-size: 18px;
  font-weight: bold;
}
.dropdown li:hover{
  background-color: #716f7d;
}
.menu a{
  text-decoration: none;
  color: black;

}

</style>