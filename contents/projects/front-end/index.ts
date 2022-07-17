import { frontendBeginnerProjects } from "./beginner"
import { frontendIntermediateProjects } from "./intermediate"
import { frontendAdvancedProjects } from "./advanced"
import { IProjectNiche } from "~/utils"

export const frontEndProjects: IProjectNiche = {
    beginner: frontendBeginnerProjects,
    intermediate: frontendIntermediateProjects,
    advanced: frontendAdvancedProjects
}