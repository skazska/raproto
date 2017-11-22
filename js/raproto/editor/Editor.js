define(
   ['d3', 'AreaAbstract', 'ItemEditor', 'EditBrowser'],
   function (d3, AreaAbstract, ItemEditor, EditBrowser) {
      'use strict';

      class Editor extends AreaAbstract {

         constructor (data, containerSelector) {
            const
               svg = d3.select(containerSelector),
               width = +svg.attr("width"),
               height = +svg.attr("height");


            let data = [
               {
                  data: data,
                  controller: new ItemEditor()
               },
               {
                  data: data,
                  controller: new EditBrowser()
               }
            ];

            super(data, svg, 0, 0, width, height, true);

         }

         setView (x, y, width, height, render) {
            this.panelMargin = 5;
            this.sx = Math.round(this.width / 2);

            return super.setView(x, y, width, height, render);
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

      return Editor;

   }
);