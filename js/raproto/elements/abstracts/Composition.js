define(
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
            this.setShape(shape);
            this.setPosition(position);
            this.setSize(size);
            this.setMargin(margin);
         }

         /**
          * sets Shape
          * @param shape
          * @returns {Composition}
          */
         setShape (shape) {
            this.shape = shape;
            return this;
         }

         /**
          * sets position
          * @param position
          * @returns {Composition}
          */
         setPosition (position) {
            this.position = position;
            return this;
         }

         /**
          * sets size
          * @param size
          * @returns {Composition}
          */
         setSize (size) {
            this.size = size;
            return this;
         }

         /**
          * sets margin
          * @param size
          * @returns {Composition}
          */
         setMargin (size) {
            this.margin = margin;
            return this;
         }
      }

      return Composition;
   }
);
