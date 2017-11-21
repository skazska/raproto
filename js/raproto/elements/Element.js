requirejs(
   ['elements/abstracts/Composition', 'elements/abstracts/Border', 'elements/abstracts/Background'],
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
         constructor (composition, border, background) {
            this.composition= composition;
            this.border = border;
            this.background = background;
         }

      }

      return Element;
   }
);
