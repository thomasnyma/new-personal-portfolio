import type { JobInfo } from '../interfaces/jobInfo.interface';

export const mockEducation: JobInfo[] = [
	{
		id: 'tec',
		title: 'Data and Communication',
		place: 'Technical Education Copenhagen',
		navText: 'TEC',
		startDate: new Date('2018-08-01'),
		endDate: new Date('2021-12-31'),
		description: [
			'My academic background is in data and communication with a specialization in programming. I studied at TEC in Ballerup, where I gained a solid foundation of theoretical and practical knowledge.',
			'',
			"However, I chose to leave the program before graduating to pursue more hands-on work experience in the field. I believe that learning by doing is the best way to improve my skills as a programmer, and I'm eager to take on new challenges and opportunities in my career.",
		],
	},
	{
		id: 'atu',
		title: 'Diploma in Innovation and Entrepreneurship',
		place: 'Academy for Talented Youth | East',
		navText: 'ATY',
		startDate: new Date('2020-02-01'),
		endDate: new Date('2021-01-31'),
		description: [],
	},
	{
		id: 'oese',
		title: '10th Grade, IT',
		place: 'Øse Efterskole',
		navText: 'Øse',
		startDate: new Date('2017-08-01'),
		endDate: new Date('2018-06-30'),
		description: [
			'During my 10 months at Øse Efterskole, I have acquired a variety of skills that are relevant to the digital age. I have learned how to design and develop websites using HTML, CSS and JavaScript, as well as how to create engaging multimedia content such as animations, graphics and audio. I have also explored the fields of video editing, programming, game design and 3D modelling using software such as Adobe Premiere Pro, Python, Unity and Blender. These skills have enabled me to express my creativity and problem-solving abilities in different domains and contexts.',
		],
	},
];
