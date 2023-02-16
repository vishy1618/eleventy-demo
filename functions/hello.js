export default function handler(req, res) {
  console.log("Console log from function hello!!");
  res
    .status(200)
    .setHeader(
      'set-cookie',
      [
        '__Host-next-auth.csrf-token=1119eaf21d4f8ddf609c9a6243b0b0fb8a9213595d7ea8832470d4c570835c8a%7Cfdd42845f3639bfcd5ef01b5f55e1d23a6ea116cb380734cc28a60e647a2e046; Path=/; HttpOnly; Secure; SameSite=Lax',
        '__Secure-next-auth.callback-url=https%3A%2F%2Fknowledge-base-development.devcontentstackapps.com; Path=/; HttpOnly; Secure; SameSite=Lax'
      ]
    )
    .json({
      "csrfToken": "1119eaf21d4f8ddf609c9a6243b0b0fb8a9213595d7ea8832470d4c570835c8a"
    })
}