class Result {
	readonly #warnings = [];
	readonly #errors = [];

	public get hasWarning(): boolean {
		return this.#warnings.length > 0;
	}

	public get hasError(): boolean {
		return this.#errors.length > 0;
	}

	constructor(public readonly template: string) {}

	public get warnings() {
		return this.#warnings;
	}

	public get errors() {
		return this.#errors;
	}
}

export default Result;
