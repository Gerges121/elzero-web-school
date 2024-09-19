<script >
export default {
  name:`HomePageBlock4`
}

</script>

<template>

  <div class="case-studies">
      <div class="case-header">
          <h3>NEW CASE STUDIES</h3>
          <p>we help our clients renew their business</p>
      </div>
    <div class="case-container">
          <div class="case-box">
            <div class="case-icon"><i class='fas fa-car-alt' style='font-size:36px'></i></div>

            <p>THROUGHT LEADERSHIP</p>
              <h3>BUSINESS GROWTH</h3>

          </div>
          <div class="case-box">
            <div class="case-icon"><i class='fas fa-car-alt' style='font-size:36px'></i></div>
              <p>THROUGHT LEADERSHIP</p>
              <h3>BUSINESS GROWTH</h3>
            </div>

          <div class="case-box">
            <div class="blue">
            <div class="case-icon"><i class='fas fa-car-alt' style='font-size:36px'></i></div>
              <p>THROUGHT LEADERSHIP</p>
              <h3>BUSINESS GROWTH</h3>
            </div>
          </div>
      </div>

          </div>
</template>

<style scoped>
.case-studies{
  position: relative;
  background-color: #F2F4F8;
  height: 900px;
}
.case-header {
position: absolute;
  display: inline-grid;
  align-items: center;
  text-align: center;
  justify-content: center;
  top: 25%;
  right: 42%;
}
.case-header h3{
  font-weight: bold;
  font-size: 30px;
}
.case-header p{
  font-weight: bold;
  font-size: 13px;
  color: #93939C;
}

.case-container{
  display: flex;
  position: absolute;
  bottom: 10%;
  left: 25%;
  background-color: #F2F4F8;
  height: 400px;
  width: 1200px;

  justify-content: space-between;

}
.case-box {
  position: relative;
  display: flex;
  background-color: #93939C;
  width: 400px;
  height: 500px;
  bottom: 40px;
  right: 110px;
  margin-right: 20px;
  justify-content: left;
  text-align: left;
  align-items: end;
  border-radius: 5px;
}
.case-box p{
  color: #FFFFFF;
  font-weight: bold;
  position: absolute;
  bottom: 20%;
  left: 20%;
}
.case-box h3{
  color: #FFFFFF;
  font-weight: bold;
  width: 10%;
  position: absolute;
  left: 20%;
  bottom: 8%;
}
.case-icon {
  color: white;
  position: absolute;
  bottom: 30%;
  left: 20%;
}
.blue {
  background-color: #3C72FC;
  color: #3C72FC;
  padding: 150px;
}
</style>