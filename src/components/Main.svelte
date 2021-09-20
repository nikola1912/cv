<script>
	import data from '$data';
	import Skill from '$components/Skill.svelte';
	import SaveAsPdf from '$components/SaveAsPdf.svelte';
</script>

<main>
	<header>
		<h1>Nikola Jovanović</h1>
		<SaveAsPdf />
	</header>
	<section>
		<div class="content">
			<summary>
				{#each data.summary as section}
					{section}<br />
				{/each}
			</summary>
		</div>
	</section>
	<section class="experience">
		<h2>Experience</h2>
		<ol>
			{#each data.experience as { title, company, date, content }}
				<li>
					<div class="date">{date}</div>
					<h3>{title}</h3>
					<div class="heading">{company}</div>
					<div class="content">
						<ul>
							{#each content as item}
								<li>
									{item}
								</li>
							{/each}
						</ul>
					</div>
				</li>
			{/each}
		</ol>
	</section>
	<section class="skills">
		<h2>Skills</h2>
		<ol>
			{#each data.skills as { label, level }}
				<li>
					<Skill {label} {level} />
				</li>
			{/each}
		</ol>
	</section>
</main>

<style>
	main {
		left: 235px;
		position: relative;
		width: 535px;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 13px 0 15px 0;
		margin: 0 0 10px 0;
		border-bottom: 1px solid #d2d2d2;
	}

	h2 {
		padding: 15px 0;
		margin: 0 0 15px 0;
		border-bottom: 1px solid #d2d2d2;
	}

	summary {
		font-size: 1.1em;
		text-align: justify;
	}

	section:last-child {
		padding-bottom: 80px;
	}

	section ol {
		padding: 0;
		margin: 0;
	}

	section ol > li {
		position: relative;
		list-style: none;
	}

	section.experience ol > li {
		padding-top: 15px;
	}

	section.skills ol > li {
		padding-top: 10px;
	}

	section ol > li:first-child {
		padding-top: 0;
	}

	.date {
		position: absolute;
		right: 0;
		font-size: 13px;
	}

	.heading {
		padding-top: 3px;
		font-size: 15px;
	}

	.content {
		display: block;
		padding: 5px 0 0 0;
	}

	.content ul {
		white-space: normal;
		font-weight: 400;
		list-style-position: outside;
		margin: 0;
		padding: 0 0 0 16px;
		text-align: left;
	}

	.content ul li {
		line-height: 18px;
		margin-bottom: 4px;
		list-style-type: disc;
	}
</style>
