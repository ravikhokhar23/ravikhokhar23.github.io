import { FaGithub } from "react-icons/fa";

function Profile() {
  return (
    <div className="absolute z-10 items-center justify-center flex flex-col left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="md:text-5xl sm:text-5xl text-3xl text-center">
        Ravi Khokhar
      </h1>
      <p className="md:text-xl sm:text-xl text-base py-1 text-center">
        Software Tester by profession
      </p>
      <p className="md:text-xl sm:text-xl text-base text-center">
        Web Developer by interest
      </p>
      <a
        href="https://github.com/ravikhokhar23"
        target="_blank"
        className="py-2"
      >
        <FaGithub className="w-5 h-5" />
      </a>
    </div>
  );
}

export default Profile;
