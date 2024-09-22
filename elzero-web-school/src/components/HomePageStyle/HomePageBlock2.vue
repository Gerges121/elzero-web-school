

<template>
  <div class="section3">
        <div class="section3-content">
          <h2>WE`RE LEADING IN THE MARKET</h2>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
          <p class="p1">We have 35+ years of experience. we offer marketing and consulting services</p>

         <div class="progress-bar">
          <div class="progress progress-88" >88%</div>
         </div>
          <br>
          <p class="consulting">CONSULTING</p>
                <br>
          <div class="progress-bar">
           <div class="progress progress-68" >68%</div>
          </div>
          <br>
          <p class="advices">ADVICES</p>
          </div>
    <div class="triangle">
      <div class="triangle-right"></div>

    </div>
    <div class="columns-container">
      <div class="column">
        <div class="icon-box">01</div>
        <h3>GET PROFESSIONAL ADVICE</h3>
        <p>There are many variations of available but the majority have suffered alteration.</p>
      </div>
      <div class="column">
        <div class="icon-box">02</div>
        <h3>TRUSTED & PROFESSIONAL</h3>
        <p>There are many variations of available but the majority have suffered alteration.</p>
      </div>
    </div>
  </div>

</template>

<script >
export default {
  name: `HomePageBlock2`
}
</script>


<style scoped>
.section3{
  padding: 300px;
  background-color: #FFFFFF;
  position: relative;
}

.section3-content{
  position: absolute;
  right: 20%;
  bottom: 20%;
  inline-size: 25%;
  text-align: left;


}
.p1{
  font-weight: bold;
  color: #3C72FC;
  font-size: 20px;
}
.progress-bar{
  background-color: #F2F4F8;
  border-radius: 10px;
}
.progress-68{
  color: white;
  background-color:  #3C72FC;;
  width: 68%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}
.progress-88{
  color: white;
  background-color:  #3C72FC;;
  width: 88%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}
.triangle-right{
  width: 0px;
  height: 0px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid white;

  position: relative;
  left: 35px;
  top: 30px;

}
.triangle{
 width: 80px;
  height: 80px;
  background-color: #3C72FC;
  position: absolute;
  top: 10%;
  left: 20%;
  border-radius: 5px;
}
.columns-container{
  display: flex;
  position: absolute;
  top: 40%;
  width: 50%;
  height: 100%;
  z-index: 20;
}

.column {
  width: 30%;
  height: 200px;
  position: relative;
  left: 20%;
  background-color: white;
  box-shadow: -10px 0px 30px gray;
  border-radius: 5px;
  text-align: left;
  padding-right: 500px;
  top: 50%;
}
.column h3{
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  align-items: center;
  display: inline;
  position: absolute;
  left: 20%;
  top: 30%;
}
.column p{
  position: absolute;
  width: 60%;
  left: 20%;
  bottom: 20%;
}
.icon-box {
  background-color: #EBF1FF;
  color: #3C72FC;
  width: 13%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  left: 20px;
  top: 30px;
}


@media screen and (max-width: 1440px) {
  .section3-content {
    position: absolute;
    top: 8%;
  }
  .columns-container{
    position: absolute;
    left: 90px;
  }
}

@media screen and (max-width: 1024px){
  .columns-container {
    width: 0%;
    position: absolute;
    left: 13%;
  }
  .column {
    padding-right: 400px;
  }
  .column h3{
    position: absolute;
    top: 40px;
  }
}
@media screen and (max-width: 768px){
  .columns-container {
    position: absolute;
    left: 30px
  }
  .column h3{
    font-size: 17px;
  }
  .column {

    padding-right: 350px;
  }
  .progress-bar {
    position: relative;
    bottom: 50%;
    right: 150%;
  }
  .consulting {
    position: relative;
    bottom: 220px;
    right: 280px;
  }
  .advices {
    position: relative;
    bottom: 220px;
    right: 280px;
  }
}

@media screen and (max-width: 452px)
{
  .columns-container{
    height: 0px;
    position: absolute;
    top: 600px;
    left: 0px;
  }
  .columns {
    padding: 10px;
  }
  .section3-content h2{
    font-size: 15px;
    font-weight: bold;
    width: 120%;
  }
  .section3-content p{

    width: 130%;
  }
  .section3{
    padding: 349px;
  }

  .progress-bar{
    position: relative;
    top: -200px;
  }
}


</style>