import Signin from "@/components/modals/Signin";
import Signup from "@/components/modals/Signup";


export default function Home() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center gap-3 text-white">
      <Signup/>
      <Signin/>
    </main>
  );
}
