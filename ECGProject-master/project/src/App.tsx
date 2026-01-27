import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import InformationPage from './pages/InformationPage';
import PredictionPage from './pages/PredictionPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/information" element={<InformationPage />} />
            <Route path="/prediction" element={<PredictionPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import React, { useState } from 'react';
// import UploadForm from './components/UploadForm';  // Ensure to import your UploadForm component

// const PredictionPage: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleUpload = async (file: File, email: string) => {
//     setIsLoading(true);
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('email', email);

//     try {
//       const response = await fetch('http://localhost:5000/predict', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Server error');
//       }

//       const result = await response.json();
//       alert(result.message || 'Prediction complete. Report sent to email.');
//     } catch (error) {
//       console.error(error);
//       alert('Failed to upload. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
//       <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-4">ECG Prediction</h1>
//         <UploadForm onSubmit={handleUpload} isLoading={isLoading} />
//       </div>
//     </div>
//   );
// };

// export default PredictionPage;


// // import React, { useState } from 'react';
// // import UploadForm from './components/UploadForm';  // Ensure to import your UploadForm component

// // const PredictionPage: React.FC = () => {
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handleUpload = async (file: File, email: string) => {
// //     setIsLoading(true);
// //     const formData = new FormData();
// //     formData.append('file', file);
// //     formData.append('email', email);

// //     try {
// //       const response = await fetch('http://localhost:5000/predict', {
// //         method: 'POST',
// //         body: formData,
// //       });

// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.error || 'Server error');
// //       }

// //       const result = await response.json();
// //       alert(result.message || 'Prediction complete. Report sent to email.');
// //     } catch (error) {
// //       console.error(error);
// //       alert(`Failed to upload: ${error.message}`);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
// //       <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md">
// //         <h1 className="text-2xl font-bold mb-4">ECG Prediction</h1>
// //         <UploadForm onSubmit={handleUpload} isLoading={isLoading} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default PredictionPage;