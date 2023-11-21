import { Button } from "@radix-ui/themes";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <Button className="mt-4">
        <Link href="/">Go Home</Link>
      </Button>
    </main>
  );
};

export default NotFound;
