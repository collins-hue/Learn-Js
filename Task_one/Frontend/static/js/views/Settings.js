import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
        <h1> Settings Page</h1>
        <p>Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Perferendis, temporibus? 
            Perferendis in ea harum laboriosam laudantium, 
            repudiandae autem aliquam! Quo vitae labore quidem 
            animi quibusdam veritatis amet nobis. Aspernatur possimus 
            molestias aperiam hic, praesentium animi.
        </p>
        <p>
            <a href='/posts' data-link> View recent posts</a>
        </p>
        `;
    }
}