import { map } from "es-toolkit/compat";
import { useEffect, useRef, JSX, Fragment } from "react";

interface InfiniteScrollProps<T> {
  fetchMore: () => void;
  renderItem: (item: T, index: number) => JSX.Element;
  fallback: JSX.Element;
  isLoading: boolean;
  data: T[];
  hasMore: boolean;
}

export const InfiniteScroll = <T,>({
  fetchMore,
  renderItem,
  fallback,
  isLoading,
  data,
  hasMore,
}: InfiniteScrollProps<T>) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) fetchMore();
      },
      { rootMargin: "1px", threshold: 0.1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [hasMore, isLoading, fetchMore]);

  return (
    <Fragment>
      {map(data, renderItem)}
      {hasMore && (
        <div ref={observerRef} style={{ textAlign: "center", padding: "10px" }}>
          {isLoading ? fallback : null}
        </div>
      )}
    </Fragment>
  );
};
