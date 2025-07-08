import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../components/config';

const ZerothRound = () => {
  const registrationClosed = true; // 🔒 Set this to true to disable registration form

  const [form, setForm] = useState({
    teamName: '',
    leaderName: '',
    leaderPhone: '',
    leaderEmail: '',
    Enrollment: '',
    ideaName: '',
    members: [
      { name: '', enrollment: '' },
      { name: '', enrollment: '' }
    ],
  });

  const [loading, setLoading] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const handleChange = (e, i, isMember = false) => {
    const { name, value } = e.target;
    if (isMember) {
      const updatedMembers = [...form.members];
      updatedMembers[i][name] = value;
      setForm({ ...form, members: updatedMembers });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const addMember = () => {
    if (form.members.length < 3) {
      setForm({ ...form, members: [...form.members, { name: '', enrollment: '' }] });
    } else {
      toast.error('Max 3 members allowed with leader.');
    }
  };

  const validateForm = () => {
    const { teamName, ideaName, leaderName, leaderPhone, leaderEmail, members } = form;
    if (!teamName || !ideaName || !leaderName || !leaderPhone || !leaderEmail) return false;
    if (members.length < 2 || members.length > 3) return false;
    for (let member of members) {
      if (!member.name || !member.enrollment) return false;
    }
    return true;
  };

  const submitForm = async () => {
    if (!validateForm()) {
      toast.error("Please fill all required fields and ensure member count is between 2 to 3.");
      return;
    }

    if (!form.leaderEmail.trim().toLowerCase().endsWith('@satiengg.in')) {
      toast.error("Please use your college email");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(form.leaderPhone)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    const enrollmentRegex = /^0108[a-zA-Z]{2}\d{6}$/;
    if (!enrollmentRegex.test(form.Enrollment.trim())) {
      toast.error("Enrollment number is invalid");
      return;
    }

    for (let i = 0; i < form.members.length; i++) {
      const memberEnrollment = form.members[i].enrollment.trim();
      if (!enrollmentRegex.test(memberEnrollment)) {
        toast.error(`Member ${i + 1}'s enrollment number is invalid`);
        return;
      }
    }

    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}/api/zeroth`, form);
      toast.success(res.data.message || "Registered Successfully!");
      alert("Registered successfully! Welcome");

      setForm({
        teamName: '',
        leaderName: '',
        leaderPhone: '',
        leaderEmail: '',
        Enrollment: '',
        ideaName: '',
        members: [
          { name: '', enrollment: '' },
          { name: '', enrollment: '' }
        ],
      });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white px-4 py-10 flex items-center justify-center font-orbitron">
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div className="w-full max-w-3xl border-2 border-cyan-400 p-8 rounded-lg shadow-[0_0_25px_#22d3ee] bg-[#0b0b0b]">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6 drop-shadow-lg">
          Zeroth Round Registration
        </h2>

        {registrationClosed ? (
          <div className="text-center py-20 text-xl text-red-400 font-bold">
            🚫 Registrations are now closed.<br />
            ✅ Teams already registered can continue with Round 1 & 2 submissions.
          </div>
        ) : (
          <>
            <button
              onClick={() => setShowRules(!showRules)}
              className="mb-4 text-sm text-cyan-300 underline hover:text-purple-400"
            >
              {showRules ? 'Hide' : 'View'} Registration Guidelines
            </button>

            {showRules && (
              <div className="bg-[#111] border border-cyan-500 p-4 rounded text-sm text-cyan-100 space-y-2 mb-6">
                <p>✅ <strong>Team Name:</strong> Must be unique.</p>
                <p>✅ <strong>Team Size:</strong> 1 Leader + 2 to 3 Members.</p>
                <p>✅ <strong>Enrollment Format:</strong> branch in lowercase like <code>ec</code>, <code>cs</code>, etc.</p>
                <p>✅ <strong>Leader Phone:</strong> Must be a valid 10-digit number and available on WhatsApp.</p>
                <p>✅ <strong>Leader Email:</strong> Use college mail-id.</p>
                <p>❌ <strong>No member can be in more than one team.</strong></p>
              </div>
            )}

            <div className="space-y-4">
              <input
                name="teamName"
                value={form.teamName}
                placeholder="Team Name"
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-cyan-300 rounded-md text-cyan-100 placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-cyan-300 mb-2">Team Leader</h4>
                <div className="space-y-2">
                  <input name="leaderName" value={form.leaderName} placeholder="Leader Name" onChange={handleChange} className="w-full p-3 bg-transparent border border-cyan-300 rounded-md text-cyan-100 placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                  <input name="leaderPhone" value={form.leaderPhone} placeholder="Leader Phone" onChange={handleChange} className="w-full p-3 bg-transparent border border-cyan-300 rounded-md text-cyan-100 placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                  <input name="leaderEmail" value={form.leaderEmail} placeholder="Leader Email" onChange={handleChange} className="w-full p-3 bg-transparent border border-cyan-300 rounded-md text-cyan-100 placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                  <input name="Enrollment" value={form.Enrollment} placeholder="Enrollment no." onChange={handleChange} className="w-full p-3 bg-transparent border border-cyan-300 rounded-md text-cyan-100 placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-cyan-300 mb-2">Team Members</h4>
                {form.members.map((member, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-4 mb-2">
                    <input name="name" value={member.name} placeholder={`Member ${i + 1} Name`} onChange={(e) => handleChange(e, i, true)} className="w-full md:w-1/2 p-3 bg-transparent border border-cyan-300 rounded-md text-cyan-100 placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                    <input name="enrollment" value={member.enrollment} placeholder={`Member ${i + 1} Enrollment`} onChange={(e) => handleChange(e, i, true)} className="w-full md:w-1/2 p-3 bg-transparent border border-cyan-300 rounded-md text-cyan-100 placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                  </div>
                ))}
                <button onClick={addMember} className="mt-2 px-4 py-2 bg-blue-500 hover:bg-purple-500 rounded text-white font-bold transition duration-300">+ Add Member</button>
              </div>

              <input
                name="ideaName"
                value={form.ideaName}
                placeholder="Idea Name"
                onChange={handleChange}
                className="w-full mt-6 p-3 bg-transparent border border-cyan-300 rounded-md text-cyan-100 placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <button
                onClick={submitForm}
                disabled={loading}
                className={`mt-8 w-full px-6 py-3 rounded-full font-bold text-white transition duration-300 border-2 border-cyan-300 ${
                  loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-purple-500'
                }`}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ZerothRound;
