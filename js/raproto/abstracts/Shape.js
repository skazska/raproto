requirejs(
   [],
   function () {
      'use strict';

      class Composition {

         /**
          * creates shape data object
          * @calss
          * @param {string} type
          * @param {Object} options
          */
         constructor (type, options) {
            this.setType(type);
            this.setOptions(options);
         }

         /**
          * sets shape type
          * @param {string} type
          */
         setType (type) {
            this.type = type;
         }

         /**
          * sets shape options
          * @param options
          */
         setOptions (options) {
            this.options = options;
         }

      }

      return Composition;
   }
);
