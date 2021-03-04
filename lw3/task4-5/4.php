<?php
/*
 * Survey Saver: this script saves the user information provided with the
 * 'first_name', 'last_name', 'email' and 'age' GET parameters as a file
 * <email>.txt. 'email' is the only required field.
 */


header('Content-Type: text/plain');

$email = getGETOrEmptyString('email');
echo saveSurvey($email);


function getGETOrEmptyString(string $name): string
{
    return isset($_GET[$name]) ? (string) $_GET[$name] : '';
}

function ensureDir(string $dirName)
{
    if (!is_dir($dirName))
    {
        mkdir($dirName);
    }
}

function cleanBlanks(array $data): array
{
    $blankPosition = array_search('', $data);
    while ($blankPosition)
    {
        unset($data[$blankPosition]);
        $blankPosition = array_search('', $data);
    }
    return $data;
}

function generateSurvey(array $data): string
{
    $result = '';
    foreach ($data as $key => $value)
    {
        $result .= "$key: $value" . PHP_EOL;
    }
    return $result;
}

function saveSurvey(string $email): string
{
    // Email checks
    if (empty($email))
    {
        return 'ERROR: No email provided';
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        return 'ERROR: Invalid email.';
    }

    $data = [
        'email' => $email,
        'first_name' => getGETOrEmptyString('first_name'),
        'last_name' => getGETOrEmptyString('last_name'),
        'age' => getGETOrEmptyString('age')
    ];
    ensureDir('data');
    $data = cleanBlanks($data);
    $formattedSurvey = generateSurvey($data);
    file_put_contents("./data/$email.txt", $formattedSurvey);
    return 'SUCCESS: Saved!';
}
