import {
  Stethoscope,
  ShoppingCart,
  FileText,
  FlaskConical,
  BookOpen,
  BriefcaseMedical,
} from 'lucide-react';

export default function Footer() {
  const items = [
    { label: 'Consult with a doctor', icon: <Stethoscope size={20} /> },
    { label: 'Order Medicines', icon: <ShoppingCart size={20} /> },
    { label: 'View medical records', icon: <FileText size={20} /> },
    { label: 'Book test', icon: <FlaskConical size={20} /> },
    { label: 'Read articles', icon: <BookOpen size={20} /> },
    { label: 'For healthcare providers', icon: <BriefcaseMedical size={20} /> },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-xs">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center hover:text-white transition duration-300 cursor-pointer"
          >
            <div className="mb-1">{item.icon}</div>
            <span className="text-center leading-tight">{item.label}</span>
          </div>
        ))}
      </div>

      
    </footer>
  );
}
