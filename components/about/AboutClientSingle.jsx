import Image from 'next/image';

function AboutClientSingle({ title, image }) {
	return (
		<div className="py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark  shadow-sm rounded-lg mb-5 cursor-pointer">
			<Image
				src={image}
				alt={title}
				width={200}
				height={100}
				className="w-full h-auto"
				quality={95}
			/>
		</div>
	);
}

export default AboutClientSingle;
