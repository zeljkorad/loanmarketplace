import app from './app';
import DatabaseManager from './config/database';

const dbManager = new DatabaseManager();

const { PORT = 8080 } = process.env;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  dbManager.connect();
});
