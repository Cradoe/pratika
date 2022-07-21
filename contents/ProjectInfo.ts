
type PUBLIC_LINK = {
    name: string;
    url: string;
    handle?: string;
}
type ProjectInfo = {
    PROJECT_NAME: string;
    TAG_LINE: string;
    PUBLIC_LINKS: {
        gitHub: PUBLIC_LINK,
        twitter: PUBLIC_LINK,
        discord: PUBLIC_LINK,
    };
}
export const projectInfo: ProjectInfo = {
    PROJECT_NAME: "Next Project",
    TAG_LINE: "The first open source platform to accelate your skills",
    PUBLIC_LINKS: {
        gitHub: {
            name: "GitHub",
            url: "https://github.com/Cradoe/nextproject"
        },
        twitter: {
            name: "Twitter",
            handle: "my_next_project",
            url: "https://twitter.com/my_next_project"
        },
        discord: {
            name: "Discord",
            url: "https://discord.com/channels/963068450857709578/963068450857709584"
        }
    }
}