import { helper } from "./helper";

const handler = (req, res) => {
    res
      .status(200)
      .json({
        query: req.query,
        method: req.method,
        body: req.body,
        headers: req.headers,
        url: req.url,
        randomNumber: Math.floor((Math.random()*100) + 1),
        helperText: helper()
      })
  }

  export default handler