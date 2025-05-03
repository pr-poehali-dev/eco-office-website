
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface StatCardProps {
  title: string;
  icon: string;
  value: string | number;
  subtitle: string;
  change?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const StatCard = ({ 
  title, 
  icon, 
  value, 
  subtitle, 
  change, 
  action 
}: StatCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Icon name={icon} className="text-eco-accent-dark" size={20} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-sm text-eco-text-secondary">{subtitle}</p>
          </div>
          
          {change !== undefined && (
            <div className={`flex items-center ${change < 0 ? 'text-eco-accent' : 'text-eco-error'}`}>
              <Icon name={change < 0 ? 'TrendingDown' : 'TrendingUp'} size={18} />
              <span className="text-sm font-medium">{Math.abs(change)}%</span>
            </div>
          )}
          
          {action && (
            <Button size="sm" className="bg-eco-accent text-white" onClick={action.onClick}>
              {action.label}
            </Button>
          )}
          
          {!change && !action && (
            <div className="text-eco-accent flex items-center">
              <Icon name="ThumbsUp" size={18} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
