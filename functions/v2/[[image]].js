
// Configs for what to do with requests
const ALLOWED_USERS = [
    "ewpratten",
    "bgptools"
];
const DEFAULT_USER = "ewpratten";

// Info needed in order to partially parse OCIDS API endpoints.
const POSSIBLE_ACTION_TOKENS = ["blobs", "manifests", "tags", "referrers"];

export default {
    async fetch(request, env) {

        // Parse the path out of the url
        const url = new URL(request.url);

        // The first segment of the path is probably the user
        var path_split = url.pathname.split("/");
        
        // The image name is the part between `/vx/` and the first action token
        var image_name = "";
        for (var token of path_split){
            if (token == "v2"){
                continue;
            }
            if (POSSIBLE_ACTION_TOKENS.includes(token)){
                break;
            }
            image_name += token + "/";
        }

        // The action_url is everything after the image name
        var action_url = url.pathname.replace(`/v2/${image_name}`, "");

        // If there is a slash and the first part is not an allowed user, fail
        var image_name_parts = image_name.split("/");
        if (image_name_parts.length > 1 && !ALLOWED_USERS.includes(image_name_parts[0])){
            return new Response(`User does not exist ${image_name_parts[0]}`, {status: 404});
        }

        // If there is no slash, add the default user to the image name
        if (image_name_parts.length == 1){
            image_name = `${DEFAULT_USER}/${image_name}`;
        }

        return Response.redirect(`https://ghcr.io/v2/${image_name}/${action_url}`, 302);
    }
}