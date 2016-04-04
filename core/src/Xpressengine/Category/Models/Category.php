<?php
/**
 * This file is category model class.
 *
 * PHP version 5
 *
 * @category    Category
 * @package     Xpressengine\Category
 * @author      XE Team (developers) <developers@xpressengine.com>
 * @copyright   2015 Copyright (C) NAVER <http://www.navercorp.com>
 * @license     http://www.gnu.org/licenses/lgpl-3.0-standalone.html LGPL
 * @link        http://www.xpressengine.com
 */
namespace Xpressengine\Category\Models;

use Illuminate\Database\Eloquent\Collection;
use Xpressengine\Support\Tree\Aggregator;

/**
 * Class Category
 *
 * @category    Category
 * @package     Xpressengine\Category
 * @author      XE Team (developers) <deelopers@xpressengine.com>
 * @copyright   2015 Copyright (C) NAVER <http://www.navercorp.com>
 * @license     http://www.gnu.org/licenses/lgpl-3.0-standalone.html LGPL
 * @link        http://www.xpressengine.com
 */
class Category extends Aggregator
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'category';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name'];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * Category item model
     *
     * @var string
     */
    protected static $itemModel = CategoryItem::class;

    /**
     * Get category items of root level
     *
     * @return Collection
     */
    public function getProgenitors()
    {
        $class = $this->getItemModel();

        return $class::progenitors($this)->get();
    }

    /**
     * Set the category item model
     *
     * @param string $model model name
     * @return void
     */
    public static function setItemModel($model)
    {
        static::$itemModel = '\\' . ltrim($model, '\\');
    }

    /**
     * Get the category item model
     *
     * @return string
     */
    public function getItemModel()
    {
        return static::$itemModel;
    }

    /**
     * Get the count name for model
     *
     * @return string
     */
    public function getCountName()
    {
        return 'count' ;
    }
}
