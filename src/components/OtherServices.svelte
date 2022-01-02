<script>
	import "../styles/OtherServices.scss";
	import Wave from "./Wave.svelte";
	const cards = [
		{
			icon: `fas fa-users`,
			title: `Groups Of People`,
			p: `We prepare interactive advisory sessions for a group of guided guides on a specific topic.`,
		},
		{
			icon: `fas fa-fingerprint`,
			title: `Character Analysis`,
			p: `Provide a detailed analysis of your personality based on your features, test the measurement of thought patterns, handwriting analysis, etc.`,
		},
		{
			icon: `fas fa-people-carry`,
			title: `Community Services`,
			p: `Soon Rushd will provide voluntary community services to a variety of groups in the community, browsing this service periodically to learn about our upcoming events.`,
		},
		{
			icon: `fas fa-graduation-cap`,
			title: `Training Evenings`,
			p: `We offer multiple evenings and training programs with certified instructors and experts who are advertised through the Rushd platform`,
		},
	];
</script>

<section>
	<Wave />
	<h1>Other Services</h1>
	<section>
		{#each cards as { icon, title, p }}
			<article>
				<div>
					<span><i class={icon} /></span>
					<h1>{title}</h1>
				</div>
				<p>{p}</p>
			</article>
		{/each}
	</section>
</section>
