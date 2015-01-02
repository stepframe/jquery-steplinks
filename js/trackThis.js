/* trackThis v1.0 */
(function(window) {
	'use strict';

	function trackPage(title, page, type) {
		'use strict';

		if (type && type !== '') {title = type + ' - ' + title;}
		if (ga) {
			ga('send', 'pageview', {'page': page,'title': title});
		}
	}
	function trackEvent(category, action, label) {
		'use strict';

		if(label === null) {
			label = '';
		}

		if (ga) {
			ga('send', 'event', category, action, label);
		}
	}

	var trackThis = {
		page: trackPage,
		event: trackEvent
	};

	window.trackThis = trackThis;

})(window);