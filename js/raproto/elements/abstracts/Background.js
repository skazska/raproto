define(
   ['elts/abstracts/Composition', 'elts/abstracts/Color', 'elts/abstracts/Image'],
   function (Composition, Color, Image) {
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
            this.setComposition(composition);
            this.setColor(color);
            this.setImage(image);
            this.setOptions(options);
         }

         /**
          * sets composition
          * @param {Composition} composition
          * @returns {Background}
          */
         setComposition (composition) {
            this.composition = composition;
            return this;
         }

         /**
          * sets color
          * @param color
          * @returns {Background}
          */
         setColor (color) {
            this.color = color;
            return this;
         }

         /**
          * sets image
          * @param image
          * @returns {Background}
          */
         setImage (image) {
            this.image = image;
            return this;
         }

         /**
          * sets options
          * @param options
          * @returns {Background}
          */
         setOptions (options) {
            this.options = options;
            return this;
         }

      }

      return Background;
   }
);
