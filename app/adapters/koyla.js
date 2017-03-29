import DRFAdapter from './drf';

export default DRFAdapter.extend({
      host: 'http://localhost:8000',
      namespace: 'koyla',
      addTrailingSlashes: false,
      coalesceFindRequests: true,
      pathForType(modelName) {
            return modelName;
      }
});