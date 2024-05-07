import Image from "next/image";
import EditProfile from "./components/EditProfile";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white">
      <EditProfile/>
    </main>
  );
}
