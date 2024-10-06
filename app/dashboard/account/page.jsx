import ProtectedRoute from "@/app/components/ProtectedRoute";
import React from "react";

const page = () => {
  return (
    <ProtectedRoute>
      <div>page</div>
    </ProtectedRoute>
  );
};

export default page;
