class AppElement extends HTMLElement {
    
    name = this.getAttribute('name') || 'NoName';

    constructor() {
        super();
        console.log('inicializando...');
        this.hello = 'web0';
        // On active shadow hide the component, without shadow component it is in the light Doom it is visible
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    border: 1px solid white;
                    display: block;
                    padding: 1rem;
                }
                p{
                    color: var(--primary-color, blue);
                }
                ::slotted(span) {
                    font-size: 2rem;
                }
            </style>
            <slot></slot>
            <p part="paragraph">${ this.hello } ${ this.name }</p>
        `;
        // this.textContent = 'webo';  Only for write text
    }
}

customElements.define("app-element", AppElement);

customElements.whenDefined("app-element").then(() => {
    console.log("App element was defined");
})