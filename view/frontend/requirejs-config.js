var config = {
    shim: {
        braintree: { exports: 'braintree.client' },
        braintreePayPalCheckout: { exports: 'braintree.paypalCheckout' },
        braintreeHostedFields: { exports: 'braintree.hostedFields' },
        braintreeDataCollector: { exports: 'braintree.dataCollector' },
        braintreeThreeDSecure: { exports: 'braintree.threeDSecure' },
        braintreeApplePay: { exports: 'braintree.applePay' },
        braintreeGooglePay: { exports: 'braintree.googlePayment' },
        braintreeVenmo: { exports: 'braintree.venmo' },
        braintreeAch: { exports: 'braintree.usBankAccount' },
        braintreeLpm: { exports: 'braintree.localPayment' }
    }
};
