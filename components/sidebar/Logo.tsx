import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
const LogoComponent = () => {
  return (
    <div className="flex items-center px-4 lg:h-[76px] lg:px-6 mx-auto">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Image src={Logo} alt="Logo" className="h-32 w-32" />
      </Link>
    </div>
  );
};
export default LogoComponent;
