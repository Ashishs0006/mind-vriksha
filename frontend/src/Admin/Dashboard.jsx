import { useEffect, useState } from "react";

function Dashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [deletingId, setDeletingId] = useState(null); // Track which one user wants to delete
  const [showConfirm, setShowConfirm] = useState(false);

  // Polling: Fetch data every 3 seconds
  useEffect(() => {
    let timer;
    const fetchData = () => {
      fetch("http://localhost:4000/api/consultations")
        .then(res => res.json())
        .then(setSubmissions);
      timer = setTimeout(fetchData, 3000);
    };
    fetchData();
    return () => clearTimeout(timer);
  }, []);

  const filtered = submissions.filter((sub) =>
    sub.name?.toLowerCase().includes(search.toLowerCase())
  );

  // Delete entry handler
  const handleDelete = (id) => {
    setDeletingId(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    fetch(`http://localhost:4000/api/consultations/${deletingId}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => {
        setSubmissions((subs) => subs.filter(s => s._id !== deletingId));
        setDeletingId(null);
        setShowConfirm(false);
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-dark-charcoal mb-5">
        Consultation Submissions
      </h1>
      <input
        className="mb-4 px-3 py-2 border rounded w-full max-w-xs"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-max bg-white rounded shadow mb-8">
          <thead className="bg-primary-green text-light-green">
            <tr>
              <th className="p-3 text-left min-w-[120px]">Name</th>
              <th className="p-3 text-left min-w-[150px]">Mobile</th>
              <th className="p-3 text-left min-w-[200px]">Email</th>
              <th className="p-3 text-left min-w-[250px]">Message</th>
              <th className="p-3 text-left min-w-[180px]">Date/Time</th>
              <th className="p-3 text-left min-w-[250px]">Page URL</th>
              <th className="p-3 text-left min-w-[160px]">IP Address</th>
              <th className="p-3 text-left min-w-[100px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr className="border-b" key={s._id}>
                <td className="p-3 max-w-xs break-words">{s.name}</td>
                <td className="p-3">{s.mobile}</td>
                <td className="p-3 break-words">{s.email}</td>
                <td
                  className="p-3 max-w-xs break-words whitespace-pre-wrap overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflowWrap: "break-word",
                  }}
                >
                  {s.message}
                </td>
                <td className="p-3">{new Date(s.dateTime).toLocaleString()}</td>
                <td className="p-3 break-words">{s.pageUrl}</td>
                <td className="p-3 break-words">{s.ipAddress}</td>
                <td className="p-3">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(s._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-2">Are you sure?</h2>
            <p className="mb-4">Do you want to permanently delete this entry?</p>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded mr-2"
              onClick={confirmDelete}
            >
              Yes, Delete
            </button>
            <button
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={() => setShowConfirm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* ...existing selected dialog if needed */}
    </div>
  );
}

export default Dashboard;