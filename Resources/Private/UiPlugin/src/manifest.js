import manifest from '@neos-project/neos-ui-extensibility';
import {getSelectToolbarConfig, getCkeditorPlugin, getCkeditorPluginConfig, getRichtextToolbarConfig} from './CkeditorPluginUtils';

manifest('Breadlesscode.SimpleEditorExtend:UiPlugin', {}, (globalRegistry, { frontendConfiguration }) => {
    const richtextToolbar = globalRegistry.get('ckEditor5').get('richtextToolbar');
    const ckEditorConfig = globalRegistry.get('ckEditor5').get('config');
    const buttonConfig = frontendConfiguration['Breadlesscode.SimpleEditorExtend:Buttons'];
    const selectConfig = frontendConfiguration['Breadlesscode.SimpleEditorExtend:HeadingSelect'];

    if (buttonConfig && buttonConfig.constructor === Object && Object.entries(buttonConfig).length !== 0) {
        Object.keys(buttonConfig).forEach((formattingName) => {
            const options = buttonConfig[formattingName];
            const commandName = options.extensionName + 'Command';

            richtextToolbar.set(
                options.extensionName,
                getRichtextToolbarConfig(commandName, formattingName, options.icon, options.tooltip),
                options.position
            );

            ckEditorConfig.set(
                options.extensionName,
                getCkeditorPluginConfig(
                    formattingName,
                    getCkeditorPlugin(options.extensionName, commandName, options.formatting)
                )
            );
        });
    }

    if (selectConfig && selectConfig.constructor === Object && Object.entries(selectConfig).length !== 0) {

        Object.keys(selectConfig).forEach((formattingName) => {
            const options = selectConfig[formattingName];

            richtextToolbar.set(
                'style/' + options.extensionName,
                getSelectToolbarConfig( formattingName, options.extensionName ),
                options.position
            );

            ckEditorConfig.set('configureHeadings', config => Object.assign(config, {
                heading: {
                    options: [
                        // {model: 'paragraph'},
                        // {model: 'heading1', view: 'h1'},
                        // {model: 'heading2', view: 'h2'},
                        // {model: 'heading3', view: 'h3'},
                        // {model: 'heading4', view: 'h4'},
                        // {model: 'heading5', view: 'h5'},
                        // {model: 'heading6', view: 'h6'},
                        // {model: 'pre', view: 'pre'}
                        // ...config.heading.options,
                        {
                            model: formattingName,
                            view: {
                                name: options.formatting.tag,
                                classes: options.formatting.classes,
                                styles: options.formatting.styles
                            }
                        }]
                }
            }));
        });
    }

});