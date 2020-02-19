document.addEventListener('DOMContentLoaded',function(){
	var btnLang = document.querySelector('header .topbar .menu a:nth-child(1)');
	var btnClose = document.querySelector('.backgroundPopup .menu .close');
	btnLang.addEventListener('click',function() {
		document.body.style.overflow = 'hidden';
		document.querySelector('.backgroundPopup').style.display = 'flex';
	});
	btnClose.addEventListener('click',function() {
		document.querySelector('.backgroundPopup').style.display = 'none';
		document.body.style.overflow = '';
	});
});