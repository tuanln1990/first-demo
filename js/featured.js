document.addEventListener('DOMContentLoaded',function() {
	var btnRight = document.querySelector('.featured .right-button');
	var btnLeft = document.querySelector('.featured .left-button');
	// btnRight.style.background = 'blue';
	var listItem = document.querySelector('.featured .list-items');
	var featured = document.querySelector('.featured');
	var styleOfFeatured = getComputedStyle(featured);
	var widthOfPicture = Math.floor(JSON.parse(styleOfFeatured.getPropertyValue('width').substr(0,styleOfFeatured.getPropertyValue('width').length-2))/3);
	var styleOfListItem = getComputedStyle(listItem);
	var left = JSON.parse(styleOfListItem.getPropertyValue('left').substr(0,styleOfListItem.getPropertyValue('left').length-2));
	var count = 0;

	btnRight.addEventListener('click',function() {
		arrowDirection('right');
	});
	btnLeft.addEventListener('click',function() {
		arrowDirection('left');
	});
	
	function arrowDirection(direction) {
		if(direction == 'left' )
		{
			count += 1;
			var nextPosition = count * widthOfPicture;
			var i = 10;
		}else {
			count -= 1;
			var nextPosition = count * widthOfPicture;
			i = -10;
		}
		console.log(nextPosition);
		var intervalID = setInterval(function(){
			if(i == 10)
			{
				if(left < nextPosition)
				{
					left += i;
					listItem.style.left = left + 'px';
				}
				else
				{
					left = nextPosition;
					listItem.style.left = left + 'px';
					clearInterval(intervalID);	
				}
			}
			if(i == -10)
			{
				if(left > nextPosition)
				{
					left += i;
					listItem.style.left = left + 'px';
				}
				else
				{
					left = nextPosition;
					listItem.style.left = left + 'px';
					clearInterval(intervalID);	
				}
			}	
		}, 1);
		if(count == -3){
			btnRight.style.display = 'none';
		}else{
			btnRight.style.display = 'block';
		}
		if(count == 0) {
			btnLeft.style.display = 'none';
		}else{
			btnLeft.style.display = 'block';
		}
	}
});