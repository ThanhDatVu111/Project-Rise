import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello this is Thanh Dat Vu</h1>
      <Button>Click me</Button>
      <UserButton/>
    </div>
  );
}
