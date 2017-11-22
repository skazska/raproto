define(
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

         /**
          * sets width
          * @param width
          * @returns {Border}
          */
         setWidth (width) {
            this.width = width;
            return this;
         }

         /**
          * sets style
          * @param style
          * @returns {Border}
          */
         setStyle (style) {
            this.style = style;
            return this;
         }

         /**
          * sets color
          * @param color
          * @returns {Border}
          */
         setColor (color) {
            this.color = color;
            return this;
         }

         /**
          * sets radius
          * @param radius
          * @returns {Border}
          */
         setRadius (radius) {
            this.radius = radius;
            return this;
         }

         /**
          * sets options
          * @param options
          * @returns {Border}
          */
         setOptions (options) {
            this.options = options;
            return this;
         }

      }

      return Border;
   }
);
