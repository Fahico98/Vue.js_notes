
Vue.component("child", {
   template:
      "<div style='background: blue;'>" +
         "<h4>Child component</h4>" +
         "<h4>Child owner: {{childOwner}}</h4>" +
         "<h4>Child number: {{childNumber}}</h4>" +
         "<button v-on:click='addChildNumber'>" +
            "Add to child number" +
         "</button>" +
      "</div>",
   props: ["childOwner"],
   data: function(){
      return {childNumber: 100};
   },
   methods: {
      addChildNumber: function(){
         this.childNumber++;
      }
   },
   mounted: function(){
      this.$emit("childNumber", this.childNumber);
   }
});