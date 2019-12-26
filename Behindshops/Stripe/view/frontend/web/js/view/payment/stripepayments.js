define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'stripe',
                component: 'Behindshops_Stripe/js/view/payment/method-renderer/stripemethod'
            }
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);
