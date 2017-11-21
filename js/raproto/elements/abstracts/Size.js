requirejs(
   [],
   function () {
      'use strict';

      class Size {

         /**
          * creates size definition data object
          * @class
          * @param {number} width
          * @param {number} height
          */
         constructor (width, height) {
            this.setWidth(width);
            this.setOptions(height);
         }

         /**
          * sets width
          * @param {string} width
          * @returns {Size}
          */
         setWidth (width) {
            this.width = width;
            return this;
         }

         /**
          * sets height
          * @param height
          * @returns {Size}
          */
         setOptions (height) {
            this.height = height;
            return this;
         }

      }

      return Size;
   }
);
