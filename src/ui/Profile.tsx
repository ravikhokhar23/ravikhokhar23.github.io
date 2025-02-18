import { FaGithub } from "react-icons/fa";

function Profile() {
  return (
    <div className="absolute z-10 items-center justify-center flex flex-col left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-5xl">Ravi Khokhar</h1>
      <p className="text-xl py-2">Software Tester & Web Developer</p>
      <a href="https://github.com/ravikhokhar23" target="_blank">
        <FaGithub className="w-5 h-5" />
      </a>
    </div>
  );
}

export default Profile;
