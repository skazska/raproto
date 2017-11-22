define(
   [],
   function () {
      'use strict';

      class Translator {

         /**
          * creates abstract translator of elt object
          * @class
          * @param {string} type
          * @param {Object} options
          */
         constructor (options) {
            this.setOptions(options);
         }

         /**
          * sets shape options
          * @param options
          * @returns {Shape}
          */
         setOptions (options) {
            this.options = options;
            return this;
         }

      }

      return Translator;
   }
);
