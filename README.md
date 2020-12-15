# Neos simple editor extend

[![Latest Stable Version](https://poser.pugx.org/breadlesscode/neos-simple-editor-extend/v/stable)](https://packagist.org/packages/breadlesscode/neos-simple-editor-extend)
[![Downloads](https://img.shields.io/packagist/dt/breadlesscode/neos-simple-editor-extend.svg)](https://packagist.org/packages/breadlesscode/neos-simple-editor-extend)
[![License](https://img.shields.io/github/license/breadlesscode/neos-simple-editor-extend.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/breadlesscode/neos-simple-editor-extend.svg?style=social&label=Stars)](https://github.com/breadlesscode/neos-simple-editor-extend/stargazers)
[![GitHub watchers](https://img.shields.io/github/watchers/breadlesscode/neos-simple-editor-extend.svg?style=social&label=Watch)](https://github.com/breadlesscode/neos-simple-editor-extend/subscription)

This is a small plugin to simply add some buttons to the Neos CMS CKEditor, without writing any JavaScript code. You only need to compose a YAML-File. 

## Installation
Most of the time you have to make small adjustments to a package (e.g., the configuration in Settings.yaml). Because of that, it is important to add the corresponding package to the composer from your theme package. Mostly this is the site package located under Packages/Sites/. To install it correctly go to your theme package (e.g.Packages/Sites/Foo.Bar) and run following command:

```bash
composer require breadlesscode/neos-simple-editor-extend --no-update
```

The --no-update command prevent the automatic update of the dependencies. After the package was added to your theme composer.json, go back to the root of the Neos installation and run composer update. Your desired package is now installed correctly.

## Demo

![result demo image](Documentation/preview.gif "Example for the configuration below")

## Example configuration

```yaml
Neos:
  Neos:
    Ui:
      frontendConfiguration:
        'Breadlesscode.SimpleEditorExtend:Buttons':
          'Test.Test:MyCustomSpan':
            extensionName: 'exampleExtension'
            icon: 'plus-square'
            tooltip: 'Mark the text in color green'
            position: 'before strong'
            formatting:
              tag: 'span'
              classes: 'test-class'
              styles:
                background-color: 'green'
          'Test.Test:MyCustomSpan2':
            extensionName: 'exampleExtension2'
            icon: 'rocket'
            tooltip: 'Mark the text in color red'
            position: 'before exampleExtension'
            formatting:
              tag: 'span'
              classes: 'test-class-2'
              styles:
                background-color: 'red'
```

Now you can use your new formattings like this:

```yaml
'Neos.NodeTypes.BaseMixins:TextMixin':
  properties:
    text:
      ui:
        inline:
          editorOptions:
            formatting:
              'Test.Test:MyCustomSpan': true
              'Test.Test:MyCustomSpan2': true
```

## License
The GNU GENERAL PUBLIC LICENSE Version 3. Please see [License File](LICENSE) for more information.
