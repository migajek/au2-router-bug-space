import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { RouterConfiguration } from '@aurelia/router';

Aurelia
  .register(RouterConfiguration.customize({
    useHref: true,
    activeClass: 'active',
  }))

  .app(MyApp)

  .start();
