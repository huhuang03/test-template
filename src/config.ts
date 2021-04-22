// why can't find js_ex??
var Result = require('@huhuang03/js_ex').Result

class Config {
    constructor(public templateName: string, public outFolder: string) {
        this._fix_param();
    }

    validate() {
        this._fix_param();
        if (!this.templateName) {
            return Result.error(`tempalteName(-t) must specified.`);
        }
        return new Result();
    }

    private _fix_param() {
        if (this.templateName) {
            if (!this.outFolder) {
                this.outFolder = "t_" + this.templateName;
            }
        }
    }

}

export default Config
