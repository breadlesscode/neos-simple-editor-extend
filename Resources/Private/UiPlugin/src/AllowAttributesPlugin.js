import {Plugin} from 'ckeditor5-exports';

function stylesToString(styles) {
    return Object.keys(styles)
        .map(style => style + ':' + styles[style])
        .join(';')
}

export default (presetConfiguration) =>
    class AllowAttributesPlugin extends Plugin {
        init() {
            const styleIds = Object.keys(presetConfiguration);

            const config = {
                model: {
                    key: 'AllowAttributesPlugin',
                    values: styleIds
                },
                view: {}
            };

            styleIds.forEach(styleId => {
                const formattingOptions = presetConfiguration[styleId].formatting
                let newConfig = {
                    name: formattingOptions.tag,
                    attributes: {}
                }
                
                if (formattingOptions.classes) {
                    newConfig.attributes.class = formattingOptions.classes
                }
                
                if (formattingOptions.style) {
                    newConfig.attributes.style = stylesToString(formattingOptions.styles)
                }

                this.editor.model.schema.extend('$text', { allowAttributes: styleId });
                this.editor.model.schema.setAttributeProperties(styleId, { isFormatting: true });

                config.view[styleId] = newConfig
                console.log(config)
            });

            this.editor.conversion.attributeToElement(config);
        }
    };