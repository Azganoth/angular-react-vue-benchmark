import { Component } from "@angular/core";

import { generateData } from "angular-react-vue-benchmark";
import type { Data } from "angular-react-vue-benchmark";

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
})
export class AppComponent {
	selected: number | undefined;
	rows: Data[] = [];

	trackByRowId(_: number, { id }: Data) {
		return id;
	}

	create(event: MouseEvent, n: number) {
		event.preventDefault();
		this.rows = generateData(n);
	}

	append(event: MouseEvent, n: number) {
		event.preventDefault();
		this.rows = [...this.rows, ...generateData(n)];
	}

	update(event: MouseEvent) {
		event.preventDefault();
		const _rows = [...this.rows];
		for (let index = 0; index < _rows.length; index += 10) {
			_rows[index].text += " (atualizado)";
		}
		this.rows = _rows;
	}

	swap(event: MouseEvent) {
		event.preventDefault();
		const _rows = [...this.rows];
		if (_rows.length > 1) {
			[_rows[0], _rows[_rows.length - 1]] = [_rows[_rows.length - 1], _rows[0]];
			this.rows = _rows;
		}
	}

	clear(event: MouseEvent) {
		event.preventDefault();
		this.rows = [];
	}

	select(event: MouseEvent, id: number) {
		event.preventDefault();
		this.selected = id;
	}

	remove(event: MouseEvent, id: number) {
		event.preventDefault();
		this.rows = this.rows.filter((row) => row.id !== id);
	}
}
