import Sidebar from "./Sidebar";
import Header from "./Header";

function AdminLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 min-h-screen bg-light-green">
        <Header />
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
export default AdminLayout;
