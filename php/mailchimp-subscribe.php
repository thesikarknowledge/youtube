<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Replace 'YOUR_API_KEY' with your actual Mailchimp API key
    $apiKey = '37380c908d153c10d8dd850eec154697-us9';

    // Replace 'YOUR_AUDIENCE_ID' with your actual Mailchimp audience ID
    $audienceId = 'b7a29160b1';

    $email = $_POST['mc_email'];

    if (!empty($email)) {
        $dataCenter = substr($apiKey, strpos($apiKey, '-') + 1);
        $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $audienceId . '/members/';

        $jsonData = json_encode([
            'email_address' => $email,
            'status' => 'subscribed',
        ]);

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
        $result = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode === 200) {
            echo 'Subscription successful!';
        } elseif( $httpCode === 400 ){
            echo $email . ' is already exists!';
        }else {
            echo 'Subscription failed. Please try again later.';
        }
    } else {
        echo 'Email address is required.';
    }
}
