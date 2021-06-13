export class Card {
    public id: number;
    public name: string;
    public caption: string;
    public path: string;
    public description: string;
    public backgroundColor?: number;

    constructor(id: number, name: string, caption: string, path: string, description: string) {
        this.id = id;
        this.name = name;
        this.caption = caption;
        this.path = path;
        this.description = description;
    }
}