import Link from "node_modules/next/link";

const navigation = [
  {
    name: "Search",
    href: "/trainers",
  },
  {
    name: "Join",
    href: "/join",
  },
];
export default function Header() {
  return (
    <div className="flex w-full flex-row items-center justify-between gap-4 px-4 py-4">
      <Link href="/">
        <img
          src="/favicon.png"
          alt="Pakar.me"
          className="h-10 w-10 rounded-xl bg-white"
        />
      </Link>
      <nav className="flex flex-row gap-3 divide-x-2 divide-slate-50/50">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <p className="pl-3 text-white hover:text-cyan-200">{item.name}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
}

{
  /* <div className="mt-8 flex w-fit flex-row items-center justify-center gap-4 divide-x-2 rounded-full bg-black/50 px-8 py-2 text-white ring-1 ring-white hover:bg-black hover:text-white hover:ring-cyan-400"> */
}
