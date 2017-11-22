define(
   ['elts/abstracts/Background'],
   function (Background) {
      'use strict';

      class Foreground extends Background {

         /**
          * creates background definition data object
          * @class
          * @param {Composition} composition
          * @param {Color} color
          * @param {Image} image
          * @param {Object} options
          */
         constructor (composition, color, image, text, options) {
            super(composition, color, image, options);
            this.setText(text);
         }

         /**
          * sets text
          * @param text
          * @returns {Foreground}
          */
         setText (text) {
            this.text = text;
            return this;
         }

      }

      return Foreground;
   }
);
