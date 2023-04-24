import Button from "@/components/ui/Button";
import { db } from "@/lib/db";
export default async function Home() {
  await db.set("name", "John");
  return (
    <div>
      <h1 className="text-red-300">Hello world</h1>
      <Button variant="ghost">Click</Button>
    </div>
  );
}
