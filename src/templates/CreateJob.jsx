import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { postData } from "../services/api";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreateJob = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation((newJob) => postData(newJob), {
    onSuccess: () => {
      queryClient.invalidateQueries("jobs");
    },
  });

  const formik = useFormik({
    initialValues: {
      jobtitle: "",
      file: null,
      time: "",
      experience: "",
      profession: "",
      postedDate: "",
      candidates: "",
      cash: "",
    },
    validationSchema: Yup.object({
      jobtitle: Yup.string().required("Required"),
      file: Yup.mixed().required("Required"),
      time: Yup.string().required("Required"),
      experience: Yup.string().required("Required"),
      profession: Yup.string().required("Required"),
      postedDate: Yup.date().required("Required"),
      candidates: Yup.number().required("Required"),
      cash: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const data = { ...values };
      mutation.mutate(data);
      navigate("/");
    },
  });

  const handleFileChange = (e) => {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      formik.setFieldValue("file", reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="flex gap-2 flex-col">
        <h3>Create a new job</h3>
        <div className="flex items-center gap-2">
          <p className="hover:underline">Dashboard</p>
          <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
          <p className="hover:underline">Job</p>
          <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
          <p className="text-gray-400">New job</p>
        </div>
      </div>
      <div className="max-w-[1000px] m-auto mt-5 rounded-lg shadow-lg p-2">
        <div>
          <h2>Details</h2>
          <p className="text-[12px] text-gray-400">Title, image...</p>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="border-t-[1px] border-gray-200 mt-5 pt-2"
        >
          <h3>Title</h3>
          <input
            className="p-2 border border-gray-300 rounded-lg w-full"
            name="jobtitle"
            placeholder="Ex: Software Engineer..."
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.jobtitle}
          />
          {formik.touched.jobtitle && formik.errors.jobtitle ? (
            <div className="text-red-600">{formik.errors.jobtitle}</div>
          ) : null}
          <input
            className="p-2 mt-2 rounded-lg w-full"
            name="file"
            type="file"
            onChange={handleFileChange}
          />
          {formik.touched.file && formik.errors.file ? (
            <div className="text-red-600">{formik.errors.file}</div>
          ) : null}
          <div className="mt-5">
            <h3 className="font-bold">Properties</h3>
            <p>Additional functions and attributes...</p>
            <div className="flex gap-2 items-center">
              <label htmlFor="full-time">Full-Time</label>
              <input
                type="radio"
                id="full-time"
                name="time"
                value="Full-time"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.time === "Full-time"}
              />
              <label htmlFor="part-time">Part-Time</label>
              <input
                type="radio"
                id="part-time"
                name="time"
                value="Part-time"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.time === "Part-time"}
              />
              <label htmlFor="contract">Contract</label>
              <input
                type="radio"
                id="contract"
                name="time"
                value="Contract"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.time === "Contract"}
              />
            </div>
            {formik.touched.time && formik.errors.time ? (
              <div className="text-red-600">{formik.errors.time}</div>
            ) : null}
            <h3 className="font-bold">Experience</h3>
            <div className="flex gap-2 items-center">
              <label htmlFor="experience">No experience</label>
              <input
                type="radio"
                id="experience"
                name="experience"
                value="No Experience"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.experience === "No Experience"}
              />
              <label htmlFor="one-year">1 year experience</label>
              <input
                type="radio"
                id="one-year"
                name="experience"
                value="1 Year Experience"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.experience === "1 Year Experience"}
              />
              <label htmlFor="two-year">2 year experience</label>
              <input
                type="radio"
                id="two-year"
                name="experience"
                value="2 Year Experience"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.experience === "2 Year Experience"}
              />
              <label htmlFor="three-year">3 year experience</label>
              <input
                type="radio"
                id="three-year"
                name="experience"
                value="3 Year Experience"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.experience === "3 Year Experience"}
              />
            </div>
            {formik.touched.experience && formik.errors.experience ? (
              <div className="text-red-600">{formik.errors.experience}</div>
            ) : null}
            <h3 className="font-bold">Role</h3>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg"
              name="profession"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.profession}
            >
              <option value="">Select a role</option>
              <option value="CEO">CEO</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Data Analyst">Data Analyst</option>
            </select>
            {formik.touched.profession && formik.errors.profession ? (
              <div className="text-red-600">{formik.errors.profession}</div>
            ) : null}
            <h3 className="font-bold">Posted Date</h3>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg"
              name="postedDate"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.postedDate}
            />
            {formik.touched.postedDate && formik.errors.postedDate ? (
              <div className="text-red-600">{formik.errors.postedDate}</div>
            ) : null}
            <h3 className="font-bold">Candidates</h3>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg"
              name="candidates"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.candidates}
              placeholder="Ex: 12"
            />
            {formik.touched.candidates && formik.errors.candidates ? (
              <div className="text-red-600">{formik.errors.candidates}</div>
            ) : null}
            <h3 className="font-bold">Cash</h3>
            <div className="flex items-center p-2 border border-gray-300 rounded-lg">
              <input
                type="text"
                name="cash"
                className="w-full outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cash}
                placeholder="Ex: 100$"
              />
            </div>
            {formik.touched.cash && formik.errors.cash ? (
              <div className="text-red-600">{formik.errors.cash}</div>
            ) : null}

            <button
              type="submit"
              className="bg-black text-white p-2 rounded mt-2"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
