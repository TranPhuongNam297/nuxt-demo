let productWarp = $('.product-warp');
//window.addEventListener('DOMContentLoaded', (event) => {
var swiperThumbImage = new Swiper('.product-thumb-slide', { 
	spaceBetween: 4,
	slidesPerView: 3,
	watchSlidesProgress: true,
	//navigation: {
	//	nextEl: '.mew_product_thumb_next',
	//	prevEl: '.mew_product_thumb_prev',
	//},
	breakpoints: {
		575: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 5,
			allowTouchMove: false
		}
	}
});
var swiperMainImage = new Swiper('.product-main-slide', {
	effect: 'fade',
	//grabCursor: true,
	autoHeight: true,
	centeredSlides: true,
	slidesPerView: 1,
	navigation: {
		nextEl: '.mew_product_main-slide_next',
		prevEl: '.mew_product_main-slide_prev',
	},
	thumbs: {
		swiper: swiperThumbImage
	}
});
//})




const cloneMainSlide = Array.from($('.product-main-slide .swiper-slide').clone());
const cloneThumbSlide = Array.from($('.product-thumb-slide .swiper-slide').clone());
$(function () {
	if(!$('.swatch-element.color input:checked').first().length) return;
	let firstColor = $('.swatch-element.color input:checked').first().val().slugify();
	if( firstColor !== '' ){
		$('.swatch-element.color').each(function( ){
			let colorName = $(this).data('value').slugify();
			if(colorName === firstColor){
				let colorMainSlideHTML = cloneMainSlide.filterColor(colorName);
				let colorThumbSlideHTML = cloneThumbSlide.filterColor(colorName);

				swiperMainImage.removeAllSlides();
				swiperMainImage.appendSlide((colorMainSlideHTML.length > 0) ? colorMainSlideHTML : cloneMainSlide);

				swiperThumbImage.removeAllSlides();
				swiperThumbImage.appendSlide((colorThumbSlideHTML.length > 0) ? colorThumbSlideHTML : cloneThumbSlide);

				swiperMainImage.updateSize();
				swiperMainImage.updateSlides();
				swiperMainImage.updateSlidesClasses();
				swiperMainImage.slideTo(0);
				swiperThumbImage.updateSize();
				swiperThumbImage.updateSlides();
				swiperThumbImage.updateSlidesClasses();
				swiperThumbImage.slideTo(0);

				$('.product-main-slide .swiper-slide.' + colorName).first().addClass('swiper-slide-active');
				$('.product-thumb-slide .swiper-slide').removeClass('swiper-slide-thumb-active swiper-slide-active'); 
				$('.product-thumb-slide .swiper-slide.' + colorName).first().addClass('swiper-slide-thumb-active');
				return false;
			}
		});

	}
});
$('.swatch-element.color').on('click', function( ){
	let colorName = $(this).data('value').slugify();
	if(colorName !== ''){
		let colorMainSlideHTML = cloneMainSlide.filterColor(colorName);
		let colorThumbSlideHTML = cloneThumbSlide.filterColor(colorName);
		swiperMainImage.removeAllSlides();
		swiperThumbImage.removeAllSlides();
		swiperMainImage.appendSlide((colorMainSlideHTML.length > 0) ? colorMainSlideHTML : cloneMainSlide);
		swiperThumbImage.appendSlide((colorThumbSlideHTML.length > 0) ? colorThumbSlideHTML : cloneThumbSlide);

		swiperMainImage.updateSize();
		swiperMainImage.updateSlides();
		swiperMainImage.updateSlidesClasses();
		swiperMainImage.slideTo(0);
		swiperThumbImage.updateSize();
		swiperThumbImage.updateSlides();
		swiperThumbImage.updateSlidesClasses();
		swiperThumbImage.slideTo(0);

		$('.product-main-slide .swiper-slide.' + colorName).first().addClass('swiper-slide-active');
		$('.product-thumb-slide .swiper-slide').removeClass('swiper-slide-thumb-active swiper-slide-active');
		$('.product-thumb-slide .swiper-slide.' + colorName).first().addClass('swiper-slide-thumb-active');
	}
});


