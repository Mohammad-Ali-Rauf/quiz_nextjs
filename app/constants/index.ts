export const quizData = [
	{
		question:
			'What is Next.js primarily used for in the context of web development?',
		options: [
			'A. Database Management',
			'B. Server-Side Rendering (SSR)',
			'C. Styling',
			'D. Mobile App Development',
		],
		correctAnswer: 'B. Server-Side Rendering (SSR)',
	},
	{
		question:
			'Which directory is commonly used for creating different pages in a Next.js project?',
		options: [
			'A. components',
			'B. assets',
			'C. app/<pageName>/page.tsx',
			'D. styles',
		],
		correctAnswer: 'C. app/<pageName>/page.tsx',
	},
	{
		question: 'How does Next.js handle routing between pages?',
		options: [
			'A. Automatically based on folder structure',
			'B. Using a separate routing configuration file',
			'C. Manually specifying routes in the `routes.js` file',
			'D. There is no built-in routing in Next.js',
		],
		correctAnswer: 'A. Automatically based on folder structure',
	},
	{
		question:
			'What is the purpose of the `layout.tsx` file in a Next.js project?',
		options: [
			'A. Defining global styles',
			'B. Managing server-side logic',
			'C. Configuring API routes',
			'D. Handling authentication',
		],
		correctAnswer: 'A. Defining global styles',
	},
	{
		question:
			'Which hook is commonly used in Next.js for fetching data on the client side?',
		options: ['A. useEffect', 'B. useFetch', 'C. useData', 'D. useSWR'],
		correctAnswer: 'A. useEffect',
	},
	{
		question: "What does the term 'SSG' stand for in the context of Next.js?",
		options: [
			'A. Server-Side Gateway',
			'B. Static Site Generation',
			'C. Single Source Generator',
			'D. Style Sheet Generator',
		],
		correctAnswer: 'B. Static Site Generation',
	},
	{
		question:
			'In Next.js, what is the purpose of the `getStaticProps` function?',
		options: [
			'A. Handling server-side logic',
			'B. Fetching data at build time',
			'C. Defining global styles',
			'D. Managing authentication',
		],
		correctAnswer: 'B. Fetching data at build time',
	},
	{
		question:
			'Which component is used to optimize images in a Next.js application?',
		options: [
			'A. ImageOptimizer',
			'B. ImageLoader',
			'C. ImageOptimization',
			'D. Image',
		],
		correctAnswer: 'D. Image',
	},
	{
		question:
			'What is the role of the `next.config.mjs` file in a Next.js project?',
		options: [
			'A. Defining global styles',
			'B. Configuring API routes',
			'C. Managing server-side logic',
			'D. Customizing build and runtime behavior',
		],
		correctAnswer: 'D. Customizing build and runtime behavior',
	},
	{
		question:
			'Which utility function is used to create dynamic routes in Next.js?',
		options: [
			'A. createRoute',
			'B. useRouter',
			'C. createRouter',
			'D. getStaticPaths',
		],
		correctAnswer: 'B. useRouter',
	},
	{
		question:
			'What is the purpose of the `app/api` folder in a Next.js project?',
		options: [
			'A. Handling static assets',
			'B. Defining API routes',
			'C. Storing global styles',
			'D. Configuring webpack',
		],
		correctAnswer: 'B. Defining API routes',
	},
	{
		question:
			'Which lifecycle method is commonly used for data fetching in Next.js?',
		options: [
			'A. componentDidMount',
			'B. componentDidUpdate',
			'C. getServerSideProps',
			'D. useEffect',
		],
		correctAnswer: 'C. getServerSideProps',
	},
	{
		question: 'What is the purpose of the Head component in Next.js?',
		options: [
			'A. Managing state',
			'B. Handling routing',
			'C. Changing document metadata',
			'D. Styling components',
		],
		correctAnswer: 'C. Changing document metadata',
	},
	{
		question:
			'Which command is used to start a Next.js development server, Assuming you are using npm as package manager for your application?',
		options: ['A. npm start', 'B. npm dev', 'C. npm run build', 'D. npm serve'],
		correctAnswer: 'B. npm dev',
	},
	{
		question: 'How can you implement client-side navigation in Next.js?',
		options: [
			'A. Use of window.location',
			'B. Link component from "next/link"',
			'C. Redirect component from "next/navigation"',
			'D. Importing "react-router-dom"',
		],
		correctAnswer: 'B. Link component from "next/link"',
	},
	{
		question:
			'What is the purpose of the "public" folder in a Next.js project?',
		options: [
			'A. Storing static assets',
			'B. Defining global styles',
			'C. Configuring webpack',
			'D. Managing environment variables',
		],
		correctAnswer: 'A. Storing static assets',
	},
	{
		question: 'How can you deploy a Next.js application?',
		options: [
			'A. Upload files to an FTP server',
			'B. Push to a GitHub repository',
			'C. Use the "Vercel" platform',
			'D. Deploy as a WordPress plugin',
		],
		correctAnswer: 'C. Use the "Vercel" platform',
	}
];
