declare module "angular-react-vue-benchmark" {
	export type Data = {
		id: number;
		text: string;
	};

	export function generateData(n: number): Data[];
}
