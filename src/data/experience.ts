export interface WorkExperience {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
}

export const workExperience: WorkExperience[] = [
    {
        id: 1,
        title: 'Software Engineer',
        description:
            'Participated in planning, designing, and developing software solutions in an agile team environment.',
        thumbnail: '/exp1.svg',
    },
    {
        id: 2,
        title: 'Solution Architect',
        description:
            'Led the design and implementation of software solutions following industry standards and best practices.',
        thumbnail: '/exp3.svg',
    },
    {
        id: 3,
        title: 'Software Engineering Team Lead',
        description:
            'Led a team of software engineers in the design and implementation of software solutions following industry standards and best practices.',
        thumbnail: '/exp2.svg',
    },
    {
        id: 4,
        title: 'Software Engineering & AI Consultant',
        description:
            'Provided technical consulting and AI solutions to businesses across various industries, helping them leverage AI to enhance their operations and drive innovation.',
        thumbnail: '/exp4.svg',
    },
];

export const companies = [
    { id: 1, icon: '/cloud.svg', nameIcon: '/cloudName.svg', name: 'Cloudinary' },
    { id: 2, icon: '/app.svg', nameIcon: '/appName.svg', name: 'Appwrite' },
    { id: 3, icon: '/host.svg', nameIcon: '/hostName.svg', name: 'Hostinger' },
    { id: 4, icon: '/s.svg', nameIcon: '/streamName.svg', name: 'Stream' },
    { id: 5, icon: '/dock.svg', nameIcon: '/dockerName.svg', name: 'Docker' },
];
