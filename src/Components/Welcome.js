import React, { useState } from "react";
import Employee from "./Employee";
import { useEffect } from "react";
import "../Components/Welcome.css";

function Welcome() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    courses: {
      MCA: false,
      BCA: false,
      BSc: false,
    },
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [emails, setEmails] = useState([]);
  const [submittedDataList, setSubmittedDataList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  

  useEffect(() => {
    setEmails((prevEmails) => {
      if (!prevEmails.includes(formData.email)) {
        return [...prevEmails, formData.email];
      }
      return prevEmails;
    });
  }, [formData.email]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    const emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = { ...errors };

    if (name === "email") {
      const isDuplicate = emails.includes(value);
      if (isDuplicate) {
        newErrors.email = "Email is already in use";
      } else if (!emailcheck.test(value)) {
        newErrors.email = "Invalid email address";
      } else {
        delete newErrors.email;
      }
    }

    if (type === "tel" && !/^\d+$/.test(value)) {
      newErrors.mobile = "Only Digits";
    } else {
      delete newErrors.mobile;
    }

    setErrors(newErrors);

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? { ...prevData[name], [value]: checked }
          : type === "file"
          ? files[0]
          : value,
    }));

    if (name === "courses") {
      setFormData((prevData) => ({
        ...prevData,
        courses: Object.keys(prevData.courses)
          .map((key) => ({ [key]: e.target.value === key }))
          .filter((course) => Object.values(course)[0])[0],
      }));
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    // Populate the form with the details of the selected user
    setFormData(submittedDataList[index]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedDataList = submittedDataList.map((item, index) =>
        index === editIndex ? formData : item
      );
      setSubmittedDataList(updatedDataList);
    } else {
      setSubmittedDataList((prevList) => [...prevList, formData]);
    }
    setFormData({
      name: "",
      email: "",
      mobile: "",
      designation: "",
      gender: "",
      courses: {
        MCA: false,
        BCA: false,
        BSc: false,
      },
      image: null,
    });
    setEditIndex(null);
  };
  

  return (
    <div className="welcome-container">
      <h2>Employee Details Form</h2>
      <form className="welcome-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile No:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="form-control"
          />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation:</label>
          <select
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="form-control"
          >
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Courses:</label>
          <div>
            <label htmlFor="MCA" className="checkbox-label">
              <input
                type="checkbox"
                id="MCA"
                name="courses"
                value="MCA"
                checked={formData.courses.MCA}
                onChange={handleChange}
              />
              MCA
            </label>
          </div>
          <div>
            <label htmlFor="BCA" className="checkbox-label">
              <input
                type="checkbox"
                id="BCA"
                name="courses"
                value="BCA"
                checked={formData.courses.BCA}
                onChange={handleChange}
              />
              BCA
            </label>
          </div>
          <div>
            <label htmlFor="BSc" className="checkbox-label">
              <input
                type="checkbox"
                id="BSc"
                name="courses"
                value="BSc"
                checked={formData.courses.BSc}
                onChange={handleChange}
              />
              BSc
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image Upload:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
      <Employee submittedDataList={submittedDataList} onEdit={handleEdit} />
    </div>
  );
}

export default Welcome;
