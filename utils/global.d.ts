export interface IUser {
    username?: string;
    password?: string;
    token?: string
}

export interface IRootState {

}

export interface IProjectFeature {
    title: String,
    Value: String | String[]
}

export interface IProjectResource {
    title: String,
    link: String
}

export interface IProject {
    id?: String | Number;
    title?: String;
    image?: String,
    description?: String;
    features?: IProjectFeature[];
    additionalInfo?: IProjectFeature[];
    resources?: IProjectResource[]
}