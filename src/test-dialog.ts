import powerbi from "powerbi-visuals-api";
import DialogConstructorOptions = powerbi.extensibility.visual.DialogConstructorOptions;
import DialogAction = powerbi.DialogAction;

export class TestDialog {
    static id = "MyTestDialog";
    private target: HTMLElement;
    private host;
    constructor(options: DialogConstructorOptions, initialState: object) {
        this.host = options.host;
        this.target = options.element;
        // … dialog rendering implementation …
        const div = document.createElement('div');
        div.className = 'test';
        let text = document.createTextNode('Test');
        div.appendChild(text);
        this.target.appendChild(div);
    }
}

globalThis.dialogRegistry = globalThis.dialogRegistry || {};
globalThis.dialogRegistry[TestDialog.id] = TestDialog;