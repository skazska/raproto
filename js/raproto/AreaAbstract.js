define(
   [],
   function () {
      'use strict';

      class AreaAbstract {

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
          * @returns {AreaAbstract}
          */
         setContainer (container) {
            this.container = container;

            return this;
         }

         /**
          * sets shape object
          * @param {Object} shape
          * @param {boolean} render
          * @returns {AreaAbstract}
          */
         setShape (shape, render) {
            if (shape) this.shape = shape;
            if (render) this.render();
            return this;
         }

         /**
          * sets options
          * @param {Object} options
          * @param {boolean} render
          * @returns {AreaAbstract}
          */
         setOptions (options, render) {
            if (!options) return this;

            if (typeof options.margin !== 'undefined') {
               let margin = this.sidesValue(options.margin);
            }
            if (typeof options.padding !== 'undefined') {
               let padding = this.sidesValue(options.margin);
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
          * @returns {AreaAbstract}
          */
         setView (view, render) {
            if (!view) return this;

            if ( !AreaAbstract.eql(this.view, view) ) {
               this.view = view;
               if ( render ) {
                  this.render();
               }
            }

            return this;
         }

         /**
          * sets data to render
          * @param data
          * @returns {AreaAbstract}
          */
         setData (data) {
            this.data = data;
            return this;
         }

         /**
          * renders area
          * @param {Object} container to render in
          * @param {*} data data to render
          * @returns {AreaAbstract}
          */
         render () {
            return this;
         }


         static sidesValue (val) {
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

         static eql (a, b) {
            if ( typeof a === 'undefined' || typeof b === 'undefined' ) return;
            if ( typeof a === 'object' || typeof b === 'object' ) {
               if ( typeof a !== typeof b ) return;
               if (Array.isArray(a)) {
                  return AreaAbstract.eqlArray(a, b);
               } else {
                  return AreaAbstract.eqlObject(a, b);
               }
            }
            if ( typeof a === 'function' || typeof b === 'function' ) {
               if ( typeof a !== typeof b ) return;
            }
            return a == b ? 0 : (a < b ? -1 : 1);
         }

         static eqlArray (a, b) {
            let res = 0;
            let i = 0;
            while (res === 0) {
               res = AreaAbstract.eql(a[i], b[i]);
               i += 1;
            }
            return res;
         }

         static eqlObject (a, b) {
            const keys = Object.keys(a);
            let res = AreaAbstract.eqlArray(keys, Object.keys(b));
            let i = 0;
            while (res === 0) {
               let key = keys[i++];
               res = AreaAbstract.eql(a[key], b[key]);
            }
            return res;
         }


      }

      return AreaAbstract;
   }
);
