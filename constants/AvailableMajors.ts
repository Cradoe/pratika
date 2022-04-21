
type Major = {
    name: string;
    slug: string;
    toolsImage?: string[];
}
export const availableMajors: Major[] = [
    {
        name: "Front-End Developement",
        slug: "front-end",
        toolsImage: ['logo.png']
    },
    {
        name: "Backend Developement",
        slug: "backend"
    },
    {
        name: "UI/UX",
        slug: "ui-ux",
        toolsImage: ['logo.png']
    }
]
