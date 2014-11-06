;
// jQuery track mouse plugin created by Kamran Ahmed copyright MIT license 2014
// v0.1
if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {}
		F.prototype = obj;
		return new F();
	};
}
(function( $, window, document, undefined ) {
	"use strict";
	
	var TrackMouse = {

		init: function (options, elem) {
			
			var _options = {};
			
			if ( ( typeof options === 'string' ) || ( options instanceof Array ) ) {
				_options.text = options;
			} else {
				_options = options;
			}

			this.options = $.extend( {}, $.trackMouse.options, _options );

			// Start the processing, iff text provided
			if ( this.options.text ) {

				this.bindUI();
			};
		},
		
		bindUI: function () {


		}
	};
	
	$.trackMouse = function(options) {
		var trackMouse = Object.create( TrackMouse );
		trackMouse.init(options, this);

		return {
			reset : function () {
				
			}
		}
	};

	$.trackMouse.options = {
		text : ''
	};

})( jQuery, window, document );