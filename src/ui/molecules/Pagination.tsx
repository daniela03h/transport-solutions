"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { IVehiclesGetResponse } from "@/app/core/application/dto/vehicles/vehicles-get-response.dto";

interface IProps {
  data: IVehiclesGetResponse;
}

export default function Pagination({ data }: IProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = data.metadata.currentPage;
  const totalPages = data.metadata.totalPages;

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const onPageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          disabled={currentPage === pageNumber}
          className={`px-2 rounded-full text-white ${
            currentPage === pageNumber ? "bg-primary" : "bg-gray-200"
          }`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
