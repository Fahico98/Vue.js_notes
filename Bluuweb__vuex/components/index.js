
const store = new Vuex.Store({
   state: {
      number: 10
   },
   mutations: {
      addToNumber: function(state, c){
         state.number += c;
      },
      restarToNumber: function(state, c){
         state.number -= c;
      }
   }
});

new Vue({
   el: "#app",
   store: store
});
