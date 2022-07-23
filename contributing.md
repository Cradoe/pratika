# Contributing

When contributing to this repository, please make sure you follow the procedure listed in Pull Request Process section.

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Pull Request Process

Please ensure your Pull Request adheres to the following guidelines:

- Search previous projects before adding a new one, as yours may be a duplicate.
- Add your project to the appropriate directory, e.g, `contents/projects/front-end/beginner`
- Please put your new addition at the end of the list of whatever section it is most relevant to. 
- If your intended niche hasn't been added before, create a directory with that name, **`use - as word seperator`**
  - Create another directory inside of that with the appropriate experience level. Options are:
    - beginner
    - intermediate
    - advanced
  - Create an index.ts file, this is where your project will be. Your nameing convention should be `Niche` + `Level` + Projects, such as *frontendBeginnerProjects* or *backendIntermediateProjects*

      ### **Expected file structure** 
      ```
      interface IProjectFeature {
        title: String,
        value: String | String[]
      }

      interface IProjectResource {
        title: String,
        link: String
      }

      interface IProject {
        id?: String | Number;
        title?: String;
        image?: String,
        description?: String;
        features?: IProjectFeature[];
        resources?: IProjectResource[]
      }
      ```

    **For example**

      ```
      import { IProject } from "~/utils";

      export const frontendBeginnerProjects: IProject[] = [
          {
              title: "Remote Job Hero Header - Web Design",
              image: "https://cdn.dribbble.com/users/3894633/screenshots/17067293/media/c6925eaba9d7fc55896b37677d5aad8b.png",
              features: [
                  {
                      title: "Tools/Stacks",
                      value: [
                          "Git",
                          "React JS",
                          "Tailwind CSS",
                          "Jest"]
                  }
              ],
              additionalInfo: [
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
              description: "This is the project's description."
          }
      ]
      ```
  - Export all your level-based directory's into an index.ts file in your niche directory, like front-end/index.ts
  - import IProjectNiche like below and follow variable structure
    ```
    import { IProjectNiche } from "~/utils"

    export const frontEndProjects: IProjectNiche = {
      beginner: frontendBeginnerProjects,
      intermediate: frontendIntermediateProjects,
      advanced: frontendAdvancedProjects
    }
    ```
  - Go back to contents/projects/index.ts and add your newly added property appropriatly.
- Make sure the project is helpful before submitting. 
- Please check your spelling and grammar.
- Make sure your text editor is set to remove trailing whitespace.
- The pull request and commit should have a useful title.
- The body of your commit message should contain a link to the repository.

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at [me@ismailobadimu.com]. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/
