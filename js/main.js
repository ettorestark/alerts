(function(window, document) {
	var close = document.querySelectorAll('.alert .close');
	var i;
	for(i=0; i<close.length; i++) {
		close[i].addEventListener('click', function() {
			var div = this.parentElement;
			div.style.opacity = '0';
			window.setTimeout(function() {
				div.style.display = 'none';
			}, 600);
		});
	}
})(window, document);