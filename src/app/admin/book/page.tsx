import { SignOutButton } from "@clerk/nextjs";
import React from "react";

const AdminBook = () => {
  return (
    <div>
      <h2>book</h2>
      <div>
        <SignOutButton />
      </div>
    </div>
  );
};

export default AdminBook;
