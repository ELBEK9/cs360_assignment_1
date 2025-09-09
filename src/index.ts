import * as express from "express";
import * as db from './TranscriptManager'

const app: express.Application = express();

db.initialize()

app.listen(8080)