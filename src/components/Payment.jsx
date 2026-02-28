import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const registrationId = location.state?.registrationId;

  const [utr, setUtr] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handlePaymentSubmit = async () => {
    if (!utr) {
      alert("Please enter UTR Number");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/payment/update-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            registrationId,
            utrNumber: utr,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
      } else {
        alert("Payment update failed");
      }

    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* ============================= */
  /* ⏳ Auto Redirect Countdown */
  /* ============================= */
  useEffect(() => {
    if (success) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      const redirectTimer = setTimeout(() => {
        window.location.href =
          "https://chat.whatsapp.com/YOUR_GROUP_LINK";
      }, 5000);

      return () => {
        clearInterval(timer);
        clearTimeout(redirectTimer);
      };
    }
  }, [success]);

  /* ============================= */
  /* ✅ SUCCESS SCREEN */
  /* ============================= */
  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black text-white">

        <div className="text-center">

          {/* Animated Checkmark */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center animate-bounce shadow-lg shadow-green-500/40">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-2 text-green-400">
            Payment Successful 🎉
          </h2>

          <p className="text-gray-400 mb-4">
            Your registration has been confirmed.
          </p>

          <p className="text-sm text-gray-500">
            Redirecting to WhatsApp group in {countdown} seconds...
          </p>

        </div>
      </div>
    );
  }

  /* ============================= */
  /* 💳 PAYMENT SCREEN */
  /* ============================= */
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black text-white px-4">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center mb-2">
          Complete Your Payment
        </h2>

        <p className="text-gray-400 text-center mb-6 text-sm">
          Scan and pay the 2000rs  and enter your UTR number to confirm registration
        </p>

        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <img
              src="/assets/payment-qr.jpg"
              alt="Scan QR"
              className="w-56 h-56 object-contain"
            />
          </div>
        </div>

        <input
          type="text"
          placeholder="Enter UTR Number"
          value={utr}
          onChange={(e) => setUtr(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/20 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition mb-4"
        />

        <button
          onClick={handlePaymentSubmit}
          disabled={loading}
          className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Confirm Payment"}
        </button>

        <button
          onClick={() => navigate("/")}
          className="w-full mt-4 text-sm text-gray-400 hover:text-white transition"
        >
          ← Back to Home
        </button>

      </div>
    </div>
  );
}
