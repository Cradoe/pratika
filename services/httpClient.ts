import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const apiResource = () => {
	const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!;

	const service = axios.create({
		baseURL: `${baseURL}`,
		withCredentials: false,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"Access-Control-Allow-Methods": "*",
			"Access-Control-Allow-Origin": baseURL,
		},
	});

	service.interceptors.request.use((config: AxiosRequestConfig) => {
		const authToken = null;

		if (!authToken) return config;
		config.headers!.Authorization = authToken;
		return config;
	});

	service.interceptors.response.use(
		(response: AxiosResponse) => {
			return response?.data;
		},
		(error: AxiosError) => {
			if (error?.response === undefined)
				// eslint-disable-next-line prefer-promise-reject-errors
				Promise.reject("No internet connection");
			else {
				const status = error?.response?.status;
				const errors = error?.response?.data;

				if (status === 404) {
					// console.log('Resource not found');
				}

				const errorMessage = errors?.error || errors?.message;

				if (errorMessage) {
					// console.error(errorMessage);
				}

				return Promise.reject(errors);
			}
		}
	);

	interface IPostProps {
		url: string;
		payload?: object;
	}

	return {
		get: async (url: string) => {
			try {
				const data = service.get(url);
				const resolvedData = await Promise.resolve(data);
				const exactData = resolvedData?.data;
				return exactData;
			} catch (error) {
				return Promise.reject(error);
			}
		},

		post: async ({ url, payload }: IPostProps) => {
			try {
				const data = service.post(url, payload);
				const resolvedData = await Promise.resolve(data);
				return resolvedData;
			} catch (error) {
				return Promise.reject(error);
			}
		},

		patch: async ({ url, payload }: IPostProps) => {
			try {
				const data = service.patch(url, payload);
				const resolvedData = await Promise.resolve(data);
				return resolvedData;
			} catch (error) {
				return Promise.reject(error);
			}
		},

		delete: async ({ url, payload }: IPostProps) => {
			try {
				const data = service.delete(url, payload);
				const resolvedData = await Promise.resolve(data);
				return resolvedData;
			} catch (error) {
				return Promise.reject(error);
			}
		},

		put: async ({ url, payload }: IPostProps) => {
			try {
				const data = service.put(url, payload);
				const resolvedData = await Promise.resolve(data);
				return resolvedData;
			} catch (error) {
				return Promise.reject(error);
			}
		},
	};
};

export const httpClient = apiResource();
