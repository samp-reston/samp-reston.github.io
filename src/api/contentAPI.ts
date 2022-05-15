export function fetchContent() {
  const content = require('../data/content.json')
  return content
}

export function fetchSection(sectionName: string) {
  type Section = {
    sectionName: string;
    content: string[]
  }
  const content = fetchContent()
  const desiredSection = content.find((section: Section) => section.sectionName === sectionName)
  if(desiredSection) return desiredSection
}
