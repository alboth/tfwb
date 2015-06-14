(function($) {

/* -- Flexslider -- */

	$('.flexslider').flexslider({
		animation: "slide",
		itemWidth: 130,
		itemMargin: 2,
		pauseOnHover: true,
		directionNav: true,
		controlNav: false,
		start: function(slider){
			$('body').removeClass('loading');
		}
	});


		// create printlink
		$( function(){
		span = $('<span class="isLink"></span>').text($('li.printLink').data('l10n'));
		span.click(function(){window.print();});
		$('li.printLink').append(span);
		})

		// remove body.noJs
		$( function () { $('body').removeClass('noJs');});


		(function() {
			var mobileBar = $('#mobile-bar');
			var buttons = mobileBar.find('[role=button][aria-controls]');
			var controlledElements = buttons.map(function() { return buttonControls(this); });
			function buttonControls(button) {
				return $('#' + $(button).attr('aria-controls'));
			}
			mobileBar.on('toggle.mobile', '[role=button][aria-controls]', function(e) {
				current = $(e.currentTarget);
				buttons.not(current).each(function() { hide(this); });
				toggle(current);
				current.trigger('updateStatus.mobile');
			});
			mobileBar.on('updateStatus.mobile', function(e) {
				var hasExpanded = mobileBar.has('[role=button][aria-controls][aria-expanded=true]').length;
				$('html')[hasExpanded ? 'addClass' : 'removeClass']('menu-mobile-active');
			});
			buttons.on('click', function(e) {
				$(e.target).trigger('toggle.mobile');
			});
			function switchTo(button, state) {
				button = $(button);
				button.attr('aria-expanded', state ? 'true' : 'false')[state ? 'addClass' : 'removeClass']('active');
				buttonControls(button)[state ? 'addClass' : 'removeClass']('open');
			}
			function hide(button) {
				return switchTo(button, false);
			}
			function toggle(button) {
				return switchTo(button, $(button).attr('aria-expanded') == 'true' ? false : true);
			}

			// page overlay
			$('body').prepend('<div class="page-overlay"></div>');

			// Scroll events for mobileBar
			var scrolledDown = (function() {
				var lastScroll = $(window).scrollTop();
				return function() {
					var scrollTop = $(window).scrollTop(),
						delta = scrollTop - lastScroll;
					lastScroll = scrollTop;menu-mobile
					return delta > 0;
				};
			})();

			$(window).on('scroll', function(e) {
				$('html')[scrolledDown() ? 'removeClass' : 'addClass']('scrolledUp');
			});

			// Menu sublevel events
			$('#menu-mobile').on('toggleSubMenu.mobile', 'i.open-sub-trigger', function(e) {
				var trigger = $(e.currentTarget);
				subMenuToggle(trigger);
			});
			$('#menu-mobile').on('hideSubMenu.mobile', 'i.open-sub-trigger', function(e) {
				var trigger = $(e.currentTarget);
				subMenuHide(trigger);
			});
			function subMenuSwitchTo(trigger, state) {
				var controlledElement = trigger.siblings('ul.menu-sub-items');
				trigger.parent('li.menu-has-sub')[state ? 'removeClass' : 'addClass']('expanded');
				controlledElement[state ? 'slideUp': 'slideDown']();
			}
			function subMenuToggle(trigger) {
				subMenuSwitchTo(trigger, trigger.parent('li.menu-has-sub').hasClass('expanded'));
			}
			function subMenuHide(trigger) {
				subMenuSwitchTo(trigger, true);
			}
			$('#menu-mobile').on('click', 'i.open-sub-trigger', function(e) {
				$(e.currentTarget).trigger('toggleSubMenu.mobile');
			});
			$('#menu-mobile').find('i.open-sub-trigger').trigger('hideSubMenu.mobile');
		})();

		// Social Share Popup
		$('.popup').click(function(event) {
		  var width  = 600,
			  height = 500,
			  left   = ($(window).width()  - width)  / 2,
			  top    = ($(window).height() - height) / 2,
			  url    = this.href,
			  opts   = 'status=1' +
					   ',width='  + width  +
					   ',height=' + height +
					   ',top='    + top    +
					   ',left='   + left;

		  window.open(url, 'twitter', opts);

		  event.preventDefault()
		});


})(jQuery);
