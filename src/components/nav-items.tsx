import React from 'react';
import TaskPage from './testTable';
import AlertDemo from './AlertDemo';
import FileDrop from './file-upload';

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
    component: TaskPage,
  },
  {
    title: 'Statusoverzicht burgers',
    href: '/status',
    component: AlertDemo,
  },
  {
    title: 'API Documentatie',
    href: '/api',
    component: TaskPage,
  },
];
