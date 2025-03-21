"use client";
import { UserProfile } from "@clerk/nextjs";
import React from "react";

function Profile() {
  return (
    <div className="flex justify-center">
      <UserProfile />
    </div>
  );
}

export default Profile;
