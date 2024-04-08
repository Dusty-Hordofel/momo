"use client";
import { SessionProvider } from "next-auth/react";

// {children: React.ReactNode }
const AuthProvider = ({ children, session }: any) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
export default AuthProvider;

// so what the authorized function does is what it says it authorizes the login so when I try to log into my application this is where all the logic is for when somebody logs in to make sure they are authorized to log in so that's the first function that's called off when somebody signs in after this function is called if you have marked your provider to use this JWT as the session then the JWT callback function will be called and then right after the jgw Callback function is called the session callback is called
// 05:37

// right after that so this is the order of how the callbacks are called and this isn't a very important step because that is going to help you understand on how to use these callback functions and how you could utilize it to your benefit so the very first thing I want to show you is how you can add a property or parameter to that session object so I want to add the address I want to show that we can display their address as well so we have to go to our register page where we register an account and this is just a form with a bunch of
// 06:09

// inputs and labels and inside the form we make them fill out their name email and password but we also want them to fill out an address so what I'm going to do here is I am going to just copy a div down with all the inputs and labels change the name the address change all of this address and then what we're going to do here is we'll change this address as well this is going to be data.
// 06:50

// address and the reason why is because the state that I defined up here in the U state is the data object with a bunch of properties and now we need to pass the address and as well and this is going  to be initial value of empty string so now we have an input that is fully functional working for the address and if the state we are updating as well as they type because we have an on change here as well so when we scroll back up when we hit that submit on the form this register user function is called and is fetching to our backend API forward slash
