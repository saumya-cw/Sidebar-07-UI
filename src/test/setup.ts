import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: (query: string) => ({
		addEventListener: vi.fn(),
		addListener: vi.fn(),
		dispatchEvent: vi.fn(),
		matches: false,
		media: query,
		onchange: null,
		removeEventListener: vi.fn(),
		removeListener: vi.fn(),
	}),
});
