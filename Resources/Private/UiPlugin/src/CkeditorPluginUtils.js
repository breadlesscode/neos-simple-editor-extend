import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '@ckeditor/ckeditor5-basic-styles/src/attributecommand';
import {$add, $get} from 'plow-js';

const getCkeditorPlugin = function(extensionName, commandName, formatting) {
    const attributeName = extensionName + 'Attribute';

    return class extends Plugin {
        static get pluginName() {
            return extensionName;
        }
        init() {
            const config = {
                model: attributeName,
                view: {
                    name: formatting.tag,
                    classes: formatting.classes,
                    styles: formatting.styles
                }
            };

            this.editor.model.schema.extend('$text', {allowAttributes: attributeName});
            this.editor.conversion.attributeToElement(config);
            this.editor.commands.add(commandName, new AttributeCommand(this.editor, attributeName));
        }
    }
}

const getCkeditorPluginConfig = function(formattingName, ckeditorPlugin) {
    return (ckEditorConfiguration, options) => {
        if ($get(['formatting', formattingName], options.editorOptions)) {
            ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
            return $add(
                'plugins',
                ckeditorPlugin,
                ckEditorConfiguration
            );
        }
        return ckEditorConfiguration;
    }
};

export { getCkeditorPlugin, getCkeditorPluginConfig};
