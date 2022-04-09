<script>
	import { browser } from '$app/env';

	const SEJDA_HTML_TO_PDF_URL = 'https://www.sejda.com/html-to-pdf';
	const EXPORT_PDF_ENDPOINT = 'export-pdf';

	if (browser) {
		const urlParams = new URLSearchParams(window.location.search);
		console.log(urlParams);
	}

	function saveAsPdf(event) {
		event.preventDefault();
		const pageUrl = encodeURIComponent(window.location.href + `?${EXPORT_PDF_ENDPOINT}=true`);
		window.open(SEJDA_HTML_TO_PDF_URL + '?save-link=' + pageUrl);
	}
</script>

<!-- <a href={SEJDA_HTML_TO_PDF_URL} on:click={saveAsPdf}>Save as PDF</a> -->
<style>
	a {
		outline: 0 none !important;
		border: none;
		font-size: 1.1em;
		color: inherit;
	}
</style>
