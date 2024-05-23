import mongoose from 'mongoose';
import colors from 'colors';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(colors.green.bold('Database connection is successful 🛢'));

    app.listen(config.port, () => {
      console.log(
        colors.blue.bold(`Application is running on port ${config.port}`),
      );
    });
  } catch (err) {
    console.error(err);
  }
}

main();
