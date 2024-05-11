import { describe, it, expect, vi } from 'vitest';
import { api } from '$lib/api';

const mockFetch = vi.fn();

const URL = 'https://example.com/api';
const API_KEY = 'test-api-key';

describe('API methods', () => {
	it('fetches countries successfully', async () => {
		const mockCountries = [{ id: 1, name: 'Country 1' }];
		mockFetch.mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve(mockCountries),
			statusText: 'OK'
		});

		const result = await api(mockFetch).getCountries({ url: URL, apiKey: API_KEY });
		expect(result.data).toEqual(mockCountries);
		expect(mockFetch).toHaveBeenCalledWith(URL, {
			headers: { 'x-api-key': API_KEY }
		});
	});

	it('returns an empty array when fetching countries fails', async () => {
		mockFetch.mockResolvedValueOnce({
			ok: false,
			statusText: 'Internal Server Error'
		});

		const result = await api(mockFetch).getCountries({ url: URL, apiKey: API_KEY });
		expect(result.data).toEqual([]);
		expect(mockFetch).toHaveBeenCalled();
	});

	it('fetches states successfully', async () => {
		const mockStates = [{ id: 1, name: 'State 1' }];
		mockFetch.mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve(mockStates),
			statusText: 'OK'
		});

		const result = await api(mockFetch).getStates(1, { url: URL, apiKey: API_KEY });
		expect(result.data).toEqual(mockStates);
		expect(mockFetch).toHaveBeenCalledWith(`${URL}/1/states`, {
			headers: { 'x-api-key': API_KEY }
		});
	});

	it('returns an empty array when fetching states fails', async () => {
		mockFetch.mockResolvedValueOnce({
			ok: false,
			statusText: 'Internal Server Error'
		});

		const result = await api(mockFetch).getStates(1, { url: URL, apiKey: API_KEY });
		expect(result.data).toEqual([]);
		expect(mockFetch).toHaveBeenCalled();
	});
});
