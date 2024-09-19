<template>
  <div>
    <div class="service-header">
      <h1> {{pageName}}</h1>
      <p>{{pageDescription}}</p>
    </div>
      <div>
        <ServiceComponent  v-for="image in images" :key="image.id" :alt="image.alt"  :src="image.image"/>
      </div>
  </div>
</template>

<script>
import ServiceComponent from "@/components/ServicePage/ServiceComponent.vue"
import ServicesImages from "@/json/services_images.json"

export default {
  data: function ()
  {
    return {
      pageName: "Our Services",
      pageDescription: "Everything You Need to Know",
      images: ServicesImages
    };
  },
  name: `service`,
  components: { ServiceComponent},

}

</script>

<style scoped>

</style>