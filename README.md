# stripe-payment-method-magento2
Stripe Payment method module for Magento 2
Magento ver. 2.3.0 >
 - [Main Functionalities](#user-content-main-functionalities)
 - [Installation](#user-content-installation)


## Main Functionalities

- Payment Method is working for stripe test and live modes need 
- need to add secret key of Stripe


## Installation
\* = in production please use the `--keep-generated` option
 - install stripe php (used version 7.14.2)  `composer require stripe/stripe-php`
 - Unzip the zip file in `app/code/`
 - Enable the module by running `php bin/magento module:enable Behindshops_Stripe`
 - Apply database updates by running `php bin/magento setup:upgrade`
 - Apply database updates by running `php bin/magento setup:di:compile`
 - Flush the cache by running `php bin/magento cache:flush` `php bin/magento cache:clear`
