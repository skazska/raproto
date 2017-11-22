define(
   ['trans/abstracts/Translator'],
   function (Translator) {
      'use strict';

      class TranslatorHtml extends Translator {

         /**
          * creates translator elt to svg object
          * @class
          * @param {string} type
          * @param {Object} options
          */
         constructor (options) {
            super(options);
         }


      }

      return TranslatorHtml;
   }
);
