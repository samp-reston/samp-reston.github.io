export async function fetchDevToArticles() {
  const username = 'samp_reston'
  const devToArticles = await fetch(`https://dev.to/api/articles?username=${username}`)
  return devToArticles.json()
}
