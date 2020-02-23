
Vue.component("child", {
   template:
      `<div>
         <button v-on:click="addToNumber(2)">+</button>
         <button v-on:click="restarToNumber(5)">-</button>
         <br>
         <br>
         <button v-on:click='getData'>Get data !</button>
         <ul><li v-for='item in data'>{{ item.id }}: {{ item.name }}</li></ul>
      </div>`,
   computed: {
      ...Vuex.mapState(["number", "data"]) // (*)
   },
   methods: {
      ...Vuex.mapMutations(["addToNumber", "restarToNumber"]), // (*)
      ...Vuex.mapActions(["getData"])
   }
});