
export interface EnergyStats {
  current: number;
  previous: number;
  change: number;
  units: string;
}

export interface Office {
  id: number;
  name: string;
  status: string;
  energyUsage: number;
  change: number;
}

export type EventType = 'warning' | 'success' | 'info';

export interface Event {
  id: number;
  time: string;
  message: string;
  type: EventType;
}

export interface QuickAction {
  icon: string;
  label: string;
  path: string;
}
