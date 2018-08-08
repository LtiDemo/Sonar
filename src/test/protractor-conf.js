//exports.config = {
	//framework : 'jasmine',
	//seleniumAddress : 'http://localhost:4444/wd/hub',
	//specs : [ 'js_specs/*spec.js' ]
//}
exports.config = {
  //framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect: true,
  specs: ['js_specs/*spec.js'],
  capabilities: {
	     browserName: 'firefox',
  },
useAllAngular2AppRoots: true,
framework: 'jasmine'
};


