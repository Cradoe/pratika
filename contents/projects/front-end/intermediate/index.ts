import { IProject } from "~/utils";

// see uitls/global.d.ts for IProject structure definition
export const frontendIntermediateProjects: IProject[] = [
    {
        title: "Remote Job Hero Header 2 - Web Design",
        image: "https://cdn.dribbble.com/users/2151039/screenshots/15422478/media/db41ab4b5ca5649fdee409900ea11118.jpg",
        features: [
            {
                title: "Attribution",
                value: ["Ismail Obadimu", "Adewale Ayuba"]
            },
            {
                title: "Tools/Stacks",
                value: [
                    "Git",
                    "React JS",
                    "Tailwind CSS",
                    "Jest"]
            }
        ],
        resources: [{
            title: "File A-z",
            link: "https://ismailobadimu.com"
        }, {
            title: "File A-z",
            link: "https://ismailobadimu.com"
        }],
        description: "This is a Remote Job Hero Header - Web Design. Hope you guys will like it. Let me know your thought's on that. Your feedback and appreciation is always welcome."
    }
]