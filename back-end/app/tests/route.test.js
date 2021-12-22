const request = require('supertest')
const app = require('../server.js')
const activityExpectedStructure = {
  id: expect.any(Number),
  date: expect.any(String),
  // date: expect.stringMatching(//) // regex will match only string with format
  // YYYY-MM-DD
  notes: expect.any(String),
  time: expect.any(Number),
  commissionName: expect.any(String),
  manufactureName: expect.any(String)
};
const commissionExpectedStructure = {
  name: expect.any(String)
};
const manufactureExpectedStructure = {
  name: expect.any(String)
};

describe('API integration test', () => {
  describe('[POST] /api/activities', () => {
    it('creates a new activity', async () => {
      const res = await request(app).post('/api/activities').send({
        commissionName: 'Banchi DISI',
        manufactureName: 'Fresatura',
        date: '2021-12-01',
        notes: '',
        time: 5
      });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('id');
    });
    it('returns an error for empty activity', async () => {
      const res = await request(app).post('/api/activities').send({});
      expect(res.statusCode).toEqual(400);
    });
    it('returns an error for time field with wrong type', async () => {
      const res = await request(app).post('/api/activities').send({
        commissionName: 'Banchi DISI',
        manufactureName: 'Fresatura',
        date: '2021-12-01',
        notes: '',
        time: 'should be an integer'
      });
      expect(res.statusCode).toEqual(400);
    });
    it('returns an error for time field with wrong value', async () => {
      const res = await request(app).post('/api/activities').send({
        commissionName: 'Banchi DISI',
        manufactureName: 'Fresatura',
        date: '2021-12-01',
        notes: '',
        time: -1
      });
      expect(res.statusCode).toEqual(400);
    });
    it('returns an error for date field with wrong value', async () => {
      const res = await request(app).post('/api/activities').send({
        commissionName: 'Banchi DISI',
        manufactureName: 'Fresatura',
        date: 'Should be a valid date',
        notes: '',
        time: 1
      });
      expect(res.statusCode).toEqual(400);
    });
    it('returns an error for commission name and/or manufacture name not found',
       async () => {
         const res = await request(app).post('/api/activities').send({
           commissionName: 'Not found',
           manufactureName: 'Not found',
           date: '2021-12-01',
           notes: '',
           time: 1
         });
         expect(res.statusCode).toEqual(404);
       });
  });

  describe('[PUT] /api/activities/:id', () => {
    it('updates an activity', async () => {
      const res = await request(app).put('/api/activities/1').send({notes: ''});
      expect(res.statusCode).toEqual(200);
    });
    it('returns an error for empty activity', async () => {
      const res = await request(app).put('/api/activities/1').send({});
      expect(res.statusCode).toEqual(400);
    });
    it('returns an error for activity not found', async () => {
      const res =
          await request(app).put('/api/activities/-1').send({notes: ''});
      expect(res.statusCode).toEqual(404);
    });
  });

  describe('[DELETE] /api/activities/:id', () => {
    it('deletes an activity', async () => {
      const res = await request(app).delete('/api/activities/2');
      expect(res.statusCode).toEqual(200);
    });
    it('returns an error for activity not found', async () => {
      const res = await request(app).delete('/api/activities/2');
      expect(res.statusCode).toEqual(404);
    });
  });

  describe('[GET] /api/activities', () => {
    it('correctly returns an array of activities', async () => {
      const res = await request(app).get('/api/activities');
      expect(res.statusCode).toBe(200);
      for (const activity of res.body) {
        expect(activity).toMatchObject(activityExpectedStructure);
      }
    });
  });

  describe('[GET] /api/activities/:id', () => {
    it('correctly returns an activity', async () => {
      const res = await request(app).get('/api/activities/1');
      expect(res.statusCode).toBe(200);
      expect(res.body).toMatchObject(activityExpectedStructure);
    });
    it('returns an error for activity not found', async () => {
      const res = await request(app).get('/api/activities/-1');
      expect(res.statusCode).toBe(404);
      expect(res.body).toMatchObject(
          {message: 'Cannot find Activity with id=-1.'});
    });
  });

  describe('[GET] /api/activities/byCommissionName?commissionName={value}', () => {
    it('correctly returns an array of activities', async () => {
      const res = await request(app).get(
          '/api/activities/byCommissionName?commissionName=Banchi%20DISI');
      expect(res.statusCode).toBe(200);
      for (const activity of res.body) {
        expect(activity).toMatchObject(activityExpectedStructure);
      }
    });
    it('returns an error for empty commissionName', async () => {
      const res = await request(app).get('/api/activities/byCommissionName');
      expect(res.statusCode).toBe(400);
      expect(res.body).toMatchObject({message: 'Empty commission name'});
    });
    it('returns an error for commissionName not found', async () => {
      const res = await request(app).get(
          '/api/activities/byCommissionName?commissionName=-1');
      expect(res.statusCode).toBe(404);
      expect(res.body).toMatchObject(
          {message: 'Cannot find Commission with name=-1.'});
    });
  });

  describe('[GET] /api/commissions', () => {
    it('correctly returns an array of commissions', async () => {
      const res = await request(app).get('/api/commissions');
      expect(res.statusCode).toBe(200);
      for (const commission of res.body) {
        expect(commission).toMatchObject(commissionExpectedStructure);
      }
    });
  });

  describe('[GET] /api/manufacture', () => {
    it('correctly returns an array of manufactures', async () => {
      const res = await request(app).get('/api/manufacture');
      expect(res.statusCode).toBe(200);
      for (const manufacture of res.body) {
        expect(manufacture).toMatchObject(manufactureExpectedStructure);
      }
    });
  });
})