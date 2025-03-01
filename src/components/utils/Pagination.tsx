import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import React, { KeyboardEventHandler } from "react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPageNumbers?: boolean;
  maxVisiblePages?: number;
  className?: string;
  maxMovementAllowed?: number;
  ref?: React.Ref<HTMLDivElement>;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  showPageNumbers = true,
  maxVisiblePages = 5,
  className,
  maxMovementAllowed,
  ref,
}: PaginationProps) => {
  const maxMovement = maxMovementAllowed || totalPages;
  // Don't render pagination if there's only one page
  if (totalPages <= 1) return null;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < maxMovement) {
      onPageChange(currentPage + 1);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowLeft") handlePrevious();
    else if (e.key === "ArrowRight") handleNext();
    else if (e.key === "Home") onPageChange(1);
    else if (e.key === "End") onPageChange(totalPages);
  };

  // Calculate which page numbers to show
  const getVisiblePageNumbers = () => {
    const pageNumbers = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push("ellipsis-start");
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push("ellipsis-end");
      }
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div
      className={clsx("flex items-center justify-center gap-2", className)}
      ref={ref}
      onKeyDown={handleKeyDown}
    >
      <button
        onClick={handlePrevious}
        disabled={currentPage <= 1}
        className="h-6 w-6 transition-all duration-200 flex items-center justify-center"
        aria-label="Previous page"
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </button>

      {showPageNumbers && (
        <div className="flex items-center gap-1">
          {getVisiblePageNumbers().map((pageNumber, index) => {
            if (
              pageNumber === "ellipsis-start" ||
              pageNumber === "ellipsis-end"
            ) {
              return (
                <div
                  key={`${pageNumber}-${index}`}
                  className="flex items-center justify-center w-9 h-9"
                >
                  <EllipsisHorizontalIcon className="h-4 w-4 text-muted-foreground" />
                </div>
              );
            }

            return (
              <button
                disabled={+pageNumber > maxMovement}
                key={pageNumber}
                className={clsx(
                  "h-6 w-6 shadow cursor-pointer  shadow-gray-500/20 rounded-md text-xs text-gray-700 border-gray-100 border transition-all duration-200 aria-[current]:bg-orange-500 aria-[current]:pointer-events-none aria-[current]:font-medium aria-[current]:text-orange-50 disabled:opacity-40 disabled:cursor-not-allowed"
                )}
                onClick={() => onPageChange(pageNumber as number)}
                aria-label={`Page ${pageNumber}`}
                aria-current={pageNumber === currentPage ? "page" : undefined}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
      )}

      <button
        onClick={handleNext}
        disabled={currentPage >= maxMovement}
        className="h-6 w-6 transition-all duration-200 flex items-center justify-center"
        aria-label="Next page"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </div>
  );
};
