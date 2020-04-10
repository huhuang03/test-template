import OutFile from "./out_file";

abstract class Template {
    constructor(public name: String) {
        if (!this.name) {
            throw "Must specify name";
        }
    }

    abstract getOutput(): OutFile[];
}

export default Template;