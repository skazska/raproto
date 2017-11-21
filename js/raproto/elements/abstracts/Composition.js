requirejs(
   ['elts/abstracts/Shape', 'elts/abstracts/Position', 'elts/abstracts/Size', 'rp/abstracts/SideVals'],
   function (Shape, Position, Size, SideVals) {
      'use strict';

      class Composition {

         /**
          * creates composition data object
          * @class
          * @param {Shape} shape
          * @param {Position} position
          * @param {Size} size
          * @param {SideVals} margin
          */
         constructor (shape, position, size, margin) {
            this.shape = shape;
            this.position = position;
            this.size = size;
            this.margin = margin;
         }

      }

      return Composition;
   }
);
