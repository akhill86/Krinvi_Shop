import React from 'react';

const PaymentPolicy = () => {
  return (
    <>
     <div className="container w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[80%] text-justify mx-auto flex flex-col my-2 justify-center">
     <div className="w-full text-base md:text-lg lg:text-xl">

     <div className="p-8">
      {/* Payment Policy Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-semiboldbold mb-4">Payment Policy</h1>
        <ul className="list-decimal ml-5 space-y-2 text-gray-700">
          <li>Chashfree Checkout.</li>
          <li>You can pay through UPI, credit card and as well as debit card as per your choice.</li>
          <li>Tax Invoice would be attached and sent with the item.</li>
        </ul>
      </div>

      {/* Legal Disclaimer Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-semiboldbold mb-4">Legal Disclaimer</h2>
        <p className="text-gray-700">
          Seller hereby expressly disclaims all warranties either expressed or implied warranty of
          merchantability or fitness for a particular purpose. This disclaimer by the seller in no way
          affects the terms of the manufacturer's warranty if any. Title to goods herein being purchased
          is retained by the seller until goods are paid for in full by the purchaser and at that time
          title passes to the purchaser.If goods herein being purchased are being purchased for purposes of export, purchaser must obtain from the Federal Government certain export documentation before shipping to a foreign country. In addition, manufacturers’ warranties for exported goods may vary or even be null and void. If you have questions, please inquire. Any and all liability is only for the products purchased.
        </p>
      </div>


      {/* Basic terms Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-semiboldbold mb-4">Basic terms</h2>
        <p className="text-gray-700">For all prices and products, we reserve the right to make adjustments due to errors, changing market conditions, product discontinuation or typographical errors in advertisements. Allegro is not responsible for manufacturer price changes, which may occur at any time without notice. The product images on this web site may not exactly reflect the product you receive. Design revisions and color variations may exist.
          Please keep all packing material and documentation in the event that your equipment has to be serviced or returned. Before returning any product, you must obtain a Return Merchandise Authorization (RMA) number. NO returns, of any type, will be accepted without an RMA number. Please have the following information on hand when calling for an RMA number: customer name, invoice number, serial number and the nature of the problem</p>
      </div>


       {/* Right & restrictions Section */}
       <div className="mt-8">
        <h2 className="text-3xl font-semiboldbold mb-4">Rights & restrictions</h2>
        <ol style={{ listStyleType: 'decimal' }}>
          <li>Members must be at least 18 years of age.</li>
          <li>Members are granted a time-limited, non-exclusive, revocable, nontransferable, and non-sublicensable right to access that portion of the online course corresponding to the purchase.</li>
          <li>The portion of the online course corresponding to the purchase will be available to the Member as long as the course is maintained by the Company, which will be a minimum of one year after Member’s purchase.</li>
          <li>The videos in the course are provided as a video stream and are not downloadable.</li>
          <li>By agreeing to grant such access, the Company does not obligate itself to maintain the course, or to maintain it in its present form.</li>
        </ol>
      </div>
    </div>


      </div>
      </div>
    </>
    
  );
};

export default PaymentPolicy;
