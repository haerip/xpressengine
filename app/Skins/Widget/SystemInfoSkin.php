<?php
/**
 * SystemInfoSkin.php
 *
 * PHP version 7
 *
 * @category    Skins
 * @package     App\Skins\Widget
 * @author      XE Developers <developers@xpressengine.com>
 * @copyright   2019 Copyright XEHub Corp. <https://www.xehub.io>
 * @license     http://www.gnu.org/licenses/lgpl-3.0-standalone.html LGPL
 * @link        https://xpressengine.io
 */

namespace App\Skins\Widget;

use Xpressengine\Skin\GenericSkin;

/**
 * Class SystemInfoSkin
 *
 * @category    Skins
 * @package     App\Skins\Widget
 * @author      XE Developers <developers@xpressengine.com>
 * @copyright   2019 Copyright XEHub Corp. <https://www.xehub.io>
 * @license     http://www.gnu.org/licenses/lgpl-3.0-standalone.html LGPL
 * @link        https://xpressengine.io
 */
class SystemInfoSkin extends GenericSkin
{
    /**
     * The component id
     *
     * @var string
     */
    protected static $id = 'widget/xpressengine@systemInfo/skin/xpressengine@default';

    /**
     * The information for component
     *
     * @var array
     */
    protected static $componentInfo = [
        'name' => '기본 시스템 정보 위젯 스킨',
        'description' => 'Xpressengine의 기본 시스템 정보 위젯 스킨입니다'
    ];

    /**
     * @var string
     */
    protected static $path = 'widget.widgets.systemInfo';

    /**
     * @var string
     */
    protected static $viewDir = '';

    /**
     * @var array
     */
    protected static $info = [
        'support' => [
            'mobile' => true,
            'desktop' => true
        ]
    ];
}
