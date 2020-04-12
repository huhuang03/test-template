import Template from "../../template";
import OutFile from "../../out_file";

class TemplateCss extends Template {

    getOutput(): OutFile[] {
        return [
            OutFile.fromLocalFile("../../../template_data/css/index.html"),
            OutFile.fromLocalFile("../../../template_data/css/index.html")
        ];
    }

}