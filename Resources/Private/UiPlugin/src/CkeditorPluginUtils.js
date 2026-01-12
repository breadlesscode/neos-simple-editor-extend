import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '@ckeditor/ckeditor5-basic-styles/src/attributecommand';
import {$add, $get} from 'plow-js';
import ButtonComponent from './ButtonComponent';

const sanitizeAttributes = function(formatting) {
    let attributes = undefined;
    if (typeof formatting.attributes === 'object' && formatting.attributes !== null) {
        Object.entries(formatting.attributes).forEach(([key, value]) => {
            if (typeof value === 'string') {
                attributes = attributes || {};
                attributes[key] = value;
            }
        });
    }
    return attributes;
};

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
                    attributes: sanitizeAttributes(formatting),
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

const getRichtextToolbarConfig = function(commandName, formattingName, icon, tooltip) {
    return {
        commandName: commandName,
        isActive: $get(commandName),
        isVisible: $get(['formatting', formattingName]),
        component: ButtonComponent(commandName),
        icon: icon,
        tooltip: tooltip,
    };
}

export { getCkeditorPlugin, getCkeditorPluginConfig, getRichtextToolbarConfig};
