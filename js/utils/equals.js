requirejs(
   [],
   {
      sidesValue : function(val) {
         let vals = null;
         if (typeof val === 'number') vals = [ val, val, val, val ];
         if (typeof val.length === 'number' && typeof val.slice === 'function') {
            if (val.length === 1) vals = [ val[0], val[0], val[0], val[0] ];
            if (val.length === 2) vals = [ val[0], val[1], val[0], val[1] ];
            if (val.length === 3) vals = [ val[0], val[1], val[2], val[1] ];
            if (val.length > 3) vals = val.slice(0, 3);
         }
         return vals;
      },

      eql : function(a, b) {
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
      },

      eqlArray : function(a, b) {
         let res = 0;
         let i = 0;
         while (res === 0) {
            res = AreaAbstract.eql(a[i], b[i]);
            i += 1;
         }
         return res;
      },

      eqlObject : function(a, b) {
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
);
