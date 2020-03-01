const accordionData = [
	{
		accordionIndex: 0,
		defaultOpen: true,
		accordionTitle: 'How do we recognize an emerging market?',
		accordionText:
			"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborumeiusmod. Brunch 3 wolf moon tempor, sunt aliqua puta bird on it squid single-origin coffee nullaassumenda shoreditch et. Nihil anim keffiyehhelvetica, craft beer labore wes anderson crednesciunt sapiente ea proident. Ad vegan excepteurbutcher vice lomo. Leggings occaecat craft beerfarm-to-table, raw denim aesthetic synth nesciuntyou probably haven't heard of them accusamus laboresustainable VHS."
	},
	{
		accordionIndex: 1,
		defaultOpen: false,
		accordionTitle: 'Is your investment safe?',
		accordionText:
			"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborumeiusmod. Brunch 3 wolf moon tempor, sunt aliqua puta bird on it squid single-origin coffee nullaassumenda shoreditch et. Nihil anim keffiyehhelvetica, craft beer labore wes anderson crednesciunt sapiente ea proident. Ad vegan excepteurbutcher vice lomo. Leggings occaecat craft beerfarm-to-table, raw denim aesthetic synth nesciuntyou probably haven't heard of them accusamus laboresustainable VHS."
	},
	{
		accordionIndex: 2,
		defaultOpen: false,
		accordionTitle: 'What types of investments do we make?',
		accordionText:
			"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborumeiusmod. Brunch 3 wolf moon tempor, sunt aliqua puta bird on it squid single-origin coffee nullaassumenda shoreditch et. Nihil anim keffiyehhelvetica, craft beer labore wes anderson crednesciunt sapiente ea proident. Ad vegan excepteurbutcher vice lomo. Leggings occaecat craft beerfarm-to-table, raw denim aesthetic synth nesciuntyou probably haven't heard of them accusamus laboresustainable VHS."
	}
];

const waypoint = new Waypoint({
	element: document.getElementById('optin-form'),
	handler: function(direction) {
		if (direction === 'down') {
			$('#cta-button').animate({ opacity: 0 });
		} else {
			$('#cta-button').animate({ opacity: 1 });
		}
	},
	offset: 'bottom-in-view'
});

$('body').on('click', '#accordion-section', function(e) {
	console.log('refreshing waypoints');
	setTimeout(() => Waypoint.refreshAll(), 1000);
});

$('#cta-button').click(function(e) {
	$('html, body').animate(
		{
			scrollTop: $('#optin-form').offset().top
		},
		800
	);
});

$('#accordion-section').ready(() => {
	renderAccordionSection();
});

function renderAccordionSection() {
	const source = $('#accordion-template').html();
	const template = Handlebars.compile(source);
	accordionData.forEach(item =>
		$('#accordion-section').append(template(item))
	);
}
