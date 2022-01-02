<script>
	import Footer from "./components/Footer.svelte";

	import Nav from "./components/Nav.svelte";
	import OtherServices from "./components/OtherServices.svelte";
	import Services from "./components/Services.svelte";
	import Top from "./components/Top.svelte";
	import "./styles/App.scss";
</script>

<Nav />
<main>
	<Top />
	<Services />
	<OtherServices />
	<Footer />
</main>
