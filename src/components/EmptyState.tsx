import { SearchX } from 'lucide-react';
import { Button } from './Button';

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="empty-state" role="status">
      <SearchX size={28} aria-hidden="true" />
      <h2>{title}</h2>
      <p>{description}</p>
      {actionLabel && onAction ? <Button type="button" variant="secondary" onClick={onAction}>{actionLabel}</Button> : null}
    </div>
  );
}
