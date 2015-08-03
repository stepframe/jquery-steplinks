/* jQuery StepLinks v1.2 */
 
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
        
        var $el = $(this.element),
            title,
            page,
            href;

        // Check for href and setup target _blank
        if($el.attr('href')) {
            href = $el.attr('href').toLowerCase();

            if(href && (href.indexOf('http') > -1 || href.indexOf('pdf') > -1)) {
                $el.attr('target', '_blank');
            }
        }

        // Setup event tracking for external links and PDFs
        if(href) {
        	
        	if(href.indexOf('.pdf') > -1) {
        
        		title = $el.text();
        		page = $el[0].href;
        		page = page.replace(window.location.protocol + '//' + window.location.host, '');
        		
        		$el.click(function() {
        			trackThis.page(title, page, 'PDF');
        		});
        	} else if (href.indexOf('http') > -1) {
        		
        		title = $el.text();
        		page = $el[0].href;
        		page = page.replace(window.location.protocol + '//' + window.location.host, '');
        		
        		$el.click(function() {
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