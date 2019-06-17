import manifest from '@neos-project/neos-ui-extensibility';
import {getCkeditorPlugin, getCkeditorPluginConfig, getRichtextToolbarConfig} from './CkeditorPluginUtils';
import backend from '@neos-project/neos-ui-backend-connector';

manifest('Breadlesscode.SimpleEditorExtend:UiPlugin', {}, globalRegistry => {
    const richtextToolbar = globalRegistry.get('ckEditor5').get('richtextToolbar');
    const config = globalRegistry.get('ckEditor5').get('config');
    const { getJsonResource } = backend.get().endpoints;
    const configUri = '/breadlesscode/editor-config';
    /**
     * Debugging
     */
    console.log('Has: ');
    console.log(globalRegistry.get('frontendConfiguration').has('Breadlesscode.SimpleEditorExtend'))
    console.log('Get: ');
    console.log(globalRegistry.get('frontendConfiguration').get('Breadlesscode.SimpleEditorExtend'))
    console.log('Registry: ');
    console.log(globalRegistry.get('frontendConfiguration')._registry)

    getJsonResource(configUri).then((buttonConfig) => {
        Object.keys(buttonConfig).forEach((formattingName) => {
            const options = buttonConfig[formattingName];
            const commandName = options.extensionName + 'Command';

            richtextToolbar.set(
                options.extensionName,
                getRichtextToolbarConfig(commandName, formattingName, options.icon, options.tooltip),
                options.position
            );
            
            config.set(
                options.extensionName,
                getCkeditorPluginConfig(
                    formattingName,
                    getCkeditorPlugin(options.extensionName, commandName, options.formatting)
                )
            );
        });
    });
});
