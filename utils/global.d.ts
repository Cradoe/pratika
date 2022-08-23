export interface IRootState { }

export interface IProjectFeature {
    title: String,
    value: String | String[]
}

export interface IProjectResource {
    title: String,
    link: String
}
export interface ICredit {
    title: String,
    url: String
}

export interface IProject {
    id?: String | Number;
    title?: String;
    image?: String,
    description?: String;
    credits?: ICredit[];
    features?: IProjectFeature[];
    resources?: IProjectResource[]
}

export interface IProjectNiche {
    beginner?: IProject[],
    intermediate?: IProject[],
    advanced?: IProject[]
}

export interface IRecommendedProject {
    "front-end"?: IProjectNiche,
    "backend"?: IProjectNiche,
    "ui-ux"?: IProjectNiche,
    "all"?: IProjectNiche
}