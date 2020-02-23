
const store = new Vuex.Store({
   state: {
      number: 10,
      data: []
   },
   mutations: {
      addToNumber: function(state, c){
         state.number += c;
      },
      restarToNumber: function(state, c){
         state.number -= c;
      },
      fillData: function(state, dataAction){
         state.data = dataAction;
      }
   },
   actions: {
      getData: async function({ commit }){
         const response = await fetch("data.json");
         const dataJson = await response.json();
         commit("fillData", dataJson);
      }
   }
});

new Vue({
   el: "#app",
   store: store
});
