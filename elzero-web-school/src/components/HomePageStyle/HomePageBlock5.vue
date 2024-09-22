<script >
export default{
  name: `HomePageBlock5`
}
</script>

<template>
  <div class="brown-block">
          <p>MISSION IS TO PROTECT YOUR BUSINESS & MUCH MORE</p>
          <button>DISCOVER MORE</button>
        </div>
</template>

<style scoped>
.brown-block {
  background-color: #4B4955;
  height: 350px;
  align-content: center;
  justify-content: center;
  position: relative;
}
.brown-block p{
  position: absolute;
  color: white;
  font-size: 40px;
  width: 40%;
  left: 30%;
  top: 10%;
}
.brown-block button{
  position: absolute;
  align-content: center;
  right: 45%;
  bottom: 20%;
  color: white;
  background-color: #3C72FC;
  border: none;
  padding: 30px;
  border-radius: 5px;
}
@media screen and (max-width: 1440px) {
.brown-block button{
  position: absolute;
  bottom: 30px;
  right: 45%;
}
}

@media screen and (max-width: 1024px){
  .brown-block p{
    width: 70%;
    font-size: 30px;
    position: absolute;
    left: 15%;
  }
  .brown-block button{
    position: absolute;
    bottom: 30%;
    right: 41%;
  }
}

@media screen and (max-width: 768px){
  .brown-block button{
    right: 39%;
  }
}

@media screen and (max-width: 425px){

  .brown-block {
    position: relative;
    width: 165%;
  }
}
</style>