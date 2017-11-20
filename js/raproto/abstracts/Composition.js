requirejs(
   ['abstracts/Shape', 'abstracts/Position', 'abstracts/Size', 'abstracts/Margin'],
   function (Shape, Position, Size, Margin) {
      'use strict';

      class Composition {

         /**
          * creates composition data object
          * @calss
          * @param {Shape} shape
          * @param position
          * @param size
          * @param margin
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
