function main(){
	anime({
  targets: '.col-sm',
  scale: [
    {value: .1, easing: 'easeOutSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1200}
  ],
  delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
});

}

function de(){
	 $(".col-sm").animate({ 'zoom': 1 }, 400);
	 
        
  $("li").slideToggle();
}

function hi(){
	$('li').slideUp("slow");
}