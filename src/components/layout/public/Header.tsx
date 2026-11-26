
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
export default function Header() {
  const routes = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
  ];
  return (
    <header className="w-full h-16 border border-b flex">
      <div className="flex justify-between items-center  h-full max-w-7xl mx-auto">
        <Logo />
        <nav className="flex gap-5">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.url}
              className="mx-4 text-lg font-semibold text-gray-700 hover:text-gray-900"
            >
              {route.name}
            </Link>
          ))}
        </nav>
        <div>
          <Button
          variant="outline"
          render={<Link href={"/login"}></Link>}
          nativeButton={false}
          >

            login
          </Button>
        </div>
      </div>
    </header>
  );
}
