
import {exampleMixin} from "../components/exampleMixin.js";

var exampleComponent = Vue.component("example-component", {
   template: `<h3>Example component</h3>`,
   mixins: [exampleMixin]
});
