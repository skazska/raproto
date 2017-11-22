define(
   ['elts/Element', 'elts/abstracts/Layout'],
   function (Element, Layout) {
      'use strict';

      class ContainerElement extends Element {

         /**
          * creates element data object
          * @class
          * @param {Composition} composition
          * @param {Border} border
          * @param {Background} background
          * @param {Layout} layout
          * @param {[Element]} children
          */
         constructor (composition, border, background, layout, children) {
            super('Container', composition, border, background);
            this.setLayout(layout || new Layout() );
            this.setChildren(children || []);

         }

         /**
          * sets layout
          * @param layout
          * @returns {ContainerElement}
          */
         setLayout (layout) {
            this.layout = layout;
            return this;
         }

         /**
          * sets children
          * @param children
          * @returns {ContainerElement}
          */
         setChildren (children) {
            this.children = children;
            return this;
         }

      }

      return ContainerElement;
   }
);
