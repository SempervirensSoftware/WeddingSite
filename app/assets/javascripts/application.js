// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

var _HIDDEN_IMAGE_Y_OFFSET = 45;

function hideContent() {
	$(".detail").addClass("hidden");
}

function showContent(id) {
	if (id != null && id.length > 0 && id != _selectedId) {
		hideHeroImage();
		$(".detail").addClass("hidden");
		var detail_id = "#" + id +"_content";
		$(detail_id).removeClass("hidden");
		history.pushState(null, "content page", id);
	}			
}

function hideHeroImage() {
	if (this._heroHidden == undefined || this._heroHidden == false) {
		this._heroHidden = true;

		$('#hero').animate({				
			height: _HIDDEN_IMAGE_Y_OFFSET
		}, 1000, function() {				
			$("#hero").data('backstretch').pause();
			$("#hero").css("background-color","#b1b1b1");
			$(".backstretch").fadeOut(100);				
		});					
	}			
}

function showHeroImage() {
	if (this._heroHidden == true) {
		this._heroHidden = false;
		$(".backstretch").fadeIn(10);
		
		$('#hero').animate({				
			height: 529
		}, 1000, function() {				
			$("#hero").data('backstretch').resume();
			$("#hero").css("background-color","");
		});
	}
}

function getHiddenElementHeight(element){
	var height = 0;
	
	// make the element active but not visible
	element.css({
        position:   'absolute',         
        visibility: 'hidden'
    });
    element.removeClass("hidden");

	// get the height of the active element
	height = element.height();

	// return the element to it's previous state
	element.addClass("hidden");
	element.css({
        position:   'static', 
        visibility: 'visible'
    });

    return height;
}