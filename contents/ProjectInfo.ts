type PUBLIC_LINK = {
    name: string;
    url: string;
}
type ProjectInfo = {
    PROJECT_NAME: string;
    GitHub_REPO: string;
    PUBLIC_LINKS: PUBLIC_LINK[]
}
export const projectInfo: ProjectInfo = {
    PROJECT_NAME: "Next Project",
    GitHub_REPO: "https://github.com/cradoe/nextproject",
    PUBLIC_LINKS: [
        {
            name: "GitHub",
            url: "https://github.com/Cradoe/nextproject"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/my_next_project"
        },
        {
            name: "Discord",
            url: "https://discord.com/channels/963068450857709578/963068450857709584"
        }
    ]
}