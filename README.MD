# Express scaffold (MVC)

Clone repo and cd to directory, then run
`npm i` to install all dependencies.

## Start server

Run express in development mode:
`npm run dev`

Run express in production mode
`npm run start` or `npm start`

### Catch all route

```js
app.use('*', (req, res) => res.render('404'));
```