import about from './about.json'
import home from './home.json'
import jobExperience from './jobExperience.json'
import projects from './projects.json'

const esTranslations = {
    ...about,
    ...home,
    ...jobExperience,
    ...projects,
}

export const es = {
    global: esTranslations
}