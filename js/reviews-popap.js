//Показываем модальное окно
$('.reviews__btn').each(function(i){
  return this[i];
 }).click(function(e){
   //считываем атрибут data-modal
   var modal = $(this).data('modal');
   $('#'+modal).show();
 })

 //Закрываем модальное окно крестиком
 $('.modal__close')
   .each(function(i){
     return this[i];
   })
   .click(function(){
     $(this).parents('.modal').hide();
   })

//Закрываем модальное окно кликом по пустому месту
$('.modal')
 .each(function(i){
   return this[i];
 }).click(function(e){
   if(e.target.className === 'modal'){
     $(this).hide();
   }
 })
