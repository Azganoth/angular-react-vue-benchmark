<template>
	<section>
		<div id="actions">
			<button id="create1000" @click.prevent="create(1000)">Criar 1,000 linhas</button>
			<button id="create10000" @click.prevent="create(10000)">Criar 10,000 linhas</button>
			<button id="append1000" @click.prevent="append(1000)">Inserir 1,000 linhas</button>
			<button id="update" @click.prevent="update">Atualizar linhas</button>
			<button id="swap" @click.prevent="swap">Trocar linhas</button>
			<button id="clear" @click.prevent="clear">Limpar tabela</button>
		</div>
		<table id="results">
			<tbody>
				<!-- https://v3.vuejs.org/api/directives.html#v-memo -->
				<tr
					v-for="{ id, text } in rows"
					v-memo="[text, id === selected]"
					:key="id"
					:class="{ selected: id === selected }"
				>
					<td>{{ id }}</td>
					<td>
						<a @click.prevent="select(id)">{{ text }}</a>
					</td>
					<td>
						<a @click.prevent="remove(id)">remover</a>
					</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script setup>
import { ref } from "vue";

import { generateData } from "angular-react-vue-benchmark";

const selected = ref();
const rows = ref([]);

const create = (n) => {
	rows.value = generateData(n);
};

const append = (n) => {
	rows.value.push(...generateData(n));
};

const update = () => {
	const _rows = [...rows.value];
	for (let index = 0; index < _rows.length; index += 10) {
		_rows[index].text += " (atualizado)";
	}
	rows.value = _rows;
};

const swap = () => {
	const _rows = [...rows.value];
	if (_rows.length > 1) {
		[_rows[0], _rows[_rows.length - 1]] = [_rows[_rows.length - 1], _rows[0]];
		rows.value = _rows;
	}
};

const clear = () => {
	rows.value = [];
};

const select = (id) => {
	selected.value = id;
};

const remove = (id) => {
	// https://v3.vuejs.org/guide/list.html#array-change-detection
	rows.value.splice(
		rows.value.findIndex((row) => row.id === id),
		1,
	);
};
</script>

<style>
@import url("~angular-react-vue-benchmark/styles.css");
</style>
