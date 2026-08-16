export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Mobin Mathew
        </p>

        <p className="text-gray-500 text-sm">
          Digital Forensics • Cyber Security
        </p>

      </div>
    </footer>
  );
}
