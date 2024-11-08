window.addEventListener('DOMContentLoaded', (event) => {
	var swiperHomeSlider = new Swiper('.mew_slide', {
		spaceBetween: 50,
		pagination: {
			el: '.mew_slide_p',
			clickable: true,
		},
		centeredSlides: true,
		loop: true,
		effect: 'fade',
		speed:1000,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
		}
	});
	var swiperCateSlider = new Swiper('.m_cate_slide', {
		spaceBetween: 15,
		loop: false,
		speed: 1000,
		autoplay: false,
		navigation: {
			nextEl: '.mc_next',
			prevEl: '.mc_prev',
		},
		pagination: {
			el: '.mc_pagi',
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			576: {
				slidesPerView: 1.5
			},
			768: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 4
			}
		}
	});

	document.querySelectorAll('.js-flashsale').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
	
	var swiperPoliSlider = new Swiper('.product_poli', {
		spaceBetween: 15,
		loop: false,
		speed: 1000,
		autoplay: true,
		breakpoints: {
			0: {
				slidesPerView: 1.2
			},
			480: {
				slidesPerView: 1.5
			},
			768: {
				slidesPerView: 2.3
			},
			992: {
				slidesPerView: 3.2
			},
			1200: {
				slidesPerView: 4
			}
		}
	});
	
	var swiperProductSaleSlider = new Swiper('.mew_flash', {
		spaceBetween: 15,
		loop: false,
		speed: 1000,
		autoplay: false,
		navigation: {
			nextEl: '.mf_next',
			prevEl: '.mf_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 3
			},
			992: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 5
			}
		}
	});
	
	
	var swiperProductSaleSlider2 = new Swiper('.mew_quangcao', {
		spaceBetween: 15,
		loop: true,
		speed: 1000,
		autoplay: true,
		navigation: {
			nextEl: '.mf_next',
			prevEl: '.mf_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 2
				
			},
			768: {
				slidesPerView: 3
			},
			992: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 4
			}
		}
	});
	
	
	var swiperProduct2Slider = new Swiper('.mew_product_2', {
		spaceBetween: 15,
		loop: false,
		speed: 1000,
		autoplay: false,
		navigation: {
			nextEl: '.mf_next',
			prevEl: '.mf_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			768: {
				slidesPerView: 3,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			992: {
				slidesPerView: 4,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			1200: {
				slidesPerView: 5,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			}
		}
	});
	
	var swiperProduct3Slider = new Swiper('.mew_product_3', {
		spaceBetween: 15,
		loop: false,
		speed: 1000,
		autoplay: false,
		navigation: {
			nextEl: '.mf_next',
			prevEl: '.mf_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			768: {
				slidesPerView: 2,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			992: {
				slidesPerView: 4,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			1200: {
				slidesPerView: 5,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			}
		}
	});
	
	var swiperProduct4Slider = new Swiper('.mew_product_4', {
		spaceBetween: 15,
		loop: false,
		speed: 1000,
		autoplay: false,
		navigation: {
			nextEl: '.mf_next',
			prevEl: '.mf_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			768: {
				slidesPerView: 2,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			992: {
				slidesPerView: 4,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			1200: {
				slidesPerView: 5,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			}
		}
	});
	
	var swiperProduct5Slider = new Swiper('.mew_product_5', {
		spaceBetween: 15,
		loop: false,
		speed: 1000,
		autoplay: false,
		navigation: {
			nextEl: '.mf_next',
			prevEl: '.mf_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			768: {
				slidesPerView: 2,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			992: {
				slidesPerView: 4,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			1200: {
				slidesPerView: 5,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			}
		}
	});
	
	
	var swiperProduct5Slider = new Swiper('.mew_product_6', {
		spaceBetween: 15,
		loop: false,
		speed: 1000,
		autoplay: false,
		navigation: {
			nextEl: '.mf_next',
			prevEl: '.mf_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			768: {
				slidesPerView: 2,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			992: {
				slidesPerView: 4,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			1200: {
				slidesPerView: 5,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			}
		}
	});
	
	
	var swiperProduct5Slider = new Swiper('.mew_product_7', {
		spaceBetween: 15,
		loop: false,
		speed: 1000,
		autoplay: false,
		navigation: {
			nextEl: '.mf_next',
			prevEl: '.mf_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			768: {
				slidesPerView: 2,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			992: {
				slidesPerView: 4,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			},
			1200: {
				slidesPerView: 5,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2
			}
		}
	});
	
	var swiperVideoSlider = new Swiper('.mew_video', {
		spaceBetween: 15,
		loop: false,
		speed: 1000,
		autoplay: false,
		navigation: {
			nextEl: '.mv_next',
			prevEl: '.mv_prev',
		},
		breakpoints: {
			375: {
				slidesPerView: 1.2
			},
			768: {
				slidesPerView: 2.3
			},
			992: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 4
			}
		}
	});
	let videos = document.querySelectorAll('.open_video');
	let popupVideo = document.querySelector('.popup_video');
	let close_vd = document.querySelectorAll('.close_video');
	videos.forEach(v => v.addEventListener('click', function(e){
		e.preventDefault();
		popupVideo.classList.add('open');
		popupVideo.querySelector('.b_video').innerHTML  = `<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${e.target.dataset.video}?enablejsapi=1" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`
	}));
	close_vd.forEach(v => v.addEventListener('click', function(e){
		e.preventDefault();
		popupVideo.classList.remove('open');
		setTimeout(function(){
			popupVideo.querySelector('.b_video').innerHTML  = ``
		}, 500);
	}));
	
	var swiperBlogSlider = new Swiper('.mew_blog', {
		spaceBetween: 15,
		loop: false,
		speed: 1000,
		autoplay: false,
		navigation: {
			nextEl: '.ml_next',
			prevEl: '.ml_prev',
		},
		breakpoints: {
			375: {
				slidesPerView: 1.2
			},
			768: {
				slidesPerView: 2.3
			},
			992: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 4
			}
		}
	});
	
});