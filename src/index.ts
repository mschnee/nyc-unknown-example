import { createServer } from "http"

import app from "./app"
const server = createServer(app)

app.$server = server.listen(process.env.PORT || 3000)

export { app }
