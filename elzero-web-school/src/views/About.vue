<template>
  <div class="about">
    <h1> {{ pageName }}</h1>
    <p> {{ pageDescription }} </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data: function ()
  {
  return {
    pageName: "About Us",
    pageDescription: "This is about us page",
  };
  },
  name: `About`,
};
</script>