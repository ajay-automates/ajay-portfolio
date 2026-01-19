import { FiBook } from 'react-icons/fi';

const educationData = [
	{
		id: 1,
		degree: 'Master of Science in Software Engineering',
		school: 'Northeastern University',
		location: 'Boston, MA',
		period: 'Jan 2022 – Dec 2023',
	},
	{
		id: 2,
		degree: 'Bachelor of Technology in Electronics and Communication Engineering',
		school: 'JBIT',
		location: 'Hyderabad, India',
		period: 'Sep 2016 – Sep 2020',
	},
];

function AboutEducation() {
	return (
		<div className="mt-10 sm:mt-20">
			<h3 className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light mb-8">
				Education
			</h3>
			<div className="grid gap-6 sm:gap-8">
				{educationData.map((edu) => (
					<div
						key={edu.id}
						className="flex items-start gap-4 p-6 bg-secondary-light dark:bg-ternary-dark rounded-lg shadow-sm"
					>
						<div className="flex-shrink-0 mt-1">
							<FiBook className="text-2xl text-indigo-500 dark:text-indigo-400" />
						</div>
						<div className="flex-1">
							<h4 className="font-general-semibold text-xl text-primary-dark dark:text-primary-light mb-1">
								{edu.degree}
							</h4>
							<p className="text-lg text-ternary-dark dark:text-ternary-light mb-1">
								{edu.school} | {edu.location}
							</p>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								{edu.period}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default AboutEducation;
