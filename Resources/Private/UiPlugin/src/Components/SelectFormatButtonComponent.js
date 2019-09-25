import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {$get, $transform} from 'plow-js';
import {selectors} from '@neos-project/neos-ui-redux-store';
import {IconButton, SelectBox} from '@neos-project/react-ui-components';
import {neos} from '@neos-project/neos-ui-decorators';
import {executeCommand} from '@neos-project/neos-ui-ckeditor5-bindings';
import style from './SelectFormatButton.css';

export default (commandName, configuration) => {
    @connect($transform({
        formattingUnderCursor: selectors.UI.ContentCanvas.formattingUnderCursor
    }))
    @neos(globalRegistry => ({
        i18nRegistry: globalRegistry.get('i18n')
    }))
    class SelectFormatButtonComponent extends PureComponent {
        static propTypes = {
            i18nRegistry: PropTypes.object,
            tooltip: PropTypes.string,
            formatOptions: PropTypes.object,
            formattingUnderCursor: PropTypes.objectOf(PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.bool,
                PropTypes.string,
                PropTypes.object
            ])),
        };

        constructor(props) {
            super(props);
            this.state = {
                isOpen: false,
                attributes: props.formattingUnderCursor[commandName],
            };
        }

        componentWillReceiveProps = (nextProps) => {
            // If the new selection doesn't have any formatting close the dialog
            if (!$get(commandName, nextProps.formattingUnderCursor)) {
                this.setState({isOpen: false});
            } else {
                this.setState({
                    isOpen: this.state.isOpen,
                    attributes: nextProps.formattingUnderCursor[commandName],
                });
            }
        };

        handleClick = () => {
            this.setState({isOpen: !this.state.isOpen});
        };

        handleRemoveFormatClick = () => {
            this.setState({
                attributes: Object.keys(configuration.formatting.attributes).reduce((map, attribute) => {
                    map[attribute] = '';
                    return map;
                }, {})
            }, this.handleSelectionChange);
        };

        handleSelectionChange = () => {
            executeCommand(commandName, this.state.attributes);
        };

        handleAttributeChange = (attributeName, value) => {
            this.setState({
                attributes: {
                    ...this.state.attributes,
                    [attributeName]: value,
                }
            }, this.handleSelectionChange);
        };

        render() {
            const {icon, id, tooltip, i18nRegistry} = this.props;
            const {isOpen} = this.state;
            const {attributes} = configuration.formatting;
            
            return (                            
                <div>
                    <IconButton
                        icon={icon}
                        id={id}
                        isActive={isOpen}
                        onClick={this.handleClick}
                        title={i18nRegistry.translate(tooltip)}
                    />
                    {isOpen ? (
                        <div className={style.selectFormatButton__flyout}>
                            {Object.keys(attributes).map((attributeName) => {
                                const attribute = attributes[attributeName];
                                return (
                                    <div key={attributeName}>
                                        <label htmlFor={"selectFormat-" + attributeName}>{i18nRegistry.translate(attribute.label)}</label>
                                        <SelectBox id={"selectFormat-" + attributeName}
                                                   placeholder={i18nRegistry.translate(attribute.placeholder)}
                                                   placeholderIcon={i18nRegistry.translate(attribute.placeholderIcon)}
                                                   options={attribute.options}
                                                   value={this.state.attributes[attributeName]}
                                                   onValueChange={(value) => this.handleAttributeChange(attributeName, value)}
                                                   optionValueField="model"/>
                                    </div>
                                );
                            })}
                            <IconButton icon="eraser" hoverStyle="brand"
                                        onClick={this.handleRemoveFormatClick}/>
                        </div>
                    ) : null}
                </div>
            )
        }
    }

    return SelectFormatButtonComponent;
}
