requirejs(
   ['rp/abstracts/SideVals'],
   function (SideVals) {
      'use strict';

      class Border {

         /**
          * creates border definition data object
          * @class
          * @param {SideVals} width
          * @param {SideVals} style
          * @param {SideVals} radius
          * @param {SideVals} color
          * @param {Object} options
          */
         constructor (width, style, color, radius, options) {
            this.width = width;
            this.style = style;
            this.color = color;
            this.radius = radius;
            this.options = options;
         }

      }

      return Border;
   }
);
