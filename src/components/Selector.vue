<template>
<div>
 <section id="intro" class="slide-in-top">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <img src="logoSJO.png">
                <h1 class="display-4" style="font-size: 2.5rem;">Comparar GPUs</h1>
            </div>
        </div>
    </section>

    <section id="booking" class="slide-in-bottom">
      <div id="danger-alerts" v-if="error">
        <div class="alert alert-danger" role="alert"> {{alert}}</div>
      </div>
        <div class="row">
    <div class="col-6 ">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">GPU 1</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01"  @change="loadImg(1, $event)">
          <option value="" disabled selected>Selecciona...</option>
           <option v-for="gpu in gpus" :id="gpu._id" :value="gpu.image" :key="gpu._id">
            {{ gpu.name }}
          </option>
        </select>
      </div>

    </div>

    <div class="col-6 ">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">GPU 2</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01" @change="loadImg(2, $event)">
            <option value="" disabled selected>Selecciona...</option>
          <option  v-for="gpu in gpus" :id="gpu._id" :value="gpu.image" :key="gpu._id">
            {{ gpu.name }}
          </option>
        </select>
      </div>

    </div>
  </div>
   <div class="row">
      
      <div class="col-6 ">
        <div class="imggpu"><img class="imggpu2" v-bind:src="img1"></div>
      </div>
      <div class="col-6 ">
        <div class="imggpu"><img class="imggpu2" v-bind:src="img2"></div>
      </div>
   </div>
   <div class="row">
      <div class="col-12">
        <div class="button"><button class="btn btn-primary" type="submit" @click="compare()">COMPARAR</button></div>
      </div>
     
   </div>
   <div v-if="resultsappear">
