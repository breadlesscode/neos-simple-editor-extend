import {Command} from 'ckeditor5-exports';

export default class SelectFormatCommand extends Command {
    attributePrefix = 'textFormat-';
    
    constructor(editor, attributeKeys) {
        super(editor);
        this.attributeKeys = attributeKeys;
    }

    execute(options = {}) {
        const editor = this.editor;
        const model = editor.model;
        const document = model.document;
        const selection = document.selection;

        editor.model.change((writer) => {
            for (const attributeSuffix of Object.keys(options)) {
                const attributeName = this.attributePrefix + attributeSuffix;
                const selectedClass = options[attributeSuffix];
                const ranges = model.schema.getValidRanges(selection.getRanges(), attributeName);
                
                if (selection.isCollapsed) {
                    const position = selection.getFirstPosition();

                    // When selection is inside text with `highlight` attribute.
                    if (selection.hasAttribute(attributeName)) {
                        // Find the full highlighted range.
                        const isSameHighlight = value => {
                            return value.item.hasAttribute(attributeName) && value.item.getAttribute(attributeName) === this.value;
                        };

                        const highlightStart = position.getLastMatchingPosition(isSameHighlight, {direction: 'backward'});
                        const highlightEnd = position.getLastMatchingPosition(isSameHighlight);
                        const highlightRange = writer.createRange(highlightStart, highlightEnd);

                        // Then depending on current value...
                        if (!selectedClass || this.value === selectedClass) {
                            // ...remove attribute when passing highlighter different then current or executing "eraser".
                            writer.removeAttribute(attributeName, highlightRange);
                            writer.removeSelectionAttribute(attributeName);
                        } else {
                            // ...update `highlight` value.
                            writer.setAttribute(attributeName, selectedClass, highlightRange);
                            writer.setSelectionAttribute(attributeName, selectedClass);
                        }
                    } else if (selectedClass) {
                        writer.setSelectionAttribute(attributeName, selectedClass);
                    }
                } else {
                    for (const range of ranges) {
                        if (selectedClass) {
                            writer.setAttribute(attributeName, selectedClass, range);
                        } else {
                            writer.removeAttribute(attributeName, range);
                        }
                    }
                }
            }
        });
    }

    refresh() {
        const {model} = this.editor;
        const {selection} = model.document;

        this.value = {};
        const attributes = selection.getAttributes();
        
        for (let attribute of attributes) {
            if (attribute[0].indexOf(this.attributePrefix) === 0) {
                const suffix = attribute[0].substr(this.attributePrefix.length);
                this.value[suffix] = attribute[1];
            }
        }

        this.isEnabled = true;
        for (let attributeName of this.attributeKeys) {
            if (this.isEnabled) {
                return;
            }
            this.isEnabled = this.isEnabled || model.schema.checkAttributeInSelection(selection, this.attributePrefix + attributeName);
        }
    }
}
