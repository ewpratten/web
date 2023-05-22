async function goat_counter_analytics(context) {

    // Parse the request URL
    let url = new URL(context.request.url);

    // Create a fingerprint for the user


    // Build the payload to send to GoatCounter
    var payload = {
        hits: [
            {
                path: url.pathname,
                query: url.search,
                ref: context.request.headers.get('Referer'),
                location: context.request.cf.country,
                user_agent: context.request.headers.get('User-Agent'),
                session: context.request.cf.botManagement.ja3Hash
            }
        ]
    };

    // For debugging, allow the requester to expose the body through a response header
    if (url.searchParams.get('goat-counter-debug') == 'true') {
        context.response.headers.set('X-GoatCounter-Payload', JSON.stringify(payload));
    }
   
    // Continue with the request
    return await context.next();
}

// Chaining
export const onRequest = [goat_counter_analytics];