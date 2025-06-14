
import React from "react";

const CustomerStatement = () => (
  <div className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-xl shadow-md max-w-3xl mx-auto p-6 mt-8">
    <img
      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=120&h=120&fit=crop"
      alt="Kunde"
      className="w-20 h-20 rounded-full object-cover ring-2 ring-blue-200"
    />
    <div>
      <p className="text-lg font-medium text-gray-800 italic mb-2">
        „Dank Web56 haben wir in wenigen Wochen 50 % mehr Kundenanfragen über unsere Webseite erhalten.“
      </p>
      <div className="text-gray-500 text-sm">
        <span className="font-semibold text-blue-800">Max Müller</span>, Geschäftsführer <span className="font-medium">Musterfirma GmbH</span>
      </div>
    </div>
  </div>
);

export default CustomerStatement;
