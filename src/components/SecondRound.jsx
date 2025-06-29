import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../components/config';

const SecondRound = () => {
  const [form, setForm] = useState({
    teamName: '',
    leaderName: '',
    projectLink: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { teamName, leaderName, projectLink } = form;

    if (!teamName || !leaderName || !projectLink) {
      toast.error('All fields are required');
      return;
    }

    try {
      setLoading(true); // start loading
      const res = await axios.post(`${BASE_URL}/api/second`, form);
      toast.success(res.data.message || 'Submission successful');
      alert("Second round submitted successfully");
      setForm({
        teamName: '',
        leaderName: '',
        projectLink: ''
      });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Submission failed');
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <section className="min-h-screen bg-black text-white px-4 py-10 flex items-center justify-center font-orbitron">
      <ToastContainer position="bottom-right" />
      <div className="w-full max-w-2xl border-2 border-cyan-400 p-8 rounded-lg shadow-[0_0_20px_#22d3ee] bg-[#0b0b0b] z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-8 drop-shadow-lg">
          Second Round Submission
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
            name="leaderName"
            value={form.leaderName}
            onChange={handleChange}
            placeholder="Team Leader Name"
            className="p-3 bg-transparent border border-cyan-300 text-cyan-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            name="projectLink"
            value={form.projectLink}
            onChange={handleChange}
            placeholder="Project Link (Google Drive)"
            className="p-3 bg-transparent border border-cyan-300 text-cyan-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`mt-6 transition px-6 py-3 rounded-full font-bold text-white border-2 border-cyan-300 shadow-md ${
              loading
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-cyan-500 hover:bg-purple-400 hover:shadow-glow-cyan'
            }`}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecondRound;
