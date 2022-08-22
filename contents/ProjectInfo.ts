
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
    PROJECT_NAME: "Pratika",
    TAG_LINE: "The first open source platform to accelate your skills",
    PUBLIC_LINKS: {
        gitHub: {
            name: "GitHub",
            url: "https://github.com/Cradoe/pratika"
        },
        twitter: {
            name: "Twitter",
            handle: "pratika",
            url: "https://twitter.com/pratika"
        },
        discord: {
            name: "Discord",
            url: "https://discord.com/channels/963068450857709578/963068450857709584"
        }
    }
}