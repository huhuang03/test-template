import Template from "../../template";
import OutFile from "../../out_file";
import * as path from 'path';

class TempalteCmake extends Template {
    constructor() {
        super("cmake");
    }

    getOutput(): OutFile[] {
        return [
            OutFile.fromLocalFile(path.resolve(__dirname, '../../../template_data/cmake/CMakeLists.txt')),
            OutFile.fromLocalFile(path.resolve(__dirname, '../../../template_data/cmake/main.cc')),
            new OutFile('build', '', true),
        ];
    }
}

export default TempalteCmake