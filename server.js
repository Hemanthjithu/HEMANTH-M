"scripts": {
  "start": "npm run development",
  "development": "cross-env NODE_ENV=development concurrently --kill-others \"npm run client\" \"npm run server\"",
  "production": "npm run build && cross-env NODE_ENV=production npm run server",
  "server": "node server/server.js",
  "client": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}