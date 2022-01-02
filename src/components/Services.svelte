<script>
	import "../styles/Services.scss";

	const subtitle = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque delectus molestias ut,
				magnam soluta.`;
	const cards = [
		{ title: "Reasoned meeting", subtitle },
		{ title: "Rationalization of management and economics", subtitle },
		{ title: "The law was rationalized", subtitle },
		{ title: "Rationalization of the soul", subtitle },
		{ title: "Self-rationalization", subtitle },
	];
</script>

<section>
	<h1>Development Services</h1>
	<p>
		Be guided to achieve your goals and develop your skills in line with your needs by contacting our
		mentors
	</p>
	<section>
		{#each cards as { title, subtitle }, i}
			<article>
				<h1>{title}</h1>
				<p>{subtitle}</p>
				<img src={`./services/${i + 1}.jpg`} alt="Card Image" />
			</article>
		{/each}
	</section>
</section>
