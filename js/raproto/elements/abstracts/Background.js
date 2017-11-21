requirejs(
   [],
   function () {
      'use strict';

      class Background {

         /**
          * creates background definition data object
          * @class
          * @param {Composition} composition
          * @param {Color} color
          * @param {Image} image
          * @param {Object} options
          */
         constructor (composition, color, image, options) {
            this.composition= composition;
            this.color = color;
            this.image = image;
            this.options = options;
         }



      }

      return Background;
   }
);
