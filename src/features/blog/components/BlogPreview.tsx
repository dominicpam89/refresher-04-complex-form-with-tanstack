import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { BlogType } from '@/types/blog-type';

interface BlogPreviewProps {
  blog: BlogType;
}

interface ContentPreviewProps {
  content: string;
}

export default function BlogPreview({ blog }: BlogPreviewProps) {
  return (
    <Card size="sm" className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>{blog.title}</CardTitle>
        <CardDescription>written by {blog.userId}</CardDescription>
      </CardHeader>
      <CardContent>
        <ContentPreview content={blog.body} />
      </CardContent>
    </Card>
  );
}

function ContentPreview({ content }: ContentPreviewProps) {
  const maxContent = content.slice(0, 20) + '...';
  return (
    <p>
      {maxContent}
      <span>&nbsp;</span>
      <Button variant="link" className="cursor-pointer">
        Read More
      </Button>
    </p>
  );
}
