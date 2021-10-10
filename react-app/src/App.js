import { useState } from "react";

import { generateData } from "angular-react-vue-benchmark";
import "angular-react-vue-benchmark/styles.css";

const App = () => {
	const [selected, setSelected] = useState();
	const [rows, setRows] = useState([]);

	const create = (event, n) => {
		event.preventDefault();
		setRows(generateData(n));
	};

	const append = (event, n) => {
		event.preventDefault();
		setRows([...rows, ...generateData(n)]);
	};

	const update = (event) => {
		event.preventDefault();
		const _rows = [...rows];
		for (let index = 0; index < _rows.length; index += 10) {
			_rows[index].text += " (atualizado)";
		}
		setRows(_rows);
	};

	const swap = (event) => {
		event.preventDefault();
		const _rows = [...rows];
		if (_rows.length > 1) {
			[_rows[0], _rows[_rows.length - 1]] = [_rows[_rows.length - 1], _rows[0]];
			setRows(_rows);
		}
	};

	const clear = (event) => {
		event.preventDefault();
		setRows([]);
	};

	const select = (event, id) => {
		event.preventDefault();
		setSelected(id);
	};

	const remove = (event, id) => {
		event.preventDefault();
		setRows(rows.filter((row) => row.id !== id));
	};

	return (
		<section>
			<div id="actions">
				<button id="create1000" onClick={(event) => create(event, 1000)}>
					Criar 1,000 linhas
				</button>
				<button id="create10000" onClick={(event) => create(event, 10000)}>
					Criar 10,000 linhas
				</button>
				<button id="append1000" onClick={(event) => append(event, 1000)}>
					Inserir 1,000 linhas
				</button>
				<button id="update" onClick={update}>
					Atualizar linhas
				</button>
				<button id="swap" onClick={swap}>
					Trocar linhas
				</button>
				<button id="clear" onClick={clear}>
					Limpar tabela
				</button>
			</div>
			<table id="results">
				<tbody>
					{rows.map(({ id, text }) => (
						<tr key={id} className={id === selected ? "selected" : ""}>
							<td>{id}</td>
							<td>
								<a onClick={(event) => select(event, id)}>{text}</a>
							</td>
							<td>
								<a onClick={(event) => remove(event, id)}>remover</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default App;
