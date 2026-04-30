import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ErrorDisplayProps {
  errorMessage?: string;
  onRetry?: () => void;
  title?: string;
}

export function ErrorDisplay({
  errorMessage = 'Something went wrong',
  onRetry,
  title = 'Something went wrong',
}: ErrorDisplayProps) {
  return (
    <div className="flex min-h-100 w-full items-center justify-center p-4">
      <Card className="max-w-md w-full shadow-lg border-destructive/20">
        <CardHeader className="text-center">
          <div className="mx-auto rounded-full bg-destructive/10 p-3 w-fit mb-2">
            <AlertCircle className="h-8 w-8 text-destructive" />
          </div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription className="text-base text-muted-foreground mt-2">
            {errorMessage}
          </CardDescription>
        </CardHeader>
        {onRetry && (
          <CardFooter className="flex justify-center pb-6">
            <Button onClick={onRetry} variant="default" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Try again
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
