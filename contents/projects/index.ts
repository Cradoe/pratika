import { backendProjects } from "./backend";
import { frontEndProjects } from "./front-end";
import { IRecommendedProject } from "~/utils";

export const recommendedProjects: IRecommendedProject = {
    "front-end": frontEndProjects,
    "backend": backendProjects,
    "ui-ux": frontEndProjects,
    "all": {
        ...frontEndProjects
    },
}

