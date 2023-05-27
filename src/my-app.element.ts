import {defineElementNoInputs, html} from 'element-vir';

export const MyApp = defineElementNoInputs({
  tagName: 'my-app',
  renderCallback() {
    return html`
      Hello there.
    `;
  },
});
