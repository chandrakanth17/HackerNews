import "babel-polyfill";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import bodyParser from "body-parser";
import App from "./src/pages/app";
import { Helmet } from "react-helmet";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("build/public"));

app.get("*", (req, res) => {
  const context = {};
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();

  const html = `
    <html lang="US-EN">
        <head>
            ${helmet.meta.toString()}
            ${helmet.title.toString()}
            <body>
                <div id="root">
                    ${content}
                </div>
            </body>
            <script src="client_bundle.js"></script>
        </head>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
