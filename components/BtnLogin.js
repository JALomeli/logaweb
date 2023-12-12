import { useSession, signIn, signOut } from "next-auth/react";

export default function BtnLogin() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <>
        <img src={session.user.image} alt={session.user.name} />
        Signed in as {session.user.email} 
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in 
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}