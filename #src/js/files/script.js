window.onload = function () {
	document.addEventListener("click", documentActions);
	function documentActions(e) {
		const targetElement = e.target;
		if (targetElement.classList.contains('actions-header__item_search')) {
			document.querySelector('.actions-header').classList.toggle('_active');
		} else if (!targetElement.closest('.actions-header') && document.querySelector('.actions-header._active')) {
			document.querySelector('.actions-header').classList.remove('_active');
		}
	}
}