var selectCallback = function(variant, selector) {
	if (variant) {
		var form = $('#' + selector.domIdPrefix).closest('form');
		for (var i = 0, length = variant.options.length; i < length; i += 1) {
			var radioButton = form.find('.swatch[data-option-index="' + i + '"] [type=radio][value="' + variant.options[i] +'"]');
			if (radioButton.length) { radioButton.get(0).checked = true }
		}
	}
	var button = productWarp.find('.js-addToCart'),
		buyNow = productWarp.find('.js-buynow'),
		buttonText = button.find('.button__text'),
		quantity = productWarp.find('.product-quantity'),
		priceBox = productWarp.find('.product-price'),
		productPrice = productWarp.find('.special-price'),
		comparePrice = productWarp.find('.old-price'),
		inventoryStat = productWarp.find('.inventory_quantity');


	//console.log(variant);
	if (variant !== null) {
		priceBox.removeClass('d-none');
		if(variant.available){
			button.prop('disabled', false);
			button.off('click');
			buyNow.prop('disabled', false);
			buttonText.text(variantStrings.addToCart);
			inventoryStat.text(variantStrings.avaiable).addClass('text-success').removeClass('text-warning text-danger');
			productPrice.removeClass('d-none');
			if(variant.price === 0){
				button.addClass('d-none').removeClass('d-flex');
				buyNow.addClass('d-none').removeClass('d-flex');
				quantity.addClass('d-none').removeClass('d-sm-flex');
				productPrice.text(variantStrings.noPrice);
				comparePrice.addClass('d-none');
			} else {
				button.removeClass('d-none disabled').addClass('d-flex');
				buttonText.text(variantStrings.addToCart);
				button.on('click', throttle(addToCart, 300));
				buyNow.removeClass('d-none').addClass('d-flex');
				quantity.removeClass('d-none').addClass('d-sm-flex');
				productPrice.html(formatStoreCurrency.format(variant.price));
				if ( variant.compare_at_price > variant.price ) { comparePrice.html(formatStoreCurrency.format(variant.compare_at_price)).removeClass('d-none') } else { comparePrice.addClass('d-none') }
			}
		} else {
			button.removeClass('d-none').addClass('d-flex disabled');
			buttonText.text(variantStrings.soldOut);
			button.off('click');
			buyNow.addClass('d-none').removeClass('d-flex');
			quantity.addClass('d-none').removeClass('d-sm-flex');
			productPrice.removeClass('d-none');
			if(variant.inventory_policy === 'continue'){
				button.removeClass('d-none').addClass('d-flex');
				buttonText.text(variantStrings.addToCart);
				button.on('click', throttle(addToCart, 300));
				buyNow.removeClass('d-none').addClass('d-flex');
				inventoryStat.text(variantStrings.allowBuyWhenSoldOut).addClass('text-warning').removeClass('text-success text-danger');
			} else{
				inventoryStat.text(variantStrings.soldOut).addClass('text-danger').removeClass('text-warning text-success');
			}
			if(variant && variant.price === 0){
				productPrice.text(variantStrings.noPrice);
				comparePrice.addClass('d-none');
			} else {
				productPrice.html(formatStoreCurrency.format(variant.price));
				if ( variant.compare_at_price > variant.price ) { comparePrice.html(formatStoreCurrency.format(variant.compare_at_price)).removeClass('d-none') } else { comparePrice.addClass('d-none') }
			}
		}
		if (variant.featured_image) {  
			let variantImg = variant.featured_image.src;
			$(".product-thumb-slide img").each(function(){
				let currentUrlImg = $(this).attr('data-img').trim();
				if(variantImg === currentUrlImg){
					let index = $(this).closest('.swiper-slide').index();
					swiperMainImage.slideTo(index, 800);
					return false;
				}
			})		
		} 
	} else{
		priceBox.addClass('d-none');
		button.prop('disabled', true);
		buyNow.prop('disabled', true);
		button.addClass('d-none').removeClass('d-flex');
		buyNow.addClass('d-none').removeClass('d-flex');
		//addToCart.find('span').text(variantStrings.unAvailable);
		productPrice.addClass('d-none');
		comparePrice.addClass('d-none');
		quantity.addClass('d-none').removeClass('d-sm-flex');
		inventoryStat.text(variantStrings.unAvailable);
	}
};
$(function(){
	$('#product-selectors').length && mewService.getProductJson(productAlias).then(res => {
		if(res.variants.length > 1){
			new Bizweb.OptionSelectors('product-selectors', { product: res, onVariantSelected: selectCallback, enableHistoryState: true });      
		}	
		if(res.options.length == 1 && !res.options[0].name.includes('Title')){
			$('.selector-wrapper').eq(0).prepend(`<label>${res.options[0].name}</label>`);
		}
		if(res.variants.length == 1 && res.options[0].name.includes('Default')){
			$('.selector-wrapper').addClass('d-none');
		} else {
			$('.selector-wrapper select').addClass('custom-select rounded');
		}
		
		if(res.product.available && res.product.options.length > 1){
			linkOptionSelectors(res);
		}
		
	});
	$('.js-buynow').on('click', buyNow );
});
$('.swatch [type=radio]').on('change', function() {
	let optionIndex = $(this).closest('.swatch').attr('data-option-index');
	let optionValue = $(this).val();
	$(this).closest('form').find('.single-option-selector').eq(optionIndex).val(optionValue).trigger('change');
});

if($('.rte iframe').length){
	$('.rte iframe').wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
}
if ($('.openvideo').length){
	let videoId = $('.openvideo').data('video');
	var myModalEl = document.getElementById('videoModal')
	myModalEl.addEventListener('show.bs.modal', function (event) {
		if($(this).find('.embed-responsive').html().trim().length === 0){
			$(this).find('.embed-responsive').html(`<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${videoId}?enablejsapi=1" allowfullscreen></iframe>" allow='autoplay; encrypted-media' allowfullscreen></iframe>`);
		}
	})
	myModalEl.addEventListener('hidden.bs.modal', function (event) {
		stopAllYouTubeVideos();
	})
}

$('.special-content table').addClass('table table-striped');
$('.view_mores').on('click', 'a', function() {
	if( $(this).hasClass('one') ){
		$(this).addClass('d-none');
		$('.view_mores .two').removeClass('d-none');
	} else {
		$(this).addClass('d-none');
		$('.view_mores .one').removeClass('d-none');
	}
	$('.content_coll').toggleClass('active');
	$('.bg_cl').toggleClass('d-none');
});

$(".open_sw_mobile").on('click', function() {
	$('.mobile_open_box_swatch').toggleClass('active');
	if ($('#o_sw_buy').hasClass('active')){
		$('#body_overlay').removeClass('d-none');
		colLeft.classList.remove("active");
		menuButton.classList.remove("active");
	}else {
		$('#body_overlay').addClass('d-none');
	}
	$('.fix-phone').removeClass('active');
});