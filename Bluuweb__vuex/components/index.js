
const store = new Vuex.Store({
   state: {
      number: 10
   },
   mutations: {
      addToNumber: function(state){
         state.number++;
      }
   }
});

new Vue({
   el: "#app",
   store: store
});