<div class="row">
    <div class="col-12">
      <h1>Luces</h1><br><p>Efectos de luz</p>
    </div>
      <div class="col-6">
        <div class="result">
          <span >{{ gpu1.benchmarks[0] }} FPS</span>
          <div v-if="gpu2.benchmarks[0] < gpu1.benchmarks[0]" class="progressbar">
            <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu1.benchmarks[0] * 100 / gpu2.benchmarks[0] - 100" >
                  + {{(gpu1.benchmarks[0] * 100 / gpu2.benchmarks[0] - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
      <div class="col-6">
         <div class="result">
          <span >{{ gpu2.benchmarks[0] }} FPS</span>
          <div v-if="gpu2.benchmarks[0] > gpu1.benchmarks[0]" class="progressbar">
           <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu2.benchmarks[0] * 100 / gpu1.benchmarks[0] - 100" >
                  + {{(gpu2.benchmarks[0] * 100 / gpu1.benchmarks[0] - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
   </div>
   <div class="row">
     <div class="col-12">
      <h1>Reflejos</h1><br><p>Efectos de luz</p>
    </div>
      <div class="col-6">
        <div class="result">
          <span >{{ gpu1.benchmarks[1] }} FPS</span>
          <div v-if="gpu2.benchmarks[1] < gpu1.benchmarks[1]" class="progressbar">
             <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu1.benchmarks[1] * 100 / gpu2.benchmarks[1] - 100" >
                  + {{(gpu1.benchmarks[1] * 100 / gpu2.benchmarks[1] - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
      <div class="col-6">
         <div class="result">
          <span >{{ gpu2.benchmarks[1] }} FPS</span>
          <div v-if="gpu2.benchmarks[1] > gpu1.benchmarks[1]" class="progressbar">
           <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu2.benchmarks[1] * 100 / gpu1.benchmarks[1] - 100" >
                  + {{(gpu2.benchmarks[1] * 100 / gpu1.benchmarks[1] - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
   </div>
   <div class="row">
     <div class="col-12">
      <h1>MRender</h1><br><p>Direct 3D</p>
    </div>
      <div class="col-6">
        <div class="result">
          <span >{{ gpu1.benchmarks[2] }} FPS</span>
          <div v-if="gpu2.benchmarks[2] < gpu1.benchmarks[2]" class="progressbar">
               <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu1.benchmarks[2] * 100 / gpu2.benchmarks[2] - 100" >
                  + {{(gpu1.benchmarks[2] * 100 / gpu2.benchmarks[2] - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
      <div class="col-6">
         <div class="result">
          <span >{{ gpu2.benchmarks[2] }} FPS</span>
          <div v-if="gpu2.benchmarks[2] > gpu1.benchmarks[2]" class="progressbar">
           <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu2.benchmarks[2] * 100 / gpu1.benchmarks[2] - 100" >
                  + {{(gpu2.benchmarks[2] * 100 / gpu1.benchmarks[2] - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
   </div>
   <div class="row">
     <div class="col-12">
      <h1>Gravedad</h1><br><p>Simulación</p>
    </div>
      <div class="col-6">
        <div class="result">
          <span >{{ gpu1.benchmarks[3] }} FPS</span>
          <div v-if="gpu2.benchmarks[3] < gpu1.benchmarks[3]" class="progressbar">
           <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu1.benchmarks[3] * 100 / gpu2.benchmarks[3] - 100" >
                  + {{(gpu1.benchmarks[3] * 100 / gpu2.benchmarks[3] - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
      <div class="col-6">
         <div class="result">
          <span >{{ gpu2.benchmarks[3] }} FPS</span>
          <div v-if="gpu2.benchmarks[3] > gpu1.benchmarks[3]" class="progressbar">
           <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu2.benchmarks[3] * 100 / gpu1.benchmarks[3] - 100" >
                  + {{(gpu2.benchmarks[3] * 100 / gpu1.benchmarks[3] - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
   </div>
   <div class="row">
     <div class="col-12">
      <h1>CSGO</h1><br><p>FPS de media</p>
    </div>
      <div class="col-6">
        <div class="result">
          <span >{{ gpu1.benchmarks[4] }} FPS</span>
          <div v-if="gpu2.benchmarks[4] < gpu1.benchmarks[4]" class="progressbar">
                <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu1.benchmarks[4] * 100 / gpu2.benchmarks[4] - 100" >
                  + {{(gpu1.benchmarks[4] * 100 / gpu2.benchmarks[4] - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
      <div class="col-6">
         <div class="result">
          <span >{{ gpu2.benchmarks[4] }} FPS</span>
          <div v-if="gpu2.benchmarks[4] > gpu1.benchmarks[4]" class="progressbar">
           <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu2.benchmarks[4] * 100 / gpu1.benchmarks[4] - 100" >
                  + {{(gpu2.benchmarks[4] * 100 / gpu1.benchmarks[4] - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
   </div>
   <div class="row">
     <div class="col-12">
      <h1>Fortnite</h1><br><p>FPS de media</p>
    </div>
      <div class="col-6">
        <div class="result">
          <span >{{ gpu1.benchmarks[5] }} FPS</span>
          <div v-if="gpu2.benchmarks[5] < gpu1.benchmarks[5]" class="progressbar">
              <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu1.benchmarks[5] * 100 / gpu2.benchmarks[5] - 100" >
                  + {{(gpu1.benchmarks[5] * 100 / gpu2.benchmarks[5] - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
      <div class="col-6">
         <div class="result">
          <span >{{ gpu2.benchmarks[5] }} FPS</span>
          <div v-if="gpu2.benchmarks[5] > gpu1.benchmarks[5]" class="progressbar">
          <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu2.benchmarks[5] * 100 / gpu1.benchmarks[5] - 100" >
                  + {{(gpu2.benchmarks[5] * 100 / gpu1.benchmarks[5] - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
   </div>
   <div class="row">
     <div class="col-12">
      <h1>League Of Legends</h1><br><p>FPS de media</p>
    </div>
      <div class="col-6">
        <div class="result">
          <span >{{ gpu1.benchmarks[6] }} FPS</span>
          <div v-if="gpu2.benchmarks[6] < gpu1.benchmarks[6]" class="progressbar">
              <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu1.benchmarks[6] * 100 / gpu2.benchmarks[6] - 100" >
                  + {{(gpu1.benchmarks[6] * 100 / gpu2.benchmarks[6] - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
      <div class="col-6">
         <div class="result">
          <span >{{ gpu2.benchmarks[6] }} FPS</span>
          <div v-if="gpu2.benchmarks[6] > gpu1.benchmarks[6]" class="progressbar">
            <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu2.benchmarks[6] * 100 / gpu1.benchmarks[6] - 100" >
                  + {{(gpu2.benchmarks[6] * 100 / gpu1.benchmarks[6] - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
   </div>
   <div class="row">
     <div class="col-12">
      <h1>Battlefield 1</h1><br><p>FPS de media</p>
    </div>
      <div class="col-6">
        <div class="result">
          <span >{{ gpu1.benchmarks[7] }} FPS</span>
          <div v-if="gpu2.benchmarks[7] < gpu1.benchmarks[7]" class="progressbar">
                <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu1.benchmarks[7] * 100 / gpu2.benchmarks[7] - 100" >
                  + {{(gpu1.benchmarks[7] * 100 / gpu2.benchmarks[7] - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
      <div class="col-6">
         <div class="result">
          <span >{{ gpu2.benchmarks[7] }} FPS</span>
          <div v-if="gpu2.benchmarks[7] > gpu1.benchmarks[7]" class="progressbar">
               <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu2.benchmarks[7] * 100 / gpu1.benchmarks[7] - 100" >
                  + {{(gpu2.benchmarks[7] * 100 / gpu1.benchmarks[7] - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
   </div>
   <div class="row">
     <div class="col-12">
      <h1>Precio</h1>
    </div>
      <div class="col-6">
        <div class="result">
          <span >{{ gpu1.price }} €</span>
          <div v-if="gpu2.price < gpu1.price" class="progressbar">
                <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu1.price * 100 / gpu2.price - 100" >
                  + {{(gpu1.price * 100 / gpu2.price - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
      <div class="col-6">
         <div class="result">
          <span >{{ gpu2.price }} €</span>
          <div v-if="gpu2.price > gpu1.price" class="progressbar">
               <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu2.price * 100 / gpu1.price - 100" >
                  + {{(gpu2.price * 100 / gpu1.price - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
   </div>
    <div class="row">
     <div class="col-12">
      <h1>Memoria</h1><br><p>GB de memoria</p>
    </div>
      <div class="col-6">
        <div class="result">
          <span >{{ gpu1.memory }} GB</span>
          <div v-if="gpu2.memory < gpu1.memory" class="progressbar">
                <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu1.memory * 100 / gpu2.memory - 100" >
                  + {{(gpu1.memory * 100 / gpu2.memory - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
      <div class="col-6">
         <div class="result">
          <span >{{ gpu2.memory }} GB</span>
          <div v-if="gpu2.memory > gpu1.memory" class="progressbar">
               <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu2.memory * 100 / gpu1.memory - 100" >
                  + {{(gpu2.memory * 100 / gpu1.memory - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
   </div>
   <div class="row">
     <div class="col-12">
      <h1>Valor</h1><br><p>Calculado con datos de benchmarks y precio</p>
    </div>
      <div class="col-6">
        <div class="result">
          <span >{{ gpu1.benchmarks.reduce((a, b) => a + b, 0) }} puntos</span>
          <div v-if="gpu2.benchmarks.reduce((a, b) => a + b, 0) < gpu1.benchmarks.reduce((a, b) => a + b, 0)" class="progressbar">
                <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu1.benchmarks.reduce((a, b) => a + b, 0) * 100 / gpu2.benchmarks.reduce((a, b) => a + b, 0) - 100" >
                  + {{(gpu1.benchmarks.reduce((a, b) => a + b, 0) * 100 / gpu2.benchmarks.reduce((a, b) => a + b, 0) - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
      <div class="col-6">
         <div class="result">
          <span >{{ gpu2.benchmarks.reduce((a, b) => a + b, 0) }} puntos</span>
          <div v-if="gpu2.benchmarks.reduce((a, b) => a + b, 0) > gpu1.benchmarks.reduce((a, b) => a + b, 0)" class="progressbar">
               <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="gpu2.benchmarks.reduce((a, b) => a + b, 0) * 100 / gpu1.benchmarks.reduce((a, b) => a + b, 0) - 100" >
                  + {{(gpu2.benchmarks.reduce((a, b) => a + b, 0) * 100 / gpu1.benchmarks.reduce((a, b) => a + b, 0) - 100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
      
      <div class="col-6">
        <div class="result">
          <span >{{ (gpu1.benchmarks.reduce((a, b) => a + b, 0) / gpu1.price).toFixed(2) }} puntos / €</span>
          <div v-if="gpu2.benchmarks.reduce((a, b) => a + b, 0) / gpu2.price < gpu1.benchmarks.reduce((a, b) => a + b, 0) / gpu1.price" class="progressbar">
                <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="((gpu1.benchmarks.reduce((a, b) => a + b, 0) / gpu1.price) * 100 / (gpu2.benchmarks.reduce((a, b) => a + b, 0)/ gpu1.price)-100).toFixed(2)" >
                  + {{((gpu1.benchmarks.reduce((a, b) => a + b, 0) / gpu1.price) * 100 / (gpu2.benchmarks.reduce((a, b) => a + b, 0)/ gpu2.price) -100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
       <div class="col-6">
        <div class="result">
          <span >{{ (gpu2.benchmarks.reduce((a, b) => a + b, 0) / gpu2.price).toFixed(2) }} puntos / €</span>
          <div v-if="gpu1.benchmarks.reduce((a, b) => a + b, 0) / gpu1.price < gpu2.benchmarks.reduce((a, b) => a + b, 0) / gpu2.price" class="progressbar">
                <b-progress variant="success"  :max="100" show-progress animated>
                <b-progress-bar :value="((gpu2.benchmarks.reduce((a, b) => a + b, 0) / gpu2.price) * 100 / (gpu1.benchmarks.reduce((a, b) => a + b, 0)/ gpu1.price) -100).toFixed(2)" >
                 + {{((gpu2.benchmarks.reduce((a, b) => a + b, 0) / gpu2.price) * 100 / (gpu1.benchmarks.reduce((a, b) => a + b, 0)/ gpu1.price) -100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
   </div>
   </div>
    </section>
    <section id="footer" class="slide-in-bottom">
        <div class="container">
            <footer class="page-footer font-small blue pt-4">

                <!-- Footer Links -->
                <div class="container-fluid text-center text-md-left">

                    <!-- Grid row -->
                    <div class="row white" style="border: initial !important">

                        <!-- Grid column -->
                        <div class="col-md-4 mt-md-0 mt-4">
                            <h5 class="text-uppercase">SANT JOSEP OBRER</h5>
                            <!-- Content -->
                            <p>
                                <br>
                                La educación en la escuela es todo un RETO en el siglo XXI. Y queremos vivir este reto con mucha ilusión, proponiéndonos metas altas, para llegar a lo más alto posible!!!
                                <br>
                                No somos perfectos, pero no tenemos miedo de equivocarnos, de aprender de los errores, corregirlos y MEJORAR, porque lo más importante es CREER en lo que haces, y éste es el verdadero aprendizaje!!!</p>

                        </div>
                        <!-- Grid column -->

                        <hr class="clearfix w-100 d-md-none pb-3">
                        <div class="col-md-4 mt-md-0 mt-4">

                            <!-- Content -->
                            <h5 class="text-uppercase">COMPARTE SJO</h5>

                            <button type="button"
                              
                                class="btn btn-fb"><i style="color:white;" class="fab fa-facebook-f"></i></button>
                            <button type="button"
                              
                                class="btn btn-fb"><i style="color:white;" class="fab fa-google-plus-g"></i></button>
                            <button type="button"
                              
                                class="btn btn-fb"><i style="color:white;" class="fab fa-twitter"></i></button>
                            <button type="button"
                            
                                class="btn btn-fb"><i style="color:white;" class="fab fa-linkedin-in"></i></button>
                        </div>
                        <!-- Grid column -->
                        <hr class="clearfix w-100 d-md-none pb-3">
                        <div class="col-md-4 mb-md-0 mb-4">

                            <!-- Links -->
                            <h5 class="text-uppercase">Enlaces</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a style="color:white;"
                                        href="#">Política de
                                        privacidad</a>
                                </li>
                                <li>
                                    <a style="color:white;"
                                        href="#">Política
                                        de calidad</a>
                                </li>
                                <li>
                                    <a style="color:white;" href="#">Política de
                                        Cookies</a>
                                </li>
                                <li>
                                    <a style="color:white;" href="#">Aviso
                                        legal</a>
                                </li>
                            </ul>

                        </div>
                        <!-- Grid column -->



                    </div>
                    <!-- Grid row -->

                </div>
                <!-- Footer Links -->

                <!-- Copyright -->
                <div class="footer-copyright text-center py-3">© 2020 :
                    <a style="color:white;" href="#"> SJO</a>
                </div>
                <!-- Copyright -->

            </footer>
        </div>

        <!-- Footer -->
    </section>
 
   
   
</div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Selector',
  data: () => ({
    alert: "",
    error: false,
    gpus: [],
    gpu1: "",
    gpu2: "",
    idgpu1: "",
    idgpu2: "",
    img1: "",
    img2: "",
    results:[

    ],
    resultsappear: false
  }),
  mounted() {
    this.getGPU()
  },
  methods:{
    getGPU: async function (){
      const response = await axios.get("https://gpusjoapi.herokuapp.com/gpus")
      this.gpus = response.data
      console.log(this.gpus)
    },
    loadImg: function(n, event){
      this.resultsappear = false
      if (n == 1){
        this.idgpu1= event.target.selectedOptions[0].id
        this.img1 = `https://gpucomparator.s3.eu-west-3.amazonaws.com/${event.target.value}`
      } else {
         this.idgpu2= event.target.selectedOptions[0].id
         this.img2 = `https://gpucomparator.s3.eu-west-3.amazonaws.com/${event.target.value}`
      }
    },
    compare: function(){
      this.gpu1 = this.gpus[this.gpus.findIndex(i => i._id === this.idgpu1)]
      this.gpu2 = this.gpus[this.gpus.findIndex(i => i._id === this.idgpu2)]
      console.log(this.gpu1, this.gpu2)
      if (this.gpu1 === undefined || this.gpu2 === undefined){
        this.alert = "Una de las opciones es inválida"
        this.error = true
        
        return
      }
      this.error = false
      this.resultsappear = true

    }
  }
}
</script>
<style scoped>


 @-webkit-keyframes slide-in-bottom{0%{-webkit-transform:translateY(1000px);transform:translateY(1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slide-in-bottom{0%{-webkit-transform:translateY(1000px);transform:translateY(1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}
 @-webkit-keyframes slide-in-top{0%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slide-in-top{0%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}


 .slide-in-bottom{-webkit-animation:slide-in-bottom .5s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-bottom .5s cubic-bezier(.25,.46,.45,.94) both}
 .slide-in-top{-webkit-animation:slide-in-top .5s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-top .5s cubic-bezier(.25,.46,.45,.94) both}
 .jumbotron img {
    width: 400px;
}
.white {
    color: white !important;
}
.jumbotron{
    text-align: center;
    padding: 5%;
    background-image: url('/bg.png');
    background-size: cover;
    color: white;
}
.jumbotron h1{
    margin-top: 20px;
}
.hide {
    display: none;
}
.form-control{
    border-radius: 1px;
    background-color: #ededed;
    border:none;
}
.minute-controller{
    display: flex;
}
small a {
    color:white;
}
#footer{
    
    background-color: #BA172C;
    color: white;
    margin-top: 100px;

}
@media only screen and (min-width: 1370px) {
#booking{
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 2px 43px -4px rgba(0,0,0,.19);
    padding:3%;
    width: auto;
    position: relative;
    margin-left: 20%;
    margin-right: 20%;
    top: 35%;
}
body, html { overflow-x:hidden !important }
}
@media only screen and (max-width: 1370px) {

    #booking{
       background-color: white;
        border-radius: 6px;
        box-shadow: 0 2px 43px -4px rgba(0,0,0,.19);
        padding: 3%;
        width: auto;
        position: relative;
        margin-left: 2%;
        margin-right: 2%;
    }
}
@media only screen and (max-width: 600px) {
    .descriptions{
        position: absolute;
        top: 270%;
        left: 2%;
        right: 2%;
    }
}
.btn-primary {
    background-color: #BA172C;
    border-color: #BA172C;
    
}

.btn-primary:hover{
    background-color: #BA172C;
    border-color: #BA172C; 
}
.btn-primary:focus{
    background-color: #BA172C !important;
    border-color: #BA172C !important;
}
.btn-primary:active{
    background-color: #BA172C;
    border-color: #BA172C;
}
.btn-outline-primary{
    border-color: #BA172C;
    color: #BA172C;
}
.btn-outline-primary:hover{
    background-color:#BA172C;
}
.btn-hours{
    margin: 2%;
}
.btn-primary.disabled, .btn-primary:disabled {
    color: #fff;
    background-color:  #BA172C;
    border-color:  #BA172C;
}
.btn-outline-primary.disabled, .btn-outline-primary:disabled {
    color:  #BA172C;
    background-color: transparent;
}
.row.white{
    text-align: center !important;
}
@media only screen and (max-width: 600px) {

    .jumbotron img {
        width: 100%;
    }
}
html, body {
    overflow-x: hidden;
  }
.imggpu, .progressbar{
  width: 50%;
  height: 300px;
    margin: 0 auto;
    text-align: center;
}
.progressbar{
  height: initial;
}
.button{
  width: 50%;
    margin: 0 auto;
    text-align: center;

}


span {
    font-size: 20px;
}
h1, .result, p{
  text-align: center;
}
.progress{
  height: 20px;
}
.row{
      border: 1px solid #dee2e6!important;
  padding-top: 20px;
  padding-bottom: 20px;
}
body{
      overflow-x: hidden;
}
.imggpu2{
  max-height: 300px;
}
</style>