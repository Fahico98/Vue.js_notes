
Vue.component("child", {
   template:
      `<div>
         <button v-on:click="$store.commit('addToNumber')">+</button>
      </div>`
});