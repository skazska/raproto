define(
   ['elts/abstracts/Composition', 'elts/abstracts/Border', 'elts/abstracts/Background'],
   function (Composition, Border, Background) {
      'use strict';

      class Element {

         /**
          * creates element data object
          * @class
          * @param {Composition} composition
          * @param {Border} border
          * @param {Background} background
          */
         constructor (type, composition, border, background) {
            this.setType(type);
            this.setComposition(composition);
            this.setBorder(border);
            this.setBackground(background);
         }

         /**
          * sets type
          * @param type
          * @returns {Element}
          */
         setType (type) {
            this.type = type;
            return this;
         }

         /**
         * returns type
         * @returns {*}
         */
         getType () {
             return this.type;
         }

         /**
          * sets composition
          * @param composition
          * @returns {Element}
          */
         setComposition (composition) {
            this.composition= composition;
            return this;
         }

         /**
          * sets border
          * @param border
          * @returns {Element}
          */
         setBorder (border) {
            this.border = border;
            return this;
         }

         /**
          * sets background
          * @param background
          */
         setBackground(background) {
            this.background = background;
         }

      }

      return Element;
   }
);
