import manifest from '@neos-project/neos-ui-extensibility';
import {$get} from 'plow-js';
import ButtonComponent from './ButtonComponent';
import {getCkeditorPlugin, getCkeditorPluginConfig} from './CkeditorPluginUtils';
import backend from '@neos-project/neos-ui-backend-connector';

manifest('Breadlesscode.SimpleEditorExtend:UiPlugin', {}, globalRegistry => {
    const richtextToolbar = globalRegistry.get('ckEditor5').get('richtextToolbar');
    const config = globalRegistry.get('ckEditor5').get('config');
    const { getJsonResource } = backend.get().endpoints;
    const configUri = '/breadlesscode/editor-config';

    getJsonResource(configUri).then((buttonConfig) => {
        Object.keys(buttonConfig).forEach((formattingName) => {
            const options = buttonConfig[formattingName];
            const commandName = options.extensionName + 'Command';

            richtextToolbar.set(options.extensionName, {
                commandName: commandName,
                isActive: $get(commandName),
                isVisible: $get(['formatting', formattingName]),
                component: ButtonComponent(commandName),
                icon: options.icon,
                tooltip: options.tooltip,
            }, options.position);
            config.set(options.extensionName, getCkeditorPluginConfig(
                formattingName,
                getCkeditorPlugin(options.extensionName, commandName, options.formatting)
            ));
        });
    });
});
