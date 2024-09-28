import React from 'react'

export default function ReturnAndRefund() {
    return (
        <>
            <div className="container w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[63%] text-justify mx-auto flex flex-col my-2 justify-center">
                <div className="w-full text-base md:text-lg lg:text-xl">
                    <div className="heading">
                        <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl max-sm:flex max-sm:justify-center max-sm:items-center' >Return</h1>
                    </div>
                    <div className="text mt-4 sm:mt-6">
                        <ul>We will gladly replace or accept returns if the product is damaged, defective or if you receive the wrong items. Products are only eligible for return within 5 days of delivery.</ul>
                        <br />
                        <ul>We do not offer refunds. However, we guarantee replacements in case of manufacturing defects and / or deviation from exact order specifications.</ul>
                        <br />
                        <ul>Your return will usually be processed within a week to a week and a half. We’ll send you a Return Notification email to notify you once the return has been completed.</ul>
                        <ul>Please allow 1-3 business days for refunds to be received to the original form of payment once the return has been processed.</ul>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="heading">
                        <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl max-sm:flex max-sm:justify-center max-sm:items-center'>Refund / Cancellation</h1>
                    </div>
                    <div className="text mt-4 sm:mt-6">
                        <ul>There is zero cancellation charge.</ul>
                        <ul>Cancellation is totally free.</ul>
                        <ul>You will get 100% refund for cancelled products.</ul>
                        <br />
                        <ul>Your refund will be received by you in 30 working days from the cancellation date.</ul>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="heading">
                        <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl max-sm:flex max-sm:justify-center max-sm:items-center'>Help</h1>
                    </div>
                    <div className="text mt-4 sm:mt-6 ml-4 sm:ml-6 md:ml-8">
                        <li>Give us a shout if you have any other questions and/or concerns.</li>
                        <li>Email: info@krinvi.com</li>
                        <li>Phone: +91-9354795744</li>
                    </div>
                </div>
            </div>
        </>
    )
}
