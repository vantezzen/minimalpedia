import wiki from 'wikijs'

// Query Wikipedia for search query
export default async function search(query, setState, state, language = 'en') {
    // Reset number of results
    setState({
        totalResults: 10
    })

    // Get query results
    let results = (await wiki({ apiUrl: `https://${language}.wikipedia.org/w/api.php` }).search(query)).results;

    // Show general information
    if (query === state().query) {
        setState({
        results: {},
        totalResults: results.length
        })

        // Add first 10 results to results list
        for (let key = 0; key < 10 && key < results.length; key++) {
            let res = state().results;
            res[key] = {
                title: results[key],
                image: '',
                text: 'Loading details...'
            };

            setState({
                results: res
            })
        }
    } else {
        // We are not the current search query anymore: Abort
        return;
    }

    // Query for details on the first 10 results
    for (let key = 0; key < 10 && key < results.length; key++) {
        wiki({ apiUrl: `https://${language}.wikipedia.org/w/api.php` }).page(results[key]).then(async (page) => {
            // Get image and summary
            let image = await page.mainImage()
            let text = await page.summary()

            let result = {
                title: results[key],
                image,
                text
            }

            // Check if we are still the active query, otherwise don't update details
            if (query === state().query) {
                let results = state().results;
                results[key] = result;

                setState({
                results
                })
            }
        });
    }
}