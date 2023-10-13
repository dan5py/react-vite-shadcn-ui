import React from 'react';
import TaskPage from './taskTable';
import BeerPage from './beerTable';
import AlertDemo from './AlertDemo';
import FileDrop from './file-upload';
import getBeers from './api-call-test';

export const sidebarNavItems = [
  {
    title: 'Home',
    href: '/',
    component: TaskPage,
  },
  {
    title: 'Bestand uploaden',
    href: '/upload',
    component: FileDrop,
  },
  {
    title: 'Statusoverzicht uitbetalingen',
    href: '/betalingen',
    component: BeerPage,
  },
  {
    title: 'Statusoverzicht burgers',
    href: '/status',
    component: AlertDemo,
  },
  {
    title: 'API Documentatie',
    href: '/api',
    component: getBeers,
  },
];
