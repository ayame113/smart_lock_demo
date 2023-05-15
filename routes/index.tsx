import { Head } from "$fresh/runtime.ts";
import Main from "../islands/Main.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>KV DEMO</title>
      </Head>
      <div class="h-screen w-full text-xl flex items-center justify-center">
        <Main />
      </div>
    </>
  );
}
