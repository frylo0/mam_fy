namespace $.$$ {
	export class $fy_hello extends $.$fy_hello {
		message() {
			let name = this.name();
			return name && `Hello, ${name}!`
		}

		on_button_click(event: MouseEvent) {
			if (!(event.target instanceof HTMLElement)) return;

			alert(`Clicked! ${event.target.id}`);
		}
	}
}
