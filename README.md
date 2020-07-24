### Description

- NodeJS, ExpressJS
- GET /fs/<path> : Return a JSON response structured as:
  `{"success": true,
  "fs": {"filename": "<path from request>",
  "dirs": ["dir1", ...],
  "files": ["a", ...]}}`
- DELETE /fs/<path> : Delete the file or directory at <path>.
- PUT /fs/<path> with body {name: "<new path>"} : Move the file at <path> to <new path>.
