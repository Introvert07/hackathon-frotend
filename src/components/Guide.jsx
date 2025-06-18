import React from 'react';

const Guide = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 font-orbitron relative">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-hacker-grid bg-[length:40px_40px] animate-moveGrid animate-glow opacity-40" />
      
      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Project Submission Guide 
        </h1>

        {/* PPT Format */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-300">📊 SIH PPT Format</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Slide 1: Team Name, Team Members</li>
            <li>Slide 2: Problem Statement (Title + Code)</li>
            <li>Slide 3: Objective & Innovation</li>
            <li>Slide 4: Solution Approach</li>
            <li>Slide 5: Tech Stack Used</li>
            <li>Slide 6: Architecture / System Workflow</li>
            <li>Slide 7: Features / Screenshots</li>
            <li>Slide 8: Future Scope & Conclusion</li>
          </ul>
        </div>
{/* Google Drive Folder Creation */}
<div className="space-y-4">
  <h2 className="text-2xl font-semibold text-red-300">📁 Create Submission Folder</h2>
  <ol className="list-decimal list-inside text-gray-300 space-y-1">
    <li>Go to <a href="https://drive.google.com" target="_blank" rel="noreferrer" className="text-cyan-400 underline hover:text-white">drive.google.com</a> and log in.</li>
    <li>Click <strong>New → Folder</strong> and name it: <code>TeamName_Submission</code>.</li>
    <li>Upload your PPT, video, and project ZIP inside this folder.</li>
    <li>Right-click the folder → click <strong>Share</strong>.</li>
    <li>Under "General access", choose <strong>Anyone with the link</strong> and set it to <strong>Viewer</strong>.</li>
    <li>Click <strong>Copy link</strong> and submit this link in the submission form.</li>
  </ol>
</div>


        {/* Demo Video */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-300">🎥 How to Record a Demo Video</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Use any screen recording tool.</li>
            <li>Keep the video between <strong>2–5 minutes</strong>.</li>
            <li>Include a walkthrough of your UI and explain key features.</li>
            <li>Upload to <strong>Google Drive</strong> and set permission to <strong>Viewable by Anyone with the Link</strong>.</li>
          </ul>
        </div>

        {/* Zip Folder */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">🗜️ Make a ZIP of Your Project</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Right-click your entire project folder.</li>
            <li>Choose <strong>Send to → Compressed (zipped) folder</strong> (Windows) or <strong>Compress</strong> (Mac).</li>
            <li>Rename the ZIP file to: <code>TeamName_ProjectName.zip</code></li>
            <li>Upload it to Google Drive or GitHub (optional).</li>
          </ul>
        </div>

        {/* Optional GitHub Upload */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-pink-300">💻 Upload Code to GitHub (Optional)</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-1">
            <li>Create a new repo at <a href="https://github.com" target="_blank" rel="noreferrer" className="text-cyan-400 underline">github.com</a>.</li>
            <li>Run these commands in your terminal:
              <pre className="bg-white/10 p-3 mt-2 rounded text-sm overflow-x-auto">
git init<br />
git add .<br />
git commit -m "initial commit"<br />
git remote add origin https://github.com/yourname/project.git<br />
git push -u origin main
              </pre>
            </li>
            <li>Share the GitHub repo link in your submission form.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Guide;
