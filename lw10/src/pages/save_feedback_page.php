<?php
function saveFeedbackPage(): void
{
    $saveDir = __DIR__ . '/../../data';
    ensureDir($saveDir);

    header('Content-Type: application/json');
    decodeJson();

    $data = formFeedbackArray();
    validateData($data);
    if (thereAreNoErrors($data))
    {
        saveFeedbackFile($saveDir, $data);
        header('HTTP/1.1 201 Created');
    }
    else
    {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode($data);
    }
}


function ensureDir(string $dirName): void
{
    if (!is_dir($dirName))
    {
        mkdir($dirName);
    }
}

function formFeedbackArray(): array
{
    return [
        'name' => getPOSTParameter('name'),
        'email' => getPOSTParameter('email'),
        'country' => getPOSTParameter('country'),
        'gender' => getPOSTParameter('gender'),
        'message' => getPOSTParameter('message'),
    ];
}

function validateData(array &$data): void
{
    if (!isValidName($data['name']))
    {
        $data['name-error'] = true;
    }
    if (!isValidEmail($data['email']))
    {
        $data['email-error'] = true;
    }
    if (!isValidMessage($data['message']))
    {
        $data['message-error'] = true;
    }
    if (!isValidCountry($data['country']))
    {
        $data['country-error'] = true;
    }
    if (!isValidGender($data['gender']))
    {
        $data['gender-error'] = true;
    }
}

function thereAreNoErrors(array &$data): bool
{
    return !(isset($data['name-error']) ||
        isset($data['email-error']) ||
        isset($data['message-error']) ||
        isset($data['country-error']) ||
        isset($data['gender-error']));
}

function isValidName(?string $name): bool
{
    return (!empty($name) && preg_match('/^[a-zA-ZА-Яа-я]+$/', $name));
}

function isValidEmail(?string $email): bool
{
    return (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL));
}

function isValidMessage(?string $message): bool
{
    return !empty($message);
}

function isValidCountry(?string $country): bool
{
    $countries = [
        'RUS',
        'USA',
        'GER',
        'ITA',
        'GSK',
    ];
    return (!empty($country) && in_array($country, $countries));
}

function isValidGender(?string $gender): bool
{
    $genders =[
        'male',
        'female',
    ];
    return (!empty($gender) && in_array($gender, $genders));
}

function saveFeedbackFile(string $saveDir, array &$data): void
{
    $savePath = "$saveDir/" . strtolower($data['email']) . '.txt';
    file_put_contents($savePath, serialize($data));
}
