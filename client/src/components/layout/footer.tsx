export default function Footer() {
  const socialLinks = [
    { icon: "fab fa-discord", href: "#", label: "Discord" },
    { icon: "fab fa-roblox", href: "#", label: "Roblox" },
    { icon: "fab fa-github", href: "#", label: "GitHub" }
  ];

  return (
    <footer className="py-8 glass-strong border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground mb-4 md:mb-0">
            <p>&copy; 2024 Zixx. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors hover-scale"
                aria-label={social.label}
                data-testid={`footer-${social.label.toLowerCase()}`}
              >
                <i className={`${social.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
