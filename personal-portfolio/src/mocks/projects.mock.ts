import type { ProjectInfo } from '../interfaces/projectInfo.interface';

export const mockProjects: ProjectInfo[] = [
	{
		id: 'chillify',
		title: 'Chillify',
		type: 'Personal project',
		navText: 'Chillify',
		image: 'chillify.png',
		features: [
			'Play, pause or skip songs',
			'Choose songs from the song library',
			'Skip to specific parts of a song',
		],
		description: [
			'Chillify is a front-end React music player application that allows users to play, pause, and skip songs. The app includes a song library where users can select and play songs. Additionally, users can skip to specific parts of a song, giving them more control over their listening experience.',
			'The user interface of Chillify is sleek and intuitive, making it easy for users to navigate and find the music they want to listen to. The app also features a responsive design, ensuring that it works seamlessly across all devices, including desktops, laptops, tablets, and mobile phones.',
			'Whether users are looking to relax and unwind, or simply enjoy their favorite tunes, Chillify provides a seamless and enjoyable music streaming experience. With its powerful features and user-friendly interface, Chillify is the perfect choice for anyone looking for a high-quality music player application.',
		],
	},
];
