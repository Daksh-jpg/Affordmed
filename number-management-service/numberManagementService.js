const axios = require('axios');

// Helper function to check if a given URL is valid
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

// Function to merge and return unique integers from all valid URLs
async function mergeUniqueIntegersFromUrls(urls) {
  const validUrls = urls.filter((url) => isValidUrl(url));

  const responses = await Promise.allSettled(
    validUrls.map((url) => axios.get(url))
  );

  const mergedIntegers = responses
    .filter((response) => response.status === 'fulfilled' && response.value.data.numbers)
    .flatMap((response) => response.value.data.numbers)
    .reduce((uniqueIntegers, number) => {
      if (!uniqueIntegers.includes(number)) {
        uniqueIntegers.push(number);
      }
      return uniqueIntegers;
    }, [])
    .sort((a, b) => a - b);

  return { numbers: mergedIntegers };
}

module.exports = mergeUniqueIntegersFromUrls;
