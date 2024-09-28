const FAQ = () => {
  
    return (
      <>
        <div className="text-gray-700 h-auto mt-10 flex flex-wrap md:flex-col justify-center items-center px-4 md:px-0">
          <h1 className="w-full md:w-1/2 text-2xl md:text-4xl font-semibold font-Inter text-center md:text-center">
            Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool.
          </h1>
          <p className="w-full md:w-3/5 text-center md:text-lg font-medium mt-6">
            I am convinced that there can be luxury in simplicity. I wanted to dress everyone who wants to live their fashion. It’s hard to balance everything. It’s always challenging. I have worked on all kinds of fashion and gained some deep knowledge into fashion. Now it’s time to add a new meaning to fashion.
          </p>
          <p className="w-full md:w-3/5 text-center text-lg md:text-lg font-medium mt-2">
            With Krinvi, you will get a different variety of products.
          </p>
        </div>
  
        {/* FAQ Section */}
        <div className="mt-16">
          {[
            "How did my package ship?",
            "When do I receive my order?",
            "Returns, exchanges and complaints",
            "I now see the longer delivery time of (a part of) my order. How can I cancel it?",
            "When will I receive the invoice for my order?",
            "Are free Anti-Virus software any good?",
            "How long will my order take to be delivered?",
            "Can I return an item?"
          ].map((faq, index) => (
            <h1
              key={index}
              className="text-xl font-medium pb-4 text-gray-700 border-b-2 pl-5  mb-2 w-full md:w-1/2 mx-auto font-Inter"
            >
              {faq}
            </h1>
          ))}
        </div>
      </>
    );
  };
  
  export default FAQ;
  