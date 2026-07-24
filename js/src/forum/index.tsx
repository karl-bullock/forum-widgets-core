import IndexPage from 'flarum/forum/components/IndexPage';
import PageStructure from 'flarum/forum/components/PageStructure';
import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import type ItemList from 'flarum/common/utils/ItemList';

import WidgetManager from '../common/WidgetManager';
import EndWidgetSection from './components/EndWidgetSection';
import StartTopWidgetSection from './components/StartTopWidgetSection';
import StartBottomWidgetSection from './components/StartBottomWidgetSection';
import TopWidgetSection from './components/TopWidgetSection';
import BottomWidgetSection from './components/BottomWidgetSection';
import FloatingWidgetSection from './components/FloatingWidgetSection';

app.widgets = new WidgetManager().addPage(IndexPage);

app.initializers.add('fof/forum-widgets-core', () => {
  app.widgets.setConfig((app.data.resources[0] as any)?.attributes['fof-forum-widgets-core.config'] ?? {});

  extend(PageStructure.prototype, 'mainItems', function (items: ItemList<any>) {
    items.add('topWidgetSection', <TopWidgetSection />, 15);
    items.add('bottomWidgetSection', <BottomWidgetSection />, 5);
  });

  extend(PageStructure.prototype, 'containerItems', function (items: ItemList<any>) {
    items.add('endWidgetSection', <EndWidgetSection />, 1);
  });

  // Beside the page's sidebar (the index nav), not inside its list: on phones core moves that
  // list's header controls into the header, and with more than one of them the list itself.
  extend(PageStructure.prototype, 'sidebarItems', function (items: ItemList<any>) {
    items.add('startTopWidgetSection', <StartTopWidgetSection />, 110);
    items.add('startBottomWidgetSection', <StartBottomWidgetSection />, 90);
  });

  // The floating dock lives on its own root on the body rather than inside the
  // page tree, so it stays put across navigation (keeping its open state and
  // loaded content) and shows on every route, not only the index. Mount once.
  if (!document.getElementById('fof-forum-widgets-floating')) {
    const root = document.createElement('div');
    root.id = 'fof-forum-widgets-floating';
    document.body.appendChild(root);
    m.mount(root, FloatingWidgetSection);
  }
});

// Allow flarum to discover modules
import './forum';
// @ts-ignore
