//team accordeon
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

//menu accordeon
var menuAccordeonTrigger = document.getElementsByClassName('menu__accardeon-trigger'),
	menuAccordeonContent = document.getElementsByClassName('menu__accardeon-content'),
	menuAccordeonElement = document.getElementsByClassName('menu__accardeon-element');

for (var i = 0; i < menuAccordeonElement.length; i++) {
	var curTitle = menuAccordeonElement[i];
	menuAccordeonElement[i].addEventListener('click', function() {
			var classes = this.getAttribute('class'),
					newClasses = '',
					classesArr = classes.split(' '),
					newClassesArr = classes.split(' ');
			for (var j = 0; j < classesArr.length; j++) {
					if (classesArr[j] == 'menu__accardeon-element-active') {
							classesArr.splice([j], 1);
					}
			}
			if (classesArr.length === newClassesArr.length) {
					classesArr.push('menu__accardeon-element-active');
					newClasses = classesArr.join(' ');
			} else {
					newClasses = classesArr.join(' ');
			}

			for (var l = 0; l < menuAccordeonElement.length; l++) {
					oldClasses = menuAccordeonElement[l].getAttribute('class');
					oldClassesArr = oldClasses.split(' ');
					for (var k = 0; k < oldClassesArr.length; k++) {
							if (oldClassesArr[k] == 'menu__accardeon-element-active') {
									oldClassesArr.splice([k], 1);
							}
							oldClasses = oldClassesArr.join(' ');
							menuAccordeonElement[l].setAttribute('class', oldClasses);
					}
			}
			this.setAttribute('class', newClasses);
	})
}
