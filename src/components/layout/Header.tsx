
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { NavLink } from "../navigation/NavLink";

const Header = () => {
  const navLinks = [
    { path: "/", icon: "Home", label: "Главная", isActive: true },
    { path: "/profile", icon: "User", label: "Мой профиль" },
    { path: "/monitoring", icon: "LineChart", label: "Мониторинг" },
    { path: "/devices", icon: "Settings2", label: "Управление" },
    { path: "/reports", icon: "FileText", label: "Отчеты" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-eco-widget shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Leaf" className="text-eco-accent-dark" size={24} />
          <span className="text-xl font-bold text-eco-text">Эко Офис</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path}
              href={link.path}
              icon={link.icon}
              isActive={link.isActive}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="text-eco-text-secondary">
            <Icon name="Settings" size={18} />
          </Button>
          <Button variant="outline" className="text-eco-text-secondary">
            <Icon name="LogOut" size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
