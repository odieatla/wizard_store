import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';
import app from '../../index';

chai.config.includeStack = true;

describe('## Static', () => {
	describe('# GET /', () => {
		it('should return OK', (done) => {
			request(app)
				.get('/')
				.expect(httpStatus.OK)
				.then(() => {
					done();
				});
		});
	});
});
