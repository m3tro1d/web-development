<?php
/*
 * Remove Extra Blanks: this script strips all redundant white spaces
 * from the 'text' GET parameter.
 */


header('Content-Type: text/plain');

$text = getGETParameter('text');
if (!empty($text))
{
    $text = trim($text);
    $text = preg_replace('/ {2,}/', ' ', $text);
    echo $text;
}
else
{
    echo 'No text provided.';
}


function getGETParameter(string $name): ?string
{
    return isset($_GET[$name]) ? (string) $_GET[$name] : null;
}
