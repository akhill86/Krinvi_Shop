import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className=" min-h-screen px-6 sm:px-12 lg:px-24 my-2 text-justify">
      <div className="max-w-4xl mx-auto bg-white p-2">
        <h1 className="text-4xl font-semibold mb-8 text-gray-800 flex justify-center">Collecting Personal Information</h1>
        <p className="text-gray-600 mb-6">
          When you visit the Site, we collect information about your device, your interaction with
          the Site, and information needed to process your purchases. If you get in touch with us
          for customer service, we might additionally gather more information. Any information that
          can be used to specifically identify an individual is referred to in this privacy statement
          as “Personal Information,” which includes the data listed below. For further details on the
          Personal Information we gather and why, see the list below.
        </p>
        <h2 className="text-4xl font-semibold mb-4 text-gray-700 flex justify-center">Order Information</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Examples of Personal Information collected:</strong> Name, billing address,
            shipping address, payment information (including credit card numbers), email address, and
            phone number.
          </li>
          <li>
            <strong>Purpose of collection:</strong> To provide products or services to you to fulfill
            our contract, to process your payment information, arrange for shipping, and provide you
            with invoices and/or order confirmations, communicate with you, screen our orders for
            potential risk or fraud, and when in line with the preferences you have shared with us,
            provide you with information or advertising relating to our products or services.
          </li>
          <li>
            <strong>Source of collection:</strong> Collected from you.
          </li>
          <li>
            <strong>Disclosure for a business purpose:</strong> Shared with our processor.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
