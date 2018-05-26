var accordeonContent = document.getElementsByClassName('accordeon__content'),
	accordeonElement = document.getElementsByClassName('accordeon__element');

for (var i = 0; i < accordeonElement.length; i++) {
	accordeonElement[i].addEventListener('click', function () {
		if (!(this.classList.contains('accordeon__element-active'))) {
			for (var i = 0; i < accordeonElement.length; i++) {
				accordeonElement[i].classList.remove('accordeon__element-active');
			}
			this.classList.add('accordeon__element-active');
		}
	})
}