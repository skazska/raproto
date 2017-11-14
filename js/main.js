requirejs.config({
   //By default load any module IDs from js/lib
   baseUrl: 'js/sf',
   //except, if the module ID starts with "app",
   //load it from the js/app directory. paths
   //config is relative to the baseUrl, and
   //never includes a ".js" extension since
   //the paths config could be for a directory.
   paths: {
      d3: "https://d3js.org/d3.v4.min.js",
      //sf: "js/sf"
   }
});

// Start the main app logic.
requirejs(
   ['Sf'],
   function   (Sf) {
      window.addEventListener("load", function () {
         console.log("loaded");

         const sf = new Sf("svg#workplace");

         optimizedResize.add(function() {
            sf.resize();
            console.log('Resource conscious resize callback!')
         });

      });
   }
);

const optimizedResize = (function() {

   var callbacks = [],
      running = false;

   // fired on resize event
   function resize() {

      if (!running) {
         running = true;

         if (window.requestAnimationFrame) {
            window.requestAnimationFrame(runCallbacks);
         } else {
            setTimeout(runCallbacks, 66);
         }
      }

   }

   // run the actual callbacks
   function runCallbacks() {

      callbacks.forEach(function(callback) {
         callback();
      });

      running = false;
   }

   // adds callback to loop
   function addCallback(callback) {

      if (callback) {
         callbacks.push(callback);
      }

   }

   return {
      // public method to add additional callback
      add: function(callback) {
         if (!callbacks.length) {
            window.addEventListener('resize', resize);
         }
         addCallback(callback);
      }
   }
}());

// // start process
// optimizedResize.add(function() {
//    console.log('Resource conscious resize callback!')
// });


