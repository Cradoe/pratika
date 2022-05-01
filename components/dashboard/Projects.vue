<template>
    <section class="lg:py-8">

        <DashboardProjectCard v-for="(          project, index          ) in           recommendedProjects          "
            :key=" index " :number=" index + 1 " :project=" project ">

            <template #cta-button>
                <Button mode="secondary" class="md:w-6/12">View Details</Button>
                <Button class="md:w-6/12">Start Project</Button>
            </template>
            <template #details-slide>
                <ProjectDetailsSlide :project=" project " />
            </template>


        </DashboardProjectCard>

    </section>
</template>
<script>
export default {
    name: "NuxtProjects",
    data () {
        return {
            // recommendedProjects should be fetched from server when API is ready.
            recommendedProjects: [
                {
                    id: "001",
                    title: "Remote Job Hero Header - Web Design",
                    image: "https://cdn.dribbble.com/users/3894633/screenshots/17067293/media/c6925eaba9d7fc55896b37677d5aad8b.png",
                    features: [
                        {
                            title: "Attibution",
                            value: [ "Ismail Obadimu", "Adewale Ayuba" ]
                        },
                        {
                            title: "Tools/Stacks",
                            value: [
                                "Git",
                                "React JS",
                                "Tailwind CSS",
                                "Jest" ]
                        }
                    ],
                    additionalInfo: [
                        {
                            title: "Attibution",
                            value: [ "Ismail Obadimu", "Adewale Ayuba" ]
                        },
                        {
                            title: "Tools/Stacks",
                            value: [
                                "Git",
                                "React JS",
                                "Tailwind CSS",
                                "Jest" ]
                        }
                    ],
                    description: "This is a Remote Job Hero Header - Web Design. Hope you guys will like it. Let me know your thought's on that. Your feedback and appreciation is always welcome."
                },
                {
                    id: "002",
                    title: "Remote Job Hero Header 2 - Web Design",
                    image: "https://cdn.dribbble.com/users/2151039/screenshots/15422478/media/db41ab4b5ca5649fdee409900ea11118.jpg",
                    features: [
                        {
                            title: "Attibution",
                            value: [ "Ismail Obadimu", "Adewale Ayuba" ]
                        },
                        {
                            title: "Tools/Stacks",
                            value: [
                                "Git",
                                "React JS",
                                "Tailwind CSS",
                                "Jest" ]
                        }
                    ],
                    additionalInfo: [
                        {
                            title: "Enrollments",
                            value: '8900'
                        },
                        {
                            title: "Average Performance",
                            value: "89%"
                        },
                        {
                            title: "Project Estimated Duration",
                            value: "2days 3hours"
                        }
                    ],
                    resources: [ {
                        title: "File A-z",
                        link: "https://ismailobadimu.com"
                    }, {
                        title: "File A-z",
                        link: "https://ismailobadimu.com"
                    } ],
                    description: "This is a Remote Job Hero Header - Web Design. Hope you guys will like it. Let me know your thought's on that. Your feedback and appreciation is always welcome."
                }
            ]
        }
    }
}
</script>
