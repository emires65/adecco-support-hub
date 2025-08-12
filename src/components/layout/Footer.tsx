export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Customer Service. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#about" className="hover:underline underline-offset-4">About</a>
          <a href="#services" className="hover:underline underline-offset-4">Services</a>
          <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
