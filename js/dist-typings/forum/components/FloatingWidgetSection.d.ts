import * as Mithril from 'mithril';
import Component from 'flarum/common/Component';
/**
 * A dock, fixed to the bottom-right of every page, holding the widgets an admin
 * assigned to the `floating` placement. It starts collapsed as a launcher
 * button; clicking it expands a panel with the widget(s) above the button.
 *
 * Unlike the other sections this is not tied to a route or the index sidebar:
 * `forum/index` mounts it on its own root on the document body so it is present
 * everywhere and its open/closed state (and each widget's loaded content)
 * survives SPA navigation instead of remounting on every page change.
 */
export default class FloatingWidgetSection extends Component {
    open: boolean;
    toggleButton?: HTMLElement;
    onkeydown: (e: KeyboardEvent) => void;
    oncreate(vnode: Mithril.VnodeDOM<{}, this>): void;
    onremove(vnode: Mithril.VnodeDOM<{}, this>): void;
    setOpen(open: boolean): void;
    view(): Mithril.Children;
}
