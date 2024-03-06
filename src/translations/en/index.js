import about from './about.json'
import home from './home.json'
import jobExperience from './jobExperience.json'
import projects from './projects.json'

const enTranslations = {
    ...about,
    ...home,
    ...jobExperience,
    ...projects,
}

export const en = {
    global: enTranslations
}