import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=" grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Side bar for large devices */}
      <Sidebar />

      <div className="flex flex-col">
        <Navbar />
        {/* Main section */}
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-12">
          {/* Children content goes here */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default layout;
