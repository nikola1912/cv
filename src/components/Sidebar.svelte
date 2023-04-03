<script>
	import data from '$data';
</script>

<aside style="background: {data.theme}">
	<img alt="profile" src="profile.png" />
	<section>
		<h2>Personal</h2>
		<ul>
			{#each data.personal as { label, value }}
				<li>
					<span class="personal-label">{label}</span><br />
					{value}
				</li>
			{/each}
		</ul>
	</section>
	<section>
		<h2>Interests</h2>
		<ul>
			{#each data.interests as interest}
				<li>
					<span>{interest}</span>
				</li>
			{/each}
		</ul>
	</section>
</aside>

<style>
	aside {
		left: 0;
		overflow: hidden;
		position: absolute;
		color: #fff;
		padding: 29px 0 0 20px;
		width: 215px;
		height: 100%;
	}

	img {
		height: 165px;
		width: 165px;
		border-radius: 50%;
	}

	section {
		display: block;
	}

	h2 {
		font-size: 1.3em;
		padding: 20px 0 11px 0;
		margin: 0 0 10px 0;
		border-bottom: 1px solid #fff;
	}

	ul {
		display: block;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	ul li {
		display: block;
		list-style: none;
		font-size: 1em;
		margin: 0;
		page-break-inside: avoid;
		padding: 8px 5px 0 0;
		color: rgb(223, 223, 223);
	}

	ul li:last-child {
		padding-bottom: 0;
	}

	.personal-label {
		font-weight: 900;
	}

	.language-level {
		float: right;
		margin-right: 20px;
	}
</style>
