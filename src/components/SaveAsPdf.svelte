<script>
	const SEJDA_HTML_TO_PDF_URL = 'https://www.sejda.com/html-to-pdf';

	function saveAsPdf(event) {
		event.preventDefault();
		const pageUrl = encodeURIComponent(window.location.href);
		window.open(SEJDA_HTML_TO_PDF_URL + '?save-link=' + pageUrl);
	}
</script>

<a href={SEJDA_HTML_TO_PDF_URL} on:click={saveAsPdf}>Save as PDF</a>

<style>
	a {
		outline: 0 none !important;
		border: none;
		font-size: 1.1em;
	}
</style>
