// import React, { useState, useRef } from 'react';
// import { Upload, Image as ImageIcon, X } from 'lucide-react';
// import Button from './Button';

// interface UploadFormProps {
//   onSubmit: (file: File) => void;
//   isLoading: boolean;
// }

// const UploadForm: React.FC<UploadFormProps> = ({ onSubmit, isLoading }) => {
//   const [file, setFile] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [isDragOver, setIsDragOver] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);
  
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const selectedFile = e.target.files[0];
//       setFile(selectedFile);
      
//       // Create preview
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setPreview(event.target?.result as string);
//       };
//       reader.readAsDataURL(selectedFile);
//     }
//   };
  
//   const handleDragOver = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragOver(true);
//   };
  
//   const handleDragLeave = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragOver(false);
//   };
  
//   const handleDrop = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragOver(false);
    
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       const droppedFile = e.dataTransfer.files[0];
//       setFile(droppedFile);
      
//       // Create preview
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setPreview(event.target?.result as string);
//       };
//       reader.readAsDataURL(droppedFile);
//     }
//   };
  
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (file) {
//       onSubmit(file);
//     }
//   };
  
//   const handleClearFile = () => {
//     setFile(null);
//     setPreview(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };
  
//   return (
//     <form onSubmit={handleSubmit} className="w-full">
//       <div 
//         className={`
//           border-2 border-dashed rounded-lg p-6 transition-colors
//           ${isDragOver ? 'border-cyan-500 bg-cyan-50' : 'border-gray-300 hover:border-cyan-400'}
//           ${preview ? 'bg-gray-50' : ''}
//         `}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//       >
//         {!preview ? (
//           <div className="text-center">
//             <Upload className="mx-auto h-12 w-12 text-gray-400" />
//             <div className="mt-4 flex flex-col items-center text-sm">
//               <p className="text-gray-700 font-medium mb-1">
//                 Drag and drop your ECG image here or 
//                 <button
//                   type="button"
//                   className="text-cyan-600 hover:text-cyan-800 ml-1 focus:outline-none"
//                   onClick={() => fileInputRef.current?.click()}
//                 >
//                   browse files
//                 </button>
//               </p>
//               <p className="text-gray-500 text-xs mt-1">
//                 Supported formats: PNG, JPG, JPEG (Max 5MB)
//               </p>
//             </div>
//             <input
//               type="file"
//               className="hidden"
//               accept="image/png, image/jpeg, image/jpg"
//               onChange={handleFileChange}
//               ref={fileInputRef}
//             />
//           </div>
//         ) : (
//           <div className="relative">
//             <button
//               type="button"
//               className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
//               onClick={handleClearFile}
//             >
//               <X size={16} className="text-gray-600" />
//             </button>
//             <div className="flex flex-col items-center">
//               <div className="bg-white p-2 rounded-lg shadow-sm mb-4 max-w-full overflow-hidden">
//                 <img 
//                   src={preview} 
//                   alt="ECG Preview" 
//                   className="max-h-64 object-contain mx-auto"
//                 />
//               </div>
//               <p className="text-gray-600 text-sm">
//                 {file?.name} ({(file?.size / 1024 / 1024).toFixed(2)} MB)
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
      
//       <div className="mt-6">
//         <Button 
//           type="submit" 
//           fullWidth 
//           size="lg"
//           disabled={!file || isLoading}
//           isLoading={isLoading}
//           icon={<ImageIcon size={18} />}
//         >
//           Analyze ECG Image
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default UploadForm;

//-------------------------------------------

//****THIS WILL PRINT PREDICTION RESULTS BUT NOT MAIL SEND***********

// import React, { useState, useRef } from 'react';
// import { Upload, Image as ImageIcon, X } from 'lucide-react';
// import Button from './Button';

// interface UploadFormProps {
//   onSubmit: (file: File, email: string) => void;
//   isLoading: boolean;
// }

// const UploadForm: React.FC<UploadFormProps> = ({ onSubmit, isLoading }) => {
//   const [file, setFile] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [isDragOver, setIsDragOver] = useState(false);
//   const [email, setEmail] = useState('');
//   const fileInputRef = useRef<HTMLInputElement>(null);
  
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const selectedFile = e.target.files[0];
//       setFile(selectedFile);
      
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setPreview(event.target?.result as string);
//       };
//       reader.readAsDataURL(selectedFile);
//     }
//   };
  
//   const handleDragOver = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragOver(true);
//   };
  
//   const handleDragLeave = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragOver(false);
//   };
  
//   const handleDrop = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragOver(false);
    
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       const droppedFile = e.dataTransfer.files[0];
//       setFile(droppedFile);
      
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setPreview(event.target?.result as string);
//       };
//       reader.readAsDataURL(droppedFile);
//     }
//   };
  
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (file && email) {
//       onSubmit(file, email);
//     }
//   };
  
//   const handleClearFile = () => {
//     setFile(null);
//     setPreview(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };
  
//   return (
//     <form onSubmit={handleSubmit} className="w-full">
//       <div 
//         className={`border-2 border-dashed rounded-lg p-6 transition-colors
//           ${isDragOver ? 'border-cyan-500 bg-cyan-50' : 'border-gray-300 hover:border-cyan-400'}
//           ${preview ? 'bg-gray-50' : ''}
//         `}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//       >
//         {!preview ? (
//           <div className="text-center">
//             <Upload className="mx-auto h-12 w-12 text-gray-400" />
//             <div className="mt-4 flex flex-col items-center text-sm">
//               <p className="text-gray-700 font-medium mb-1">
//                 Drag and drop your ECG image here or 
//                 <button
//                   type="button"
//                   className="text-cyan-600 hover:text-cyan-800 ml-1 focus:outline-none"
//                   onClick={() => fileInputRef.current?.click()}
//                 >
//                   browse files
//                 </button>
//               </p>
//               <p className="text-gray-500 text-xs mt-1">
//                 Supported formats: PNG, JPG, JPEG (Max 5MB)
//               </p>
//             </div>
//             <input
//               type="file"
//               className="hidden"
//               accept="image/png, image/jpeg, image/jpg"
//               onChange={handleFileChange}
//               ref={fileInputRef}
//             />
//           </div>
//         ) : (
//           <div className="relative">
//             <button
//               type="button"
//               className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
//               onClick={handleClearFile}
//             >
//               <X size={16} className="text-gray-600" />
//             </button>
//             <div className="flex flex-col items-center">
//               <div className="bg-white p-2 rounded-lg shadow-sm mb-4 max-w-full overflow-hidden">
//                 <img 
//                   src={preview} 
//                   alt="ECG Preview" 
//                   className="max-h-64 object-contain mx-auto"
//                 />
//               </div>
//               <p className="text-gray-600 text-sm">
//                 {/* {file?.name} ({(file?.size / 1024 / 1024).toFixed(2)} MB) */}
//                 {file?.name} ({file?.size ? (file.size / 1024 / 1024).toFixed(2) : '0.00'} MB)
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
      
//       <div className="mt-4">
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//           Email for report
//         </label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
//           placeholder="Enter your email to receive the report"
//         />
//       </div>

//       <div className="mt-6">
//         <Button 
//           type="submit" 
//           fullWidth 
//           size="lg"
//           disabled={!file || !email || isLoading}
//           isLoading={isLoading}
//           icon={<ImageIcon size={18} />}
//         >
//           Analyze ECG Image
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default UploadForm;



//-----------------------------------------


//****THIS WILL NOT PRINT PREDICTION RESULTS BUT MAIL WILL SEND***********

// import React, { useState, useRef } from 'react';
// import { Upload, Image as ImageIcon, X } from 'lucide-react';
// import Button from './Button';

// const UploadForm: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [isDragOver, setIsDragOver] = useState(false);
//   const [email, setEmail] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const selectedFile = e.target.files[0];
//       setFile(selectedFile);

//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setPreview(event.target?.result as string);
//       };
//       reader.readAsDataURL(selectedFile);
//     }
//   };

//   const handleDragOver = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragOver(true);
//   };

//   const handleDragLeave = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragOver(false);
//   };

//   const handleDrop = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragOver(false);

//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       const droppedFile = e.dataTransfer.files[0];
//       setFile(droppedFile);

//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setPreview(event.target?.result as string);
//       };
//       reader.readAsDataURL(droppedFile);
//     }
//   };

//   const handleClearFile = () => {
//     setFile(null);
//     setPreview(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!file || !email) return;

//     setIsLoading(true);

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('email', email);

//     try {
//       const response = await fetch('http://127.0.0.1:8000/predict', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.detail || 'Failed to analyze ECG');
//       }
  
//       alert('Analysis complete! Check your email for the report.');
//       console.log('API Response:', data);
      
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       alert('Upload failed. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full">
//       <div
//         className={`border-2 border-dashed rounded-lg p-6 transition-colors
//           ${isDragOver ? 'border-cyan-500 bg-cyan-50' : 'border-gray-300 hover:border-cyan-400'}
//           ${preview ? 'bg-gray-50' : ''}
//         `}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//       >
//         {!preview ? (
//           <div className="text-center">
//             <Upload className="mx-auto h-12 w-12 text-gray-400" />
//             <div className="mt-4 flex flex-col items-center text-sm">
//               <p className="text-gray-700 font-medium mb-1">
//                 Drag and drop your ECG image here or
//                 <button
//                   type="button"
//                   className="text-cyan-600 hover:text-cyan-800 ml-1 focus:outline-none"
//                   onClick={() => fileInputRef.current?.click()}
//                 >
//                   browse files
//                 </button>
//               </p>
//               <p className="text-gray-500 text-xs mt-1">
//                 Supported formats: PNG, JPG, JPEG (Max 5MB)
//               </p>
//             </div>
//             <input
//               type="file"
//               className="hidden"
//               accept="image/png, image/jpeg, image/jpg"
//               onChange={handleFileChange}
//               ref={fileInputRef}
//             />
//           </div>
//         ) : (
//           <div className="relative">
//             <button
//               type="button"
//               className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
//               onClick={handleClearFile}
//             >
//               <X size={16} className="text-gray-600" />
//             </button>
//             <div className="flex flex-col items-center">
//               <div className="bg-white p-2 rounded-lg shadow-sm mb-4 max-w-full overflow-hidden">
//                 <img
//                   src={preview}
//                   alt="ECG Preview"
//                   className="max-h-64 object-contain mx-auto"
//                 />
//               </div>
//               <p className="text-gray-600 text-sm">
//                 {file?.name} ({file?.size ? (file.size / 1024 / 1024).toFixed(2) : '0.00'} MB)
//               </p>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="mt-4">
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//           Email for report
//         </label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
//           placeholder="Enter your email to receive the report"
//         />
//       </div>

//       <div className="mt-6">
//         <Button
//           type="submit"
//           fullWidth
//           size="lg"
//           disabled={!file || !email || isLoading}
//           isLoading={isLoading}
//           icon={<ImageIcon size={18} />}
//         >
//           Analyze ECG Image
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default UploadForm;


//---------------------------------------------------------

// import React, { useState, useRef } from 'react';
// import { Upload, Image as ImageIcon, X } from 'lucide-react';
// import Button from './Button';

// const UploadForm: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [isDragOver, setIsDragOver] = useState(false);
//   const [email, setEmail] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [predictionResult, setPredictionResult] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const selectedFile = e.target.files[0];
//       setFile(selectedFile);
//       const reader = new FileReader();
//       reader.onload = (event) => setPreview(event.target?.result as string);
//       reader.readAsDataURL(selectedFile);
//     }
//   };

//   const handleDragOver = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragOver(true);
//   };

//   const handleDragLeave = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragOver(false);
//   };

//   const handleDrop = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragOver(false);
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       const droppedFile = e.dataTransfer.files[0];
//       setFile(droppedFile);
//       const reader = new FileReader();
//       reader.onload = (event) => setPreview(event.target?.result as string);
//       reader.readAsDataURL(droppedFile);
//     }
//   };

//   const handleClearFile = () => {
//     setFile(null);
//     setPreview(null);
//     setPredictionResult(null);
//     if (fileInputRef.current) fileInputRef.current.value = '';
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!file || !email) return;

//     setIsLoading(true);
//     setPredictionResult(null);

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('email', email);

//     try {
//       const response = await fetch('http://127.0.0.1:8000/predict', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.detail || 'Failed to analyze ECG');
//       }

//       // Display prediction on page
//       setPredictionResult(data.prediction || 'Prediction data not found');
      
//       // Email will be sent by the backend
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       alert('Upload failed. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full">
//       <div
//         className={`border-2 border-dashed rounded-lg p-6 transition-colors
//           ${isDragOver ? 'border-cyan-500 bg-cyan-50' : 'border-gray-300 hover:border-cyan-400'}
//           ${preview ? 'bg-gray-50' : ''}
//         `}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//       >
//         {!preview ? (
//           <div className="text-center">
//             <Upload className="mx-auto h-12 w-12 text-gray-400" />
//             <div className="mt-4 flex flex-col items-center text-sm">
//               <p className="text-gray-700 font-medium mb-1">
//                 Drag and drop your ECG image here or
//                 <button
//                   type="button"
//                   className="text-cyan-600 hover:text-cyan-800 ml-1 focus:outline-none"
//                   onClick={() => fileInputRef.current?.click()}
//                 >
//                   browse files
//                 </button>
//               </p>
//               <p className="text-gray-500 text-xs mt-1">
//                 Supported formats: PNG, JPG, JPEG (Max 5MB)
//               </p>
//             </div>
//             <input
//               type="file"
//               className="hidden"
//               accept="image/png, image/jpeg, image/jpg"
//               onChange={handleFileChange}
//               ref={fileInputRef}
//             />
//           </div>
//         ) : (
//           <div className="relative">
//             <button
//               type="button"
//               className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
//               onClick={handleClearFile}
//             >
//               <X size={16} className="text-gray-600" />
//             </button>
//             <div className="flex flex-col items-center">
//               <div className="bg-white p-2 rounded-lg shadow-sm mb-4 max-w-full overflow-hidden">
//                 <img
//                   src={preview}
//                   alt="ECG Preview"
//                   className="max-h-64 object-contain mx-auto"
//                 />
//               </div>
//               <p className="text-gray-600 text-sm">
//                 {file?.name} ({file?.size ? (file.size / 1024 / 1024).toFixed(2) : '0.00'} MB)
//               </p>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="mt-4">
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//           Email for report
//         </label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
//           placeholder="Enter your email to receive the report"
//         />
//       </div>

//       <div className="mt-6">
//         <Button
//           type="submit"
//           fullWidth
//           size="lg"
//           disabled={!file || !email || isLoading}
//           isLoading={isLoading}
//           icon={<ImageIcon size={18} />}
//         >
//           Analyze ECG Image
//         </Button>
//       </div>

//       {predictionResult && (
//         <div className="mt-6 p-4 border rounded-md bg-green-50 text-green-800 text-sm">
//           <strong>Prediction Result:</strong> {predictionResult}
//         </div>
//       )}
//     </form>
//   );
// };

// export default UploadForm;



//------------------------------------

// import React, { useState, useRef } from 'react';
// import { Upload, Image as ImageIcon, X } from 'lucide-react';
// import Button from './Button';

// const UploadForm: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [isDragOver, setIsDragOver] = useState(false);
//   const [email, setEmail] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [result, setResult] = useState<any>(null); // Store prediction result
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const selectedFile = e.target.files[0];
//       setFile(selectedFile);

//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setPreview(event.target?.result as string);
//       };
//       reader.readAsDataURL(selectedFile);
//     }
//   };

//   const handleDragOver = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragOver(true);
//   };

//   const handleDragLeave = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragOver(false);
//   };

//   const handleDrop = (e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragOver(false);

//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       const droppedFile = e.dataTransfer.files[0];
//       setFile(droppedFile);

//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setPreview(event.target?.result as string);
//       };
//       reader.readAsDataURL(droppedFile);
//     }
//   };

//   const handleClearFile = () => {
//     setFile(null);
//     setPreview(null);
//     setResult(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!file || !email) return;

//     setIsLoading(true);

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('email', email);

//     try {
//       const response = await fetch('http://127.0.0.1:8000/predict', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.detail || 'Failed to analyze ECG');
//       }

//       // Set result to show on screen
//       setResult(data);

//       alert('Prediction done! Report sent to your email.');

//     } catch (error) {
//       console.error('Error:', error);
//       alert('Something went wrong during upload or prediction.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full">
//       <div
//         className={`border-2 border-dashed rounded-lg p-6 transition-colors
//           ${isDragOver ? 'border-cyan-500 bg-cyan-50' : 'border-gray-300 hover:border-cyan-400'}
//           ${preview ? 'bg-gray-50' : ''}
//         `}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//       >
//         {!preview ? (
//           <div className="text-center">
//             <Upload className="mx-auto h-12 w-12 text-gray-400" />
//             <div className="mt-4 flex flex-col items-center text-sm">
//               <p className="text-gray-700 font-medium mb-1">
//                 Drag and drop your ECG image here or
//                 <button
//                   type="button"
//                   className="text-cyan-600 hover:text-cyan-800 ml-1 focus:outline-none"
//                   onClick={() => fileInputRef.current?.click()}
//                 >
//                   browse files
//                 </button>
//               </p>
//               <p className="text-gray-500 text-xs mt-1">
//                 Supported formats: PNG, JPG, JPEG (Max 5MB)
//               </p>
//             </div>
//             <input
//               type="file"
//               className="hidden"
//               accept="image/png, image/jpeg, image/jpg"
//               onChange={handleFileChange}
//               ref={fileInputRef}
//             />
//           </div>
//         ) : (
//           <div className="relative">
//             <button
//               type="button"
//               className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
//               onClick={handleClearFile}
//             >
//               <X size={16} className="text-gray-600" />
//             </button>
//             <div className="flex flex-col items-center">
//               <div className="bg-white p-2 rounded-lg shadow-sm mb-4 max-w-full overflow-hidden">
//                 <img
//                   src={preview}
//                   alt="ECG Preview"
//                   className="max-h-64 object-contain mx-auto"
//                 />
//               </div>
//               <p className="text-gray-600 text-sm">
//                 {file?.name} ({file?.size ? (file.size / 1024 / 1024).toFixed(2) : '0.00'} MB)
//               </p>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="mt-4">
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//           Email for report
//         </label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
//           placeholder="Enter your email to receive the report"
//         />
//       </div>

//       <div className="mt-6">
//         <Button
//           type="submit"
//           fullWidth
//           size="lg"
//           disabled={!file || !email || isLoading}
//           isLoading={isLoading}
//           icon={<ImageIcon size={18} />}
//         >
//           Analyze ECG Image
//         </Button>
//       </div>

//       {result && (
//         <div className="mt-6 bg-gray-50 p-4 rounded-md shadow-sm">
//           <h3 className="text-lg font-semibold text-cyan-700 mb-2">Prediction Result:</h3>
//           <p className="text-gray-800"><strong>Status:</strong> {result.prediction}</p>
//           {result.arrhythmia_type && (
//             <p className="text-gray-800"><strong>Type:</strong> {result.arrhythmia_type}</p>
//           )}
//           {result.description && (
//             <p className="text-gray-600 mt-2">{result.description}</p>
//           )}
//         </div>
//       )}
//     </form>
//   );
// };

// export default UploadForm;

//-----------------------------------------------

import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, X } from 'lucide-react';
import Button from './Button';

interface UploadFormProps {
    onSubmit: (file: File, email: string) => void;
    isLoading: boolean;
}

const UploadForm: React.FC<UploadFormProps> = ({ onSubmit, isLoading }) => {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [email, setEmail] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            
            const reader = new FileReader();
            reader.onload = (event) => {
                setPreview(event.target?.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    };
    
    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
    };
    
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const droppedFile = e.dataTransfer.files[0];
            setFile(droppedFile);
            
            const reader = new FileReader();
            reader.onload = (event) => {
                setPreview(event.target?.result as string);
            };
            reader.readAsDataURL(droppedFile);
        }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (file && email) {
            onSubmit(file, email); // Pass file and email to parent
        }
    };
    
    const handleClearFile = () => {
        setFile(null);
        setPreview(null);
        setEmail(''); // Clear email when file is cleared
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div 
                className={`border-2 border-dashed rounded-lg p-6 transition-colors
                    ${isDragOver ? 'border-cyan-500 bg-cyan-50' : 'border-gray-300 hover:border-cyan-400'}
                    ${preview ? 'bg-gray-50' : ''}
                `}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {!preview ? (
                    <div className="text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="mt-4 flex flex-col items-center text-sm">
                            <p className="text-gray-700 font-medium mb-1">
                                Drag and drop your ECG image here or 
                                <button
                                    type="button"
                                    className="text-cyan-600 hover:text-cyan-800 ml-1 focus:outline-none"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    browse files
                                </button>
                            </p>
                            <p className="text-gray-500 text-xs mt-1">
                                Supported formats: PNG, JPG, JPEG (Max 5MB)
                            </p>
                        </div>
                        <input
                            type="file"
                            className="hidden"
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={handleFileChange}
                            ref={fileInputRef}
                        />
                    </div>
                ) : (
                    <div className="relative">
                        <button
                            type="button"
                            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
                            onClick={handleClearFile}
                        >
                            <X size={16} className="text-gray-600" />
                        </button>
                        <div className="flex flex-col items-center">
                            <div className="bg-white p-2 rounded-lg shadow-sm mb-4 max-w-full overflow-hidden">
                                <img 
                                    src={preview} 
                                    alt="ECG Preview" 
                                    className="max-h-64 object-contain mx-auto"
                                />
                            </div>
                            <p className="text-gray-600 text-sm">
                                {/* {file?.name} ({(file?.size / 1024 / 1024).toFixed(2)} MB) */}
                                {file?.name} ({file?.size ? (file.size / 1024 / 1024).toFixed(2) : '0.00'} MB)
                            </p>
                        </div>
                    </div>
                )}
            </div>
            
            <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email for report
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                    placeholder="Enter your email to receive the report"
                />
            </div>

            <div className="mt-6">
                <Button 
                    type="submit" 
                    fullWidth 
                    size="lg"
                    disabled={!file || !email || isLoading}
                    isLoading={isLoading}
                    icon={<ImageIcon size={18} />}
                >
                    Analyze ECG Image
                </Button>
            </div>
        </form>
    );
};

export default UploadForm;


