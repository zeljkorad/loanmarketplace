/**
 * Created by amihajlovski on 29.5.2017.
 */

import mongoose from 'mongoose';
import q from 'q';

const { MONGO_URL = 'mongodb://localhost/lawlending' } = process.env;

class DatabaseManager {
  connect() {
    mongoose.Promise = q.Promise;
    mongoose.connect(MONGO_URL, function(error) {
      if (error) console.log('MongoDB Connection Error: ', error);
      else {
        console.log('MongoDB Connection Success');
      }
    });
  }
}

export default DatabaseManager;
