
Vue.component("parent", {
   template:
      "<div style='background: red; padding: 10px;'>" + 
         "<h2>Parent component</h2>" +
         "<h2>Parent owner: {{parentOwner}}</h2>" +
         "<h2>Parent number: {{parentNumber}}</h2>" +
         "<button v-on:click='parentOwner = `Carcamo`'>" +
            "Change parent owner" +
         "</button>" +
         "<child v-bind:childOwner='parentOwner' @childNumber='parentNumber = $event'></child>" +
      "</div>",
   data: function(){
      return {
         parentOwner: "Fahibram",
         parentNumber: 0
      };
   }
});