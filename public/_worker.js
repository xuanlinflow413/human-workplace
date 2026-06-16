export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === 'www.kindreply.co') {
      url.hostname = 'kindreply.co';
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
