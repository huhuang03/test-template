import {Result} from '@huhuang03/th_comm';

class Config {
    constructor(public templateName: string, public outFolder: string) {
        this._fix_param();
    }

    validate() {
        this._fix_param();
        if (!this.templateName) {
            return Result.error(`templateName(-t) must specified.`);
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
