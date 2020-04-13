import Template from "../../template";
import OutFile from "../../out_file";
import * as path from 'path';

class TemplateCss extends Template {
    constructor() {
        super("css");
    }

    getOutput(): OutFile[] {
        return [
            OutFile.fromLocalFile(path.resolve(__dirname, "../../../template_data/css/index.html")),
            OutFile.fromLocalFile(path.resolve(__dirname, "../../../template_data/css/styles.css"))
        ];
    }

}


export default TemplateCss