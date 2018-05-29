
function openPopup(e) {
  e.preventDefault();
  $('.popapContainer').toggleClass('popapContainer_active');
};

$('.reviews__list .reviews__btn').on('click', openPopup);
$('.popapClose').on('click', openPopup);


 