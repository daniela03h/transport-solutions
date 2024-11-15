import Image from "next/image";

export const Account = () => {
  return (
    <div className="flex gap-4 items-center">
      <Image
        className="rounded-full border-2 border-red-500"
        src=""
        alt="avatar"
        width={40}
      />
    </div>
  );
};