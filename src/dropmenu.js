// see http://coding.smashingmagazine.com/2011/10/11/essential-jquery-Dropmenu-patterns/
// the semi-colon before the function invocation is a safety 
// net against concatenated scripts and/or other Dropmenus 
// that are not closed properly.
;(function ( $, window, document, undefined ) {
  
  // undefined is used here as the undefined global 
  // variable in ECMAScript 3 and is mutable (i.e. it can 
  // be changed by someone else). undefined isn't really 
  // being passed in so we can ensure that its value is 
  // truly undefined. In ES5, undefined can no longer be 
  // modified.
  
  // window and document are passed through as local 
  // variables rather than as globals, because this (slightly) 
  // quickens the resolution process and can be more 
  // efficiently minified (especially when both are 
  // regularly referenced in your Dropmenu).

  // Create the defaults once
  var dropmenu = 'dropmenu',
      defaults = {
        propertyName: "value"
      };

  // The actual Dropmenu constructor
  function Dropmenu( element, options ) {

    this.element = element;

    // jQuery has an extend method that merges the 
    // contents of two or more objects, storing the 
    // result in the first object. The first object 
    // is generally empty because we don't want to alter 
    // the default options for future instances of the Dropmenu
    this.options = $.extend( {}, defaults, options) ;
    
    this._defaults = defaults;
    this._name = dropmenu;
    
    this.init();
    this.toggle();
  }

  Dropmenu.prototype = {
    
    init: function () {
      // Place initialization logic here
      // You already have access to the DOM element and
      // the options via the instance, e.g. this.element 
      // and this.options

      // Grab our child menu, at the moment its hardcoded
      // attach it's height to the main object

      this.child = $(this.element).find('.navigation');
      this.child.height = this.getHeight(this.child);
    },
    
    getHeight: function (el) {
      if (el) {
        return $(el).height();
      }
    },

    toggle: function () {
      this[$(this.element).hasClass( this.options.toggle ) ? 'show' : 'hide']();      
    },

    hide: function () {
      $(this.element).addClass( this.options.toggle ).height(0);      
    },

    show: function () {
      $(this.element).removeClass( this.options.toggle ).height( this.child.height );    
    }
  };

  $.fn[dropmenu] = function ( options ) {
    return this.each(function () {
      new Dropmenu( this, options );
    });
  };


 /* COLLAPSE DATA-API
  * ================= */

  $(document).on('click.dropmenu.data-api', '[data-toggle=collapsed]', function (e) {
  
    var $this = $(this), 
    href,

    // regex strip for ie7
    target = $this.attr('data-target') || e.preventDefault() || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''),
    option = $this.data();
    // $(target).toggleClass(option.toggle);
    $(target).dropmenu(option);
  });


})( jQuery, window, document );