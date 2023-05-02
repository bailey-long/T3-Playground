import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SignInButton, SignOutButton, useUser, UserProfile } from "@clerk/nextjs";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const user = useUser();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div>
          {!user.isSignedIn && <><div className="bg-red-500 text-white py-2 px-4 rounded cursor-pointer"><SignInButton /></div></>}
          {!!user.isSignedIn && <><div className="bg-red-500 text-white py-2 px-4 rounded cursor-pointer"><SignOutButton /></div> <UserProfile /></>}
        </div>
      </main>
    </>
  );
};

export default Home;
