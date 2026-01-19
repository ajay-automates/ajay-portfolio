import Head from 'next/head';

function PagesMetaHead({ 
	title = 'Ajay Kumar Reddy Nelavetla - AI Engineer & Founder',
	keywords = 'next.js, react, web, ui',
	description = 'AI Engineer & Founder specializing in Production LLM Applications, Voice AI & Intelligent Automation'
}) {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
		</Head>
	);
}

export default PagesMetaHead;
