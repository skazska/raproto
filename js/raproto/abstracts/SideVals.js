requirejs(
   [],
   function () {
      'use strict';

      class SideVals {

         /**
          * creates sideVals definition data object
          * @class
          * @param args - could be (anySide|anyCorners) or (top-right, bottom-left) or
          *   (topLeft-bottomRight, topRight-bottomLeft) or (top,right-left, bottom) or
          *   (topLeft, topRight-bottomLeft, bottomRight) or (top,right, bottom, left) or
          *   (topLeft, topRight, bottomRight, bottomLeft) or ({top,right, bottom, left}) or
          *   ({topLeft, topRight, bottomRight, bottomLeft})
          */
         constructor (...args) {
            this.setAll.apply(this, args);
         }

         /**
          * sets top (value)
          * @param {*} top
          * @returns {SideVals}
          */
         setTop (top) {
            this.top = top;
            return this;
         }

         /**
          * sets right (value)
          * @param {*} right
          * @returns {SideVals}
          */
         setRight (right) {
            this.right = right;
            return this;
         }

         /**
          * sets bottom (value)
          * @param {*} bottom
          * @returns {SideVals}
          */
         setBottom (bottom) {
            this.bottom = bottom;
            return this;
         }

         /**
          * sets left (value)
          * @param {*} left
          * @returns {SideVals}
          */
         setLeft (left) {
            this.left = left;
            return this;
         }

         /**
          * sets top-left (value)
          * @param {*} top
          * @returns {SideVals}
          */
         setTopLeft (top) {
            this.top = top;
            return this;
         }

         /**
          * sets top-right (value)
          * @param {*} right
          * @returns {SideVals}
          */
         setTopRight (right) {
            this.right = right;
            return this;
         }

         /**
          * sets bottom-right (value)
          * @param {*} bottom
          * @returns {SideVals}
          */
         setBottomRight (bottom) {
            this.bottom = bottom;
            return this;
         }

         /**
          * sets bottom-left (value)
          * @param {*} left
          * @returns {SideVals}
          */
         setBottomLeft (left) {
            this.left = left;
            return this;
         }

         /**
          * sets new vals
          * @param args - could be (anySide|anyCorners) or (top-right, bottom-left) or
          *   (topLeft-bottomRight, topRight-bottomLeft) or (top,right-left, bottom) or
          *   (topLeft, topRight-bottomLeft, bottomRight) or (top,right, bottom, left) or
          *   (topLeft, topRight, bottomRight, bottomLeft) or ({top,right, bottom, left}) or
          *   ({topLeft, topRight, bottomRight, bottomLeft})
          * @returns {SideVals}
          */
         setAll (...args) {
            if (typeof args[0] === 'number') {
               this.setTop(args[0]);
               if (args.length === 1) {
                  this.setRight(args[0]);
                  this.setBottom(args[0]);
                  this.setLeft(args[0]);
               } else if (args.length === 2) {
                  this.setRight(args[1]);
                  this.setBottom(args[0]);
                  this.setLeft(args[1]);
               } else if (args.length === 3) {
                  this.setRight(args[1]);
                  this.setBottom(args[2]);
                  this.setLeft(args[1]);
               } else {
                  this.setRight(args[1]);
                  this.setBottom(args[2]);
                  this.setLeft(args[3]);
               }
            } else {
               if (args[0].top) this.setTop(args[0].top);
               if (args[0].right) this.setRight(args[0].right);
               if (args[0].bottom) this.setBottom(args[0].bottom);
               if (args[0].left) this.setLeft(args[0].left);
               if (args[0].topLeft) this.setTopLeft(args[0].topLeft);
               if (args[0].topRight) this.setTopRight(args[0].topRight);
               if (args[0].bottomRight) this.setBottomRight(args[0].bottom);
               if (args[0].bottomLeft) this.setBottomLeft(args[0].left);
            }
            return this;
         }
      }
      
      return SideVals;
   }
);
