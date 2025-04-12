import React, { useState } from "react";

const driveLinks = {
    "Semester 1": {
        "Introduction to Computing (CSE)": "https://drive.google.com/drive/folders/1abcEXAMPLE-intro-computing",
        "Engineering Physics (PHY)": "https://drive.google.com/drive/folders/1abcEXAMPLE-physics",
        "Communicative English (HS)": "https://drive.google.com/drive/folders/1abcEXAMPLE-english",
        "Elements of Electrical Engineering - I (EE)": "https://drive.google.com/drive/folders/1abcEXAMPLE-elec1",
        "Elements of Electronics Engineering (EC)": "https://drive.google.com/drive/folders/1abcEXAMPLE-elec-engg",
        "EAA-I - Sports/Innovative/NCC/NSS": "https://drive.google.com/drive/folders/1abcEXAMPLE-eaa1"
      },
      "Semester 2": {
        "Engineering Mathematics - I (MA26101)": "https://drive.google.com/drive/folders/1abcEXAMPLE-math1",
        "Engineering Chemistry (CH26101)": "https://drive.google.com/drive/folders/1abcEXAMPLE-chem",
        "Elements of Electrical Engineering - II (EE26105)": "https://drive.google.com/drive/folders/1abcEXAMPLE-elec2",
        "Electrical Workshop (EE26106)": "https://drive.google.com/drive/folders/1abcEXAMPLE-elec-work",
        "Electronics Workshop (EC26105)": "https://drive.google.com/drive/folders/1abcEXAMPLE-elec-ws",
        "Engineering Graphics (ME26101)": "https://drive.google.com/drive/folders/1abcEXAMPLE-eng-graphics",
        "EAA-II - Swachh Bharat Mission (EAA26102)": "https://drive.google.com/drive/folders/1abcEXAMPLE-sbm",
      },
      "Semester 3": {
        "Electrical Machines-I (EE36101)": "https://drive.google.com/drive/folders/1abcEXAMPLE-machines1",
        "Network Analysis and Synthesis (EE36102)": "https://drive.google.com/drive/folders/1abcEXAMPLE-network",
        "Electrical Measurement and Instrumentation (EE36103)": "https://drive.google.com/drive/folders/1abcEXAMPLE-measurement",
        "Electromagnetic Field Theory (EE36104)": "https://drive.google.com/drive/folders/1abcEXAMPLE-emt",
        "Analog Electronics (EC36101)": "https://drive.google.com/drive/folders/1abcEXAMPLE-analog",
        "Engineering Mathematics - II (MA36101)": "https://drive.google.com/drive/folders/1abcEXAMPLE-math2",
      },
      "Semester 4": {
        "Electrical Machine-II (EE)": "https://drive.google.com/drive/folders/4abcEM2",
        "Power Transmission and Distribution (EE)": "https://drive.google.com/drive/folders/4abcPTD",
        "Linear Control System (EE)": "https://drive.google.com/drive/folders/4abcLCS",
        "Digital Electronics (EC)": "https://drive.google.com/drive/folders/4abcDE",
        "Object Oriented Programming (CSE)": "https://drive.google.com/drive/folders/4abcOOP",
        "Seminar and Technical Writing (EE)": "https://drive.google.com/drive/folders/4abcSTW",
      },
    
      "Semester 5": {
        "Power System Analysis (EE)": "https://drive.google.com/drive/folders/5abcPSA",
        "Power Electronics (EE)": "https://drive.google.com/drive/folders/5abcPE",
        "Microprocessor, Microcontroller and its Application (EE)": "https://drive.google.com/drive/folders/5abcMPMC",
        "Signal and System Analysis (EC)": "https://drive.google.com/drive/folders/5abcSSA",
        "Professional Ethics (HS)": "https://drive.google.com/drive/folders/5abcEthics",
        "Departmental Elective - I (EE)": "https://drive.google.com/drive/folders/5abcDE1",
      },
    
      "Semester 6": {
        "Industrial Drives and Control (EE)": "https://drive.google.com/drive/folders/6abcIDC",
        "Power System Protection and Switchgear (EE)": "https://drive.google.com/drive/folders/6abcPSP",
        "Minor Project (EE)": "https://drive.google.com/drive/folders/6abcMP",
        "Departmental Elective - II (EE)": "https://drive.google.com/drive/folders/6abcDE2",
        "Open Elective – I / MOOC / Swayam (Other Dept.)": "https://drive.google.com/drive/folders/6abcOE",
        "Industrial Training (EE)": "https://drive.google.com/drive/folders/6abcIT",
      },
    
      "Semester 7": {
        "Dissertation - I (EE)": "https://drive.google.com/drive/folders/7abcD1",
        "Comprehensive Viva (EE)": "https://drive.google.com/drive/folders/7abcViva",
      },
    
      "Semester 8": {
        "Dissertation - II (EE)": "https://drive.google.com/drive/folders/8abcD2",
      },
};

const LabViewer = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
    setSelectedSubject(""); // reset subject when semester changes
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const getDriveLink = () => {
    return driveLinks[selectedSemester]?.[selectedSubject] || "#";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-purple-100 p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8">📂 Lab File Viewer</h1>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">
        {/* Semester Dropdown */}
        <label className="block mb-4">
          <span className="block text-sm font-medium text-gray-700">Select Semester:</span>
          <select
            value={selectedSemester}
            onChange={handleSemesterChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">-- Choose Semester --</option>
            {Object.keys(driveLinks).map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </select>
        </label>

        {/* Subject Dropdown */}
        {selectedSemester && (
          <label className="block mb-4">
            <span className="block text-sm font-medium text-gray-700">Select Subject:</span>
            <select
              value={selectedSubject}
              onChange={handleSubjectChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">-- Choose Subject --</option>
              {Object.keys(driveLinks[selectedSemester]).map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </label>
        )}

        {/* View Button */}
        {selectedSubject && (
          <a
            href={getDriveLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block w-full text-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            🔍 View Lab Files
          </a>
        )}
      </div>
    </div>
  );
};

export default LabViewer;
