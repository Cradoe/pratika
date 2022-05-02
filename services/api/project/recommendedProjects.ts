import { catchError, errorHandler } from "~/helpers";
import { httpClient } from "~/services";


export const getRecommendedProjects = async () => {
    try {
        const response = await httpClient.get("/projects/recommendations");
        const { status, data } = response.data;
        if (status === 200) {
            return data;
        } else {
            return errorHandler(response.data)
        }
    } catch (error: unknown) {
        return catchError(error)
    }

}