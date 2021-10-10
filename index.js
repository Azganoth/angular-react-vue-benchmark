// prettier-ignore
const dictionary_1 = [
	"ipê", "revolução", "rio", "medicina", "sindicato", "desastre", "poluição", "carro",
	"prédio", "hotel", "mês", "moto", "casa", "caneta", "pônei", "bola", "mesa", "cadeira"
];

// prettier-ignore
const dictionary_2 = [
	"rosa", "vermelho(a)", "azul", "verde", "laranja", "marrom", "roxo(a)", "lilás",
	"violeta", "preto(a)", "branco(a)", "amarelo(a)", "cinza"
];

function pickRandomWord(dic) {
	return dic[Math.floor(Math.random() * dic.length)];
}

let nextId = 0;
export function generateData(n) {
	return Array.from({ length: n }, () => ({
		id: nextId++,
		text: `${pickRandomWord(dictionary_1)} ${pickRandomWord(dictionary_2)}`,
	}));
}
