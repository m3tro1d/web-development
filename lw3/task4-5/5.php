<?php
/*
 * Survey Info: this script prints the user information saved with the
 * Survey Saved (task4) script.
 */


header('Content-Type: text/plain');

$email = getGETOrEmptyString('email');
echo getSurvey($email);


function getGETOrEmptyString(string $name): string
{
    return isset($_GET[$name]) ? (string) $_GET[$name] : '';
}

function getSurveyValue(string $data, string $key): string
{
    $value = '';
    $startIndex = strpos($data, $key . ': ');
    if ($startIndex)
    {
        $startIndex += strlen($key . ': ');
        $value = substr($data, $startIndex);
        $value = substr($value, 0, strpos($value, PHP_EOL));
    }
    return $value;
}

function formatSurvey(array $data): string
{
    $result = '';
    foreach ($data as $key => $value)
    {
        $result .= "$key: $value" . PHP_EOL;
    }
    return $result;
}

function getSurvey(string $email): string
{
    // Email checks
    if (empty($email))
    {
        return 'ERROR: No email provided.';
    }
    if (!file_exists("./data/$email.txt"))
    {
        return 'ERROR: User does not exist.';
    }

    $stringData = file_get_contents("./data/$email.txt");
    $data = [
        'Email' => $email,
        'First Name' => getSurveyValue($stringData, 'first_name'),
        'Last Name' => getSurveyValue($stringData, 'last_name'),
        'Age' => getSurveyValue($stringData, 'age')
    ];
    return formatSurvey($data);
}

