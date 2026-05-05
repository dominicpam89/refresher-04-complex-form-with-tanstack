import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Props {
  readonly children: React.ReactNode;
  cards: {
    title: string;
    description: string;
    action?: React.ReactNode;
    footer?: React.ReactNode;
  };
}

export default function Container({ children, cards }: Props) {
  return (
    <Card className="w-full p-4 lg:p-8">
      <CardHeader>
        <CardTitle>{cards.title}</CardTitle>
        <CardDescription>{cards.description}</CardDescription>
        {cards.action && <CardAction>{cards.action}</CardAction>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {cards.footer && <CardFooter>{cards.footer}</CardFooter>}
    </Card>
  );
}
