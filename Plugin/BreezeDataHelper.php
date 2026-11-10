<?php

namespace Swissup\BreezePaypalBraintree\Plugin;

use Swissup\Breeze\Helper\Data;

class BreezeDataHelper
{
    public function afterGetExcludedUrls(
        Data $subject,
        $result
    ) {
        $result[] = '/braintree/';
        return $result;
    }
}
