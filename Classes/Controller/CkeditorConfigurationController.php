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
     * @var string
     */
    protected $defaultViewObjectName = \Neos\Flow\Mvc\View\JsonView::class;

    /**
   * @Flow\InjectConfiguration(path="buttons")
   * @var array
     */
    protected $ckeditorConfig;

    public function configAction()
    {
        $this->view->assign('value', $this->ckeditorConfig);
    }
}
