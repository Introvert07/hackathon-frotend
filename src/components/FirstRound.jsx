import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../components/config';

const FirstRound = () => {
  const [form, setForm] = useState({
    teamName: '',
    pptLink: '',
    teamLeader: { name: '', phone: '', email: '' }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('teamLeader.')) {
      const key = name.split('.')[1];
      setForm((prev) => ({
        ...prev,
        teamLeader: {
          ...prev.teamLeader,
          [key]: value
        }
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

const handleSubmit = async () => {
  const payload = {
    teamName: form.teamName.trim(),
    pptLink: form.pptLink.trim(),
    leaderName: form.teamLeader.name.trim(),
    leaderPhone: form.teamLeader.phone.trim(),
    leaderEmail: form.teamLeader.email.trim()
  };

  // Empty field check
  if (!payload.teamName || !payload.pptLink || !payload.leaderName || !payload.leaderPhone || !payload.leaderEmail) {
    toast.error('Please fill all required fields');
    return;
  }

  // ✅ Mobile number validation (must be 10 digits)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(payload.leaderPhone)) {
    toast.error('Please enter a valid 10-digit phone number');
    return;
  }

  // ✅ Email must end with "@satiengg.in"
  if (!payload.leaderEmail.toLowerCase().endsWith('@satiengg.in')) {
    toast.error('Please use your college email ending with @satiengg.in');
    return;
  }

  try {
    const res = await axios.post(`${BASE_URL}/api/first`, payload);
    toast.success(res.data.message || 'Submitted successfully');
     alert("First round submitted successfully")
    setForm({
      teamName: '',
      pptLink: '',
      teamLeader: { name: '', phone: '', email: '' }
    });
  } catch (err) {
    toast.error(err.response?.data?.message || 'Submission failed');
  }
};
  return (
    <section className="min-h-screen bg-black text-white px-4 py-10 flex items-center justify-center font-orbitron">
      <ToastContainer position="bottom-right" />
      <div className="w-full max-w-2xl border-2 border-cyan-400 p-8 rounded-lg shadow-[0_0_20px_#22d3ee] bg-[#0b0b0b] z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-8 drop-shadow-lg">
          First Round Submission
        </h2>

        <div className="flex flex-col gap-4">
          <input
            name="teamName"
            value={form.teamName}
            onChange={handleChange}
            placeholder="Team Name"
            className="p-3 bg-transparent border border-cyan-300 text-cyan-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            name="pptLink"
            value={form.pptLink}
            onChange={handleChange}
            placeholder="Google Drive PPT Link"
            className="p-3 bg-transparent border border-cyan-300 text-cyan-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            name="teamLeader.name"
            value={form.teamLeader.name}
            onChange={handleChange}
            placeholder="Team Leader Name"
            className="p-3 bg-transparent border border-cyan-300 text-cyan-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            name="teamLeader.phone"
            value={form.teamLeader.phone}
            onChange={handleChange}
            placeholder="Leader Phone Number"
            className="p-3 bg-transparent border border-cyan-300 text-cyan-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            name="teamLeader.email"
            value={form.teamLeader.email}
            onChange={handleChange}
            placeholder="Leader Email"
            className="p-3 bg-transparent border border-cyan-300 text-cyan-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            onClick={handleSubmit}
            className="mt-6 bg-cyan-500 hover:bg-purple-400 transition px-6 py-3 rounded-full font-bold text-white border-2 border-cyan-300 shadow-md hover:shadow-glow-cyan"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstRound;
