define( function (require) {
   "use strict";

   return (element, container, translator) => {
      const mapper = require('./elementMap');

      let elementTranslator = translator && translator.options && translator.options.mapper && options.mapper[element.type]
         || mapper[element.type] || null;

      if (
         translator && translator.options && translator.options.interceptors
         && typeof translator.options.interceptors.elementTranslator === 'function'
      ) elementTranslator = translator.options.interceptors.elementTranslator(element, elementTranslator, container, translator);

      if (typeof elementTranslator === 'string')
         elementTranslator = require(elementTranslator);

      return typeof elementTranslator === 'function' ? elementTranslator(element, container, translator) : elementTranslator;

   }

});