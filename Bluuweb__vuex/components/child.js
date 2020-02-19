
Vue.component("child", {
   template:
      `<div>
         <button v-on:click="addToNumber(2)">+</button>
         <button v-on:click="restarToNumber(5)">-</button>
      </div>`,
   computed: {
      ...Vuex.mapState(["number"]) // (*)
   },
   methods: {
      ...Vuex.mapMutations(["addToNumber", "restarToNumber"]) // (*)
   }
});