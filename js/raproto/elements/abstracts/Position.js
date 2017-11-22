define(
   [],
   function () {
      'use strict';

      class Position {

         /**
          * creates position definition data object
          * @class
          * @param {number} x
          * @param {number} y
          */
         constructor (x, y) {
            this.setX(x);
            this.setY(y);
         }

         /**
          * sets x (coord1)
          * @param {number} x
          * @returns {Position}
          */
         setX (x) {
            this.x = x;
            return this;
         }

         /**
          * sets y (coord2)
          * @param {number} y
          * @returns {Position}
          */
         setY (y) {
            this.y = y;
            return this;
         }

         /**
          * sets new position
          * @param args - could be (x,y) or ({x,y})
          * @returns {Position}
          */
         setPosition(...args) {
            if (typeof args[0] === 'number') {
               this.setX(args[0]);
               if (typeof args[1] === 'number') this.setY(args[1]);
            } else {
               if (args[0].x) this.setX(args[0].x);
               if (args[0].y) this.setY(args[0].y);
            }
            return this;
         }

      }

      return Position;
   }
);
