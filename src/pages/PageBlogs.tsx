import { ErrorDisplay } from '@/components/ErrorDisplay';
import LoadingOverlay from '@/components/Loading';
import BlogPreview from '@/features/blog/components/BlogPreview';
import { useGetBlogs } from '@/features/blog/hooks/useGetBlogs';

export default function PageBlogs() {
  const { data, error, isError, isLoading, refetch } = useGetBlogs();
  if (isLoading) return <LoadingOverlay />;
  if (isError || !data)
    return (
      <ErrorDisplay errorMessage={error?.message || 'Something went wrong'} onRetry={refetch} />
    );
  if (data.length === 0) return <div>No Blogs in the database</div>;
  return (
    <div className="flex flex-col gap-3">
      {data.map((blog) => (
        <BlogPreview key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
