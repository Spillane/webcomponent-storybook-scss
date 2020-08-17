import { property, customElement, html, css, LitElement } from 'lit-element';
import './textfield.scss';

@customElement('wl-textfield')
export default class WLTextField extends LitElement {
    // @property({ type: CSSResult }) styles: any = css[styles];
    constructor() {
      super();
    }
    protected render() {
      return html`
        
        <link rel="textfield.css">
        <input
          
          size="1"
          placeholder="oh no"
        />
      `;
    }
  
  }