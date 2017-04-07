
export class OncoDatum {
	alteration: string;
	consequence: Consequence;
	gene: Gene;
}
export class Gene {
    hugoSymbol: string;
    oncogene: boolean;
    tsg: boolean;
}
export class Consequence {
 	term: string;
 	isGenerallyTruncating: boolean;
 	description: string;
}