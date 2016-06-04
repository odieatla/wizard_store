import Promise from 'bluebird';
import mongoose from 'mongoose';
import config from 'config';
import app from './express';

// promisify mongoose
Promise.promisifyAll(mongoose);

// connect to mongo db
mongoose.connect(config.get('db.src'), { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database: ${config.get('db.src')}`);
});

const debug = require('debug')('wizard_store:index');

// listen on port config.port
app.listen(config.get('port'), () => {
	debug(`server started on port ${config.get('port')} (${config.get('env')})`);
});

export default app;
