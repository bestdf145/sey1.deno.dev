// redirect.ts

const redirectUrl = "http://srv235206.hoster-test.ru/secu/login";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
