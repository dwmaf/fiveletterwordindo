export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const date = query.date

  if (!date) {
    throw createError({ statusCode: 400, statusMessage: 'Date is required' })
  }

  try {
    return await $fetch(`https://www.nytimes.com/svc/wordle/v2/${date}.json`, {
        headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    })
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Failed to fetch NYT data' })
  }
})