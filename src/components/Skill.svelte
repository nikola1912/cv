<script>
	import data from '$data';

	export let label;
	export let level;
</script>

<div class="label">
	<h3>{label}</h3>
</div>
<div class="levelWrapper">
	<span class="level" style="width: {level}%; background: {data.theme};" />
</div>

<style>
	.label {
		display: inline-block;
		width: 275px;
	}

	.levelWrapper {
		display: inline-block;
		width: 150px;
		height: 7px;
		background: #eaeaea;
	}

	.level {
		display: block;
		height: 100%;
		border-radius: 6px;
	}
</style>
