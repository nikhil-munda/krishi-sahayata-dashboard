import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface KpiCardProps {
  title: string;
  value: string;
  unit?: string;
  subtitle?: string;
  icon?: React.ComponentType<{ className?: string }>;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  className?: string;
  onClick?: () => void;
}

export function KpiCard({
  title,
  value,
  unit,
  subtitle,
  icon: Icon,
  trend,
  trendValue,
  className,
  onClick
}: KpiCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-status-success';
      case 'down':
        return 'text-status-danger';
      default:
        return 'text-muted-foreground';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return '↗';
      case 'down':
        return '↘';
      default:
        return '→';
    }
  };

  return (
    <Card 
      className={cn(
        "kpi-card cursor-pointer hover:border-primary/20 transition-all",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-1">
              {title}
            </p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-2xl font-bold text-foreground">
                {value}
              </span>
              {unit && (
                <span className="text-sm text-muted-foreground">
                  {unit}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-sm text-muted-foreground">
                {subtitle}
              </p>
            )}
            {trend && trendValue && (
              <div className={cn("flex items-center gap-1 mt-2 text-sm", getTrendColor())}>
                <span>{getTrendIcon()}</span>
                <span>{trendValue}</span>
              </div>
            )}
          </div>
          {Icon && (
            <div className="flex-shrink-0 ml-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}