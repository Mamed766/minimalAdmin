import React, { useState, useDeferredValue } from "react";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchData, deleteData } from "../services/api";
import Modal from "./Modal";
import SearchFilter from "../atoms/SearchFilter";
import JobCard from "../atoms/JobCard";
import Pagination from "../atoms/Pagination";

const JobList = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("Latest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: jobs = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchData,
  });

  const deleteMutation = useMutation(deleteData, {
    onSuccess: () => {
      queryClient.invalidateQueries("jobs");
    },
  });

  const handleMenuToggle = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleEdit = (id) => {
    navigate(`/job-edit/${id}`);
  };

  const handleView = (job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  const filteredJobs = jobs
    ?.filter((job) =>
      job.jobtitle.toLowerCase().includes(deferredSearchQuery.toLowerCase())
    )
    ?.sort((a, b) => {
      if (filter === "Latest") {
        return new Date(b.postedDate) - new Date(a.postedDate);
      } else if (filter === "Popular") {
        return b.candidates - a.candidates;
      } else if (filter === "Oldest") {
        return new Date(a.postedDate) - new Date(b.postedDate);
      }
      return 0;
    });

  const totalPages = Math.ceil((filteredJobs?.length || 0) / itemsPerPage);
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs =
    filteredJobs?.slice(indexOfFirstJob, indexOfLastJob) || [];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="max-w-[1240px] m-auto">
      <div className="flex justify-between items-center p-2">
        <div className="flex flex-col gap-3">
          <h2 className="text-[25px] font-bold">List</h2>
          <div className="flex items-center gap-3">
            <p className="hover:underline">Dashboard</p>
            <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
            <p className="hover:underline">Job</p>
            <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
            <p className="text-gray-400">List</p>
          </div>
        </div>

        <Link to={"/job-create"} className="flex mt-3 items-center gap-2">
          <div className="flex items-center gap-2 bg-black p-2 rounded text-white">
            <FaPlus />
            <p>New job</p>
          </div>
        </Link>
      </div>
      <div>
        <SearchFilter
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          filter={filter}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentJobs &&
          currentJobs.map((job, index) => (
            <JobCard
              key={index}
              job={job}
              index={index}
              openMenu={openMenu}
              handleMenuToggle={handleMenuToggle}
              handleEdit={handleEdit}
              handleView={handleView}
              handleDelete={handleDelete}
            />
          ))}
      </div>
      <Modal isOpen={!!selectedJob} onClose={closeModal} job={selectedJob} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default JobList;
