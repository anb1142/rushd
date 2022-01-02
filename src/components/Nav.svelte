<script>
	import { onMount } from "svelte";

	import activeSection from "../functions/activeSection";
	import "../styles/Nav.scss";

	let hide = false;
	let inView = [false, false, false];

	onMount(() => {
		inView = activeSection();
		let prevScrollpos = window.pageYOffset;
		window.onscroll = () => {
			let currentScrollPos = window.pageYOffset;
			hide = prevScrollpos > currentScrollPos ? false : true;
			prevScrollpos = currentScrollPos;

			let newInView = activeSection();
			if (newInView.some((x) => x)) inView = newInView;
		};
	});
</script>

<nav style={hide ? `transform:translateY(-6.7vh)` : ""}>
	<img src="./logo.png" alt="logo" />
	<ul>
		{#each ["Home", "Development", "Services"] as link, i}
			<li
				on:click={() =>
					document.querySelector(`main>section:nth-of-type(${i + 1})`).scrollIntoView({
						behavior: "smooth",
					})}
				class={inView[i] ? "active" : ""}
			>
				{link}
			</li>
		{/each}
	</ul>
</nav>
