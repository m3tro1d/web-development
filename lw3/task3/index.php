<?php
/*
 * Password Strength: this script checks the strength of the password,
 * passed as GET parameter.
 */


header('Content-Type: text/plain');

$password = getGETParameter('password');
if (!empty($password))
{
    $strength = 0;

    $strength += lengthStrength($password);
    $strength += numbersStrength($password);
    $strength += upperCharsStrength($password);
    $strength += lowerCharsStrength($password);
    $strength += sameSymbolsStrength($password);
    $strength += duplicatesStrength($password);

    echo $strength;
}
else
{
    echo 'No password provided.';
}


function getGETParameter(string $name): ?string
{
    return isset($_GET[$name]) ? (string) $_GET[$name] : null;
}

function lengthStrength(string $password): int
{
    return 4 * strlen($password);
}

function numbersStrength(string $password): int
{
    return 4 * ((int) preg_match_all('/\d/', $password));
}

function upperCharsStrength(string $password): int
{
    $value = 0;
    $upperAmount = (int) preg_match_all('/[A-Z]/', $password);
    $value = 2 * (strlen($password) - $upperAmount);
    return $value;
}

function lowerCharsStrength(string $password): int
{
    $value = 0;
    $lowerAmount = (int) preg_match_all('/[a-z]/', $password);
    $value = 2 * (strlen($password) - $lowerAmount);
    return $value;
}

function duplicatesStrength(string $password): int
{
    $value = 0;
    foreach (count_chars($password) as $count)
    {
        if ($count > 1)
        {
            $value -= $count;
        }
    }
    return $value;
}

function sameSymbolsStrength(string $password): int
{
    $value = 0;
    if (is_numeric($password) || ctype_alpha($password))
    {
        $value = -strlen($password);
    }
    return $value;
}
