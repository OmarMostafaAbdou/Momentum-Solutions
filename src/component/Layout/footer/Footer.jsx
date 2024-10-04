function Footer() {
  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <footer className="bg-light text-center py-3">
      <div className="container">
        <p className="mb-1">&copy; 2024 Momentum Solutions Co.</p>
        <p className="mb-0">Submitted on: {currentDay}</p>
      </div>
    </footer>
  );
}

export default Footer;
