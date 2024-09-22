<script >
import {createApp} from "vue";
import App from "@/App.vue";

export default {
  name:`HomePageBlock6`,
  data() {
    return {questions : questions}
  }
}
const questions = {
  "Question 1":{
    "number" : '1.  ' ,
    "open" : false,
    "title" : "think ahead and boost your business",
    "answer" : "No!!"
  },
  "Question 2":{
    "number" : '2.  ' ,
    "open" : false,
    "title" : "how consultency experts works",
    "answer" : "Gerges"
  },
  "Question 3":{
    "number" : '3.  ' ,
    "open" : false,
    "title" : "what is the best advice for growth",
    "answer" : "DiDo"
  },
  "Question 4":{
    "number" : '4.  ' ,
    "open" : false,
    "title" : "how to improve your business",
    "answer" : "Nagy"
  }
}
const app = createApp(App);


app.mount('#app');
</script>

<template>
  <div class="qa">
          <h2>QUESTION ANSWERS</h2>
          <p>we help our clients renew their business</p>
          <div class="question"  v-for="question in questions" :key="question.answer" @click="question.open = !question.open" >
            <h3 ><span>{{question.number}}</span> {{question.title}}</h3>
            <div class="answer" v-show="question.open">
              <p >{{question.answer}}</p>
            </div>
          </div>

            <div class="exp">
                <p><span>30</span><br><br>  Years of Experience</p>
            </div>
          <div class="checked">
              <p><i class="fa fa-check" style="font-size:25px"></i> Nesctetur cing elit.</p>
              <p><i class="fa fa-check" style="font-size:25px"></i>
                Suspe ndisse</p>
              <p><i class="fa fa-check" style="font-size:25px"></i>
                Entum Estibulum</p>
              <p><i class="fa fa-check" style="font-size:25px"></i>
                if you are going to use</p>
              <p><i class="fa fa-check" style="font-size:25px"></i>
                if you are going to use</p>
          </div>
  </div>
</template>

<style scoped>
.qa{
  height: 900px;
  position: relative;
  background-color: #FFFFFF;
}
.qa h2{
  position: absolute;
  font-weight: bold;
  display: inline-flex;
  right: 40%;
  top: 10%;
}
.qa p{
  font-weight: bold;
  color: #8F8DA0;
  position: absolute;
  display: inline-flex;
  right: 40%;
  top: 20%;
}
.question{
  position: relative;
  width: 500px;
  display: grid;
  justify-items: left;
  justify-content: left;
  text-align: left;
  margin-bottom: 10px;
  top: 30%;
  left: 20%;
}
.question h3{
  padding: 30px;
  width: 500px;
  text-align: left;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  background-color: #F2F4F8;
  font-size: 18px;
}
.question h3:hover{
  cursor: pointer;
}
.question span{
  color: #3C72FC;
}
.checked{

}
.checked i{
  width: 0;
  color: #2D95FD;

}
.checked p{
  position: relative;
  display: flex;
  left: 50%;
  bottom: -80px;
  text-align: left;
  width: 500px;
  font-size: 15px;
  margin: 0;
  gap: 30px;
}
.exp{
  position: absolute;
  left: 80%;
  bottom: 43%;
}
.exp p{
  background-color: #3C72FC;
  color: #FFFFFF;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: absolute;

}
.exp span{
  position: absolute;
  font-size: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
  top: 10px;
}

.answer p{
  color: black;
  position: relative;
  padding: 30px;
  background-color: white;
  width: 500px;
  left: 0 ;
  box-shadow: -10px 10px 30px grey;
  border-radius: 10px;
}

@media screen and (max-width: 1440px) {
  .exp {
    position: absolute;
    right: 10%;
    bottom: 45%;
  }
  .checked{
    position: absolute;
    right: 25%;
    bottom: 36%;
  }
}

@media screen and (max-width: 1024px) {
  .checked {
    position: absolute;
    top: 30%;
    left: 65%;
  }
  .checked p{
    width: 300px;
  }
}
@media screen and (max-width: 768px){
.checked p{
  position: relative;
  top: 400px;
  left: -300px;
}
  .exp {
    bottom: 25%;
  }
  .question h3{
    font-size: 17px;
    padding: 20px;
  }
}
@media screen and (max-width: 425px){

  .qa {
    position: relative;
    width: 165%;
  }
}
</style>