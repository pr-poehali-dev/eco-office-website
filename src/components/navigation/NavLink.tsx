
import Icon from "@/components/ui/icon";
import { LucideIcon } from "lucide-react";

interface NavLinkProps {
  href: string;
  icon: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export const NavLink = ({ href, icon, children, isActive = false }: NavLinkProps) => {
  return (
    <a 
      href={href} 
      className={`text-sm font-medium ${
        isActive 
          ? "text-eco-accent" 
          : "text-eco-text-secondary hover:text-eco-accent transition-colors"
      } flex items-center gap-1`}
    >
      <Icon name={icon} size={18} />
      <span>{children}</span>
    </a>
  );
};
