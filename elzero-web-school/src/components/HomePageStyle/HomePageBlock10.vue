<script >
export default {
  name:`HomePageBlock10`
}
</script>

<template>
  <div class="last">
    <h3>HIGHEST SUCCESS RATES</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia tincidunt ullamcorper. Nulla faucibus orci vel nulla viverra mattis. Praesent tincidunt eu turpis quis bibendum.</p>
    <h3>WE BUILD EXPERIENCE</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia tincidunt ullamcorper. Nulla faucibus orci vel nulla viverra mattis. Praesent tincidunt eu turpis quis bibendum.</p>
        <i class="fa fa-check-circle" style="font-size:36px"></i>
        <i class="fa fa-check-circle" style="font-size:36px"></i>
  </div>
</template>

<style scoped>
.last {
  height: 500px;
  position: relative;
  text-align: left;
  width: 30%;
  left: 30%;
  top: 100px;
}
.last h3{
  font-weight: bold;
}
.last p {
  width: 80%;
}
.fa-check-circle {
  display: grid;
  position: relative;
  right: 50px;
  bottom: 50%;
  margin-bottom: 100px;
}
@media screen and (max-width: 1024px) {
  .last {
    display: grid;
    width: 80%;
    left: 20%;
    bottom: 10%;
  }
  .last i{
    bottom: 140%;
  }
}

@media screen and (max-width: 425px){

  .last {
    position: relative;
    width: 145%;
  }
}
</style>