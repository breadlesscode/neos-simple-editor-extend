import {Plugin} from 'ckeditor5-exports';
import SelectFormatCommand from '../Commands/SelectFormatCommand';

export default class SelectFormatPlugin extends Plugin {
    static get pluginName() {
        return 'Breadlesscode.SimpleEditorExtend:Dropdowns';
    }

    static get pluginPrefix() {
        return 'selectFormat';
    }

    init() {
        const {editor} = this;
        const {schema} = editor.model;
        const {conversion} = editor;
               
        // Extend the schema for each attribute type found in the merged options
        const options = editor.config.get(SelectFormatPlugin.pluginPrefix + '.options');
        if (options) {
            for (const attributeName of Object.keys(options)) {
                schema.extend('$text', {allowAttributes: SelectFormatPlugin.pluginPrefix + '-' + attributeName});
                conversion.attributeToElement(_buildDefinition(attributeName, options[attributeName]['options']));
            }
            editor.commands.add(SelectFormatPlugin.pluginPrefix + 'Command', new SelectFormatCommand(editor, Object.keys(options)));
        }
    }
}

function _buildDefinition(name, options) {
    const definition = {
        model: {
            key: SelectFormatPlugin.pluginPrefix + '-' + name,
            values: []
        },
        view: {}
    };

    for (const option of options) {
        const modelName = option.model;
        definition.model.values.push(modelName);
        definition.view[modelName] = {
            name: 'span',
            classes: option.class,
            // A fixed priority for all definitions is needed, so they get merged
            priority: 10
        };
    }

    return definition;
}
