define(
   ['trans/svg/elementMap'],
   function (map) {
      "use strict";

      return (element, options) => {

         let translator = options && options.map && options.map[element.type] || map[element.type] || null;

         if (options.interceptors && typeof options.interceptors.elementTranslator === 'function')
            translator = options.interceptors.elementTranslator(element, translator);

         return translator(element, options);

      }

   }
);