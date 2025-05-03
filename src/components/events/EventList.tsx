
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Event } from "@/types/eco-office";

interface EventListProps {
  events: Event[];
  onShowAllClick?: () => void;
}

export const EventList = ({ events, onShowAllClick }: EventListProps) => {
  return (
    <div>
      <div className="space-y-4">
        {events.map(event => (
          <div key={event.id} className="flex gap-3">
            <div className={`mt-0.5 p-1.5 rounded-full 
              ${event.type === 'warning' ? 'bg-yellow-100 text-yellow-600' : 
                event.type === 'success' ? 'bg-green-100 text-green-600' : 
                'bg-blue-100 text-blue-600'}`}
            >
              <Icon 
                name={
                  event.type === 'warning' ? 'AlertTriangle' : 
                  event.type === 'success' ? 'CheckCircle' : 
                  'Info'
                } 
                size={14} 
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium">{event.message}</p>
              </div>
              <p className="text-xs text-eco-text-secondary">{event.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <Button 
        variant="outline" 
        className="w-full mt-4"
        onClick={onShowAllClick}
      >
        Показать все события
      </Button>
    </div>
  );
};
