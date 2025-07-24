export const profile = {
	fullName: "Florian Sicilia",
	title: "Apprenti Soudeur",
	institute: "",
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
};

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: "sicilia.florian02@gmail.com",
	linkedin: "www.linkedin.com/in/florian-sicilia-dev",
};

export const template = {
	website_url: "https://florian-sicilia.fr", // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: "light", // Select one of the Daisy UI Themes or create your own
	darkTheme: "dark", // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
	base: "", // Repository name starting with /
};

export const seo = {
	default_title: "Florian Sicilia",
	default_description: "CV en ligne de Florian Sicilia, soudeur de formation",
	default_image: "/images/MyMemoji.webp",
};
