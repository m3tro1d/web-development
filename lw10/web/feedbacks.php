<?php
require_once __DIR__ . '/../src/common.inc.php';

if (getRequestMethod() === 'POST')
{
    getFeedbackPage();
}
else
{
    feedbacksListPage();
}
