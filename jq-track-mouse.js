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
				this.generateTracker();
				this.bindUI();
				this.showTracker();
			}
		},
		
		bindUI: function () {

			var self = this;

			$(document).on('mousemove', function( e ){
				$(document).trigger('trackmouse', e);
			});

			$(document).on('trackmouse', function( e, mouseObj ){
				self.moveTracker( mouseObj.pageX, mouseObj.pageY );
			});
		},

		generateTracker: function () {

			if ( $('.jq-mouse-tracker').length != 0 ) {
				$('.jq-mouse-tracker').remove();
			}
				
			this.el = $('<div class="jq-mouse-tracker"></div>');
			this.el.css({
				'position' : 'fixed',
				'display' : 'none',
				'left' : 0,
				'top' : 0,
				'z-index' : 9999999999,
				'font-family' : 'tahoma, arial, sans-serif',
				'font-size' : '14px',
				'background-color' : '#444',
				'color' : '#eee',
				'padding' : 10
			});

			$('body').append( this.el );

			if ( ( typeof this.options.text == 'string' ) || ( typeof this.options.text == 'number' ) ) {
				this.el.html( this.options.text );
			} else if ( this.options.text instanceof Array ) {
				var text = "<ul><li>" + this.options.text.join('</li><li>') + "</li></ul>";
				this.el.html( text );
			} else {
				this.options.text = 'Invalid text format, you can only provide string or array.';
			}

			if ( this.options.blink ) {
				this.blinkTracker();
			};
		},

		blinkTracker: function () {

			var self = this;

			this.blink = window.setInterval(function () {
				self.el.fadeToggle();
			}, this.options.blinkTime);
		},

		moveTracker: function ( x, y ) {

			this.el.css({
				'left' : x + this.options.offset.x,
				'top' : y + this.options.offset.y
			});
		},

		showTracker: function () {
			this.el.show();
		},

		reset: function () {
			this.el.remove();
		}
	};
	
	$.trackMouse = function(options) {
		var trackMouse = Object.create( TrackMouse );
		trackMouse.init(options, this);

		return {
			reset : function () {
				trackMouse.reset();
			}
		}
	};

	$.trackMouse.options = {
		text : 'Provide some text',
		offset : {
			x : 20,
			y : 20
		},
		blink : false,
		blinkTime : 600
	};

})( jQuery, window, document );