import 'babel-polyfill';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Helmet } from 'react-helmet';
import App from '../src/pages/App';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(express.static('build/public'));

app.get('*', (req, res) => {
  const context = {};
  const sheet = new ServerStyleSheet();

  const content = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </StyleSheetManager>
  );
  const styleTags = sheet.getStyleTags();
  const helmet = Helmet.renderStatic();

  const html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            ${helmet.meta.toString()}
            ${helmet.title.toString()}
            <body>
              ${styleTags}
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
