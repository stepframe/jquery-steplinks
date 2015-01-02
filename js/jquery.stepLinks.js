/* jQuery StepLinks v1.0 */
 
;(function ( $, window, document, undefined ) {

	// Open external links and PDFs in new window
    var pluginName = "stepLinks",
        defaults = {};
 
    // plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend({}, defaults, options) ;
 
        this._defaults = defaults;
        this._name = pluginName;
 
        this.init();
    }

    Plugin.prototype.init = function () {

        if (($(this.element).attr('href').indexOf('http') > -1) || ($(this.element).attr('href').indexOf('pdf') > -1)) {
        	$(this.element).attr('target', '_blank');
        }

        // Setup event tracking for external links and PDFs
        if($(this.element).attr('href') !== undefined) {
        	
        	var title,
        		page;

        	if($(this.element).attr('href').indexOf('.pdf') > -1) {
        
        		title = $(this.element).text();
        		page = $(this.element)[0].href;
        		page = page.replace(window.location.protocol + '//' + window.location.host, '');
        		
        		$(this.element).click(function() {
        			trackThis.page(title, page, 'PDF');
        		});
        	} else if ($(this.element).attr('href').indexOf('http') > -1) {
        		
        		title = $(this.element).text();
        		page = $(this.element)[0].href;
        		page = page.replace(window.location.protocol + '//' + window.location.host, '');
        		
        		$(this.element).click(function() {
        			trackThis.event('External Link', page, title);
        		});
        	}
        }
    };
 
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if ( !$.data(this, "plugin_" + pluginName )) {
                $.data( this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    }
 
})( jQuery, window, document );