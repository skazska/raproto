define(
   [],
   function () {
      'use strict';

      class Layout {

         /**
          * creates layout definition data object
          * @class
          * @param {string} type
          * @param {Object} options
          */
         constructor (type, options) {
            this.setType(type || 'LRUD');
            this.setOptions(options || {});
         }

         /**
          * sets shape type
          * @param {string} type
          * @returns {Shape}
          */
         setType (type) {
            this.type = type;
            return this;
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

      return Layout;
   }
);
