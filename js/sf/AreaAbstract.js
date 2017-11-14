requirejs(
   [],
   function () {
      'use strict';

      class SfAreaAbstract {

         constructor (container, view, shape, options, render) {
            this.view = {
               x: 0, y: 0,
               width: +container.attr("width"),
               height: +container.attr("height")
            };

            this.options = {};

            this
               .setData(data)
               .setContainer(container)
               .setShape(shape)
               .setOptions(options)
               .setView(view, render);
         }

         /**
          * sets new container
          * @param container
          * @returns {SfAreaAbstract}
          */
         setContainer (container) {
            this.container = container;

            return this;
         }

         /**
          * sets shape object
          * @param {Object} shape
          * @param {boolean} render
          * @returns {SfAreaAbstract}
          */
         setShape (shape, render) {
            if (shape) this.shape = shape;
            if (render) this.render();
            return this;
         }

         static fourValsValue (val) {
            let vals = null;
            if (typeof val === 'number') vals = [ val, val, val, val ];
            if (typeof val.length === 'number' && typeof val.slice === 'function') {
               if (val.length === 1) vals = [ val[0], val[0], val[0], val[0] ];
               if (val.length === 2) vals = [ val[0], val[1], val[0], val[1] ];
               if (val.length === 3) vals = [ val[0], val[1], val[2], val[1] ];
               if (val.length > 3) vals = val.slice(0, 3);
            }
            return vals;
         }

         /**
          * sets options
          * @param {Object} options
          * @param {boolean} render
          * @returns {SfAreaAbstract}
          */
         setOptions (options, render) {
            if (!options) return this;

            let isChanged = false;

            if (typeof options.margin !== 'undefined') {
               let margin = this.fourValsValue(options.margin);

            }


            if (render && isChanged) {
               this.render();
            }

            return this;
         }

         /**
          * sets new size if changed then rerenders
          * @param {Object} view
          * @param {number} view.x
          * @param {number} view.y
          * @param {number} view.width
          * @param {number} view.height
          * @param {boolean} render
          * @returns {SfAreaAbstract}
          */
         setView (view, render) {
            if (!view) return this;

            let isChanged = false;

            if (typeof view.x === "number" && this.view.x !== view.x) {
               this.view.x = view.x;
               isChanged = true;
            }
            if (typeof view.y === "number" && this.view.y !== view.y) {
               this.view.y = view.y;
               isChanged = true;
            }
            if (typeof view.width === "number" && this.view.width !== view.width) {
               this.view.width = view.width;
               isChanged = true;
            }
            if (typeof view.height !== "number" && this.view.height !== view.height) {
               this.view.height = view.height;
               isChanged = true;
            }
            if (render && isChanged) {
               this.render();
            }

            return this;
         }

         /**
          * sets data to render
          * @param data
          * @returns {SfAreaAbstract}
          */
         setData (data) {
            this.data = data;
            return this;
         }

         /**
          * renders area
          * @param {Object} container to render in
          * @param {*} data data to render
          * @returns {SfAreaAbstract}
          */
         render () {
            return this;
         }

      }

      return SfAreaAbstract;
   }
);
