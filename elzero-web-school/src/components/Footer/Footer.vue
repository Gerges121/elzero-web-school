<script >
export default {
  name:`footer`
}
</script>

<template>
  <div class="footer">
    <div class="logo"><img src="@/assets/logo.png"></div>
    <h4>Explore</h4>
    <h4>NEWSLETTER</h4>
    <div class="fnav">
      <p>About</p>
      <p>Meet Our Team</p>
      <p>Case Studies</p>
      <p>Latest News</p>
      <p>Contact</p>
    </div>
    <div class="fnav2">
      <p>Support</p>
      <p>Terms of use</p>
      <p>Privacy & Policy</p>
      <p>Help</p>
    </div>
    <div class="inf">
      <p>Welcome to our consultency agency. Lorem ipsum simply <br> text amet cing elit simply text amet cing elit</p>
    </div>
    <div class="lcontacticons">
      <i class="fa fa-phone" style="font-size:15px">&nbsp;&nbsp;+92 666 888 0000</i>
      <i class="fa fa-envelope" style="font-size:15px">&nbsp;&nbsp;needhelp@company.com</i>
    </div>
    <div class="subscribe">
      <p>Subscribe for latest articles and resources</p>
      <input type="text" placeholder="Email Address">
      <button>REGISTER</button>
    </div>
    <div class="smif">
      <i class="fa fa-instagram fa-4x icon-3d"></i>
      <i class="fa fa-linkedin fa-4x icon-3d"></i>
      <i class="fa fa-twitter fa-4x icon-3d"></i>
      <i class="fa fa-facebook fa-4x icon-3d"></i>
    </div>
  </div>
</template>

<style scoped>
.footer{
  background-color: #0F0D1D;
  height: 400px ;
  position: relative;

}
.footer h4{
  position: relative;
  display: inline-flex;
  margin-left: 200px;
  color: white;
  top: 20px;
}
.fnav {
  color: #8F8DA0;
  text-align: left;
  position: relative;
  left: 43.5%;
  top: 10%;
  font-size: 13px;
  font-weight: bold;
  line-height: 20px;
  width: max-content;

}
.fnav2 {
  color: #8F8DA0;
  text-align: left;
  position: relative;
  left: 50%;
  bottom: 35%;
  font-size: 13px;
  font-weight: bold;
  line-height: 20px;
  width: max-content;

}

.inf {
  color: #92939C;
  line-height: 40px;
  font-size: 14px;
  position: absolute;
  bottom: 34%;
  left: 15%;
  text-align: left;
}

.lcontacticons {
  color: white;
  display: grid;
  position: absolute;
  bottom: 10%;
  left: 17%;
}
.lcontacticons i{
  margin-bottom: 30px;
}

.subscribe {
  position: absolute;
  left: 60%;
  bottom: 40%;
  background-color: black;
  padding: 60px;
  width: 25%;
}
.subscribe p{
  position: relative;
  left: 10%;
  bottom: 10px;
  font-size: 13px;
  color: #92939C;
  text-align: left;
  width: max-content;
}
.subscribe input{
  position: absolute;
  left: 50px;
  bottom: 20px;
  width: 80%;
  text-align: left;
  border: none;
  outline: none;
  padding: 20px 15px;
  border-radius: 5px;
}
.subscribe button{
  color: white;
  position: absolute;
  left: 70%;
  bottom: 30px;
  border: none;
  background-color: #3C72FC;
  padding: 5px;
  border-radius: 10px;
}

.logo {
  position: absolute;
  left: 20%;
  top: 15%;
}
.smif {
  color: #FFFFFF;
  position: absolute;
  bottom: 10px;
  right: 20%;
  width: max-content;

}
.smif i {
  margin-right: 10px;
  font-size: 30px;
}
</style>