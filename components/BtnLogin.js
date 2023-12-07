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
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}></button>
        </>
    );
}