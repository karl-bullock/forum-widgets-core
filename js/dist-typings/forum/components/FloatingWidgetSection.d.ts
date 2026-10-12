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
 *
 * The widgets are rendered the first time the dock opens, not before, so
 * visitors who never open it load none of them. After that the panel stays in
 * the page, hidden while closed, so reopening it shows the same widgets with
 * their content intact instead of mounting them again.
 */
export default class FloatingWidgetSection extends Component {
    open: boolean;
    opened: boolean;
    toggleButton?: HTMLElement;
    onkeydown: (e: KeyboardEvent) => void;
    oncreate(vnode: Mithril.VnodeDOM<{}, this>): void;
    onremove(vnode: Mithril.VnodeDOM<{}, this>): void;
    setOpen(open: boolean): void;
    view(): Mithril.Children;
}
