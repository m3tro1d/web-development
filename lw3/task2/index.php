<?php
/*
 * Check Identifier: this script determines whether the 'identifier' GET
 * parameter is a valid identifier according to SR3.
 */


header('Content-Type: text/plain');

$identifier = getGETParameter('identifier');
if (!empty($identifier))
{
    $message = "yes";

    if (is_numeric($identifier[0]))
    {
        $message = 'no' . PHP_EOL . 'Identifier starts with a number.';
    }
    else if (!ctype_alnum($identifier))
    {
        $message = 'no' . PHP_EOL . 'Identifier contains illegal symbols.';
    }

    echo $message;
}
else
{
    echo 'No identifier provided.';
}


function getGETParameter(string $name): ?string
{
    return isset($_GET[$name]) ? (string) $_GET[$name] : null;
}