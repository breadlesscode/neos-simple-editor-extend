<?php
namespace Breadlesscode\SimpleEditorExtend\Controller;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;

/**
 * @Flow\Scope("singleton")
 */
class CkeditorConfigurationController extends ActionController
{
    /**
   * @Flow\InjectConfiguration(path="buttons")
   * @var array
     */
    protected $ckeditorConfig;

    public function configAction()
    {
        return \json_encode($this->ckeditorConfig);
    }
}
