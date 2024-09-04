function Error({ children }) {
  return (
    <p className="flex items-center justify-center py-10 text-red-400 text-slate-200">
      ⛔ {children}
    </p>
  );
}

export default Error;
