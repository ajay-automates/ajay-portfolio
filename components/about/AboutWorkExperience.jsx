import { FiBriefcase } from 'react-icons/fi';

const workExperienceData = [
	{
		id: 1,
		title: 'AI/ML Engineer',
		company: 'FolderWave',
		location: 'Boston, MA',
		period: 'Jan 2024 – Present',
		responsibilities: [
			'Engineered production real-time data pipeline with Apache Kafka (ETL) and Apache Spark processing 1000+ events/second with sub-100ms latency, extracting 50+ behavioral signals using feature engineering and dimensionality reduction for dynamic content personalization.',
			'Architected data infrastructure with Pinecone vector database achieving 95% retrieval accuracy, supporting ML-powered recommendation engine processing 500K+ daily user interactions with 30% engagement increase.',
			'Built RESTful API architecture with 400+ OpenAPI-compliant endpoints optimized for sub-100ms response times and GraphQL implementation, deployed on AWS (Lambda, ECS, SageMaker, Kinesis, RDS) with Kubernetes orchestration.',
			'Implemented enterprise-grade multi-tenant SaaS data architecture with OAuth2 authentication, RBAC, and strict data isolation, deployed automated CI/CD pipelines (GitHub Actions), CloudWatch monitoring, auto-scaling policies, achieving 99.9% uptime SLA.',
			'Optimized database performance through advanced partitioning strategies, composite indexing, query execution plan optimization, and statistics maintenance, deployed on AWS (RDS, S3) with automated failover supporting petabyte-scale data.',
		],
	},
	{
		id: 2,
		title: 'Full Stack Developer',
		company: 'IdeaBytes',
		location: 'Hyderabad, India',
		period: 'Jan 2019 – Jan 2022',
		responsibilities: [
			'Designed enterprise-grade data architecture with 400+ REST API endpoints featuring OAuth2 authentication, rate limiting, JWT tokens, and async processing to handle 10,000+ concurrent requests with comprehensive OpenAPI documentation.',
			'Created automated ETL workflows with Apache Spark batch processing and Hadoop integration for large-scale data transformation.',
			'Optimized database performance using advanced partitioning, composite indexing, and query optimization, deployed on AWS (EC2, S3, RDS) with ELK Stack logging, CloudWatch alerting, and 99.9% availability SLA.',
		],
	},
];

function AboutWorkExperience() {
	return (
		<div className="mt-10 sm:mt-20">
			<h3 className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light mb-8">
				Professional Experience
			</h3>
			<div className="grid gap-6 sm:gap-8">
				{workExperienceData.map((work) => (
					<div
						key={work.id}
						className="p-6 bg-secondary-light dark:bg-ternary-dark rounded-lg shadow-sm"
					>
						<div className="flex items-start gap-4 mb-4">
							<div className="flex-shrink-0 mt-1">
								<FiBriefcase className="text-2xl text-indigo-500 dark:text-indigo-400" />
							</div>
							<div className="flex-1">
								<h4 className="font-general-semibold text-xl text-primary-dark dark:text-primary-light mb-1">
									{work.title}
								</h4>
								<p className="text-lg text-ternary-dark dark:text-ternary-light mb-1">
									{work.company} | {work.location}
								</p>
								<p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
									{work.period}
								</p>
								<ul className="list-disc list-inside space-y-2 text-ternary-dark dark:text-ternary-light">
									{work.responsibilities.map((resp, index) => (
										<li key={index} className="text-sm leading-relaxed">
											{resp}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default AboutWorkExperience;
