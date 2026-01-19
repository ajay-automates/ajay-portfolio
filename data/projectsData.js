import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
	{
		id: 1,
		title: 'Social Media Automation SaaS',
		url: 'social-media-automation-saas',
		category: 'Web Application',
		img: '/images/web-project-1.jpg',
		ProjectHeader: {
			title: 'Multi-Platform Social Media Automation SaaS',
			publishDate: 'Aug 2024',
			tags: 'SaaS / AI / Multi-Platform',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Social Media Automation SaaS',
				img: '/images/web-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Social Media Automation SaaS',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Social Media Automation SaaS',
				img: '/images/ui-project-1.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Category',
					details: 'SaaS Platform',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'AI-Powered Social Media Automation',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://capable-motivation-production-7a75.up.railway.app/',
				},
				{
					id: uuidv4(),
					title: 'GitHub',
					details: 'https://github.com/ajay-automates/social-media-automator',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Architected multi-tenant SaaS data infrastructure with OAuth2 integrations with 15+ social media platforms including Instagram, TikTok implementing RBAC for multi-level access control and intelligent data scheduling processing 500+ posts daily achieving 99.5% uptime.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Node.js/TypeScript',
						'Microservices',
						'Serverless Architecture',
						'Pinecone',
						'Weaviate',
						'OAuth2',
						'Railway',
						'CI/CD',
						'CloudWatch',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Multi-tenant SaaS architecture - Built enterprise-grade data infrastructure with OAuth2 integrations across 15+ social media platforms (Instagram, TikTok) with RBAC for multi-level access control, ensuring strict data isolation and security.',
				},
				{
					id: uuidv4(),
					details:
						'Real-time data pipelines - Implemented Node.js/TypeScript microservices with serverless architecture, integrating vector databases (Pinecone, Weaviate) for semantic search and AI-powered content matching serving 100+ active users.',
				},
				{
					id: uuidv4(),
					details:
						'Intelligent scheduling system - Processes 500+ posts daily with intelligent data scheduling, automated CI/CD pipelines, CloudWatch monitoring, and horizontal auto-scaling supporting 100+ users with 99.5% uptime.',
				},
				{
					id: uuidv4(),
					details:
						'Production deployment - Deployed on Railway with automated CI/CD pipelines, comprehensive monitoring, and auto-scaling capabilities ensuring high availability and reliability for enterprise users.',
				},
			],
			SocialSharingHeading: 'Project Links',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com/ajay-automates/social-media-automator',
				},
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/in/ajaykumarreddynelavetla',
				},
			],
		},
	},
	{
		id: 2,
		title: 'Job Application Automator MCP',
		url: 'job-application-automator-mcp',
		category: 'Automation',
		img: '/images/mobile-project-1.jpg',
		ProjectHeader: {
			title: 'AI-Powered Job Application Automation',
			publishDate: 'Jan 2025',
			tags: 'AI / Automation / Data Extraction',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Job Application Automator MCP',
				img: '/images/mobile-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Job Application Automator MCP',
				img: '/images/mobile-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Job Application Automator MCP',
				img: '/images/ui-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Category',
					details: 'MCP Server / Automation',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Autonomous Job Application System',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://github.com/ajay-automates/job-application-automator-mcp',
				},
				{
					id: uuidv4(),
					title: 'GitHub',
					details: 'https://github.com/ajay-automates/job-application-automator-mcp',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Developed full-stack data extraction pipeline processing 100+ application types with 92% accuracy using web scraping (Selenium, BeautifulSoup), HTML parsing, DOM analysis, and adaptive extraction algorithms.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'Selenium',
						'BeautifulSoup',
						'Pinecone',
						'Weaviate',
						'HTML Parsing',
						'DOM Analysis',
						'Vector Databases',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'High-accuracy data extraction - Processes 100+ application types with 92% accuracy using advanced web scraping techniques (Selenium, BeautifulSoup), HTML parsing, DOM analysis, and adaptive extraction algorithms.',
				},
				{
					id: uuidv4(),
					details:
						'Vector database integration - Implemented Pinecone and Weaviate for semantic resume-to-job matching achieving 85% relevance scoring with automated data validation and quality checks.',
				},
				{
					id: uuidv4(),
					details:
						'Comprehensive automation pipeline - Processes 100+ applications daily with intelligent filtering, data cleansing, and error recovery mechanisms ensuring reliable and accurate job application submissions.',
				},
				{
					id: uuidv4(),
					details:
						'Intelligent matching system - Uses semantic search and vector similarity to match resumes with job descriptions, ensuring applications are only submitted to highly relevant positions.',
				},
			],
			SocialSharingHeading: 'Project Links',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com/ajay-automates/job-application-automator-mcp',
				},
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/in/ajaykumarreddynelavetla',
				},
			],
		},
	},
	{
		id: 3,
		title: 'Omi Voice AI Agent',
		url: 'omi-voice-ai-agent',
		category: 'AI Application',
		img: '/images/ui-project-1.jpg',
		ProjectHeader: {
			title: 'AI Voice Agent',
			publishDate: 'Sep 2024',
			tags: 'Voice AI / Real-time / Streaming',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Omi Voice AI Agent',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Omi Voice AI Agent',
				img: '/images/ui-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Omi Voice AI Agent',
				img: '/images/web-project-1.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Category',
					details: 'Voice AI / Wearable Tech',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Real-time Voice AI Agent',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://github.com/ajay-automates/omi-job-assistant',
				},
				{
					id: uuidv4(),
					title: 'GitHub',
					details: 'https://github.com/ajay-automates/omi-job-assistant',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Built production real-time streaming data system with WebSocket communication achieving sub-100ms end-to-end latency, implementing optimized frame buffering (20ms intervals), audio codec handling (opus, PCM, AAC), and concurrent connection management supporting 50+ simultaneous sessions.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'WebSockets',
						'Real-time Streaming',
						'Audio Codecs',
						'Parallel Processing',
						'Frame Buffering',
						'Adaptive Bitrate',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Ultra-low latency streaming - Achieved sub-100ms end-to-end latency with optimized frame buffering (20ms intervals), audio codec handling (opus, PCM, AAC), and efficient WebSocket communication protocols.',
				},
				{
					id: uuidv4(),
					details:
						'Concurrent session management - Supports 50+ simultaneous sessions with robust connection management, parallel processing, and adaptive bitrate streaming for optimal performance.',
				},
				{
					id: uuidv4(),
					details:
						'Optimized data pipeline - Engineered low-latency data pipeline with parallel processing, audio optimization, and adaptive bitrate streaming, reducing response time by 60% through efficient data handling and caching strategies.',
				},
				{
					id: uuidv4(),
					details:
						'Production-ready architecture - Built scalable real-time streaming system with comprehensive error handling, connection recovery, and performance monitoring for enterprise-grade reliability.',
				},
			],
			SocialSharingHeading: 'Project Links',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com/ajay-automates/omi-job-assistant',
				},
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/in/ajaykumarreddynelavetla',
				},
			],
		},
	},
	{
		id: 4,
		title: 'Music Event Memory Tracker',
		url: 'music-event-memory-tracker',
		category: 'AI Application',
		img: '/images/ui-project-2.jpg',
		ProjectHeader: {
			title: 'Music Event Memory Tracker',
			publishDate: 'Oct 20, 2023',
			tags: 'AI / Wearable / Event Tracking',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Music Event Memory Tracker',
				img: '/images/ui-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Music Event Memory Tracker',
				img: '/images/mobile-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Music Event Memory Tracker',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Category',
					details: 'AI / Wearable Application',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'AI-Powered Memory Capture',
				},
				{
					id: uuidv4(),
					title: 'GitHub',
					details: 'https://github.com/ajay-automates',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Innovative AI application leveraging the Omi DevKit 2 wearable to capture and process real-time event memories from music events. Automatically correlates experiences and maintains contextual awareness.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Omi DevKit',
						'LLM',
						'Event APIs',
						'Real-time Data',
						'Python',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Real-time audio & context capture - Continuously captures audio and contextual data from music events using Omi DevKit 2 sensors, creating rich memory data streams.',
				},
				{
					id: uuidv4(),
					details:
						'Event correlation algorithms - Advanced algorithms automatically correlate related events, identifying patterns and connections between different moments during music events.',
				},
				{
					id: uuidv4(),
					details:
						'Automatic memory extraction - Uses LLM technology to intelligently extract meaningful memories from raw sensor data, transforming audio and context into structured, searchable memories.',
				},
				{
					id: uuidv4(),
					details:
						'Privacy-first architecture - Built with privacy as a core principle, ensuring all captured data is processed securely and users maintain full control over their event memories.',
				},
			],
			SocialSharingHeading: 'Project Links',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com/ajay-automates',
				},
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/in/ajaykumarreddynelavetla',
				},
			],
		},
	},
	{
		id: 5,
		title: 'Social Media Automator',
		url: 'social-media-automator',
		category: 'Automation',
		img: '/images/web-project-2.jpg',
		ProjectHeader: {
			title: 'Social Media Automator',
			publishDate: 'Jan 2025',
			tags: 'Automation / LinkedIn / Scheduling',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Social Media Automator',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Social Media Automator',
				img: '/images/web-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Social Media Automator',
				img: '/images/ui-project-1.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Category',
					details: 'Social Media Automation',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'LinkedIn Post Automation & Scheduling',
				},
				{
					id: uuidv4(),
					title: 'GitHub',
					details: 'https://github.com/ajay-automates/social-media-automator',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Automate LinkedIn posts with smart scheduling capabilities. Built in one session to streamline social media management and increase engagement through intelligent post timing and content distribution.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'JavaScript',
						'Node.js',
						'LinkedIn API',
						'Automation',
						'Scheduling',
						'Social Media',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Smart scheduling system - Automatically schedules LinkedIn posts at optimal times to maximize engagement and reach, using intelligent algorithms to determine the best posting windows.',
				},
				{
					id: uuidv4(),
					details:
						'Automated post management - Streamlines social media workflow by automating post creation, scheduling, and distribution, reducing manual effort while maintaining consistent presence.',
				},
				{
					id: uuidv4(),
					details:
						'Rapid development - Built efficiently in a single development session, demonstrating fast iteration and deployment capabilities for automation tools.',
				},
				{
					id: uuidv4(),
					details:
						'LinkedIn integration - Seamlessly integrates with LinkedIn API to manage posts, track engagement metrics, and optimize content strategy based on performance data.',
				},
			],
			SocialSharingHeading: 'Project Links',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com/ajay-automates/social-media-automator',
				},
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/in/ajaykumarreddynelavetla',
				},
			],
		},
	},
	{
		id: 6,
		title: 'Brain Dump Agent',
		url: 'brain-dump-agent',
		category: 'AI Application',
		img: '/images/ui-project-1.jpg',
		ProjectHeader: {
			title: 'AI-Powered Brain Dump Agent',
			publishDate: 'Dec 2024',
			tags: 'AI / Claude / Productivity',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Brain Dump Agent',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Brain Dump Agent',
				img: '/images/ui-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Brain Dump Agent',
				img: '/images/mobile-project-1.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Category',
					details: 'AI Productivity Tool',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'AI-Powered Thought Organization',
				},
				{
					id: uuidv4(),
					title: 'GitHub',
					details: 'https://github.com/ajay-automates/brain-dump-agent',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'AI-powered Brain Dump Agent that transforms scattered thoughts into clear action steps using Claude AI. Helps users organize ideas, extract actionable insights, and create structured plans from unstructured input.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'TypeScript',
						'Claude AI',
						'LLM',
						'Natural Language Processing',
						'AI Agents',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Intelligent thought processing - Uses Claude AI to analyze unstructured thoughts and ideas, extracting key themes, priorities, and actionable insights from brain dump sessions.',
				},
				{
					id: uuidv4(),
					details:
						'Action step generation - Automatically converts scattered thoughts into clear, organized action steps with priorities, deadlines, and dependencies, making it easy to follow through.',
				},
				{
					id: uuidv4(),
					details:
						'Structured output - Transforms chaotic input into well-organized plans, task lists, and project outlines, improving productivity and reducing cognitive load.',
				},
				{
					id: uuidv4(),
					details:
						'AI-powered organization - Leverages advanced LLM capabilities to understand context, identify patterns, and create meaningful structure from unstructured mental notes.',
				},
			],
			SocialSharingHeading: 'Project Links',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com/ajay-automates/brain-dump-agent',
				},
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/in/ajaykumarreddynelavetla',
				},
			],
		},
	},
	{
		id: 7,
		title: 'Multi-Orchestration System',
		url: 'multi-orchestration-system',
		category: 'Web Application',
		img: '/images/web-project-1.jpg',
		ProjectHeader: {
			title: 'Multi-Orchestration System',
			publishDate: 'Nov 2024',
			tags: 'Orchestration / Monitoring / Observability',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Multi-Orchestration System',
				img: '/images/web-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Multi-Orchestration System',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Multi-Orchestration System',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Category',
					details: 'DevOps / Monitoring Platform',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Real-time Multi-Project Monitoring',
				},
				{
					id: uuidv4(),
					title: 'GitHub',
					details: 'https://github.com/ajay-automates/multi-orchestration-system',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Real-time multi-project monitoring and orchestration system with observability foundation. Provides comprehensive visibility into multiple projects, services, and infrastructure components with centralized management and alerting.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Real-time Monitoring',
						'Orchestration',
						'Observability',
						'Distributed Systems',
						'Alerting',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Multi-project monitoring - Provides real-time visibility into multiple projects simultaneously, tracking health, performance, and status across distributed systems and services.',
				},
				{
					id: uuidv4(),
					details:
						'Centralized orchestration - Enables unified management and coordination of multiple projects and services from a single platform, simplifying complex infrastructure operations.',
				},
				{
					id: uuidv4(),
					details:
						'Observability foundation - Built with comprehensive observability capabilities including metrics, logs, traces, and alerts, providing deep insights into system behavior and performance.',
				},
				{
					id: uuidv4(),
					details:
						'Real-time alerting - Implements intelligent alerting mechanisms to notify teams of issues, anomalies, and performance degradation across monitored projects and services.',
				},
			],
			SocialSharingHeading: 'Project Links',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com/ajay-automates/multi-orchestration-system',
				},
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/in/ajaykumarreddynelavetla',
				},
			],
		},
	},
	{
		id: 8,
		title: 'EmailBlast',
		url: 'emailblast',
		category: 'Web Application',
		img: '/images/web-project-2.jpg',
		ProjectHeader: {
			title: 'EmailBlast',
			publishDate: 'Dec 2024',
			tags: 'Email / Automation / Marketing',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'EmailBlast',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'EmailBlast',
				img: '/images/mobile-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'EmailBlast',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Category',
					details: 'Email Marketing Platform',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Bulk Email Distribution',
				},
				{
					id: uuidv4(),
					title: 'GitHub',
					details: 'https://github.com/ajay-automates/EmailBlast',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Email marketing and distribution platform built with TypeScript. Enables efficient bulk email sending, campaign management, and email automation for marketing and communication purposes.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'TypeScript',
						'Email APIs',
						'Campaign Management',
						'Automation',
						'Bulk Distribution',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Bulk email distribution - Efficiently sends emails to large recipient lists with rate limiting, queue management, and delivery tracking to ensure reliable email delivery.',
				},
				{
					id: uuidv4(),
					details:
						'Campaign management - Provides tools for creating, scheduling, and managing email campaigns with analytics, open rates, click tracking, and performance metrics.',
				},
				{
					id: uuidv4(),
					details:
						'Email automation - Automates email workflows including welcome sequences, follow-ups, and triggered emails based on user actions and events.',
				},
				{
					id: uuidv4(),
					details:
						'TypeScript implementation - Built with TypeScript for type safety, maintainability, and robust error handling in email processing and delivery systems.',
				},
			],
			SocialSharingHeading: 'Project Links',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com/ajay-automates/EmailBlast',
				},
				{
					id: uuidv4(),
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/in/ajaykumarreddynelavetla',
				},
			],
		},
	},
];
