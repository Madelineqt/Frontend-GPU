<template>
<div>

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
        <div class="imggpu"><img v-bind:src="img1"></div>
      </div>
      <div class="col-6 ">
        <div class="imggpu"><img v-bind:src="img2"></div>
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
                <b-progress-bar :value="(gpu1.benchmarks.reduce((a, b) => a + b, 0) / gpu1.price) * 100 / (gpu2.benchmarks.reduce((a, b) => a + b, 0)/ gpu1.price)" >
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
                <b-progress-bar :value="((gpu2.benchmarks.reduce((a, b) => a + b, 0) / gpu2.price) * 100 / (gpu1.benchmarks.reduce((a, b) => a + b, 0)/ gpu1.price)).toFixed(2)" >
                 + {{((gpu2.benchmarks.reduce((a, b) => a + b, 0) / gpu2.price) * 100 / (gpu1.benchmarks.reduce((a, b) => a + b, 0)/ gpu1.price) -100).toFixed(2)}} %
                </b-progress-bar>
               </b-progress>
          </div>
        </div>
      </div>
   </div>
   </div>
   
   
</div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Selector',
  data: () => ({
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
      this.resultsappear = true

    }
  }
}
</script>
<style scoped>
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
</style>