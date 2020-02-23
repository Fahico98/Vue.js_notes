
Vue.component("my-title", {
   template:
      `<div>
         <h1>Number: {{ number }}</h1>
         <child></child>
      </div>`,
   computed: {
      /*
      number: function(){
         return store.state.number;
      }
      */
      ...Vuex.mapState(["number", "data"]) // (*)
   },
   methods: {
      ...Vuex.mapMutations(["addToNumber", "restarToNumber"]), // (*)
      ...Vuex.mapActions(["getData"])
   }
});