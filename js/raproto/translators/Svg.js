define(
   ['trans/abstracts/Translator', 'trans/svg/elementTranslator'],
   function (Translator, elementTranslator) {
      'use strict';

      class TranslatorSvg extends Translator {

         /**
          * creates translator elt to svg object
          * @class
          * @param {string} type
          * @param {Object} options
          */
         constructor (options) {
            super(options);
         }


         translate (elts) {
            return elts.map(elementTranslator.bind(this));
         }

      }

      return TranslatorSvg;
   }
);
