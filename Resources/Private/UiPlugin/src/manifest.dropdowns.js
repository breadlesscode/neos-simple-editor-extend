import manifest from '@neos-project/neos-ui-extensibility';
import merge from 'lodash.merge';
import {getCkeditorPluginConfig, getRichtextToolbarConfig} from './CkeditorPluginUtils';
import SelectFormatButtonComponent from "./Components/SelectFormatButtonComponent";
import SelectFormatPlugin from "./Plugins/SelectFormatPlugin";

manifest('Breadlesscode.SimpleEditorExtend:UiPlugin.Dropdowns', {}, (globalRegistry, {frontendConfiguration}) => {
    const richtextToolbar = globalRegistry.get('ckEditor5').get('richtextToolbar');
    const ckEditorConfig = globalRegistry.get('ckEditor5').get('config');
    const pluginName = 'Breadlesscode.SimpleEditorExtend:Dropdowns';
    const dropdownConfig = frontendConfiguration[pluginName];

    // Configure dropdowns with multiple format options
    let mergedDropdownFormattingOptions = {};
    Object.keys(dropdownConfig).forEach((formattingName) => {
        const options = dropdownConfig[formattingName];
        const commandName = 'selectFormat' + 'Command';
        
        richtextToolbar.set(
            formattingName,
            getRichtextToolbarConfig(commandName, formattingName, options.icon, options.tooltip, SelectFormatButtonComponent, options),
            options.position
        );

        // Merge formatting options, as all need to be available in the configuration
        mergedDropdownFormattingOptions = merge({}, mergedDropdownFormattingOptions, options.formatting.attributes);

        ckEditorConfig.set(pluginName, getCkeditorPluginConfig(formattingName, SelectFormatPlugin));
    });

    ckEditorConfig.set('selectableFormatOptions', config => Object.assign(config,
        {
            selectFormat: {
                options: mergedDropdownFormattingOptions
            }
        }
    ));
});
