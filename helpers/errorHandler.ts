interface Error {
    message?: String;
    status?: Number
}

export const errorHandler = (error: Error) => {
    return `Error ${error?.status} - ${error?.message}`
}

export const catchError = (error: unknown) => {
    if (typeof error === "string") {
        error.toUpperCase()
    } else if (error instanceof Error) {
        return error.message
    } else {
        return "Please check your internet connection";
    }
}