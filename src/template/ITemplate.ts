export interface ITemplateWriteConfig {
  outFolder: string
}

export abstract class ITemplate {

  protected constructor(public name: string) {
    if (!this.name) {
      throw 'Must specify name';
    }
  }

  abstract write(config: ITemplateWriteConfig): void
}
