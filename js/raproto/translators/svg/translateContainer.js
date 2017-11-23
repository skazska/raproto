define( function (require) {
   "use strict";

   return (element, container, translator) => {


      return typeof elementTranslator === 'function' ? elementTranslator(element, container, translator) : elementTranslator;

   }

});