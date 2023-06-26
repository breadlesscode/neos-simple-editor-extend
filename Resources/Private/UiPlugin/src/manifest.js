import manifest from '@neos-project/neos-ui-extensibility';
import AllowAttributesPlugin from './AllowAttributesPlugin'
import {getSelectToolbarConfig, getCkeditorPlugin, getCkeditorPluginConfig, getRichtextToolbarConfig} from './CkeditorPluginUtils';

manifest('Breadlesscode.SimpleEditorExtend:UiPlugin', {}, (globalRegistry, { frontendConfiguration }) => {
    const ckEditor = globalRegistry.get('ckEditor5')
    const richtextToolbar = ckEditor.get('richtextToolbar');
    const ckEditorConfig = ckEditor.get('config');
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
            )

            ckEditorConfig.set(
                options.extensionName,
                getCkeditorPluginConfig(
                    formattingName,
                    getCkeditorPlugin(options.extensionName, commandName, options.formatting)
                )
            )
        })
    }

    if (selectConfig && selectConfig.constructor === Object && Object.entries(selectConfig).length !== 0) {
        const configureHeadings = ckEditorConfig.get('configureHeadings')
        const headingOptions = []

        Object.keys(selectConfig).forEach((formattingName) => {
            const options = selectConfig[formattingName]

            richtextToolbar.set(
                'style/' + formattingName,
                getSelectToolbarConfig( formattingName, options.extensionName ),
                options.position
            )
                
            headingOptions.push({
                model: formattingName,
                view: {
                    name: options.formatting.tag,
                    classes: options.formatting.classes,
                    styles: options.formatting.styles
                }
            })
        })

        ckEditorConfig.set('configureHeadings', config => {
            if (!Array.isArray(config?.heading?.options)) {  
                config = configureHeadings(config)
            }

            config.heading.options = config.heading.options.concat(headingOptions)
            config.plugins = config.plugins || [];
            config.plugins.push(AllowAttributesPlugin(selectConfig));

            return config
        })
    }
})
