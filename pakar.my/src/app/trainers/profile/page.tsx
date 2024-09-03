import Link from "node_modules/next/link";

export default function ProfilePage() {
  return (
    <div className="mx-auto flex h-fit w-full flex-col items-center justify-start gap-10 bg-black px-3 text-white lg:w-[50%]">
      <div className="grid grid-cols-1 items-center justify-center gap-10 px-10 pt-20 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <img
            src="https://i.pravatar.cc/300?u=41"
            alt="hero"
            className="h-100 w-100 aspect-square rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">Umar Abdul Aziz</h1>
          <em className="text-md opacity-60">Leadership • Teambuilding</em>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            totam exercitationem non tenetur at cum aperiam praesentium labore
            placeat quisquam.
          </p>
        </div>
      </div>
      <hr className="w-full text-slate-50 opacity-50"></hr>
      <div className="grid grid-cols-1 items-start justify-center gap-10 px-10 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          {" "}
          <p className="text-xl font-bold">Experience</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            totam exercitationem non tenetur at cum aperiam praesentium labore
            placeat quisquam.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {" "}
          <p className="text-xl font-bold">Topics</p>
          <ul className="flex list-inside list-disc flex-col gap-2">
            <li>Team Leadership</li>
            <li>Problem Solving as a Leader</li>
            <li>Working Together as a Team</li>
            <li>Creative Thinking and Problem Solving</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          {" "}
          <p className="text-xl font-bold">Overview</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            totam exercitationem non tenetur at cum aperiam praesentium labore
            placeat quisquam.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {" "}
          <p className="text-xl font-bold">Speciality</p>
          <ul className="flex list-inside list-disc flex-col gap-2">
            <li>Leadership</li>
            <li>Teambuilding</li>
            <li>Business Management</li>
          </ul>
        </div>
      </div>
      <hr className="w-full text-slate-50 opacity-50"></hr>
      <div className="py-10 text-center">
        <p className="text-xl font-bold">Contact Umar Today!</p>
        <Link href="https://wa.me/60123456789">
          <p className="text-md font-thin hover:text-cyan-400">+60123456789</p>
        </Link>
        <Link href="mailto:umar@example.com">
          <p className="text-md font-thin hover:text-cyan-400">
            umar@example.com
          </p>
        </Link>
      </div>
    </div>
  );
}
