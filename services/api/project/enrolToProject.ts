import { catchError, errorHandler } from "~/helpers";
import { httpClient } from "~/services";

export const enrollToProject = async (id: String | Number) => {
    try {
        const response = await httpClient.post({ url: `/projects/${id}/enroll` });
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