import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    teamName: "",
    leaderEmail: "",
    leaderName: "",
    leaderPhone: "",
    leaderDob: "",
    leaderLocation: "",
    leaderType: "",
    leaderCollege: "",

    p2Email: "",
    p2Name: "",
    p2Phone: "",

    p3Email: "",
    p3Name: "",
    p3Phone: "",

    p4Email: "",
    p4Name: "",
    p4Phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) =>
    /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateEmail(formData.leaderEmail))
      return setError("Invalid Leader Email"), setLoading(false);

    if (!validatePhone(formData.leaderPhone))
      return setError("Leader phone must be 10 digits"), setLoading(false);

    if (!validateEmail(formData.p2Email))
      return setError("Invalid Participant 2 Email"), setLoading(false);

    if (!validatePhone(formData.p2Phone))
      return setError("Participant 2 phone must be 10 digits"), setLoading(false);

    try {
      const payload = {
        teamName: formData.teamName,
        leader: {
          name: formData.leaderName,
          email: formData.leaderEmail,
          phone: formData.leaderPhone,
          dob: formData.leaderDob,
          location: formData.leaderLocation,
          type: formData.leaderType,
          college: formData.leaderCollege,
        },
        participant2: {
          name: formData.p2Name,
          email: formData.p2Email,
          phone: formData.p2Phone,
        },
      };

      if (formData.p3Name || formData.p3Email || formData.p3Phone) {
        if (!validateEmail(formData.p3Email) || !validatePhone(formData.p3Phone)) {
          return setError("Participant 3 details invalid"), setLoading(false);
        }

        payload.participant3 = {
          name: formData.p3Name,
          email: formData.p3Email,
          phone: formData.p3Phone,
        };
      }

      if (formData.p4Name || formData.p4Email || formData.p4Phone) {
        if (!validateEmail(formData.p4Email) || !validatePhone(formData.p4Phone)) {
          return setError("Participant 4 details invalid"), setLoading(false);
        }

        payload.participant4 = {
          name: formData.p4Name,
          email: formData.p4Email,
          phone: formData.p4Phone,
        };
      }

      const response = await fetch(
        "http://localhost:5000/api/register/new",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok)
        throw new Error(data.message || "Registration failed");

      if (data.success) {
        alert("Registration Successful! Proceeding to Payment 💳");
        navigate("/payment", {
          state: { registrationId: data.registrationId },
        });
      }

    } catch (err) {
      alert(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300";

  return (
    <section className="min-h-screen py-16 px-4 text-white bg-gradient-to-br from-black via-neutral-950 to-black">
      <div className="max-w-4xl mx-auto bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-cyan-500/10">

        <h2 className="text-3xl font-bold text-center mb-8">
          CODEFIESTA 6.0 <span className="text-cyan-400">Registration</span>
        </h2>

        {error && (
          <p className="text-red-400 text-sm mb-4 text-center animate-pulse">
            ⚠ {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-12">

          {/* Team Name */}
          <input
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            required
            placeholder="Team Name *"
            className={inputStyle}
          />

          {/* Leader */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-6">
              Team Leader Details
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <input name="leaderName" required placeholder="Full Name *" className={inputStyle} onChange={handleChange} />
              <input type="email" name="leaderEmail" required placeholder="Email *" className={inputStyle} onChange={handleChange} />
              <input type="tel" name="leaderPhone" required placeholder="Mobile (10 digits) *" className={inputStyle} onChange={handleChange} />
              <input name="leaderCollege" required placeholder="College Name *" className={inputStyle} onChange={handleChange} />
              <input type="date" name="leaderDob" required className={inputStyle} onChange={handleChange} />
              <input name="leaderLocation" required placeholder="Location *" className={inputStyle} onChange={handleChange} />
              <select name="leaderType" required className={inputStyle} onChange={handleChange}>
                <option value="">Student Type *</option>
                <option>Diploma</option>
                <option>UG</option>
                <option>PG</option>
              </select>
            </div>
          </div>

          {/* Participant 2 */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-6">
              Participant 2 *
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <input name="p2Name" required placeholder="Full Name *" className={inputStyle} onChange={handleChange} />
              <input type="email" name="p2Email" required placeholder="Email *" className={inputStyle} onChange={handleChange} />
              <input type="tel" name="p2Phone" required placeholder="Mobile (10 digits) *" className={inputStyle} onChange={handleChange} />
            </div>
          </div>

          {/* Participant 3 */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-6">
              Participant 3 (Optional)
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <input name="p3Name" placeholder="Full Name" className={inputStyle} onChange={handleChange} />
              <input type="email" name="p3Email" placeholder="Email" className={inputStyle} onChange={handleChange} />
              <input type="tel" name="p3Phone" placeholder="Mobile (10 digits)" className={inputStyle} onChange={handleChange} />
            </div>
          </div>

          {/* Participant 4 */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-6">
              Participant 4 (Optional)
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <input name="p4Name" placeholder="Full Name" className={inputStyle} onChange={handleChange} />
              <input type="email" name="p4Email" placeholder="Email" className={inputStyle} onChange={handleChange} />
              <input type="tel" name="p4Phone" placeholder="Mobile (10 digits)" className={inputStyle} onChange={handleChange} />
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-10 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Proceed to Payment →"}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
