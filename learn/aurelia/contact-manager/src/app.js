import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'contacts';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { 
        route: '',
        moduleId: PLATFORM.moduleName('no-selection'),
        title: 'Select'
      },
      {
        route: 'contacts/:id',
        moduleId: PLATFORM.moduleName('contact-detail'),
        name: 'contacts'
      }
    ]);

    this.router = router;
  }
}
