import Router from 'express';
import insightsController from './controllers/insightsControllers';

const routes = new Router();

routes.get('/api/', insightsController.index);
routes.post('/api/', insightsController.create);
routes.put('/api/Update/:id', insightsController.update);
routes.delete('/api/Delete/:id', insightsController.delete);
routes.post('/api/findtag', insightsController.findTag);

export default routes;
