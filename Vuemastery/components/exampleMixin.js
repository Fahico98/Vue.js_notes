
export const exampleMixin = {
   created: function(){
      this.logMessage();
   },
   data: function(){
      return {
         message: "I'm such a nice mixin...!"
      };
   },
   methods: {
      logMessage: function(){
         console.log(this.message);
      }
   }
}
