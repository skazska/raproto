requirejs(
   ['d3', 'AreaAbstract'],
   function (d3, AreaAbstract) {
      'use strict';

      class AreaRect extends AreaAbstract {

         constructor (data, container, view, shape, options, render) {
            if (!shape) shape = {};
            if (typeof shape.x !== "number") shape.x = 0;
            if (typeof shape.y !== "number") shape.y = 0;
            if (typeof shape.width !== "number") shape.width = +container.attr("width");
            if (typeof shape.height !== "number") shape.height = +container.attr("height");

            super(data, container, view, shape, options, render);
         }

         /**
          * sets new shape if changed then rerenders
          * @param {Object} shape
          * @param {number} shape.x
          * @param {number} shape.y
          * @param {number} shape.width
          * @param {number} shape.height
          * @param {boolean} render
          * @returns {SfAreaAbstract}
          */
         setShape (shape, render) {
            if (!shape) return this;

            let isChanged = false;

            if (typeof shape.x === "number" && this.shape.x !== shape.x) {
               this.shape.x = shape.x;
               isChanged = true;
            }
            if (typeof shape.y === "number" && this.shape.y !== shape.y) {
               this.shape.y = shape.y;
               isChanged = true;
            }
            if (typeof shape.width === "number" && this.shape.width !== shape.width) {
               this.shape.width = shape.width;
               isChanged = true;
            }
            if (typeof shape.height !== "number" && this.shape.height !== shape.height) {
               this.shape.height = shape.height;
               isChanged = true;
            }

            return super.setShape(this.shape, render && isChanged);
         }


         render (data) {

            const self = super.render( data );

            const panels = this._container.selectAll('rect').data(data.map(function (panel, i) {
               return {
                  x: i * (this.width + 2 * this.panelMargin) + this.panelMargin,
                  y: this.panelMargin,
                  width: this.sx - 2 * this.panelMargin,
                  height: this.height - 2 * this.panelMargin

               }
            }));

            panels.enter().append("rect");

            panels.attr("x", d => d.x);
            panels.attr("y", d => d.y);
            panels.attr("width", d => d.width);
            panels.attr("height", d => d.height);

            panels.exit().remove();

            data.forEach(function (panel, i) {

               panel.controller. Object.assign(
                  {
                  },
                  panel
               );
            });

         }

      }

      return AreaRect;

   }
);