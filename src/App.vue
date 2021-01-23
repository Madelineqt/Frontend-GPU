<template>

  <div id="app">
    
    <Header></Header>
    <Selector></Selector>
  </div>
</template>

<script>
import Header from "@/components/Header";
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';
import Selector from "@/components/Selector";
export default {
  name: 'App',
  title: '',
  metaInfo: {
      title: 'SJO GPU Comparador'
    },
  components: {
    Selector,
    Header,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
@media only screen and (max-width: 768px) {
  .col-* {
    width: 100%;
  }

}



</style>
