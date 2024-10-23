    export class Model {

        constructor(contentId) {
            this.contentTemplateEl = document.getElementById(contentId);
            this.modelTemplateEl = document.getElementById('modal-template');
        }

        show() {
            const modelElements = document.importNode(this.modelTemplateEl.content, true);
            this.modelElement = modelElements.querySelector('.modal');
            this.backdropElement = modelElements.querySelector('.backdrop');

            const contentElement = document.importNode(this.contentTemplateEl.content, true);

            this.modelElement.appendChild(contentElement);

            document.body.insertAdjacentElement('afterbegin', this.modelElement);
            document.body.insertAdjacentElement('afterbegin',this.backdropElement);
        }

        hide() {
            if(this.modelElement) {
                document.body.removeChild(this.modelElement);
                document.body.removeChild(this.backdropElement);
                this.modelElement = null;
                this.backdropElement = null;
            }
        }
    }