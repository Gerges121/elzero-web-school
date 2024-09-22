<script >
export default {
  name:`HomePageBlock7`
}
</script>

<template>
  <div class="whatthey">
          <h2>WHAT THEY ARE TALKING ABOUT?</h2>
          <p>Trusted by more than 4200 customers</p>
          <i class='fas fa-arrow-right' style='font-size:40px'></i>
          <i class='fas fa-arrow-left' style='font-size:40px'></i>
    <div class="whatboxes">
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum convallis suscipitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum convallis suscipit</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum convallis suscipitLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum convallis suscipit</div>
    </div>
    <div class="tod">
      <div class="todd1">TODD HIGGINS <p>CUSTOMER</p></div>
      <div class="todd2">TODD HIGGINS <p>CUSTOMER</p></div>
    </div>
        </div>


</template>

<style scoped>
.whatthey{
  height: 600px;
  position: relative;
  background-color: #F2F4F8;
}
.whatthey h2{
font-weight: bold;
  width: 300px;
  font-size: 40px;
  text-align: left;
  position: absolute;
  left: 20%;
  top: 10%;
}
.whatthey p{
  position: absolute;
  left: 20%;
  top: 48%;
}

.fa-arrow-right{
  position: absolute;
  top: 55%;
  left: 27%;
  background-color: #FFFFFF;
  padding: 10px;
  border-radius: 50px;
}
.fa-arrow-left{
  position: absolute;
  top: 55%;
  left: 22%;
  background-color: #FFFFFF;
  padding: 10px;
  border-radius: 50px;
}

.whatboxes{
  position: absolute;
  width: 50%;
  display: flex;
  left: 40%;
  top: 20%;
  justify-content: center;
  height: 300px;
}
.whatboxes div{
  width: 600px;
  height: 300px;
  text-align: left;
  margin: 15px;
  box-shadow: -10px 10px 50px grey;
  background-color: #FFFFFF;
  padding: 40px;
  border-radius: 5px;
}

.tod {
  position: absolute;
  display: flex;
  gap: 350px;
  bottom: 40%;
  left: 45%;
  font-weight: bold;
  color: #3C72FC;
}
.todd1 p {
  left: 20px;
  top: 20px;
  color: #8F8DA0;
}
.todd2 p {
  left: 82%;
  top: 20px;
  color: #8F8DA0;
}

@media screen and (max-width: 1440px){
  .todd1{
    position: absolute;
    top: 10px;
    width: 200px;
    left: -60px;
  }
  .todd1 p{
    position: absolute;
    width: 200px;
    left: -10px;
  }
  .todd2{
    position: absolute;
    left: 300px;
    top: 10px;
    width: 200px;
  }
  .todd2 p{
    position: absolute;
    left: 50px;
  }
}

@media screen and (max-width: 1024px) {
  .whatthey h2{
    position: absolute;
    left: 10%;
  }
  .whatthey p{
    position: absolute;
    left: 10%;
  }
  .fa-arrow-right{
    position: absolute;
    left: 20%;
  }
  .fa-arrow-left{
    position: absolute;
    left: 10%;
  }
  .whatboxes {
    width: 60%;

  }
  .whatboxes div{
    height: 400px;
  }
  .tod {
    position: absolute;
    bottom: 30%;
  }
  .todd1 {
    position: absolute;
    left: -30px;
  }
  .todd1 p{
    position: absolute;
    left: -15px;
  }
  .todd2 {
    position: absolute;
    left: 280px;
  }
  .todd2 p{
    position: absolute;
    left: 40px;
  }
}

@media screen and (max-width: 768px) {
  .whatthey h2{
    width: 90%;
    font-size: 30px;
  }
  .whatthey p{
    top: 100px;
  }
  .fa-arrow-right {
    top: 130px;
  }
  .fa-arrow-left {
    top: 130px;
  }
  .whatboxes {
    width: 80%;
    left: 100px;
    padding-top: 40px;
  }
  .whatboxes div{
    width: 80%;
    height: 350px;
    position: relative;
    top: 20% ;
  }
  .tod {
    position: absolute;
  }
  .todd1 {
    position: absolute;
    top: 90px;
    left: -230px;

  }
  .tod p{
    position: absolute;
    top: 20px;
  }
  .todd2 {
    position: absolute;
    top: 90px;
    left: 80px;
  }
}
@media screen and (max-width: 425px){

  .whatthey {
    position: relative;
    width: 165%;
  }
}
</style>