
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface QuickAction {
  icon: string;
  label: string;
  onClick: () => void;
}

interface QuickActionsProps {
  actions: QuickAction[];
}

export const QuickActions = ({ actions }: QuickActionsProps) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {actions.map((action, index) => (
        <Button 
          key={index}
          variant="outline" 
          className="justify-start"
          onClick={action.onClick}
        >
          <Icon name={action.icon} className="mr-2 text-eco-accent-dark" size={18} />
          {action.label}
        </Button>
      ))}
    </div>
  );
};
