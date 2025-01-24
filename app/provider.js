"use client";
import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      console.log("User found:", user);
      CheckIsNewUser();
    }
  }, [user]);
  //If the user becomes available (i.e., the user logs in), the effect will run, triggering the CheckIsNewUser() function.

  const CheckIsNewUser = async () => {
    console.log("Checking if the user exists in the database...");

    // Check if the user already exists in the database
    const result = await db
      .select()
      .from(USER_TABLE)
      .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));

    console.log("Database query result:", result);

    if (result?.length === 0) {
      console.log("User not found in the database. Adding new user...");
      // If user is not found, insert them into the database
      const userResp = await db
        .insert(USER_TABLE)
        .values({
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
        })
        .returning({ id: USER_TABLE.id });

      console.log("New user added with ID:", userResp?.id);
    } else {
      console.log("User already exists in the database.");
    }
  };
  //The await ensures that the function doesn't proceed until the data is fetched from the database.*/
  return <>{children}</>; //This will render whatever child components (like pages) are passed to the Provider component.
}

export default Provider;
