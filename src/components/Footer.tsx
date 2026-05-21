export function Footer() {
  return (
    <footer className="bg-bg-dark py-10 md:py-12 border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-text-main text-sm font-medium tracking-wide text-center md:text-left">
            made by nabas
          </p>
          <p className="text-text-muted/60 text-sm font-light text-center md:text-left">
            Modern web design studio based in Indonesia.
          </p>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-light text-text-muted">
           <a href="https://www.instagram.com/madebynabas/" target="_blank" rel="noopener noreferrer" className="hover:text-text-main transition-colors">Instagram</a>
           <a href="https://www.tiktok.com/@madebynabas" target="_blank" rel="noopener noreferrer" className="hover:text-text-main transition-colors">TikTok</a>
           <a href="https://www.threads.com/@madebynabas" target="_blank" rel="noopener noreferrer" className="hover:text-text-main transition-colors">Threads</a>
           <a href="mailto:hello@madebynabas.com" className="hover:text-text-main transition-colors">Email</a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-8 mt-12 md:mt-16 flex justify-center md:justify-start">
         <p className="text-text-muted/40 text-xs font-light">
           made by nabas &copy; 2026
         </p>
      </div>
    </footer>
  );
}
