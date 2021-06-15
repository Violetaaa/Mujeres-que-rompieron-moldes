export class Card {
    public id: number;
    public name: string;
    public path: string;
    public caption: string;
    public description: string;
    public backgroundColor?: number;

    constructor(id: number, name: string, path: string, caption: string, description: string) {
        this.id = id;
        this.name = name;
        this.path = path;
        this.caption = caption;
        this.description = description;
    }
}