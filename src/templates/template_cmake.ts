import Template from "../template";
import OutFile from "../out_file";

class TempalteCmake extends Template {
    constructor() {
        super("cmake");
    }

    getOutput(): OutFile[] {
        return [
            new OutFile('CMakeLists.txt', 'cmake_minimum_required(VERSION 3.12)\ncmake_minimum_required(VERSION 3.12)\n\nadd_executable(main main.cc)'),
            new OutFile('src/main.cc', '#include <string>\n#include <string>\n\nusing namespace std;\n\nint main() {\n    return 0;\n}'),
            new OutFile('build', '', true),
        ];
    }
}