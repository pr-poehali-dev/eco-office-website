
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Office } from "@/types/eco-office";

interface OfficeStatListProps {
  offices: Office[];
  onOfficeAction?: (officeId: number) => void;
}

export const OfficeStatList = ({ offices, onOfficeAction }: OfficeStatListProps) => {
  return (
    <div className="space-y-4">
      {offices.map(office => (
        <div key={office.id} className="flex items-center justify-between p-3 bg-eco-background rounded-md">
          <div>
            <h3 className="font-medium">{office.name}</h3>
            <p className="text-sm text-eco-text-secondary">{office.status}</p>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <p className="font-medium text-right">{office.energyUsage} кВт·ч</p>
              <p className={`text-sm flex items-center justify-end ${office.change < 0 ? 'text-eco-accent' : 'text-eco-error'}`}>
                <Icon name={office.change < 0 ? 'TrendingDown' : 'TrendingUp'} size={14} />
                <span>{Math.abs(office.change)}%</span>
              </p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="p-0 w-8 h-8"
              onClick={() => onOfficeAction && onOfficeAction(office.id)}
            >
              <Icon name="MoreVertical" size={16} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
