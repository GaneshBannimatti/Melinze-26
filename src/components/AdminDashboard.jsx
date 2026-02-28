import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function AdminDashboard() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const navigate = useNavigate();

  /* ============================= */
  /* 🔐 FETCH DATA */
  /* ============================= */
  const fetchData = () => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    fetch("http://localhost:5000/api/admin/registrations", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (res.status === 401) {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
          throw new Error("Session expired");
        }
        return res.json();
      })
      .then((result) => {
        setData(result?.data || []);
        setFiltered(result?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  /* ============================= */
  /* 🔎 SEARCH + FILTER */
  /* ============================= */
  useEffect(() => {
    let temp = data;

    if (search) {
      temp = temp.filter((reg) =>
        reg.teamName?.toLowerCase().includes(search.toLowerCase()) ||
        reg.leader?.name?.toLowerCase().includes(search.toLowerCase()) ||
        reg.leader?.college?.toLowerCase().includes(search.toLowerCase()) ||
        reg.participant2?.name?.toLowerCase().includes(search.toLowerCase()) ||
        reg.participant3?.name?.toLowerCase().includes(search.toLowerCase()) ||
        reg.participant4?.name?.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filter !== "all") {
      temp = temp.filter((reg) => reg.paymentStatus === filter);
    }

    setFiltered(temp);
  }, [search, filter, data]);

  /* ============================= */
  /* ✅ APPROVE PAYMENT */
  /* ============================= */
  const approvePayment = async (id) => {
    const token = localStorage.getItem("adminToken");

    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/approve-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ registrationId: id }),
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("Payment approved & confirmation email sent ✅");
        fetchData();
      } else {
        alert(result.message);
      }

    } catch (error) {
      alert("Error approving payment");
    }
  };

  /* ============================= */
  /* 📊 EXPORT FULL DETAILS */
  /* ============================= */
  const exportToExcel = () => {
    const formatted = filtered.map((reg) => ({
      Team: reg.teamName,

      Leader_Name: reg.leader?.name,
      Leader_Email: reg.leader?.email,
      Leader_Phone: reg.leader?.phone,
      Leader_College: reg.leader?.college,
      Leader_Location: reg.leader?.location,
      Leader_Type: reg.leader?.type,

      Participant2_Name: reg.participant2?.name,
      Participant2_Email: reg.participant2?.email,
      Participant2_Phone: reg.participant2?.phone,

      Participant3_Name: reg.participant3?.name || "",
      Participant3_Email: reg.participant3?.email || "",
      Participant3_Phone: reg.participant3?.phone || "",

      Participant4_Name: reg.participant4?.name || "",
      Participant4_Email: reg.participant4?.email || "",
      Participant4_Phone: reg.participant4?.phone || "",

      Payment_Status: reg.paymentStatus,
      UTR_Number: reg.utrNumber || "",
      Registration_Date: new Date(reg.createdAt).toLocaleDateString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(formatted);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const blob = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(blob, "Full_Registration_Data.xlsx");
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-6 justify-between">
        <input
          type="text"
          placeholder="Search team / participant / college..."
          className="px-4 py-2 rounded bg-neutral-800"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 rounded bg-neutral-800"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Payments</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <button
          onClick={exportToExcel}
          className="bg-green-500 px-4 py-2 rounded font-semibold"
        >
          Export Full Data
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-neutral-900">
            <tr>
              <th className="p-3 border">Team</th>
              <th className="p-3 border">Leader Details</th>
              <th className="p-3 border">Participants</th>
              <th className="p-3 border">Payment</th>
              <th className="p-3 border">Date</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((reg) => (
              <tr key={reg._id} className="hover:bg-neutral-900">

                <td className="p-3 border font-semibold">
                  {reg.teamName}
                </td>

                <td className="p-3 border text-xs">
                  <div><strong>Name:</strong> {reg.leader?.name}</div>
                  <div><strong>Email:</strong> {reg.leader?.email}</div>
                  <div><strong>Phone:</strong> {reg.leader?.phone}</div>
                  <div><strong>College:</strong> {reg.leader?.college}</div>
                  <div><strong>Location:</strong> {reg.leader?.location}</div>
                  <div><strong>Type:</strong> {reg.leader?.type}</div>
                </td>

                <td className="p-3 border text-xs">
                  <div className="mb-2">
                    <strong>P2:</strong> {reg.participant2?.name}
                    <div>{reg.participant2?.email}</div>
                    <div>{reg.participant2?.phone}</div>
                  </div>

                  {reg.participant3 && (
                    <div className="mb-2">
                      <strong>P3:</strong> {reg.participant3?.name}
                      <div>{reg.participant3?.email}</div>
                      <div>{reg.participant3?.phone}</div>
                    </div>
                  )}

                  {reg.participant4 && (
                    <div>
                      <strong>P4:</strong> {reg.participant4?.name}
                      <div>{reg.participant4?.email}</div>
                      <div>{reg.participant4?.phone}</div>
                    </div>
                  )}
                </td>

                <td className="p-3 border text-xs">
                  {reg.paymentStatus === "pending" ? (
                    <button
                      onClick={() => approvePayment(reg._id)}
                      className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded font-semibold transition"
                    >
                      Approve
                    </button>
                  ) : (
                    <span className="text-green-400 font-semibold">
                      Completed
                    </span>
                  )}

                  <div className="mt-2 text-gray-400">
                    UTR: {reg.utrNumber || "-"}
                  </div>
                </td>

                <td className="p-3 border text-xs">
                  {new Date(reg.createdAt).toLocaleDateString()}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
