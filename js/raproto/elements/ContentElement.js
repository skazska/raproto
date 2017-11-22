define(
   ['elts/Element', 'elts/abstracts/Foreground'],
   function (Element, Foreground) {
      'use strict';

      class ContentElement extends Element {

         /**
          * creates element data object
          * @class
          * @param {Composition} composition
          * @param {Border} border
          * @param {Background} background
          */
         constructor (composition, border, background, foreground) {
            super('Content', composition, border, background);
            this.setForeground(foreground);
         }

      }

      return ContentElement;
   }
);
