$(document).ready(() => {
	const bioButton = $('.bradley');
	const portfolioButton = $('.portfolio');
	const bio = $('#bio');
	const portfolio = $('#portfolio');

	console.log(bio);

	function showPortfolio() {
		bio.css('opacity', '0');
		portfolio.css('opacity', '1');
		bioButton.removeClass('active');
		bioButton.addClass('inactive');

		portfolioButton.addClass('active');
		portfolioButton.removeClass('inactive');
		window.setTimeout(() => {
			portfolio.removeClass('transdelay');
			portfolio.addClass('notransdelay');

			bio.removeClass('notransdelay');
			bio.addClass('transdelay');
		}, 345);
	}

	function showBio() {
		bio.css('opacity', '1');
		portfolio.css('opacity', '0');
		bioButton.removeClass('inactive');
		bioButton.addClass('active');

		portfolioButton.addClass('inactive');
		portfolioButton.removeClass('active');

		window.setTimeout(() => {
			portfolio.removeClass('notransdelay');
			portfolio.addClass('transdelay');

			bio.removeClass('transdelay');
			bio.addClass('notransdelay');
		}, 345);
	}
	portfolioButton.on('click', () => {
		showPortfolio();
	});

	bioButton.on('click', () => {
		showBio();
	});
});
