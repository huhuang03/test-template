import Result from 'th_comm'

class Config {
    constructor(public name: string, public templateName: String, public outFolder: String) {
        this.outFolder = this.outFolder || this.templateName;
    }

    validate(): Result {
        if (!this.name || !this.templateName || !this.outFolder) {
            return Result.error(`name and tempalteName and outFolder must not be null`);
        }        
        return new Result();
    }

}

export default Config