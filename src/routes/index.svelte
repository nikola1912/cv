<script>
	import SideBar from '$components/Sidebar.svelte';
	import Main from '$components/Main.svelte';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700"
		rel="stylesheet"
	/>
</svelte:head>

<div>
	<SideBar />
	<Main />
</div>

<style>
	:global(*) {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		color: #333333;
	}

	:global(h1, h2, h3) {
		font-weight: 600;
		margin: 0;
		padding: 0;
	}

	:global(h1) {
		font-size: 30px;
	}

	:global(h2) {
		font-size: 17px;
	}

	:global(h3) {
		font-size: 15px;
	}

	div {
		/* 21 x 29.7 cm is A4 paper dimensions */
		width: 21cm;
		min-height: 29.7cm;
		position: relative;
		font: 0.9em 'Source Sans Pro', Arial;
	}
</style>
