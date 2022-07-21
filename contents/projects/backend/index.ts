import { backendBeginnerProjects } from "./beginner"
import { backendIntermediateProjects } from "./intermediate"
import { backendAdvancedProjects } from "./advanced"
import { IProjectNiche } from "~/utils"

export const backendProjects: IProjectNiche = {
    beginner: backendBeginnerProjects,
    intermediate: backendIntermediateProjects,
    advanced: backendAdvancedProjects
}