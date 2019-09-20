<template>
    <div id="loadsearch">
        <h1>LoadSearch</h1>
        <button type="button" v-on:click="loadsearch()">SearchLoads</button>
        <ul  :key="renderstate" id="loadsearchresults">
  <li v-for="load in this.loads" v-bind:key="load.ID">
    {{ load.ID}} 
    <button  v-bind:key="load.ID">View Details</button>
  </li>
</ul> 
  <!-- <loads load="something"/> -->
    </div>

</template>

<script>
import axios from "axios"
// import loads from  "./loads.vue"
    export default {
        name: 'LoadSearch',
        data() {
            return {
                 renderstate:0,
                  input :{"OriginRange":125,"DestinationRange":125,"EquipmentType":"ANY","EquipmentOptions":[],"HoursOld":0,"LoadType":"All","PickupDates":[],"SortBy":"Days2Pay","SortDescending":false,"Origin":["Crystal Lake, IL, USA"],"Destination":["Fort Mill, SC, USA"],"PageNumber":1,"PageSize":10,"IsNewSearch":true,"Id":"7db65b56-3505-f36f-555b-2c3b1569009990146","CompanyCallStatus":"","InterestStatus":"","HiddenOnly":false}
            }
        },
         mounted(){
            const token = localStorage.getItem('token')
            if(!token){
                alert("Please Contact Akash for Login Access throuh Mulesoft")
                this.$router.push('/Login')
            }
        },
            methods: {
            loadsearch() {
            const options = {
                 headers: {"Content-Type":"application/json",
                 "Authorize": localStorage.getItem("token")}
                }
      axios
      .post('https://pangeasvcqa.truckstop.com/Loadsearch/v2/Truckstop/MultiSearch',this.input,options)
      .then(response => {
          this.info = response
          this.loads = response.data.Body.Data.Items
          this.renderstate +=1
        //   console.log(this.loads)
          })
            }
    //    https://pangeasvcqa.truckstop.com/Loadsearch/v2/Truckstop/MultiSearch
        }
    }
</script>