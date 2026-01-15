export default function Footer() {
  return (
    <footer className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
        <p className="text-sm text-muted-foreground">
          © 2026 Supernova Web Design. All rights reserved.
        </p>
        <nav className="flex gap-4 text-sm">
          <a href="#" className="transition-colors hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-primary">
            Terms of Service
          </a>
          <a href="#" className="transition-colors hover:text-primary">
            Cookie Settings
          </a>
        </nav>
      </div>
    </footer>
  );
}
