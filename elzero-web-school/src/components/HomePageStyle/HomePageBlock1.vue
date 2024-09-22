<script >
export default {
  name: "HomePageBlock1",
  }


</script>

<template>
  <div>
  <div class="styled-block">
    <p>WELCOME TO CODESHAPER</p>
    <h1>CONSULTING FOR EVERY BUSINESS</h1>
    <button>DISCOVER MORE</button>
  </div>
  </div>

</template>

<style scoped>
.styled-block {
  padding: 200px;
  background-color: #474747;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: left;
}
.styled-block p{
  color: white;
  background-color: #444A4B;
  display: inline-block;
  padding: 15px 20px;

}
.styled-block h1{
  color: white;
  font-size: 60px;
  font-weight: bold;
  width: 50px;
}
.styled-block button{
  color: white;
  background-color: #3C72FC;
  border: none;
  padding: 20px;
}

@media screen and (max-width: 425px) {
  .styled-block {
    padding-right: 490px;
  }
}
</style>
