export interface JobInfo {
	id: string;
	title: string;
	place: string;
	navText: string;
	startDate: Date;
	endDate?: Date;
	description: string[];
}
