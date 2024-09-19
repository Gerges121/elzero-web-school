<script >
export default {
  name: `HomePageBlock8`,
  data() {
    return {
      num: 0,
      target: 420,
      interval: null
    };
},
  methods: {
   numcalc() {
     this.interval = setInterval(() => {
       if (this.num < this.target){
         this.num += 10;
       } else {
         clearInterval(this.interval);
       }
     }, 40);
   }
},
  mounted() {
    this.numcalc();
  },

  beforeUnmount() {
    if (this.interval){
      clearInterval(this.interval)
    }
  }
}

</script>

<template>
  <div class="black">
          <div class="cs">
            <i class='fas fa-users' style='font-size:50px'></i>
            <p><br><span>{{ num }}</span><br>CONSULTING SOLUTIONS</p>
          </div>
          <div class="cs">
            <i class='fas fa-users' style='font-size:50px'></i>
            <p><br><span>{{ num }}</span><br>CONSULTING SOLUTIONS</p>
          </div>
          <div class="cs">
            <i class='fas fa-users' style='font-size:50px'></i>
            <p><br><span >{{ num }}</span><br>CONSULTING SOLUTIONS</p>
          </div>
          <div class="cs">
            <i class='fas fa-users' style='font-size:50px'></i>
            <br><p><br><span>{{ num }}</span><br>CONSULTING SOLUTIONS</p>
          </div>
    <div class="BGbox">
      <p><span>BUSINESS GROWTH</span></p>
      <p>BUSINESS GROWTH</p>
      <p>BUSINESS GROWTH</p>
    </div>
        </div>
</template>

<style scoped>
.black{
  background-color: #0C1731;
  height: 500px;
  position: relative;
}
.cs {
  position: relative;
  display: inline-flex;
  color: white;

}
.cs i{
  color: #3C72FC;
  position: relative;
  left: 50%;
  top: 30px;
  background-color: black;
  padding: 40px;
  padding-top: 20px;
  height: 100px;
}
.cs span{
  font-size: 70px;
  font-weight: bold;
}
.cs p{
  position: relative;
  top: 100px;
}

.BGbox {
  display: flex;
  position: absolute;
  background-color: #F2F4F8;
  left: 30%;
  bottom: -50px;
  box-shadow: 0px 0px 20px grey inset;
  border-radius: 5px;
}

.BGbox p{
  margin: 50px;
  font-weight: bold;

}

</style>