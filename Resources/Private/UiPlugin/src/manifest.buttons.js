import manifest from '@neos-project/neos-ui-extensibility';
import {getCkeditorPlugin, getCkeditorPluginConfig, getRichtextToolbarConfig} from './CkeditorPluginUtils';
import ButtonComponent from './Components/ButtonComponent';

manifest('Breadlesscode.SimpleEditorExtend:UiPlugin.Buttons', {}, (globalRegistry, { frontendConfiguration }) => {
    const richtextToolbar = globalRegistry.get('ckEditor5').get('richtextToolbar');
    const ckEditorConfig = globalRegistry.get('ckEditor5').get('config');
    const buttonConfig = frontendConfiguration['Breadlesscode.SimpleEditorExtend:Buttons'];

    // Configure individual single format buttons
    Object.keys(buttonConfig).forEach((formattingName) => {
        const options = buttonConfig[formattingName];
        const commandName = options.extensionName + 'Command';

        richtextToolbar.set(
            options.extensionName,
            getRichtextToolbarConfig(commandName, formattingName, options.icon, options.tooltip, ButtonComponent),
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
});
