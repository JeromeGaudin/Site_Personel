function hautPage() {
 	window.scrollTo(0, 0);
	return false;
}

/* slideShow */


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("imageSlide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

/* fonction inutil a supp*/
/*function cacherSlideShow() {
	var i;
	var x = document.getElementsByClassName("imageSlide");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
}

function slideShow(var numImage) {
	var x document.getElementsByClassName("imageSlide");
	cacherSlideShow();
	x[numImage].style.display = "block";
}*/


/*function slide_show() {
	var i;
	var x = document.getElementsByClassName("image_slide");
	var y = document.getElementsByClassName("legende_slide");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
		y[i].style.display = "none";
	}
	j++;
	if (j > x.length) {j = 1}
	x[j-1].style.display = "block";
	y[j-1].style.display = "block";
	z = setTimeout(slide_show,5000);
}

function manual_plus(){
	clearTimeout(z);
	slide_show();
	clearTimeout(z);
	z = setTimeout(slide_show,7000);
}

function manual_moins(){
	clearTimeout(z);
	if(j<2)
		j=2;
	else
		j = j-2;
	slide_show();
	clearTimeout(z);
	z = setTimeout(slide_show,7000);
}

function cacher_cartes_lancement() {
	var x = document.getElementsByClassName("carte");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
}

function afficher_cacher_carte(x) {
	x = document.getElementById(x);
	if (x.style.display === 'none') {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
}*/
