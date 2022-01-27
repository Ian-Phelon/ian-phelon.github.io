import { c as create_ssr_component, v as validate_component } from "../../chunks/index-543a12b0.js";
import { register, init, getLocaleFromNavigator, waitLocale } from "svelte-intl-precompile";
var Header_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dropdown-area.svelte-rl9ywn{width:100vw;height:100vh;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `
${$$result.head += ``, ""}
<header class="${"sticky top-0 bg-primary md:max-w-full md:h-24 h-20"}">
	<div class="${"md:relative"}">
		<a href="${"/#"}">
			<div class="${"md:relative"}">${`
					<img class="${"w-24 absolute pt-2 pl-2"}" src="${"asdf-mini.svg"}" alt="${"Restaurant Logo"}">`}</div></a>
		
		
		${``}

		${`${`${``}`}`}</div>
	
</header>`;
});
var app = "";
register("es", () => import("../../chunks/es-01e6edc7.js"));
register("en", () => import("../../chunks/en-9a184367.js"));
async function load({ session }) {
  init({
    fallbackLocale: "en",
    initialLocale: session.acceptedLanguage || getLocaleFromNavigator()
  });
  await waitLocale();
  return {};
}
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"bg-surface text-on-surface p-1.5"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"static bg-tertiary min-w-min bottom-0"}"><p class="${"text-on-primary"}">visit <a class="${"font-bold"}" href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to learn SvelteKit!
	</p>
	<p class="${"text-on-primary"}">visit <a class="${"font-bold"}" href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to learn SvelteKit!
	</p></footer>`;
});
export { _layout as default, load };
