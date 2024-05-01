const fs = require('fs');

const json = `{
  "redirects": [
    {
      "source": "/:path((?!platform-overview|pricing|_next|forms2|wp-json|.*\\\\.|.*\\\\?).+[^\\\\/]$)",
      "destination": "/:path/",
      "statusCode": 301
    }
  ],
  "rewrites": [
    {
      "source": "/robots\\\\.txt",
      "destination": "https://salesloftmarketing.github.io/RobotsFix/robots.txt"
    },
    {
      "source": "/:path((?!platform-overview|pricing|_next|forms2|\\\\?[^s]).+)",
      "destination": "https://live-salesloft-v2.pantheonsite.io/:path",
      "response": {
        "headers": {
          "x-robots-tag": "index, follow"
        }
      }
    }
  ]
}`;

fs.writeFileSync('launch.json', json);

