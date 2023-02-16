export default function handler(req, res) {
  console.log("Console log from function hello!!");
  res
    .status(200)
    .setHeader(
      'kola',
      '__Secure-next-auth.callback-url=https%3A%2F%2Fknowledge-base-development.devcontentstackapps.com; Path=/; HttpOnly; Secure; SameSite=Lax'
    )
    .json({
      "csrfToken": "1119eaf21d4f8ddf609c9a6243b0b0fb8a9213595d7ea8832470d4c570835c8a"
    })
}