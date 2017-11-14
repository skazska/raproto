requirejs(
   ['AreaRect'],
   function (Editor) {
      'use strict';

      class Sf {

         constructor (containerSelector) {
            this.editor = new Editor(data, containerSelector);
            this.editor.resize();
         }

         resize () {
            this.editor.resize();
         }

      }

      return Sf;

   }
);
